import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyAffirmDisplayPreference,
  };
