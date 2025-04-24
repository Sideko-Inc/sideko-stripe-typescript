import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsGiropay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsGiropay = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsGiropay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsGiropay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsGiropay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsGiropay // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsGiropay,
};
