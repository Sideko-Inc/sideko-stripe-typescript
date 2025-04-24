import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesResourceFromInvoice = {
  /**
   * The relation between this invoice and the cloned invoice
   */
  action: string;
  /**
   * The invoice that was cloned.
   */
  invoice: string | Invoice;
};

/**
 * @internal
 * InvoicesResourceFromInvoice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesResourceFromInvoice = {
  action: string;
  invoice: string | External$Invoice;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesResourceFromInvoice
 */
const SchemaIn$InvoicesResourceFromInvoice: z.ZodType<
  InvoicesResourceFromInvoice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    action: z.string(),
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesResourceFromInvoice
 */
const SchemaOut$InvoicesResourceFromInvoice: z.ZodType<
  External$InvoicesResourceFromInvoice, // output type of this zod object
  z.ZodTypeDef,
  InvoicesResourceFromInvoice // the object to be transformed
> = z
  .object({
    action: z.string(),
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      invoice: "invoice",
    });
  });

export const Schemas$InvoicesResourceFromInvoice = {
  in: SchemaIn$InvoicesResourceFromInvoice,
  out: SchemaOut$InvoicesResourceFromInvoice,
};
