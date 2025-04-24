import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyAmazonPayDisplayPreference,
  };
