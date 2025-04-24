import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyBancontactDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyBancontactDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBancontactDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBancontactDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyBancontactDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBancontactDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyBancontactDisplayPreference,
  };
