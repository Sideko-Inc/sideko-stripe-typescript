import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyLinkDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyLinkDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyLinkDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyLinkDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyLinkDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyLinkDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyLinkDisplayPreference,
  };
