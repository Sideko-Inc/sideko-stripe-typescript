import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0 =
  {
    capture_method?: "manual" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSamsungPayObj0,
  };
