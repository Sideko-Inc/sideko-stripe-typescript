import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyZipDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyZipDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyZipDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyZipDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyZipDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyZipDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyZipDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyZipDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyZipDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyZipDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyZipDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyZipDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyZipDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyZipDisplayPreference,
  };
