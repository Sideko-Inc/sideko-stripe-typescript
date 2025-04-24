import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyFpxDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyFpxDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyFpxDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyFpxDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyFpxDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyFpxDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyFpxDisplayPreference,
  };
