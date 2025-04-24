import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyFpxDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyFpxDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyFpxDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyFpxDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyFpxDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyFpxDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyFpxDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyFpxDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyFpxDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyFpxDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyFpxDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyFpxDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyFpxDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyFpxDisplayPreference,
  };
