import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyBacsDebitDisplayPreference,
  };
