import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
 */
export type InvoiceCreateBodyFromInvoice = {
  action: "revision";
  invoice: string;
};

/**
 * @internal
 * InvoiceCreateBodyFromInvoice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyFromInvoice = {
  action: "revision";
  invoice: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyFromInvoice
 */
const SchemaIn$InvoiceCreateBodyFromInvoice: z.ZodType<
  InvoiceCreateBodyFromInvoice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    action: z.enum(["revision"]),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      invoice: "invoice",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyFromInvoice
 */
const SchemaOut$InvoiceCreateBodyFromInvoice: z.ZodType<
  External$InvoiceCreateBodyFromInvoice, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyFromInvoice // the object to be transformed
> = z
  .object({
    action: z.enum(["revision"]),
    invoice: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      action: "action",
      invoice: "invoice",
    });
  });

export const Schemas$InvoiceCreateBodyFromInvoice = {
  in: SchemaIn$InvoiceCreateBodyFromInvoice,
  out: SchemaOut$InvoiceCreateBodyFromInvoice,
};
