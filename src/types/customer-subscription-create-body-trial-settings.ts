import {
  CustomerSubscriptionCreateBodyTrialSettingsEndBehavior,
  External$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior,
  Schemas$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior,
} from "./customer-subscription-create-body-trial-settings-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings related to subscription trials.
 */
export type CustomerSubscriptionCreateBodyTrialSettings = {
  endBehavior: CustomerSubscriptionCreateBodyTrialSettingsEndBehavior;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyTrialSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyTrialSettings = {
  end_behavior: External$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyTrialSettings
 */
const SchemaIn$CustomerSubscriptionCreateBodyTrialSettings: z.ZodType<
  CustomerSubscriptionCreateBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior:
      Schemas$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyTrialSettings
 */
const SchemaOut$CustomerSubscriptionCreateBodyTrialSettings: z.ZodType<
  External$CustomerSubscriptionCreateBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyTrialSettings // the object to be transformed
> = z
  .object({
    endBehavior:
      Schemas$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyTrialSettings = {
  in: SchemaIn$CustomerSubscriptionCreateBodyTrialSettings,
  out: SchemaOut$CustomerSubscriptionCreateBodyTrialSettings,
};
