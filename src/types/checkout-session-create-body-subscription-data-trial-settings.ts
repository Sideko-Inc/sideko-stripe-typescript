import {
  CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior,
  External$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior,
  Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior,
} from "./checkout-session-create-body-subscription-data-trial-settings-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodySubscriptionDataTrialSettings
 */
export type CheckoutSessionCreateBodySubscriptionDataTrialSettings = {
  endBehavior: CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior;
};

/**
 * @internal
 * CheckoutSessionCreateBodySubscriptionDataTrialSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySubscriptionDataTrialSettings = {
  end_behavior: External$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySubscriptionDataTrialSettings
 */
const SchemaIn$CheckoutSessionCreateBodySubscriptionDataTrialSettings: z.ZodType<
  CheckoutSessionCreateBodySubscriptionDataTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior:
      Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySubscriptionDataTrialSettings
 */
const SchemaOut$CheckoutSessionCreateBodySubscriptionDataTrialSettings: z.ZodType<
  External$CheckoutSessionCreateBodySubscriptionDataTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySubscriptionDataTrialSettings // the object to be transformed
> = z
  .object({
    endBehavior:
      Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettings = {
  in: SchemaIn$CheckoutSessionCreateBodySubscriptionDataTrialSettings,
  out: SchemaOut$CheckoutSessionCreateBodySubscriptionDataTrialSettings,
};
