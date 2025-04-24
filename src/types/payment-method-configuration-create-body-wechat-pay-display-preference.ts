import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyWechatPayDisplayPreference,
  };
