import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyPaypalDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyPaypalDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPaypalDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPaypalDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyPaypalDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPaypalDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyPaypalDisplayPreference,
  };
