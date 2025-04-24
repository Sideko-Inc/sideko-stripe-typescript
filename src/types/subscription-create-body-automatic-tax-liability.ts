import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyAutomaticTaxLiability
 */
export type SubscriptionCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionCreateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyAutomaticTaxLiability
 */
const SchemaIn$SubscriptionCreateBodyAutomaticTaxLiability: z.ZodType<
  SubscriptionCreateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyAutomaticTaxLiability
 */
const SchemaOut$SubscriptionCreateBodyAutomaticTaxLiability: z.ZodType<
  External$SubscriptionCreateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyAutomaticTaxLiability = {
  in: SchemaIn$SubscriptionCreateBodyAutomaticTaxLiability,
  out: SchemaOut$SubscriptionCreateBodyAutomaticTaxLiability,
};
