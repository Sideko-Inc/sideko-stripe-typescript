import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyJcbDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyJcbDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyJcbDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyJcbDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyJcbDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyJcbDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyJcbDisplayPreference,
  };
