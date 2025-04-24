import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyPayByBankDisplayPreference,
  };
