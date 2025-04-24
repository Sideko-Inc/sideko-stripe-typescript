import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyUsBankAccountDisplayPreference,
  };
