import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodySepaDebitDisplayPreference,
  };
