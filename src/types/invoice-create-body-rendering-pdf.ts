import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyRenderingPdf
 */
export type InvoiceCreateBodyRenderingPdf = {
  pageSize?: ("a4" | "auto" | "letter") | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyRenderingPdf without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyRenderingPdf = {
  page_size?: ("a4" | "auto" | "letter") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyRenderingPdf
 */
const SchemaIn$InvoiceCreateBodyRenderingPdf: z.ZodType<
  InvoiceCreateBodyRenderingPdf, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    page_size: z.enum(["a4", "auto", "letter"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      page_size: "pageSize",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyRenderingPdf
 */
const SchemaOut$InvoiceCreateBodyRenderingPdf: z.ZodType<
  External$InvoiceCreateBodyRenderingPdf, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyRenderingPdf // the object to be transformed
> = z
  .object({
    pageSize: z.enum(["a4", "auto", "letter"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      pageSize: "page_size",
    });
  });

export const Schemas$InvoiceCreateBodyRenderingPdf = {
  in: SchemaIn$InvoiceCreateBodyRenderingPdf,
  out: SchemaOut$InvoiceCreateBodyRenderingPdf,
};
