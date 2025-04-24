import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyIdealDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyIdealDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyIdealDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyIdealDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyIdealDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyIdealDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyIdealDisplayPreference,
  };
