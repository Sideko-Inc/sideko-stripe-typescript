import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyAutomaticTaxLiability
 */
export type InvoiceCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * InvoiceCreateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyAutomaticTaxLiability
 */
const SchemaIn$InvoiceCreateBodyAutomaticTaxLiability: z.ZodType<
  InvoiceCreateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyAutomaticTaxLiability
 */
const SchemaOut$InvoiceCreateBodyAutomaticTaxLiability: z.ZodType<
  External$InvoiceCreateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$InvoiceCreateBodyAutomaticTaxLiability = {
  in: SchemaIn$InvoiceCreateBodyAutomaticTaxLiability,
  out: SchemaOut$InvoiceCreateBodyAutomaticTaxLiability,
};
