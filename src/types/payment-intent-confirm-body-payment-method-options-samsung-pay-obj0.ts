import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0 =
  {
    capture_method?: "manual" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSamsungPayObj0,
  };
