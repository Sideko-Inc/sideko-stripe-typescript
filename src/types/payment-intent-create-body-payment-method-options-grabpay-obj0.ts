import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsGrabpayObj0,
};
