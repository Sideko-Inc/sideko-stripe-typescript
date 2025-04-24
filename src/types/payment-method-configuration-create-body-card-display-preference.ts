import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyCardDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyCardDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCardDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCardDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCardDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCardDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyCardDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCardDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCardDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCardDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCardDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCardDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyCardDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyCardDisplayPreference,
  };
