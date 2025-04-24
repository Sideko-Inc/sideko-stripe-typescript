import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyAutomaticTaxLiability
 */
export type SubscriptionUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * SubscriptionUpdateBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyAutomaticTaxLiability
 */
const SchemaIn$SubscriptionUpdateBodyAutomaticTaxLiability: z.ZodType<
  SubscriptionUpdateBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyAutomaticTaxLiability
 */
const SchemaOut$SubscriptionUpdateBodyAutomaticTaxLiability: z.ZodType<
  External$SubscriptionUpdateBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$SubscriptionUpdateBodyAutomaticTaxLiability = {
  in: SchemaIn$SubscriptionUpdateBodyAutomaticTaxLiability,
  out: SchemaOut$SubscriptionUpdateBodyAutomaticTaxLiability,
};
