import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionCardAwaitNotification = {
  /**
   * The time that payment will be attempted. If customer approval is required, they need to provide approval before this time.
   */
  chargeAttemptAt?: number | null | undefined;
  /**
   * For payments greater than INR 15000, the customer must provide explicit approval of the payment with their bank. For payments of lower amount, no customer action is required.
   */
  customerApprovalRequired?: boolean | null | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionCardAwaitNotification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionCardAwaitNotification = {
  charge_attempt_at?: number | null | undefined;
  customer_approval_required?: boolean | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionCardAwaitNotification
 */
const SchemaIn$PaymentIntentNextActionCardAwaitNotification: z.ZodType<
  PaymentIntentNextActionCardAwaitNotification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    charge_attempt_at: z.number().int().nullable().optional(),
    customer_approval_required: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge_attempt_at: "chargeAttemptAt",
      customer_approval_required: "customerApprovalRequired",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionCardAwaitNotification
 */
const SchemaOut$PaymentIntentNextActionCardAwaitNotification: z.ZodType<
  External$PaymentIntentNextActionCardAwaitNotification, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionCardAwaitNotification // the object to be transformed
> = z
  .object({
    chargeAttemptAt: z.number().int().nullable().optional(),
    customerApprovalRequired: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      chargeAttemptAt: "charge_attempt_at",
      customerApprovalRequired: "customer_approval_required",
    });
  });

export const Schemas$PaymentIntentNextActionCardAwaitNotification = {
  in: SchemaIn$PaymentIntentNextActionCardAwaitNotification,
  out: SchemaOut$PaymentIntentNextActionCardAwaitNotification,
};
