import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyGooglePayDisplayPreference,
  };
