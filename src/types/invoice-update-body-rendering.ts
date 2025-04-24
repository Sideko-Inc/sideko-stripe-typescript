import {
  External$InvoiceUpdateBodyRenderingPdf,
  InvoiceUpdateBodyRenderingPdf,
  Schemas$InvoiceUpdateBodyRenderingPdf,
} from "./invoice-update-body-rendering-pdf";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
 */
export type InvoiceUpdateBodyRendering = {
  amountTaxDisplay?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  pdf?: InvoiceUpdateBodyRenderingPdf | undefined;
  template?: string | undefined;
  templateVersion?: (number | string) | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyRendering without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyRendering = {
  amount_tax_display?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  pdf?: External$InvoiceUpdateBodyRenderingPdf | undefined;
  template?: string | undefined;
  template_version?: (number | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyRendering
 */
const SchemaIn$InvoiceUpdateBodyRendering: z.ZodType<
  InvoiceUpdateBodyRendering, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tax_display: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
    pdf: Schemas$InvoiceUpdateBodyRenderingPdf.in.optional(),
    template: z.string().optional(),
    template_version: z.union([z.number().int(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_tax_display: "amountTaxDisplay",
      pdf: "pdf",
      template: "template",
      template_version: "templateVersion",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyRendering
 */
const SchemaOut$InvoiceUpdateBodyRendering: z.ZodType<
  External$InvoiceUpdateBodyRendering, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyRendering // the object to be transformed
> = z
  .object({
    amountTaxDisplay: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
    pdf: Schemas$InvoiceUpdateBodyRenderingPdf.out.optional(),
    template: z.string().optional(),
    templateVersion: z.union([z.number().int(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTaxDisplay: "amount_tax_display",
      pdf: "pdf",
      template: "template",
      templateVersion: "template_version",
    });
  });

export const Schemas$InvoiceUpdateBodyRendering = {
  in: SchemaIn$InvoiceUpdateBodyRendering,
  out: SchemaOut$InvoiceUpdateBodyRendering,
};
