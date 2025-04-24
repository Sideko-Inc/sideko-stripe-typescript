import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0 = {
  captureMethod?: "manual" | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0 =
  {
    capture_method?: "manual" | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsMobilepayObj0,
  };
