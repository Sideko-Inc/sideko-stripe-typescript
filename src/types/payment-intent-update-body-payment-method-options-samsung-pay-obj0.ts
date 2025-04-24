import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0 = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0 =
  {
    capture_method?: "manual" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSamsungPayObj0,
  };
