import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyStripeS700Obj0
 */
export type TerminalConfigurationUpdateBodyStripeS700Obj0 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyStripeS700Obj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyStripeS700Obj0 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyStripeS700Obj0
 */
const SchemaIn$TerminalConfigurationUpdateBodyStripeS700Obj0: z.ZodType<
  TerminalConfigurationUpdateBodyStripeS700Obj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyStripeS700Obj0
 */
const SchemaOut$TerminalConfigurationUpdateBodyStripeS700Obj0: z.ZodType<
  External$TerminalConfigurationUpdateBodyStripeS700Obj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyStripeS700Obj0 // the object to be transformed
> = z
  .object({
    splashscreen: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

export const Schemas$TerminalConfigurationUpdateBodyStripeS700Obj0 = {
  in: SchemaIn$TerminalConfigurationUpdateBodyStripeS700Obj0,
  out: SchemaOut$TerminalConfigurationUpdateBodyStripeS700Obj0,
};
