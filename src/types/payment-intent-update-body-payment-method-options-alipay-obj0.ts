import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0 = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0 = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAlipayObj0,
};
