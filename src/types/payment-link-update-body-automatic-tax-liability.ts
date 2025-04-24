import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyAutomaticTaxLiability
 */
export type PaymentLinkUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * PaymentLinkUpdateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyAutomaticTaxLiability
 */
const SchemaIn$PaymentLinkUpdateBodyAutomaticTaxLiability: z.ZodType<
  PaymentLinkUpdateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyAutomaticTaxLiability
 */
const SchemaOut$PaymentLinkUpdateBodyAutomaticTaxLiability: z.ZodType<
  External$PaymentLinkUpdateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodyAutomaticTaxLiability = {
  in: SchemaIn$PaymentLinkUpdateBodyAutomaticTaxLiability,
  out: SchemaOut$PaymentLinkUpdateBodyAutomaticTaxLiability,
};
