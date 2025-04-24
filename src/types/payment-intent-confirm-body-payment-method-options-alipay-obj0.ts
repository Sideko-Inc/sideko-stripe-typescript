import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0 = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0 = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAlipayObj0,
};
