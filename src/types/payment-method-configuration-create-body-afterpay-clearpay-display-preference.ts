import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference
 */
export type PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationCreateBodyAfterpayClearpayDisplayPreference,
  };
