import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyTrialSettingsEndBehavior
 */
export type CustomerSubscriptionModifyBodyTrialSettingsEndBehavior = {
  missingPaymentMethod: "cancel" | "create_invoice" | "pause";
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyTrialSettingsEndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior = {
  missing_payment_method: "cancel" | "create_invoice" | "pause";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyTrialSettingsEndBehavior
 */
const SchemaIn$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior: z.ZodType<
  CustomerSubscriptionModifyBodyTrialSettingsEndBehavior, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior
 */
const SchemaOut$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior: z.ZodType<
  External$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyTrialSettingsEndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior = {
  in: SchemaIn$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior,
  out: SchemaOut$CustomerSubscriptionModifyBodyTrialSettingsEndBehavior,
};
