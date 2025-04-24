import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyEpsDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyEpsDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyEpsDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyEpsDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyEpsDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyEpsDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyEpsDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyEpsDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyEpsDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyEpsDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyEpsDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyEpsDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyEpsDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyEpsDisplayPreference,
  };
