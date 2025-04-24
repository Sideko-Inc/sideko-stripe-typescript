import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
 */
export type PaymentMethodCreateBodySofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * @internal
 * PaymentMethodCreateBodySofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBodySofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBodySofort
 */
const SchemaIn$PaymentMethodCreateBodySofort: z.ZodType<
  PaymentMethodCreateBodySofort, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBodySofort
 */
const SchemaOut$PaymentMethodCreateBodySofort: z.ZodType<
  External$PaymentMethodCreateBodySofort, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBodySofort // the object to be transformed
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$PaymentMethodCreateBodySofort = {
  in: SchemaIn$PaymentMethodCreateBodySofort,
  out: SchemaOut$PaymentMethodCreateBodySofort,
};
