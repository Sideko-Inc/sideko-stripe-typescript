import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0 = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAlmaObj0,
};
