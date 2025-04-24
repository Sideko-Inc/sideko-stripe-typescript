import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyGooglePayDisplayPreference,
  };
