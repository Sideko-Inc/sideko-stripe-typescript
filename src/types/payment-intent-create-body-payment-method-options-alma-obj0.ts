import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0 = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAlmaObj0,
};
