import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyAffirmDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyAffirmDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAffirmDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAffirmDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyAffirmDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAffirmDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyAffirmDisplayPreference,
  };
