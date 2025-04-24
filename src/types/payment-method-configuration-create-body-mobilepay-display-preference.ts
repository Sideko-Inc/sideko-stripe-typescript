import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyMobilepayDisplayPreference,
  };
