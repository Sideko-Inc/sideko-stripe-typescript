import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyRevolutPayDisplayPreference,
  };
