import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyBoletoDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyBoletoDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBoletoDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBoletoDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyBoletoDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBoletoDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyBoletoDisplayPreference,
  };
