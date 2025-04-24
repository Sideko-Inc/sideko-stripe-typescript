import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsBancontact
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsBancontact = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsBancontact without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsBancontact
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsBancontact, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsBancontact // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsBancontact,
};
