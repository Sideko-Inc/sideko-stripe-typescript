import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Defines how a subscription behaves when a free trial ends.
 */
export type SubscriptionsTrialsResourceEndBehavior = {
  /**
   * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
   */
  missingPaymentMethod: "cancel" | "create_invoice" | "pause";
};

/**
 * @internal
 * SubscriptionsTrialsResourceEndBehavior without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionsTrialsResourceEndBehavior = {
  missing_payment_method: "cancel" | "create_invoice" | "pause";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionsTrialsResourceEndBehavior
 */
const SchemaIn$SubscriptionsTrialsResourceEndBehavior: z.ZodType<
  SubscriptionsTrialsResourceEndBehavior, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionsTrialsResourceEndBehavior
 */
const SchemaOut$SubscriptionsTrialsResourceEndBehavior: z.ZodType<
  External$SubscriptionsTrialsResourceEndBehavior, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionsTrialsResourceEndBehavior // the object to be transformed
> = z
  .object({
    missingPaymentMethod: z.enum(["cancel", "create_invoice", "pause"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingPaymentMethod: "missing_payment_method",
    });
  });

export const Schemas$SubscriptionsTrialsResourceEndBehavior = {
  in: SchemaIn$SubscriptionsTrialsResourceEndBehavior,
  out: SchemaOut$SubscriptionsTrialsResourceEndBehavior,
};
