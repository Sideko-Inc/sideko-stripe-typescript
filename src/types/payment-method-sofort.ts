import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodSofort = {
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodSofort = {
  country?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodSofort
 */
const SchemaIn$PaymentMethodSofort: z.ZodType<
  PaymentMethodSofort, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodSofort
 */
const SchemaOut$PaymentMethodSofort: z.ZodType<
  External$PaymentMethodSofort, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodSofort // the object to be transformed
> = z
  .object({
    country: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$PaymentMethodSofort = {
  in: SchemaIn$PaymentMethodSofort,
  out: SchemaOut$PaymentMethodSofort,
};
