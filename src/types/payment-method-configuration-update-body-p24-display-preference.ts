import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyP24DisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyP24DisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyP24DisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyP24DisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyP24DisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyP24DisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyP24DisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyP24DisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyP24DisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyP24DisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyP24DisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyP24DisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyP24DisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyP24DisplayPreference,
  };
