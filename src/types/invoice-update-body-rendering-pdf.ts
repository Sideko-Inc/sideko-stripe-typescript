import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyRenderingPdf
 */
export type InvoiceUpdateBodyRenderingPdf = {
  pageSize?: ("a4" | "auto" | "letter") | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyRenderingPdf without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyRenderingPdf = {
  page_size?: ("a4" | "auto" | "letter") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyRenderingPdf
 */
const SchemaIn$InvoiceUpdateBodyRenderingPdf: z.ZodType<
  InvoiceUpdateBodyRenderingPdf, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyRenderingPdf
 */
const SchemaOut$InvoiceUpdateBodyRenderingPdf: z.ZodType<
  External$InvoiceUpdateBodyRenderingPdf, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyRenderingPdf // the object to be transformed
> = z
  .object({
    pageSize: z.enum(["a4", "auto", "letter"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      pageSize: "page_size",
    });
  });

export const Schemas$InvoiceUpdateBodyRenderingPdf = {
  in: SchemaIn$InvoiceUpdateBodyRenderingPdf,
  out: SchemaOut$InvoiceUpdateBodyRenderingPdf,
};
