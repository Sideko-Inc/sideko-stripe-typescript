import {
  External$SubscriptionsTrialsResourceEndBehavior,
  Schemas$SubscriptionsTrialsResourceEndBehavior,
  SubscriptionsTrialsResourceEndBehavior,
} from "./subscriptions-trials-resource-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configures how this subscription behaves during the trial period.
 */
export type SubscriptionsTrialsResourceTrialSettings = {
  /**
   * Defines how a subscription behaves when a free trial ends.
   */
  endBehavior: SubscriptionsTrialsResourceEndBehavior;
};

/**
 * @internal
 * SubscriptionsTrialsResourceTrialSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionsTrialsResourceTrialSettings = {
  end_behavior: External$SubscriptionsTrialsResourceEndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionsTrialsResourceTrialSettings
 */
const SchemaIn$SubscriptionsTrialsResourceTrialSettings: z.ZodType<
  SubscriptionsTrialsResourceTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior: Schemas$SubscriptionsTrialsResourceEndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionsTrialsResourceTrialSettings
 */
const SchemaOut$SubscriptionsTrialsResourceTrialSettings: z.ZodType<
  External$SubscriptionsTrialsResourceTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionsTrialsResourceTrialSettings // the object to be transformed
> = z
  .object({
    endBehavior: Schemas$SubscriptionsTrialsResourceEndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$SubscriptionsTrialsResourceTrialSettings = {
  in: SchemaIn$SubscriptionsTrialsResourceTrialSettings,
  out: SchemaOut$SubscriptionsTrialsResourceTrialSettings,
};
