import {
  External$TaxTransactionCreateReversalBodyLineItemsItem,
  Schemas$TaxTransactionCreateReversalBodyLineItemsItem,
  TaxTransactionCreateReversalBodyLineItemsItem,
} from "./tax-transaction-create-reversal-body-line-items-item";
import {
  External$TaxTransactionCreateReversalBodyMetadata,
  Schemas$TaxTransactionCreateReversalBodyMetadata,
  TaxTransactionCreateReversalBodyMetadata,
} from "./tax-transaction-create-reversal-body-metadata";
import {
  External$TaxTransactionCreateReversalBodyShippingCost,
  Schemas$TaxTransactionCreateReversalBodyShippingCost,
  TaxTransactionCreateReversalBodyShippingCost,
} from "./tax-transaction-create-reversal-body-shipping-cost";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxTransactionCreateReversalBody
 */
export type TaxTransactionCreateReversalBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A flat amount to reverse across the entire transaction, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative. This value represents the total amount to refund from the transaction, including taxes.
   */
  flatAmount?: number | undefined;
  /**
   * The line item amounts to reverse.
   */
  lineItems?: TaxTransactionCreateReversalBodyLineItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TaxTransactionCreateReversalBodyMetadata | undefined;
  /**
   * If `partial`, the provided line item or shipping cost amounts are reversed. If `full`, the original transaction is fully reversed.
   */
  mode: "full" | "partial";
  /**
   * The ID of the Transaction to partially or fully reverse.
   */
  originalTransaction: string;
  /**
   * A custom identifier for this reversal, such as `myOrder_123-refund_1`, which must be unique across all transactions. The reference helps identify this reversal transaction in exported [tax reports](https://stripe.com/docs/tax/reports).
   */
  reference: string;
  /**
   * The shipping cost to reverse.
   */
  shippingCost?: TaxTransactionCreateReversalBodyShippingCost | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | (TaxTransactionCreateReversalBodyLineItemsItem[] | undefined)
    | (TaxTransactionCreateReversalBodyMetadata | undefined)
    | ("full" | "partial")
    | string
    | string
    | (TaxTransactionCreateReversalBodyShippingCost | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TaxTransactionCreateReversalBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransactionCreateReversalBody = {
  expand?: string[] | undefined;
  flat_amount?: number | undefined;
  line_items?:
    | External$TaxTransactionCreateReversalBodyLineItemsItem[]
    | undefined;
  metadata?: External$TaxTransactionCreateReversalBodyMetadata | undefined;
  mode: "full" | "partial";
  original_transaction: string;
  reference: string;
  shipping_cost?:
    | External$TaxTransactionCreateReversalBodyShippingCost
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | (External$TaxTransactionCreateReversalBodyLineItemsItem[] | undefined)
    | (External$TaxTransactionCreateReversalBodyMetadata | undefined)
    | ("full" | "partial")
    | string
    | string
    | (External$TaxTransactionCreateReversalBodyShippingCost | undefined)
    | External$TaxTransactionCreateReversalBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransactionCreateReversalBody
 */
const SchemaIn$TaxTransactionCreateReversalBody: z.ZodType<
  TaxTransactionCreateReversalBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    flat_amount: z.number().int().optional(),
    line_items: z
      .array(Schemas$TaxTransactionCreateReversalBodyLineItemsItem.in)
      .optional(),
    metadata: Schemas$TaxTransactionCreateReversalBodyMetadata.in.optional(),
    mode: z.enum(["full", "partial"]),
    original_transaction: z.string(),
    reference: z.string(),
    shipping_cost:
      Schemas$TaxTransactionCreateReversalBodyShippingCost.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      flat_amount: "flatAmount",
      line_items: "lineItems",
      metadata: "metadata",
      mode: "mode",
      original_transaction: "originalTransaction",
      reference: "reference",
      shipping_cost: "shippingCost",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransactionCreateReversalBody
 */
const SchemaOut$TaxTransactionCreateReversalBody: z.ZodType<
  External$TaxTransactionCreateReversalBody, // output type of this zod object
  z.ZodTypeDef,
  TaxTransactionCreateReversalBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    flatAmount: z.number().int().optional(),
    lineItems: z
      .array(Schemas$TaxTransactionCreateReversalBodyLineItemsItem.out)
      .optional(),
    metadata: Schemas$TaxTransactionCreateReversalBodyMetadata.out.optional(),
    mode: z.enum(["full", "partial"]),
    originalTransaction: z.string(),
    reference: z.string(),
    shippingCost:
      Schemas$TaxTransactionCreateReversalBodyShippingCost.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      flatAmount: "flat_amount",
      lineItems: "line_items",
      metadata: "metadata",
      mode: "mode",
      originalTransaction: "original_transaction",
      reference: "reference",
      shippingCost: "shipping_cost",
    });
  });

export const Schemas$TaxTransactionCreateReversalBody = {
  in: SchemaIn$TaxTransactionCreateReversalBody,
  out: SchemaOut$TaxTransactionCreateReversalBody,
};
