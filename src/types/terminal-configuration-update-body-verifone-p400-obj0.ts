import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyVerifoneP400Obj0
 */
export type TerminalConfigurationUpdateBodyVerifoneP400Obj0 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyVerifoneP400Obj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyVerifoneP400Obj0 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyVerifoneP400Obj0
 */
const SchemaIn$TerminalConfigurationUpdateBodyVerifoneP400Obj0: z.ZodType<
  TerminalConfigurationUpdateBodyVerifoneP400Obj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyVerifoneP400Obj0
 */
const SchemaOut$TerminalConfigurationUpdateBodyVerifoneP400Obj0: z.ZodType<
  External$TerminalConfigurationUpdateBodyVerifoneP400Obj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyVerifoneP400Obj0 // the object to be transformed
> = z
  .object({
    splashscreen: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

export const Schemas$TerminalConfigurationUpdateBodyVerifoneP400Obj0 = {
  in: SchemaIn$TerminalConfigurationUpdateBodyVerifoneP400Obj0,
  out: SchemaOut$TerminalConfigurationUpdateBodyVerifoneP400Obj0,
};
