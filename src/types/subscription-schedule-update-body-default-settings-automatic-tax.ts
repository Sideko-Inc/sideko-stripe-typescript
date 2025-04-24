import {
  External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability,
  Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability,
  SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability,
} from "./subscription-schedule-update-body-default-settings-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax
 */
export type SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax = {
  enabled: boolean;
  liability?:
    | SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax =
  {
    enabled: boolean;
    liability?:
      | External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax
 */
const SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax: z.ZodType<
  SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax
 */
const SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax: z.ZodType<
  External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax,
    out: SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax,
  };
