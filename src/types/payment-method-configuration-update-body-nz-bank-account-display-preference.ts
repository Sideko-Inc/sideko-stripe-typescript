import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyNzBankAccountDisplayPreference,
  };
