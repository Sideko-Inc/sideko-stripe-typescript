import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceOfflineConfig = {
  /**
   * Determines whether to allow transactions to be collected while reader is offline. Defaults to false.
   */
  enabled?: boolean | null | undefined;
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourceOfflineConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceOfflineConfig = {
  enabled?: boolean | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceOfflineConfig
 */
const SchemaIn$TerminalConfigurationConfigurationResourceOfflineConfig: z.ZodType<
  TerminalConfigurationConfigurationResourceOfflineConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceOfflineConfig
 */
const SchemaOut$TerminalConfigurationConfigurationResourceOfflineConfig: z.ZodType<
  External$TerminalConfigurationConfigurationResourceOfflineConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceOfflineConfig // the object to be transformed
> = z
  .object({
    enabled: z.boolean().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$TerminalConfigurationConfigurationResourceOfflineConfig = {
  in: SchemaIn$TerminalConfigurationConfigurationResourceOfflineConfig,
  out: SchemaOut$TerminalConfigurationConfigurationResourceOfflineConfig,
};
