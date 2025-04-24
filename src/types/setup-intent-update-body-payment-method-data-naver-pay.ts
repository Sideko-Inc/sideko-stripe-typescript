import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataNaverPay
 */
export type SetupIntentUpdateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataNaverPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataNaverPay = {
  funding?: ("card" | "points") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataNaverPay
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataNaverPay: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataNaverPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataNaverPay
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataNaverPay: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataNaverPay, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataNaverPay // the object to be transformed
> = z
  .object({
    funding: z.enum(["card", "points"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      funding: "funding",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataNaverPay = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataNaverPay,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataNaverPay,
};
