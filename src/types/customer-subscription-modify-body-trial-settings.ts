import {
  CustomerSubscriptionModifyBodyTrialSettingsEndBehavior,
  External$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior,
  Schemas$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior,
} from "./customer-subscription-modify-body-trial-settings-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings related to subscription trials.
 */
export type CustomerSubscriptionModifyBodyTrialSettings = {
  endBehavior: CustomerSubscriptionModifyBodyTrialSettingsEndBehavior;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyTrialSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyTrialSettings = {
  end_behavior: External$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyTrialSettings
 */
const SchemaIn$CustomerSubscriptionModifyBodyTrialSettings: z.ZodType<
  CustomerSubscriptionModifyBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior:
      Schemas$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyTrialSettings
 */
const SchemaOut$CustomerSubscriptionModifyBodyTrialSettings: z.ZodType<
  External$CustomerSubscriptionModifyBodyTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyTrialSettings // the object to be transformed
> = z
  .object({
    endBehavior:
      Schemas$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyTrialSettings = {
  in: SchemaIn$CustomerSubscriptionModifyBodyTrialSettings,
  out: SchemaOut$CustomerSubscriptionModifyBodyTrialSettings,
};
