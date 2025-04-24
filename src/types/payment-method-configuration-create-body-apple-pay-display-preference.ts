import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyApplePayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyApplePayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyApplePayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyApplePayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyApplePayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyApplePayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyApplePayDisplayPreference,
  };
