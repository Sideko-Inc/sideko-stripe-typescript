import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyKlarnaDisplayPreference,
  };
