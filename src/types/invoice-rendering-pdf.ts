import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceRenderingPdf = {
  /**
   * Page size of invoice pdf. Options include a4, letter, and auto. If set to auto, page size will be switched to a4 or letter based on customer locale.
   */
  pageSize?: ("a4" | "auto" | "letter") | null | undefined;
};

/**
 * @internal
 * InvoiceRenderingPdf without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceRenderingPdf = {
  page_size?: ("a4" | "auto" | "letter") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceRenderingPdf
 */
const SchemaIn$InvoiceRenderingPdf: z.ZodType<
  InvoiceRenderingPdf, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    page_size: z.enum(["a4", "auto", "letter"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      page_size: "pageSize",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceRenderingPdf
 */
const SchemaOut$InvoiceRenderingPdf: z.ZodType<
  External$InvoiceRenderingPdf, // output type of this zod object
  z.ZodTypeDef,
  InvoiceRenderingPdf // the object to be transformed
> = z
  .object({
    pageSize: z.enum(["a4", "auto", "letter"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      pageSize: "page_size",
    });
  });

export const Schemas$InvoiceRenderingPdf = {
  in: SchemaIn$InvoiceRenderingPdf,
  out: SchemaOut$InvoiceRenderingPdf,
};
