import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is a `naver_pay` PaymentMethod, this hash contains details about the Naver Pay payment method.
 */
export type PaymentMethodCreateBodyNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBodyNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodyNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodyNaverPay
 */
const SchemaIn$PaymentMethodCreateBodyNaverPay: z.ZodType<
  PaymentMethodCreateBodyNaverPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodyNaverPay
 */
const SchemaOut$PaymentMethodCreateBodyNaverPay: z.ZodType<
  External$PaymentMethodCreateBodyNaverPay, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodyNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$PaymentMethodCreateBodyNaverPay = {
  in: SchemaIn$PaymentMethodCreateBodyNaverPay,
  out: SchemaOut$PaymentMethodCreateBodyNaverPay,
};
