import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability
 */
export type SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * @internal
 * SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability
 */
const SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability: z.ZodType<
  SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability
 */
const SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability: z.ZodType<
  External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability,
    out: SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability,
  };
