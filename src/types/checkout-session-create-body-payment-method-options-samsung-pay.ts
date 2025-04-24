import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSamsungPay,
};
