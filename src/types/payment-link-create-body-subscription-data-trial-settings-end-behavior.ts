import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior
 */
export type PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior = {
  missingPaymentMethod: "cancel" | "create_invoice" | "pause";
};

/**
 * @internal
 * PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior =
  {
    missing_payment_method: "cancel" | "create_invoice" | "pause";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior
 */
const SchemaIn$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior: z.ZodType<
  PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior
 */
const SchemaOut$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior: z.ZodType<
  External$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior =
  {
    in: SchemaIn$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior,
    out: SchemaOut$PaymentLinkCreateBodySubscriptionDataTrialSettingsEndBehavior,
  };
