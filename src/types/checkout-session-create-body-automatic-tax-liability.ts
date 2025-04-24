import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyAutomaticTaxLiability
 */
export type CheckoutSessionCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * CheckoutSessionCreateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyAutomaticTaxLiability
 */
const SchemaIn$CheckoutSessionCreateBodyAutomaticTaxLiability: z.ZodType<
  CheckoutSessionCreateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyAutomaticTaxLiability
 */
const SchemaOut$CheckoutSessionCreateBodyAutomaticTaxLiability: z.ZodType<
  External$CheckoutSessionCreateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyAutomaticTaxLiability = {
  in: SchemaIn$CheckoutSessionCreateBodyAutomaticTaxLiability,
  out: SchemaOut$CheckoutSessionCreateBodyAutomaticTaxLiability,
};
