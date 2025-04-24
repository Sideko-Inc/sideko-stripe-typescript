import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyMultibancoDisplayPreference,
  };
