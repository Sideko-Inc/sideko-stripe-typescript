import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyPaynowDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyPaynowDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPaynowDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPaynowDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyPaynowDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPaynowDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyPaynowDisplayPreference,
  };
