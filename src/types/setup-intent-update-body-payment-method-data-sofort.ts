import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentUpdateBodyPaymentMethodDataSofort
 */
export type SetupIntentUpdateBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodDataSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodDataSofort
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodDataSofort: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodDataSofort, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodDataSofort
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodDataSofort: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodDataSofort // the object to be transformed
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$SetupIntentUpdateBodyPaymentMethodDataSofort = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodDataSofort,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodDataSofort,
};
