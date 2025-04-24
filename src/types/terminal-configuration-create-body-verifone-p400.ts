import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An object containing device type specific settings for Verifone P400 readers
 */
export type TerminalConfigurationCreateBodyVerifoneP400 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyVerifoneP400 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyVerifoneP400 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyVerifoneP400
 */
const SchemaIn$TerminalConfigurationCreateBodyVerifoneP400: z.ZodType<
  TerminalConfigurationCreateBodyVerifoneP400, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyVerifoneP400
 */
const SchemaOut$TerminalConfigurationCreateBodyVerifoneP400: z.ZodType<
  External$TerminalConfigurationCreateBodyVerifoneP400, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyVerifoneP400 // the object to be transformed
> = z
  .object({
    splashscreen: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

export const Schemas$TerminalConfigurationCreateBodyVerifoneP400 = {
  in: SchemaIn$TerminalConfigurationCreateBodyVerifoneP400,
  out: SchemaOut$TerminalConfigurationCreateBodyVerifoneP400,
};
