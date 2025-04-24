import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsGrabpayObj0,
};
