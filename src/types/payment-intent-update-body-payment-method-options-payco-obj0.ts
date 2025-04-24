import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0 = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPaycoObj0,
};
