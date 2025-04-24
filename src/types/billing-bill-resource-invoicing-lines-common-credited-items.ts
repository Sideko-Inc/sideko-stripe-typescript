import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingLinesCommonCreditedItems = {
  /**
   * Invoice containing the credited invoice line items
   */
  invoice: string;
  /**
   * Credited invoice line items
   */
  invoiceLineItems: string[];
};

/**
 * @internal
 * BillingBillResourceInvoicingLinesCommonCreditedItems without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingLinesCommonCreditedItems = {
  invoice: string;
  invoice_line_items: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingLinesCommonCreditedItems
 */
const SchemaIn$BillingBillResourceInvoicingLinesCommonCreditedItems: z.ZodType<
  BillingBillResourceInvoicingLinesCommonCreditedItems, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice: z.string(),
    invoice_line_items: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      invoice_line_items: "invoiceLineItems",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingLinesCommonCreditedItems
 */
const SchemaOut$BillingBillResourceInvoicingLinesCommonCreditedItems: z.ZodType<
  External$BillingBillResourceInvoicingLinesCommonCreditedItems, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingLinesCommonCreditedItems // the object to be transformed
> = z
  .object({
    invoice: z.string(),
    invoiceLineItems: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      invoiceLineItems: "invoice_line_items",
    });
  });

export const Schemas$BillingBillResourceInvoicingLinesCommonCreditedItems = {
  in: SchemaIn$BillingBillResourceInvoicingLinesCommonCreditedItems,
  out: SchemaOut$BillingBillResourceInvoicingLinesCommonCreditedItems,
};
