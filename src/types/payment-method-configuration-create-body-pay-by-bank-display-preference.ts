import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyPayByBankDisplayPreference,
  };
