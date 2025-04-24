import {
  BillingBillResourceInvoicingLinesCommonProrationDetails,
  External$BillingBillResourceInvoicingLinesCommonProrationDetails,
  Schemas$BillingBillResourceInvoicingLinesCommonProrationDetails,
} from "./billing-bill-resource-invoicing-lines-common-proration-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent =
  {
    /**
     * The invoice item that generated this line item
     */
    invoiceItem: string;
    /**
     * Whether this is a proration
     */
    proration: boolean;
    prorationDetails?:
      | BillingBillResourceInvoicingLinesCommonProrationDetails
      | undefined;
    /**
     * The subscription that the invoice item belongs to
     */
    subscription?: string | null | undefined;
  };

/**
 * @internal
 * BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent =
  {
    invoice_item: string;
    proration: boolean;
    proration_details?:
      | External$BillingBillResourceInvoicingLinesCommonProrationDetails
      | undefined;
    subscription?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent
 */
const SchemaIn$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent: z.ZodType<
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice_item: z.string(),
    proration: z.boolean(),
    proration_details:
      Schemas$BillingBillResourceInvoicingLinesCommonProrationDetails.in.optional(),
    subscription: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice_item: "invoiceItem",
      proration: "proration",
      proration_details: "prorationDetails",
      subscription: "subscription",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent
 */
const SchemaOut$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent: z.ZodType<
  External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent // the object to be transformed
> = z
  .object({
    invoiceItem: z.string(),
    proration: z.boolean(),
    prorationDetails:
      Schemas$BillingBillResourceInvoicingLinesCommonProrationDetails.out.optional(),
    subscription: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoiceItem: "invoice_item",
      proration: "proration",
      prorationDetails: "proration_details",
      subscription: "subscription",
    });
  });

export const Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent =
  {
    in: SchemaIn$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent,
    out: SchemaOut$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent,
  };
