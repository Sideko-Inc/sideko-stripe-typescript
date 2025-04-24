import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentProcessingCustomerNotification = {
  /**
   * Whether customer approval has been requested for this payment. For payments greater than INR 15000 or mandate amount, the customer must provide explicit approval of the payment with their bank.
   */
  approvalRequested?: boolean | null | undefined;
  /**
   * If customer approval is required, they need to provide approval before this time.
   */
  completesAt?: number | null | undefined;
};

/**
 * @internal
 * PaymentIntentProcessingCustomerNotification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentProcessingCustomerNotification = {
  approval_requested?: boolean | null | undefined;
  completes_at?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentProcessingCustomerNotification
 */
const SchemaIn$PaymentIntentProcessingCustomerNotification: z.ZodType<
  PaymentIntentProcessingCustomerNotification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    approval_requested: z.boolean().nullable().optional(),
    completes_at: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      approval_requested: "approvalRequested",
      completes_at: "completesAt",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentProcessingCustomerNotification
 */
const SchemaOut$PaymentIntentProcessingCustomerNotification: z.ZodType<
  External$PaymentIntentProcessingCustomerNotification, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentProcessingCustomerNotification // the object to be transformed
> = z
  .object({
    approvalRequested: z.boolean().nullable().optional(),
    completesAt: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      approvalRequested: "approval_requested",
      completesAt: "completes_at",
    });
  });

export const Schemas$PaymentIntentProcessingCustomerNotification = {
  in: SchemaIn$PaymentIntentProcessingCustomerNotification,
  out: SchemaOut$PaymentIntentProcessingCustomerNotification,
};
