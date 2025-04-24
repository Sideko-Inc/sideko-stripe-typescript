import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyAlipayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyAlipayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAlipayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAlipayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyAlipayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAlipayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyAlipayDisplayPreference,
  };
