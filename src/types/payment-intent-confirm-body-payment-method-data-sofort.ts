import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataSofort
 */
export type PaymentIntentConfirmBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataSofort
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataSofort: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataSofort
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataSofort: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataSofort // the object to be transformed
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataSofort = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataSofort,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataSofort,
};
