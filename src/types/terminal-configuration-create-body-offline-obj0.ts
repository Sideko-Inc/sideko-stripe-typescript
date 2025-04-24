import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyOfflineObj0
 */
export type TerminalConfigurationCreateBodyOfflineObj0 = {
  enabled: boolean;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyOfflineObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyOfflineObj0 = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyOfflineObj0
 */
const SchemaIn$TerminalConfigurationCreateBodyOfflineObj0: z.ZodType<
  TerminalConfigurationCreateBodyOfflineObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyOfflineObj0
 */
const SchemaOut$TerminalConfigurationCreateBodyOfflineObj0: z.ZodType<
  External$TerminalConfigurationCreateBodyOfflineObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyOfflineObj0 // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$TerminalConfigurationCreateBodyOfflineObj0 = {
  in: SchemaIn$TerminalConfigurationCreateBodyOfflineObj0,
  out: SchemaOut$TerminalConfigurationCreateBodyOfflineObj0,
};
