import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodySatispayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodySatispayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySatispayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySatispayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodySatispayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySatispayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodySatispayDisplayPreference,
  };
