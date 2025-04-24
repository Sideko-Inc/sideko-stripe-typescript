import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An object containing device type specific settings for BBPOS WisePOS E readers
 */
export type TerminalConfigurationCreateBodyBbposWiseposE = {
  splashscreen?: (string | string) | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyBbposWiseposE without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyBbposWiseposE = {
  splashscreen?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyBbposWiseposE
 */
const SchemaIn$TerminalConfigurationCreateBodyBbposWiseposE: z.ZodType<
  TerminalConfigurationCreateBodyBbposWiseposE, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyBbposWiseposE
 */
const SchemaOut$TerminalConfigurationCreateBodyBbposWiseposE: z.ZodType<
  External$TerminalConfigurationCreateBodyBbposWiseposE, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyBbposWiseposE // the object to be transformed
> = z
  .object({
    splashscreen: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

export const Schemas$TerminalConfigurationCreateBodyBbposWiseposE = {
  in: SchemaIn$TerminalConfigurationCreateBodyBbposWiseposE,
  out: SchemaOut$TerminalConfigurationCreateBodyBbposWiseposE,
};
