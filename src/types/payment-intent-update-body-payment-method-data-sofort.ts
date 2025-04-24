import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodDataSofort
 */
export type PaymentIntentUpdateBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodDataSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodDataSofort
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataSofort: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodDataSofort, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodDataSofort
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataSofort: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodDataSofort // the object to be transformed
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodDataSofort = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodDataSofort,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodDataSofort,
};
