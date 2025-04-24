import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyCashappDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyCashappDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyCashappDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyCashappDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyCashappDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyCashappDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyCashappDisplayPreference,
  };
