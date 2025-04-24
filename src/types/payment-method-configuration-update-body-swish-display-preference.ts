import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodySwishDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodySwishDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySwishDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySwishDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySwishDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySwishDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodySwishDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySwishDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySwishDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySwishDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySwishDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySwishDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodySwishDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodySwishDisplayPreference,
  };
