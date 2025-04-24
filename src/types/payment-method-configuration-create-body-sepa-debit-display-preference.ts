import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodySepaDebitDisplayPreference,
  };
