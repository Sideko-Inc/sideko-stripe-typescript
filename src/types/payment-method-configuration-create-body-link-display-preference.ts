import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyLinkDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyLinkDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyLinkDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyLinkDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyLinkDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyLinkDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyLinkDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyLinkDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyLinkDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyLinkDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyLinkDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyLinkDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyLinkDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyLinkDisplayPreference,
  };
