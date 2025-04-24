import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyOfflineObj0
 */
export type TerminalConfigurationUpdateBodyOfflineObj0 = {
  enabled: boolean;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyOfflineObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyOfflineObj0 = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyOfflineObj0
 */
const SchemaIn$TerminalConfigurationUpdateBodyOfflineObj0: z.ZodType<
  TerminalConfigurationUpdateBodyOfflineObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyOfflineObj0
 */
const SchemaOut$TerminalConfigurationUpdateBodyOfflineObj0: z.ZodType<
  External$TerminalConfigurationUpdateBodyOfflineObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyOfflineObj0 // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$TerminalConfigurationUpdateBodyOfflineObj0 = {
  in: SchemaIn$TerminalConfigurationUpdateBodyOfflineObj0,
  out: SchemaOut$TerminalConfigurationUpdateBodyOfflineObj0,
};
