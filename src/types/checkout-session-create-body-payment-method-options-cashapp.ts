import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsCashapp
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsCashapp = {
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsCashapp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp = {
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsCashapp
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsCashapp, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsCashapp // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCashapp,
};
