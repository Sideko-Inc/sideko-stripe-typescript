import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsGiropayObj0,
};
