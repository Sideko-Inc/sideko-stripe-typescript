import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyAuBecsDebitDisplayPreference,
  };
