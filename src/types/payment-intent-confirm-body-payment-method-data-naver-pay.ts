import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataNaverPay
 */
export type PaymentIntentConfirmBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataNaverPay
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataNaverPay: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataNaverPay
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataNaverPay: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataNaverPay = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataNaverPay,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataNaverPay,
};
