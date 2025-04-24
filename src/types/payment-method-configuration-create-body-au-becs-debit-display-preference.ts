import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyAuBecsDebitDisplayPreference,
  };
