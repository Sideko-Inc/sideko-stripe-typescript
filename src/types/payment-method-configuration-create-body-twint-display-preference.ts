import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyTwintDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyTwintDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyTwintDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyTwintDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyTwintDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyTwintDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyTwintDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyTwintDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyTwintDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyTwintDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyTwintDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyTwintDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyTwintDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyTwintDisplayPreference,
  };
