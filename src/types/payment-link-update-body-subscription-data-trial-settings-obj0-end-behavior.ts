import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior
 */
export type PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior =
  {
    missingPaymentMethod: "cancel" | "create_invoice" | "pause";
  };

/**
 * @internal
 * PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior =
  {
    missing_payment_method: "cancel" | "create_invoice" | "pause";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior
 */
const SchemaIn$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior: z.ZodType<
  PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    missing_payment_method: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missing_payment_method: "missingPaymentMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior
 */
const SchemaOut$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior: z.ZodType<
  External$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior =
  {
    in: SchemaIn$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior,
    out: SchemaOut$PaymentLinkUpdateBodySubscriptionDataTrialSettingsObj0EndBehavior,
  };
