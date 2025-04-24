import {
  External$InvoiceCreateBodyRenderingPdf,
  InvoiceCreateBodyRenderingPdf,
  Schemas$InvoiceCreateBodyRenderingPdf,
} from "./invoice-create-body-rendering-pdf";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
 */
export type InvoiceCreateBodyRendering = {
  amountTaxDisplay?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  pdf?: InvoiceCreateBodyRenderingPdf | undefined;
  template?: string | undefined;
  templateVersion?: (number | string) | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyRendering without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyRendering = {
  amount_tax_display?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  pdf?: External$InvoiceCreateBodyRenderingPdf | undefined;
  template?: string | undefined;
  template_version?: (number | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyRendering
 */
const SchemaIn$InvoiceCreateBodyRendering: z.ZodType<
  InvoiceCreateBodyRendering, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tax_display: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
    pdf: Schemas$InvoiceCreateBodyRenderingPdf.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyRendering
 */
const SchemaOut$InvoiceCreateBodyRendering: z.ZodType<
  External$InvoiceCreateBodyRendering, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyRendering // the object to be transformed
> = z
  .object({
    amountTaxDisplay: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
    pdf: Schemas$InvoiceCreateBodyRenderingPdf.out.optional(),
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

export const Schemas$InvoiceCreateBodyRendering = {
  in: SchemaIn$InvoiceCreateBodyRendering,
  out: SchemaOut$InvoiceCreateBodyRendering,
};
