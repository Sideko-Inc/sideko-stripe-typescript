import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyKonbiniDisplayPreference,
  };
