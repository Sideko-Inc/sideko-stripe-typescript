import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyApplePayLaterDisplayPreference,
  };
