import {
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent,
  External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent,
  Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent,
} from "./billing-bill-resource-invoicing-lines-parents-invoice-line-item-invoice-item-parent";
import {
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent,
  External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent,
  Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent,
} from "./billing-bill-resource-invoicing-lines-parents-invoice-line-item-subscription-item-parent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent = {
  invoiceItemDetails?:
    | BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent
    | undefined;
  subscriptionItemDetails?:
    | BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent
    | undefined;
  /**
   * The type of parent that generated this line item
   */
  type: "invoice_item_details" | "subscription_item_details";
};

/**
 * @internal
 * BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent =
  {
    invoice_item_details?:
      | External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent
      | undefined;
    subscription_item_details?:
      | External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent
      | undefined;
    type: "invoice_item_details" | "subscription_item_details";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent
 */
const SchemaIn$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent: z.ZodType<
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice_item_details:
      Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent.in.optional(),
    subscription_item_details:
      Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent.in.optional(),
    type: z.enum(["invoice_item_details", "subscription_item_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice_item_details: "invoiceItemDetails",
      subscription_item_details: "subscriptionItemDetails",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent
 */
const SchemaOut$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent: z.ZodType<
  External$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent // the object to be transformed
> = z
  .object({
    invoiceItemDetails:
      Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent.out.optional(),
    subscriptionItemDetails:
      Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent.out.optional(),
    type: z.enum(["invoice_item_details", "subscription_item_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoiceItemDetails: "invoice_item_details",
      subscriptionItemDetails: "subscription_item_details",
      type: "type",
    });
  });

export const Schemas$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent =
  {
    in: SchemaIn$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent,
    out: SchemaOut$BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent,
  };
