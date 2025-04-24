import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyApplePayDisplayPreference,
  };
