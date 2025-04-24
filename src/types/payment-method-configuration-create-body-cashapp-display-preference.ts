import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyCashappDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyCashappDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCashappDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCashappDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCashappDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCashappDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyCashappDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCashappDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCashappDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCashappDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCashappDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCashappDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyCashappDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyCashappDisplayPreference,
  };
