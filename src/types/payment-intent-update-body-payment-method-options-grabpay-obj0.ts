import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsGrabpayObj0,
};
