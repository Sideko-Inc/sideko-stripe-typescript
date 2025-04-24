import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyBlikDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyBlikDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBlikDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBlikDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBlikDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBlikDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyBlikDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBlikDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBlikDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBlikDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBlikDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBlikDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyBlikDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyBlikDisplayPreference,
  };
