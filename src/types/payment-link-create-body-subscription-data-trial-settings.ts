import {
  External$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior,
  PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior,
  Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior,
} from "./payment-link-create-body-subscription-data-trial-settings-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodySubscriptionDataTrialSettings
 */
export type PaymentLinkCreateBodySubscriptionDataTrialSettings = {
  endBehavior: PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior;
};

/**
 * @internal
 * PaymentLinkCreateBodySubscriptionDataTrialSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodySubscriptionDataTrialSettings = {
  end_behavior: External$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodySubscriptionDataTrialSettings
 */
const SchemaIn$PaymentLinkCreateBodySubscriptionDataTrialSettings: z.ZodType<
  PaymentLinkCreateBodySubscriptionDataTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior:
      Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodySubscriptionDataTrialSettings
 */
const SchemaOut$PaymentLinkCreateBodySubscriptionDataTrialSettings: z.ZodType<
  External$PaymentLinkCreateBodySubscriptionDataTrialSettings, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodySubscriptionDataTrialSettings // the object to be transformed
> = z
  .object({
    endBehavior:
      Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettings = {
  in: SchemaIn$PaymentLinkCreateBodySubscriptionDataTrialSettings,
  out: SchemaOut$PaymentLinkCreateBodySubscriptionDataTrialSettings,
};
