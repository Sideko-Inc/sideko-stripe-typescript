import {
  External$SubscriptionUpdateBodyTrialSettingsEndBehavior,
  Schemas$SubscriptionUpdateBodyTrialSettingsEndBehavior,
  SubscriptionUpdateBodyTrialSettingsEndBehavior,
} from "./subscription-update-body-trial-settings-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings related to subscription trials.
 */
export type SubscriptionUpdateBodyTrialSettings = {
  endBehavior: SubscriptionUpdateBodyTrialSettingsEndBehavior;
};

/**
 * @internal
 * SubscriptionUpdateBodyTrialSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyTrialSettings = {
  end_behavior: External$SubscriptionUpdateBodyTrialSettingsEndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyTrialSettings
 */
const SchemaIn$SubscriptionUpdateBodyTrialSettings: z.ZodType<
  SubscriptionUpdateBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior: Schemas$SubscriptionUpdateBodyTrialSettingsEndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyTrialSettings
 */
const SchemaOut$SubscriptionUpdateBodyTrialSettings: z.ZodType<
  External$SubscriptionUpdateBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyTrialSettings // the object to be transformed
> = z
  .object({
    endBehavior: Schemas$SubscriptionUpdateBodyTrialSettingsEndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$SubscriptionUpdateBodyTrialSettings = {
  in: SchemaIn$SubscriptionUpdateBodyTrialSettings,
  out: SchemaOut$SubscriptionUpdateBodyTrialSettings,
};
