import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataSofort
 */
export type SetupIntentConfirmBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataSofort = {
  country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataSofort
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataSofort: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataSofort, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataSofort
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataSofort: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataSofort, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataSofort // the object to be transformed
> = z
  .object({
    country: z.enum(["AT", "BE", "DE", "ES", "IT", "NL"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
    });
  });

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataSofort = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataSofort,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataSofort,
};
