import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyKlarnaDisplayPreference,
  };
