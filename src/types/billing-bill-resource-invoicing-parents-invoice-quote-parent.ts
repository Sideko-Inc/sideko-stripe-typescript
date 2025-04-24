import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingParentsInvoiceQuoteParent = {
  /**
   * The quote that generated this invoice
   */
  quote: string;
};

/**
 * @internal
 * BillingBillResourceInvoicingParentsInvoiceQuoteParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingParentsInvoiceQuoteParent = {
  quote: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingParentsInvoiceQuoteParent
 */
const SchemaIn$BillingBillResourceInvoicingParentsInvoiceQuoteParent: z.ZodType<
  BillingBillResourceInvoicingParentsInvoiceQuoteParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingParentsInvoiceQuoteParent
 */
const SchemaOut$BillingBillResourceInvoicingParentsInvoiceQuoteParent: z.ZodType<
  External$BillingBillResourceInvoicingParentsInvoiceQuoteParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingParentsInvoiceQuoteParent // the object to be transformed
> = z
  .object({
    quote: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      quote: "quote",
    });
  });

export const Schemas$BillingBillResourceInvoicingParentsInvoiceQuoteParent = {
  in: SchemaIn$BillingBillResourceInvoicingParentsInvoiceQuoteParent,
  out: SchemaOut$BillingBillResourceInvoicingParentsInvoiceQuoteParent,
};
