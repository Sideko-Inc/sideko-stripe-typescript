import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyTrialSettingsEndBehavior
 */
export type CustomerSubscriptionCreateBodyTrialSettingsEndBehavior = {
  missingPaymentMethod: "cancel" | "create_invoice" | "pause";
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyTrialSettingsEndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior = {
  missing_payment_method: "cancel" | "create_invoice" | "pause";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyTrialSettingsEndBehavior
 */
const SchemaIn$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior: z.ZodType<
  CustomerSubscriptionCreateBodyTrialSettingsEndBehavior, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior
 */
const SchemaOut$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior: z.ZodType<
  External$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyTrialSettingsEndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior = {
  in: SchemaIn$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior,
  out: SchemaOut$CustomerSubscriptionCreateBodyTrialSettingsEndBehavior,
};
