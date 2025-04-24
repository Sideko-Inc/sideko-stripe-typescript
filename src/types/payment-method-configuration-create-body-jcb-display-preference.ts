import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyJcbDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyJcbDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyJcbDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyJcbDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyJcbDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyJcbDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyJcbDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyJcbDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyJcbDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyJcbDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyJcbDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyJcbDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyJcbDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyJcbDisplayPreference,
  };
