import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyApplePayLaterDisplayPreference,
  };
