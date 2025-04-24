import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior
 */
export type CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior =
  {
    missingPaymentMethod: "cancel" | "create_invoice" | "pause";
  };

/**
 * @internal
 * CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior =
  {
    missing_payment_method: "cancel" | "create_invoice" | "pause";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior
 */
const SchemaIn$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior: z.ZodType<
  CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior
 */
const SchemaOut$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior: z.ZodType<
  External$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior =
  {
    in: SchemaIn$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior,
    out: SchemaOut$CheckoutSessionCreateBodySubscriptionDataTrialSettingsEndBehavior,
  };
