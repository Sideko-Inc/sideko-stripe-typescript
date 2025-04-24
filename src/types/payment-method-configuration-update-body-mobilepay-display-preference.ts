import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyMobilepayDisplayPreference,
  };
