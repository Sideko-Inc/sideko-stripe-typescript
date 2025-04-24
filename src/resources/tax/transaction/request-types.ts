import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TaxTransactionCreateFromCalculationBodyMetadata,
  Schemas$TaxTransactionCreateFromCalculationBodyMetadata,
  TaxTransactionCreateFromCalculationBodyMetadata,
} from "@sideko-inc/stripe/types/tax-transaction-create-from-calculation-body-metadata";
import {
  External$TaxTransactionCreateReversalBodyLineItemsItem,
  Schemas$TaxTransactionCreateReversalBodyLineItemsItem,
  TaxTransactionCreateReversalBodyLineItemsItem,
} from "@sideko-inc/stripe/types/tax-transaction-create-reversal-body-line-items-item";
import {
  External$TaxTransactionCreateReversalBodyMetadata,
  Schemas$TaxTransactionCreateReversalBodyMetadata,
  TaxTransactionCreateReversalBodyMetadata,
} from "@sideko-inc/stripe/types/tax-transaction-create-reversal-body-metadata";
import {
  External$TaxTransactionCreateReversalBodyShippingCost,
  Schemas$TaxTransactionCreateReversalBodyShippingCost,
  TaxTransactionCreateReversalBodyShippingCost,
} from "@sideko-inc/stripe/types/tax-transaction-create-reversal-body-shipping-cost";
import * as z from "zod";

/**
 * GetRequest
 */
export type GetRequest = {
  transaction: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  transaction: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    transaction: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transaction: "transaction",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    transaction: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      transaction: "transaction",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateFromCalculationRequest
 */
export type CreateFromCalculationRequest = {
  /**
   * Tax Calculation ID to be used as input when creating the transaction.
   */
  calculation: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TaxTransactionCreateFromCalculationBodyMetadata | undefined;
  /**
   * The Unix timestamp representing when the tax liability is assumed or reduced, which determines the liability posting period and handling in tax liability reports. The timestamp must fall within the `tax_date` and the current time, unless the `tax_date` is scheduled in advance. Defaults to the current time.
   */
  postedAt?: number | undefined;
  /**
   * A custom order or sale identifier, such as 'myOrder_123'. Must be unique across all transactions, including reversals.
   */
  reference: string;
};

/**
 * @internal
 * CreateFromCalculationRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateFromCalculationRequest = {
  calculation: string;
  expand?: string[] | undefined;
  metadata?:
    | External$TaxTransactionCreateFromCalculationBodyMetadata
    | undefined;
  posted_at?: number | undefined;
  reference: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateFromCalculationRequest
 */
const SchemaIn$CreateFromCalculationRequest: z.ZodType<
  CreateFromCalculationRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    calculation: z.string(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$TaxTransactionCreateFromCalculationBodyMetadata.in.optional(),
    posted_at: z.number().int().optional(),
    reference: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calculation: "calculation",
      expand: "expand",
      metadata: "metadata",
      posted_at: "postedAt",
      reference: "reference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateFromCalculationRequest
 */
const SchemaOut$CreateFromCalculationRequest: z.ZodType<
  External$CreateFromCalculationRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateFromCalculationRequest // the object to be transformed
> = z
  .object({
    calculation: z.string(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$TaxTransactionCreateFromCalculationBodyMetadata.out.optional(),
    postedAt: z.number().int().optional(),
    reference: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      calculation: "calculation",
      expand: "expand",
      metadata: "metadata",
      postedAt: "posted_at",
      reference: "reference",
    });
  });

export const Schemas$CreateFromCalculationRequest = {
  in: SchemaIn$CreateFromCalculationRequest,
  out: SchemaOut$CreateFromCalculationRequest,
};

/**
 * CreateReversalRequest
 */
export type CreateReversalRequest = {
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
};

/**
 * @internal
 * CreateReversalRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateReversalRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateReversalRequest
 */
const SchemaIn$CreateReversalRequest: z.ZodType<
  CreateReversalRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateReversalRequest
 */
const SchemaOut$CreateReversalRequest: z.ZodType<
  External$CreateReversalRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateReversalRequest // the object to be transformed
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

export const Schemas$CreateReversalRequest = {
  in: SchemaIn$CreateReversalRequest,
  out: SchemaOut$CreateReversalRequest,
};
