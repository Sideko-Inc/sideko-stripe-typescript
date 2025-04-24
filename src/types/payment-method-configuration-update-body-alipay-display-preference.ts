import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyAlipayDisplayPreference,
  };
