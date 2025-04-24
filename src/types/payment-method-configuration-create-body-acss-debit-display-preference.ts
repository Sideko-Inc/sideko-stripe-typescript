import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyAcssDebitDisplayPreference,
  };
