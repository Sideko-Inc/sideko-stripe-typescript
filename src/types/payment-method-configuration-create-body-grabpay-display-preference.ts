import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyGrabpayDisplayPreference,
  };
