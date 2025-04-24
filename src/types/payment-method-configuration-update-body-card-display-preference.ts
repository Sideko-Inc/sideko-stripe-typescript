import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyCardDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyCardDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyCardDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyCardDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyCardDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyCardDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyCardDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyCardDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyCardDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyCardDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyCardDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyCardDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyCardDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyCardDisplayPreference,
  };
