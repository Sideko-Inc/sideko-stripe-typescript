import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0 = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPaycoObj0,
};
