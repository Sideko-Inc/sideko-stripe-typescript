import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyPaypalDisplayPreference,
  };
