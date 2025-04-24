import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyCartesBancairesDisplayPreference,
  };
