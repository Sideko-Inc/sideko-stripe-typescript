import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataNaverPay
 */
export type SetupIntentCreateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataNaverPay
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataNaverPay: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataNaverPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataNaverPay
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataNaverPay: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodDataNaverPay = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataNaverPay,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataNaverPay,
};
