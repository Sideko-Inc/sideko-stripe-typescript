import {
  External$SubscriptionCreateBodyTrialSettingsEndBehavior,
  Schemas$SubscriptionCreateBodyTrialSettingsEndBehavior,
  SubscriptionCreateBodyTrialSettingsEndBehavior,
} from "./subscription-create-body-trial-settings-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings related to subscription trials.
 */
export type SubscriptionCreateBodyTrialSettings = {
  endBehavior: SubscriptionCreateBodyTrialSettingsEndBehavior;
};

/**
 * @internal
 * SubscriptionCreateBodyTrialSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyTrialSettings = {
  end_behavior: External$SubscriptionCreateBodyTrialSettingsEndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyTrialSettings
 */
const SchemaIn$SubscriptionCreateBodyTrialSettings: z.ZodType<
  SubscriptionCreateBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior: Schemas$SubscriptionCreateBodyTrialSettingsEndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyTrialSettings
 */
const SchemaOut$SubscriptionCreateBodyTrialSettings: z.ZodType<
  External$SubscriptionCreateBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyTrialSettings // the object to be transformed
> = z
  .object({
    endBehavior: Schemas$SubscriptionCreateBodyTrialSettingsEndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$SubscriptionCreateBodyTrialSettings = {
  in: SchemaIn$SubscriptionCreateBodyTrialSettings,
  out: SchemaOut$SubscriptionCreateBodyTrialSettings,
};
