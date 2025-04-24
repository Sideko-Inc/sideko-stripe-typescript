import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyPaynowDisplayPreference,
  };
