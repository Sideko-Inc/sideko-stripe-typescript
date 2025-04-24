import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyAlmaDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyAlmaDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAlmaDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAlmaDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyAlmaDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAlmaDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyAlmaDisplayPreference,
  };
