import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsZipObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsZipObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsZipObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsZipObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsZipObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsZipObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsZipObj0,
};
