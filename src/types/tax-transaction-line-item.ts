import {
  External$TaxProductResourceTaxTransactionLineItemResourceReversal,
  Schemas$TaxProductResourceTaxTransactionLineItemResourceReversal,
  TaxProductResourceTaxTransactionLineItemResourceReversal,
} from "./tax-product-resource-tax-transaction-line-item-resource-reversal";
import {
  External$TaxTransactionLineItemMetadata,
  Schemas$TaxTransactionLineItemMetadata,
  TaxTransactionLineItemMetadata,
} from "./tax-transaction-line-item-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxTransactionLineItem = {
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
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: TaxTransactionLineItemMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax.transaction_line_item";
  /**
   * The ID of an existing [Product](https://stripe.com/docs/api/products/object).
   */
  product?: string | null | undefined;
  /**
   * The number of units of the item being purchased. For reversals, this is the quantity reversed.
   */
  quantity: number;
  /**
   * A custom identifier for this line item in the transaction.
   */
  reference: string;
  reversal?:
    | TaxProductResourceTaxTransactionLineItemResourceReversal
    | undefined;
  /**
   * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
   */
  taxBehavior: "exclusive" | "inclusive";
  /**
   * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for this resource.
   */
  taxCode: string;
  /**
   * If `reversal`, this line item reverses an earlier transaction.
   */
  type: "reversal" | "transaction";
};

/**
 * @internal
 * TaxTransactionLineItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransactionLineItem = {
  amount: number;
  amount_tax: number;
  id: string;
  livemode: boolean;
  metadata?: External$TaxTransactionLineItemMetadata | null | undefined;
  object: "tax.transaction_line_item";
  product?: string | null | undefined;
  quantity: number;
  reference: string;
  reversal?:
    | External$TaxProductResourceTaxTransactionLineItemResourceReversal
    | undefined;
  tax_behavior: "exclusive" | "inclusive";
  tax_code: string;
  type: "reversal" | "transaction";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransactionLineItem
 */
const SchemaIn$TaxTransactionLineItem: z.ZodType<
  TaxTransactionLineItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_tax: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TaxTransactionLineItemMetadata.in.nullable().optional(),
    object: z.enum(["tax.transaction_line_item"]),
    product: z.string().nullable().optional(),
    quantity: z.number().int(),
    reference: z.string(),
    reversal:
      Schemas$TaxProductResourceTaxTransactionLineItemResourceReversal.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive"]),
    tax_code: z.string(),
    type: z.enum(["reversal", "transaction"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_tax: "amountTax",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      product: "product",
      quantity: "quantity",
      reference: "reference",
      reversal: "reversal",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransactionLineItem
 */
const SchemaOut$TaxTransactionLineItem: z.ZodType<
  External$TaxTransactionLineItem, // output type of this zod object
  z.ZodTypeDef,
  TaxTransactionLineItem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountTax: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TaxTransactionLineItemMetadata.out.nullable().optional(),
    object: z.enum(["tax.transaction_line_item"]),
    product: z.string().nullable().optional(),
    quantity: z.number().int(),
    reference: z.string(),
    reversal:
      Schemas$TaxProductResourceTaxTransactionLineItemResourceReversal.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive"]),
    taxCode: z.string(),
    type: z.enum(["reversal", "transaction"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountTax: "amount_tax",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      product: "product",
      quantity: "quantity",
      reference: "reference",
      reversal: "reversal",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      type: "type",
    });
  });

export const Schemas$TaxTransactionLineItem = {
  in: SchemaIn$TaxTransactionLineItem,
  out: SchemaOut$TaxTransactionLineItem,
};
