import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyP24DisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyP24DisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyP24DisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyP24DisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyP24DisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyP24DisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyP24DisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyP24DisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyP24DisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyP24DisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyP24DisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyP24DisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyP24DisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyP24DisplayPreference,
  };
