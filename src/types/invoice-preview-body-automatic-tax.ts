import {
  External$InvoicePreviewBodyAutomaticTaxLiability,
  InvoicePreviewBodyAutomaticTaxLiability,
  Schemas$InvoicePreviewBodyAutomaticTaxLiability,
} from "./invoice-preview-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for automatic tax lookup for this invoice preview.
 */
export type InvoicePreviewBodyAutomaticTax = {
  enabled: boolean;
  liability?: InvoicePreviewBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$InvoicePreviewBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyAutomaticTax
 */
const SchemaIn$InvoicePreviewBodyAutomaticTax: z.ZodType<
  InvoicePreviewBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$InvoicePreviewBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyAutomaticTax
 */
const SchemaOut$InvoicePreviewBodyAutomaticTax: z.ZodType<
  External$InvoicePreviewBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$InvoicePreviewBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$InvoicePreviewBodyAutomaticTax = {
  in: SchemaIn$InvoicePreviewBodyAutomaticTax,
  out: SchemaOut$InvoicePreviewBodyAutomaticTax,
};
