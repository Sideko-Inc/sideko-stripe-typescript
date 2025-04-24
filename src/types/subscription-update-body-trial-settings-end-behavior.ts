import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyTrialSettingsEndBehavior
 */
export type SubscriptionUpdateBodyTrialSettingsEndBehavior = {
  missingPaymentMethod: "cancel" | "create_invoice" | "pause";
};

/**
 * @internal
 * SubscriptionUpdateBodyTrialSettingsEndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyTrialSettingsEndBehavior = {
  missing_payment_method: "cancel" | "create_invoice" | "pause";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyTrialSettingsEndBehavior
 */
const SchemaIn$SubscriptionUpdateBodyTrialSettingsEndBehavior: z.ZodType<
  SubscriptionUpdateBodyTrialSettingsEndBehavior, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyTrialSettingsEndBehavior
 */
const SchemaOut$SubscriptionUpdateBodyTrialSettingsEndBehavior: z.ZodType<
  External$SubscriptionUpdateBodyTrialSettingsEndBehavior, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyTrialSettingsEndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$SubscriptionUpdateBodyTrialSettingsEndBehavior = {
  in: SchemaIn$SubscriptionUpdateBodyTrialSettingsEndBehavior,
  out: SchemaOut$SubscriptionUpdateBodyTrialSettingsEndBehavior,
};
