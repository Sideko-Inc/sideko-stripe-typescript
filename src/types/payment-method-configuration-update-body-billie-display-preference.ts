import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyBillieDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyBillieDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyBillieDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyBillieDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyBillieDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyBillieDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyBillieDisplayPreference,
  };
