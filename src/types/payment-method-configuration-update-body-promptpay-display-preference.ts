import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyPromptpayDisplayPreference,
  };
