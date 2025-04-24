import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyAcssDebitDisplayPreference,
  };
