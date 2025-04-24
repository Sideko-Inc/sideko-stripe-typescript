import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyGrabpayDisplayPreference,
  };
