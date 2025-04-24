import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyAutomaticTaxLiability
 */
export type InvoicePreviewBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * InvoicePreviewBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyAutomaticTaxLiability
 */
const SchemaIn$InvoicePreviewBodyAutomaticTaxLiability: z.ZodType<
  InvoicePreviewBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyAutomaticTaxLiability
 */
const SchemaOut$InvoicePreviewBodyAutomaticTaxLiability: z.ZodType<
  External$InvoicePreviewBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyAutomaticTaxLiability // the object to be transformed
> = z
  .object({
    account: z.string().optional(),
    type: z.enum(["account", "self"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      type: "type",
    });
  });

export const Schemas$InvoicePreviewBodyAutomaticTaxLiability = {
  in: SchemaIn$InvoicePreviewBodyAutomaticTaxLiability,
  out: SchemaOut$InvoicePreviewBodyAutomaticTaxLiability,
};
