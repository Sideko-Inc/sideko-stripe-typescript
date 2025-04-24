import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyAutomaticTaxLiability
 */
export type PaymentLinkCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * PaymentLinkCreateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyAutomaticTaxLiability
 */
const SchemaIn$PaymentLinkCreateBodyAutomaticTaxLiability: z.ZodType<
  PaymentLinkCreateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyAutomaticTaxLiability
 */
const SchemaOut$PaymentLinkCreateBodyAutomaticTaxLiability: z.ZodType<
  External$PaymentLinkCreateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyAutomaticTaxLiability = {
  in: SchemaIn$PaymentLinkCreateBodyAutomaticTaxLiability,
  out: SchemaOut$PaymentLinkCreateBodyAutomaticTaxLiability,
};
