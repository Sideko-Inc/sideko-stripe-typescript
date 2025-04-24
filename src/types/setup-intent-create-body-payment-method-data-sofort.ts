import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodDataSofort
 */
export type SetupIntentCreateBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodDataSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodDataSofort
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodDataSofort: z.ZodType<
  SetupIntentCreateBodyPaymentMethodDataSofort, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodDataSofort
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodDataSofort: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodDataSofort // the object to be transformed
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodDataSofort = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodDataSofort,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodDataSofort,
};
