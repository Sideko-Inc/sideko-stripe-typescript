import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataNaverPay
 */
export type PaymentIntentUpdateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataNaverPay
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataNaverPay: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataNaverPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataNaverPay
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataNaverPay: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataNaverPay = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataNaverPay,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataNaverPay,
};
