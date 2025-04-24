import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyBancontactDisplayPreference,
  };
