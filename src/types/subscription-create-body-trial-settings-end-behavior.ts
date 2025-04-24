import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyTrialSettingsEndBehavior
 */
export type SubscriptionCreateBodyTrialSettingsEndBehavior = {
  missingPaymentMethod: "cancel" | "create_invoice" | "pause";
};

/**
 * @internal
 * SubscriptionCreateBodyTrialSettingsEndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyTrialSettingsEndBehavior = {
  missing_payment_method: "cancel" | "create_invoice" | "pause";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyTrialSettingsEndBehavior
 */
const SchemaIn$SubscriptionCreateBodyTrialSettingsEndBehavior: z.ZodType<
  SubscriptionCreateBodyTrialSettingsEndBehavior, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyTrialSettingsEndBehavior
 */
const SchemaOut$SubscriptionCreateBodyTrialSettingsEndBehavior: z.ZodType<
  External$SubscriptionCreateBodyTrialSettingsEndBehavior, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyTrialSettingsEndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$SubscriptionCreateBodyTrialSettingsEndBehavior = {
  in: SchemaIn$SubscriptionCreateBodyTrialSettingsEndBehavior,
  out: SchemaOut$SubscriptionCreateBodyTrialSettingsEndBehavior,
};
