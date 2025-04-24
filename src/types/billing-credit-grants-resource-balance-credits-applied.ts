import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceBalanceCreditsApplied = {
  /**
   * The invoice to which the billing credits were applied.
   */
  invoice: string | Invoice;
  /**
   * The invoice line item to which the billing credits were applied.
   */
  invoiceLineItem: string;
};

/**
 * @internal
 * BillingCreditGrantsResourceBalanceCreditsApplied without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceBalanceCreditsApplied = {
  invoice: string | External$Invoice;
  invoice_line_item: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceBalanceCreditsApplied
 */
const SchemaIn$BillingCreditGrantsResourceBalanceCreditsApplied: z.ZodType<
  BillingCreditGrantsResourceBalanceCreditsApplied, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.in)]),
    invoice_line_item: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      invoice_line_item: "invoiceLineItem",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceBalanceCreditsApplied
 */
const SchemaOut$BillingCreditGrantsResourceBalanceCreditsApplied: z.ZodType<
  External$BillingCreditGrantsResourceBalanceCreditsApplied, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceBalanceCreditsApplied // the object to be transformed
> = z
  .object({
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.out)]),
    invoiceLineItem: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      invoice: "invoice",
      invoiceLineItem: "invoice_line_item",
    });
  });

export const Schemas$BillingCreditGrantsResourceBalanceCreditsApplied = {
  in: SchemaIn$BillingCreditGrantsResourceBalanceCreditsApplied,
  out: SchemaOut$BillingCreditGrantsResourceBalanceCreditsApplied,
};
