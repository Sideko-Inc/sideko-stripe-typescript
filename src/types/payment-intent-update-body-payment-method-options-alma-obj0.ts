import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0 = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAlmaObj0,
};
