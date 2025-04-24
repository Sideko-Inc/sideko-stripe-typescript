import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodySofortDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodySofortDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySofortDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySofortDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySofortDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySofortDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodySofortDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySofortDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySofortDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySofortDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySofortDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySofortDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodySofortDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodySofortDisplayPreference,
  };
