import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyKonbiniDisplayPreference,
  };
