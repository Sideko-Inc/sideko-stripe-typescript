import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyBoletoDisplayPreference,
  };
