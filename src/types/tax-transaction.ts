import {
  External$TaxProductResourceCustomerDetails,
  Schemas$TaxProductResourceCustomerDetails,
  TaxProductResourceCustomerDetails,
} from "./tax-product-resource-customer-details";
import {
  External$TaxProductResourceShipFromDetails,
  Schemas$TaxProductResourceShipFromDetails,
  TaxProductResourceShipFromDetails,
} from "./tax-product-resource-ship-from-details";
import {
  External$TaxProductResourceTaxTransactionResourceReversal,
  Schemas$TaxProductResourceTaxTransactionResourceReversal,
  TaxProductResourceTaxTransactionResourceReversal,
} from "./tax-product-resource-tax-transaction-resource-reversal";
import {
  External$TaxProductResourceTaxTransactionShippingCost,
  Schemas$TaxProductResourceTaxTransactionShippingCost,
  TaxProductResourceTaxTransactionShippingCost,
} from "./tax-product-resource-tax-transaction-shipping-cost";
import {
  External$TaxTransactionLineItems,
  Schemas$TaxTransactionLineItems,
  TaxTransactionLineItems,
} from "./tax-transaction-line-items";
import {
  External$TaxTransactionMetadata,
  Schemas$TaxTransactionMetadata,
  TaxTransactionMetadata,
} from "./tax-transaction-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Tax Transaction records the tax collected from or refunded to your customer.
 *
 * Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom#tax-transaction)
 */
export type TaxTransaction = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
   */
  customer?: string | null | undefined;
  customerDetails: TaxProductResourceCustomerDetails;
  /**
   * Unique identifier for the transaction.
   */
  id: string;
  /**
   * The tax collected or refunded, by line item.
   */
  lineItems?: TaxTransactionLineItems | null | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: TaxTransactionMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "tax.transaction";
  /**
   * The Unix timestamp representing when the tax liability is assumed or reduced.
   */
  postedAt: number;
  /**
   * A custom unique identifier, such as 'myOrder_123'.
   */
  reference: string;
  reversal?: TaxProductResourceTaxTransactionResourceReversal | undefined;
  shipFromDetails?: TaxProductResourceShipFromDetails | undefined;
  shippingCost?: TaxProductResourceTaxTransactionShippingCost | undefined;
  /**
   * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
   */
  taxDate: number;
  /**
   * If `reversal`, this transaction reverses an earlier transaction.
   */
  type: "reversal" | "transaction";
};

/**
 * @internal
 * TaxTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransaction = {
  created: number;
  currency: string;
  customer?: string | null | undefined;
  customer_details: External$TaxProductResourceCustomerDetails;
  id: string;
  line_items?: External$TaxTransactionLineItems | null | undefined;
  livemode: boolean;
  metadata?: External$TaxTransactionMetadata | null | undefined;
  object: "tax.transaction";
  posted_at: number;
  reference: string;
  reversal?:
    | External$TaxProductResourceTaxTransactionResourceReversal
    | undefined;
  ship_from_details?: External$TaxProductResourceShipFromDetails | undefined;
  shipping_cost?:
    | External$TaxProductResourceTaxTransactionShippingCost
    | undefined;
  tax_date: number;
  type: "reversal" | "transaction";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransaction
 */
const SchemaIn$TaxTransaction: z.ZodType<
  TaxTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    currency: z.string(),
    customer: z.string().nullable().optional(),
    customer_details: Schemas$TaxProductResourceCustomerDetails.in,
    id: z.string(),
    line_items: Schemas$TaxTransactionLineItems.in.nullable().optional(),
    livemode: z.boolean(),
    metadata: Schemas$TaxTransactionMetadata.in.nullable().optional(),
    object: z.enum(["tax.transaction"]),
    posted_at: z.number().int(),
    reference: z.string(),
    reversal:
      Schemas$TaxProductResourceTaxTransactionResourceReversal.in.optional(),
    ship_from_details: Schemas$TaxProductResourceShipFromDetails.in.optional(),
    shipping_cost:
      Schemas$TaxProductResourceTaxTransactionShippingCost.in.optional(),
    tax_date: z.number().int(),
    type: z.enum(["reversal", "transaction"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      currency: "currency",
      customer: "customer",
      customer_details: "customerDetails",
      id: "id",
      line_items: "lineItems",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      posted_at: "postedAt",
      reference: "reference",
      reversal: "reversal",
      ship_from_details: "shipFromDetails",
      shipping_cost: "shippingCost",
      tax_date: "taxDate",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransaction
 */
const SchemaOut$TaxTransaction: z.ZodType<
  External$TaxTransaction, // output type of this zod object
  z.ZodTypeDef,
  TaxTransaction // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    currency: z.string(),
    customer: z.string().nullable().optional(),
    customerDetails: Schemas$TaxProductResourceCustomerDetails.out,
    id: z.string(),
    lineItems: Schemas$TaxTransactionLineItems.out.nullable().optional(),
    livemode: z.boolean(),
    metadata: Schemas$TaxTransactionMetadata.out.nullable().optional(),
    object: z.enum(["tax.transaction"]),
    postedAt: z.number().int(),
    reference: z.string(),
    reversal:
      Schemas$TaxProductResourceTaxTransactionResourceReversal.out.optional(),
    shipFromDetails: Schemas$TaxProductResourceShipFromDetails.out.optional(),
    shippingCost:
      Schemas$TaxProductResourceTaxTransactionShippingCost.out.optional(),
    taxDate: z.number().int(),
    type: z.enum(["reversal", "transaction"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      currency: "currency",
      customer: "customer",
      customerDetails: "customer_details",
      id: "id",
      lineItems: "line_items",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      postedAt: "posted_at",
      reference: "reference",
      reversal: "reversal",
      shipFromDetails: "ship_from_details",
      shippingCost: "shipping_cost",
      taxDate: "tax_date",
      type: "type",
    });
  });

export const Schemas$TaxTransaction = {
  in: SchemaIn$TaxTransaction,
  out: SchemaOut$TaxTransaction,
};
