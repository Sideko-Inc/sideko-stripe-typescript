import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsZipObj0,
};
