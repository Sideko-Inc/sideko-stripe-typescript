import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyAlmaDisplayPreference,
  };
