import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyOxxoDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyOxxoDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyOxxoDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyOxxoDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyOxxoDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyOxxoDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyOxxoDisplayPreference,
  };
