import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodySofortDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodySofortDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodySofortDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodySofortDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodySofortDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodySofortDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodySofortDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodySofortDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodySofortDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodySofortDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodySofortDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodySofortDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodySofortDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodySofortDisplayPreference,
  };
