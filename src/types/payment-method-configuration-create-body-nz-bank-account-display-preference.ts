import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyNzBankAccountDisplayPreference,
  };
