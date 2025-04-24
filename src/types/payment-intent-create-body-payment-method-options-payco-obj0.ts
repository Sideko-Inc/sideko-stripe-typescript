import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0 = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsPaycoObj0,
};
