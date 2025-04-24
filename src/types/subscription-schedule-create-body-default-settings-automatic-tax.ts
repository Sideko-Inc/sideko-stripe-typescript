import {
  External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability,
  Schemas$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability,
  SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability,
} from "./subscription-schedule-create-body-default-settings-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax
 */
export type SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax = {
  enabled: boolean;
  liability?:
    | SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax =
  {
    enabled: boolean;
    liability?:
      | External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax
 */
const SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax: z.ZodType<
  SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax
 */
const SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax: z.ZodType<
  External$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax,
    out: SchemaOut$SubscriptionScheduleCreateBodyDefaultSettingsAutomaticTax,
  };
