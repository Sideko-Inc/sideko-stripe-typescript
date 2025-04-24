import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodySwishDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodySwishDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodySwishDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodySwishDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodySwishDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodySwishDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodySwishDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodySwishDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodySwishDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodySwishDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodySwishDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodySwishDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodySwishDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodySwishDisplayPreference,
  };
