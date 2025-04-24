import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyGiropayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyGiropayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyGiropayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyGiropayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyGiropayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyGiropayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyGiropayDisplayPreference,
  };
