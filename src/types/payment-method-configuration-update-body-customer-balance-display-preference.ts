import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyCustomerBalanceDisplayPreference,
  };
