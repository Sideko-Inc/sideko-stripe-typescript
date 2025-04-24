import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyTwintDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyTwintDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyTwintDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyTwintDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyTwintDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyTwintDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyTwintDisplayPreference,
  };
