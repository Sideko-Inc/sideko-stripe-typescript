import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyMultibancoDisplayPreference,
  };
