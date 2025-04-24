import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyBacsDebitDisplayPreference,
  };
