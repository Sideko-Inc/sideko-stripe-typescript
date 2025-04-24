import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyBlikDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyBlikDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBlikDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBlikDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBlikDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBlikDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyBlikDisplayPreference,
  };
