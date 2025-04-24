import {
  BillingBillResourceInvoicingLinesCommonProrationDetails,
  External$BillingBillResourceInvoicingLinesCommonProrationDetails,
  Schemas$BillingBillResourceInvoicingLinesCommonProrationDetails,
} from "./billing-bill-resource-invoicing-lines-common-proration-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent =
  {
    /**
     * The invoice item that generated this line item
     */
    invoiceItem?: string | null | undefined;
    /**
     * Whether this is a proration
     */
    proration: boolean;
    prorationDetails?:
      | BillingBillResourceInvoicingLinesCommonProrationDetails
      | undefined;
    /**
     * The subscription that the subscription item belongs to
     */
    subscription: string;
    /**
     * The subscription item that generated this line item
     */
    subscriptionItem: string;
  };

/**
 * @internal
 * BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent =
  {
    invoice_item?: string | null | undefined;
    proration: boolean;
    proration_details?:
      | External$BillingBillResourceInvoicingLinesCommonProrationDetails
      | undefined;
    subscription: string;
    subscription_item: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent
 */
const SchemaIn$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent: z.ZodType<
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice_item: z.string().nullable().optional(),
    proration: z.boolean(),
    proration_details:
      Schemas$BillingBillResourceInvoicingLinesCommonProrationDetails.in.optional(),
    subscription: z.string(),
    subscription_item: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice_item: "invoiceItem",
      proration: "proration",
      proration_details: "prorationDetails",
      subscription: "subscription",
      subscription_item: "subscriptionItem",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent
 */
const SchemaOut$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent: z.ZodType<
  External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent // the object to be transformed
> = z
  .object({
    invoiceItem: z.string().nullable().optional(),
    proration: z.boolean(),
    prorationDetails:
      Schemas$BillingBillResourceInvoicingLinesCommonProrationDetails.out.optional(),
    subscription: z.string(),
    subscriptionItem: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoiceItem: "invoice_item",
      proration: "proration",
      prorationDetails: "proration_details",
      subscription: "subscription",
      subscriptionItem: "subscription_item",
    });
  });

export const Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent =
  {
    in: SchemaIn$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent,
    out: SchemaOut$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent,
  };
