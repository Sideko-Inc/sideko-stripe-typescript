import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyWechatPayDisplayPreference,
  };
