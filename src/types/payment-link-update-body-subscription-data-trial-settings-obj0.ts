import {
  External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior,
  PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior,
  Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior,
} from "./payment-link-update-body-subscription-data-trial-settings-obj0-end-behavior";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0
 */
export type PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0 = {
  endBehavior: PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior;
};

/**
 * @internal
 * PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0 = {
  end_behavior: External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0
 */
const SchemaIn$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0: z.ZodType<
  PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_behavior:
      Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_behavior: "endBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0
 */
const SchemaOut$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0: z.ZodType<
  External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0 // the object to be transformed
> = z
  .object({
    endBehavior:
      Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endBehavior: "end_behavior",
    });
  });

export const Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0 = {
  in: SchemaIn$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0,
  out: SchemaOut$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0,
};
