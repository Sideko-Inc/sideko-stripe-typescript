import {
  BillingBillResourceInvoicingParentsInvoiceQuoteParent,
  External$BillingBillResourceInvoicingParentsInvoiceQuoteParent,
  Schemas$BillingBillResourceInvoicingParentsInvoiceQuoteParent,
} from "./billing-bill-resource-invoicing-parents-invoice-quote-parent";
import {
  BillingBillResourceInvoicingParentsInvoiceSubscriptionParent,
  External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent,
  Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent,
} from "./billing-bill-resource-invoicing-parents-invoice-subscription-parent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingParentsInvoiceParent = {
  quoteDetails?:
    | BillingBillResourceInvoicingParentsInvoiceQuoteParent
    | undefined;
  subscriptionDetails?:
    | BillingBillResourceInvoicingParentsInvoiceSubscriptionParent
    | undefined;
  /**
   * The type of parent that generated this invoice
   */
  type: "quote_details" | "subscription_details";
};

/**
 * @internal
 * BillingBillResourceInvoicingParentsInvoiceParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingParentsInvoiceParent = {
  quote_details?:
    | External$BillingBillResourceInvoicingParentsInvoiceQuoteParent
    | undefined;
  subscription_details?:
    | External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent
    | undefined;
  type: "quote_details" | "subscription_details";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingParentsInvoiceParent
 */
const SchemaIn$BillingBillResourceInvoicingParentsInvoiceParent: z.ZodType<
  BillingBillResourceInvoicingParentsInvoiceParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    quote_details:
      Schemas$BillingBillResourceInvoicingParentsInvoiceQuoteParent.in.optional(),
    subscription_details: z.lazy(() =>
      Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent.in.optional(),
    ),
    type: z.enum(["quote_details", "subscription_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote_details: "quoteDetails",
      subscription_details: "subscriptionDetails",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingParentsInvoiceParent
 */
const SchemaOut$BillingBillResourceInvoicingParentsInvoiceParent: z.ZodType<
  External$BillingBillResourceInvoicingParentsInvoiceParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingParentsInvoiceParent // the object to be transformed
> = z
  .object({
    quoteDetails:
      Schemas$BillingBillResourceInvoicingParentsInvoiceQuoteParent.out.optional(),
    subscriptionDetails: z.lazy(() =>
      Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent.out.optional(),
    ),
    type: z.enum(["quote_details", "subscription_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quoteDetails: "quote_details",
      subscriptionDetails: "subscription_details",
      type: "type",
    });
  });

export const Schemas$BillingBillResourceInvoicingParentsInvoiceParent = {
  in: SchemaIn$BillingBillResourceInvoicingParentsInvoiceParent,
  out: SchemaOut$BillingBillResourceInvoicingParentsInvoiceParent,
};
