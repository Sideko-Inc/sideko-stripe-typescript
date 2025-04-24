import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability
 */
export type SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * @internal
 * SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability =
  {
    account?: string | undefined;
    type: "account" | "self";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability
 */
const SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability: z.ZodType<
  SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability
 */
const SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability: z.ZodType<
  External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability // the object to be transformed
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

export const Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability,
    out: SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability,
  };
