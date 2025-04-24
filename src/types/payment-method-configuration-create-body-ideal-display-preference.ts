import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyIdealDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyIdealDisplayPreference = {
  preference?: ("none" | "off" | "on") | undefined;
};

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyIdealDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyIdealDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyIdealDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyIdealDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyIdealDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyIdealDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyIdealDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyIdealDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyIdealDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyIdealDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyIdealDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyIdealDisplayPreference,
  };
