import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyPromptpayDisplayPreference,
  };
