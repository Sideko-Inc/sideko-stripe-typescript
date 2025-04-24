import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyAutomaticTaxLiability
 */
export type QuoteUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * QuoteUpdateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyAutomaticTaxLiability
 */
const SchemaIn$QuoteUpdateBodyAutomaticTaxLiability: z.ZodType<
  QuoteUpdateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyAutomaticTaxLiability
 */
const SchemaOut$QuoteUpdateBodyAutomaticTaxLiability: z.ZodType<
  External$QuoteUpdateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$QuoteUpdateBodyAutomaticTaxLiability = {
  in: SchemaIn$QuoteUpdateBodyAutomaticTaxLiability,
  out: SchemaOut$QuoteUpdateBodyAutomaticTaxLiability,
};
