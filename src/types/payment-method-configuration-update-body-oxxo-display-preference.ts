import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyOxxoDisplayPreference,
  };
