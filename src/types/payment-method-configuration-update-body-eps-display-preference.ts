import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyEpsDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyEpsDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyEpsDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyEpsDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyEpsDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyEpsDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyEpsDisplayPreference,
  };
