import {
  External$InvoiceRenderingPdf,
  InvoiceRenderingPdf,
  Schemas$InvoiceRenderingPdf,
} from "./invoice-rendering-pdf";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesResourceInvoiceRendering = {
  /**
   * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
   */
  amountTaxDisplay?: string | null | undefined;
  pdf?: InvoiceRenderingPdf | undefined;
  /**
   * ID of the rendering template that the invoice is formatted by.
   */
  template?: string | null | undefined;
  /**
   * Version of the rendering template that the invoice is using.
   */
  templateVersion?: number | null | undefined;
};

/**
 * @internal
 * InvoicesResourceInvoiceRendering without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesResourceInvoiceRendering = {
  amount_tax_display?: string | null | undefined;
  pdf?: External$InvoiceRenderingPdf | undefined;
  template?: string | null | undefined;
  template_version?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesResourceInvoiceRendering
 */
const SchemaIn$InvoicesResourceInvoiceRendering: z.ZodType<
  InvoicesResourceInvoiceRendering, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tax_display: z.string().nullable().optional(),
    pdf: Schemas$InvoiceRenderingPdf.in.optional(),
    template: z.string().nullable().optional(),
    template_version: z.number().int().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesResourceInvoiceRendering
 */
const SchemaOut$InvoicesResourceInvoiceRendering: z.ZodType<
  External$InvoicesResourceInvoiceRendering, // output type of this zod object
  z.ZodTypeDef,
  InvoicesResourceInvoiceRendering // the object to be transformed
> = z
  .object({
    amountTaxDisplay: z.string().nullable().optional(),
    pdf: Schemas$InvoiceRenderingPdf.out.optional(),
    template: z.string().nullable().optional(),
    templateVersion: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTaxDisplay: "amount_tax_display",
      pdf: "pdf",
      template: "template",
      templateVersion: "template_version",
    });
  });

export const Schemas$InvoicesResourceInvoiceRendering = {
  in: SchemaIn$InvoicesResourceInvoiceRendering,
  out: SchemaOut$InvoicesResourceInvoiceRendering,
};
