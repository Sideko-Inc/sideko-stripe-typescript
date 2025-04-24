import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyUsBankAccountDisplayPreference,
  };
