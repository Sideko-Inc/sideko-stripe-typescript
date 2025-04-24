import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyCustomerBalanceDisplayPreference,
  };
