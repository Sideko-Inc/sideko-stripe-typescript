import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyBbposWiseposEObj0
 */
export type TerminalConfigurationUpdateBodyBbposWiseposEObj0 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyBbposWiseposEObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyBbposWiseposEObj0 = {
  splashscreen?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyBbposWiseposEObj0
 */
const SchemaIn$TerminalConfigurationUpdateBodyBbposWiseposEObj0: z.ZodType<
  TerminalConfigurationUpdateBodyBbposWiseposEObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyBbposWiseposEObj0
 */
const SchemaOut$TerminalConfigurationUpdateBodyBbposWiseposEObj0: z.ZodType<
  External$TerminalConfigurationUpdateBodyBbposWiseposEObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyBbposWiseposEObj0 // the object to be transformed
> = z
  .object({
    splashscreen: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

export const Schemas$TerminalConfigurationUpdateBodyBbposWiseposEObj0 = {
  in: SchemaIn$TerminalConfigurationUpdateBodyBbposWiseposEObj0,
  out: SchemaOut$TerminalConfigurationUpdateBodyBbposWiseposEObj0,
};
