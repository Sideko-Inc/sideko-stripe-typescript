import {
  External$TaxProductResourceLineItemTaxBreakdown,
  Schemas$TaxProductResourceLineItemTaxBreakdown,
  TaxProductResourceLineItemTaxBreakdown,
} from "./tax-product-resource-line-item-tax-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxCalculationLineItem = {
  /**
   * The line item amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
   */
  amount: number;
  /**
   * The amount of tax calculated for this line item, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountTax: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax.calculation_line_item";
  /**
   * The ID of an existing [Product](https://stripe.com/docs/api/products/object).
   */
  product?: string | null | undefined;
  /**
   * The number of units of the item being purchased. For reversals, this is the quantity reversed.
   */
  quantity: number;
  /**
   * A custom identifier for this line item.
   */
  reference?: string | null | undefined;
  /**
   * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
   */
  taxBehavior: "exclusive" | "inclusive";
  /**
   * Detailed account of taxes relevant to this line item.
   */
  taxBreakdown?: TaxProductResourceLineItemTaxBreakdown[] | null | undefined;
  /**
   * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for this resource.
   */
  taxCode: string;
};

/**
 * @internal
 * TaxCalculationLineItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculationLineItem = {
  amount: number;
  amount_tax: number;
  id: string;
  livemode: boolean;
  object: "tax.calculation_line_item";
  product?: string | null | undefined;
  quantity: number;
  reference?: string | null | undefined;
  tax_behavior: "exclusive" | "inclusive";
  tax_breakdown?:
    | External$TaxProductResourceLineItemTaxBreakdown[]
    | null
    | undefined;
  tax_code: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculationLineItem
 */
const SchemaIn$TaxCalculationLineItem: z.ZodType<
  TaxCalculationLineItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_tax: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["tax.calculation_line_item"]),
    product: z.string().nullable().optional(),
    quantity: z.number().int(),
    reference: z.string().nullable().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive"]),
    tax_breakdown: z
      .array(Schemas$TaxProductResourceLineItemTaxBreakdown.in)
      .nullable()
      .optional(),
    tax_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_tax: "amountTax",
      id: "id",
      livemode: "livemode",
      object: "object",
      product: "product",
      quantity: "quantity",
      reference: "reference",
      tax_behavior: "taxBehavior",
      tax_breakdown: "taxBreakdown",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculationLineItem
 */
const SchemaOut$TaxCalculationLineItem: z.ZodType<
  External$TaxCalculationLineItem, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculationLineItem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountTax: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["tax.calculation_line_item"]),
    product: z.string().nullable().optional(),
    quantity: z.number().int(),
    reference: z.string().nullable().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive"]),
    taxBreakdown: z
      .array(Schemas$TaxProductResourceLineItemTaxBreakdown.out)
      .nullable()
      .optional(),
    taxCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountTax: "amount_tax",
      id: "id",
      livemode: "livemode",
      object: "object",
      product: "product",
      quantity: "quantity",
      reference: "reference",
      taxBehavior: "tax_behavior",
      taxBreakdown: "tax_breakdown",
      taxCode: "tax_code",
    });
  });

export const Schemas$TaxCalculationLineItem = {
  in: SchemaIn$TaxCalculationLineItem,
  out: SchemaOut$TaxCalculationLineItem,
};
