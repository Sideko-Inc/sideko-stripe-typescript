import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided =
  {
    /**
     * The invoice to which the reinstated billing credits were originally applied.
     */
    invoice: string | Invoice;
    /**
     * The invoice line item to which the reinstated billing credits were originally applied.
     */
    invoiceLineItem: string;
  };

/**
 * @internal
 * BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided =
  {
    invoice: string | External$Invoice;
    invoice_line_item: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided
 */
const SchemaIn$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided: z.ZodType<
  BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided
 */
const SchemaOut$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided: z.ZodType<
  External$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided // the object to be transformed
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

export const Schemas$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided =
  {
    in: SchemaIn$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided,
    out: SchemaOut$BillingCreditGrantsResourceBalanceCreditsApplicationInvoiceVoided,
  };
