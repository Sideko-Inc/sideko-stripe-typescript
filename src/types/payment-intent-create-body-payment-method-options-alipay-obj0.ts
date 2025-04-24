import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0 = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0 = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAlipayObj0,
};
