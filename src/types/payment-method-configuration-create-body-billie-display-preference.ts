import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyBillieDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyBillieDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyBillieDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyBillieDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyBillieDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyBillieDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyBillieDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyBillieDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyBillieDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyBillieDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyBillieDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyBillieDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyBillieDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyBillieDisplayPreference,
  };
