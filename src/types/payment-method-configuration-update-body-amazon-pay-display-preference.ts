import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyAmazonPayDisplayPreference,
  };
