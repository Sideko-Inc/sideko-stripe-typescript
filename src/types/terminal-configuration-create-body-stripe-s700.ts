import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An object containing device type specific settings for Stripe S700 readers
 */
export type TerminalConfigurationCreateBodyStripeS700 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyStripeS700 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyStripeS700 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyStripeS700
 */
const SchemaIn$TerminalConfigurationCreateBodyStripeS700: z.ZodType<
  TerminalConfigurationCreateBodyStripeS700, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    splashscreen: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyStripeS700
 */
const SchemaOut$TerminalConfigurationCreateBodyStripeS700: z.ZodType<
  External$TerminalConfigurationCreateBodyStripeS700, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyStripeS700 // the object to be transformed
> = z
  .object({
    splashscreen: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

export const Schemas$TerminalConfigurationCreateBodyStripeS700 = {
  in: SchemaIn$TerminalConfigurationCreateBodyStripeS700,
  out: SchemaOut$TerminalConfigurationCreateBodyStripeS700,
};
