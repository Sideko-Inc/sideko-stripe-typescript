import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyGiropayDisplayPreference,
  };
