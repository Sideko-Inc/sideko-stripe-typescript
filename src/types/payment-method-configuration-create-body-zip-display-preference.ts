import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyZipDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyZipDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyZipDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyZipDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyZipDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyZipDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyZipDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyZipDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyZipDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyZipDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyZipDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyZipDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyZipDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyZipDisplayPreference,
  };
