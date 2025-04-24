import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsGiropayObj0,
};
