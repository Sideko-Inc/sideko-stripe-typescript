import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyRevolutPayDisplayPreference,
  };
