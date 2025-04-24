import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodDataNaverPay
 */
export type PaymentIntentCreateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodDataNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodDataNaverPay
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodDataNaverPay: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodDataNaverPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodDataNaverPay
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodDataNaverPay: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodDataNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodDataNaverPay = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodDataNaverPay,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodDataNaverPay,
};
