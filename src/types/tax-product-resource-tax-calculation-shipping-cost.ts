import {
  External$TaxProductResourceLineItemTaxBreakdown,
  Schemas$TaxProductResourceLineItemTaxBreakdown,
  TaxProductResourceLineItemTaxBreakdown,
} from "./tax-product-resource-line-item-tax-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxCalculationShippingCost = {
  /**
   * The shipping amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
   */
  amount: number;
  /**
   * The amount of tax calculated for shipping, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountTax: number;
  /**
   * The ID of an existing [ShippingRate](https://stripe.com/docs/api/shipping_rates/object).
   */
  shippingRate?: string | undefined;
  /**
   * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
   */
  taxBehavior: "exclusive" | "inclusive";
  /**
   * Detailed account of taxes relevant to shipping cost.
   */
  taxBreakdown?: TaxProductResourceLineItemTaxBreakdown[] | undefined;
  /**
   * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for shipping.
   */
  taxCode: string;
};

/**
 * @internal
 * TaxProductResourceTaxCalculationShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxCalculationShippingCost = {
  amount: number;
  amount_tax: number;
  shipping_rate?: string | undefined;
  tax_behavior: "exclusive" | "inclusive";
  tax_breakdown?: External$TaxProductResourceLineItemTaxBreakdown[] | undefined;
  tax_code: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxCalculationShippingCost
 */
const SchemaIn$TaxProductResourceTaxCalculationShippingCost: z.ZodType<
  TaxProductResourceTaxCalculationShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_tax: z.number().int(),
    shipping_rate: z.string().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive"]),
    tax_breakdown: z
      .array(Schemas$TaxProductResourceLineItemTaxBreakdown.in)
      .optional(),
    tax_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_tax: "amountTax",
      shipping_rate: "shippingRate",
      tax_behavior: "taxBehavior",
      tax_breakdown: "taxBreakdown",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxCalculationShippingCost
 */
const SchemaOut$TaxProductResourceTaxCalculationShippingCost: z.ZodType<
  External$TaxProductResourceTaxCalculationShippingCost, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxCalculationShippingCost // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountTax: z.number().int(),
    shippingRate: z.string().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive"]),
    taxBreakdown: z
      .array(Schemas$TaxProductResourceLineItemTaxBreakdown.out)
      .optional(),
    taxCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountTax: "amount_tax",
      shippingRate: "shipping_rate",
      taxBehavior: "tax_behavior",
      taxBreakdown: "tax_breakdown",
      taxCode: "tax_code",
    });
  });

export const Schemas$TaxProductResourceTaxCalculationShippingCost = {
  in: SchemaIn$TaxProductResourceTaxCalculationShippingCost,
  out: SchemaOut$TaxProductResourceTaxCalculationShippingCost,
};
