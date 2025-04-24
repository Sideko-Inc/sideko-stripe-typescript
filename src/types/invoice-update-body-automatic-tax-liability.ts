import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyAutomaticTaxLiability
 */
export type InvoiceUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * InvoiceUpdateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyAutomaticTaxLiability
 */
const SchemaIn$InvoiceUpdateBodyAutomaticTaxLiability: z.ZodType<
  InvoiceUpdateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyAutomaticTaxLiability
 */
const SchemaOut$InvoiceUpdateBodyAutomaticTaxLiability: z.ZodType<
  External$InvoiceUpdateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$InvoiceUpdateBodyAutomaticTaxLiability = {
  in: SchemaIn$InvoiceUpdateBodyAutomaticTaxLiability,
  out: SchemaOut$InvoiceUpdateBodyAutomaticTaxLiability,
};
