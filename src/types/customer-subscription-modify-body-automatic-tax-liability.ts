import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyAutomaticTaxLiability
 */
export type CustomerSubscriptionModifyBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyAutomaticTaxLiability = {
  account?: string | undefined;
  type: "account" | "self";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyAutomaticTaxLiability
 */
const SchemaIn$CustomerSubscriptionModifyBodyAutomaticTaxLiability: z.ZodType<
  CustomerSubscriptionModifyBodyAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyAutomaticTaxLiability
 */
const SchemaOut$CustomerSubscriptionModifyBodyAutomaticTaxLiability: z.ZodType<
  External$CustomerSubscriptionModifyBodyAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyAutomaticTaxLiability // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyAutomaticTaxLiability = {
  in: SchemaIn$CustomerSubscriptionModifyBodyAutomaticTaxLiability,
  out: SchemaOut$CustomerSubscriptionModifyBodyAutomaticTaxLiability,
};
