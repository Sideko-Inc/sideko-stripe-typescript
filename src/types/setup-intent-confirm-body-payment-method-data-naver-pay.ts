import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataNaverPay
 */
export type SetupIntentConfirmBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataNaverPay
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataNaverPay: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataNaverPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataNaverPay
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataNaverPay: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataNaverPay = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataNaverPay,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataNaverPay,
};
