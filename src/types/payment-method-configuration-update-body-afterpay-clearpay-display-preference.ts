import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference
 */
export type PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * @internal
 * PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference =
  {
    preference?: ("none" | "off" | "on") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference
 */
const SchemaIn$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference: z.ZodType<
  PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference
 */
const SchemaOut$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference: z.ZodType<
  External$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference // the object to be transformed
> = z
  .object({
    preference: z.enum(["none", "off", "on"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preference: "preference",
    });
  });

export const Schemas$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference =
  {
    in: SchemaIn$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference,
    out: SchemaOut$PaymentMethodConfigurationUpdateBodyAfterpayClearpayDisplayPreference,
  };
