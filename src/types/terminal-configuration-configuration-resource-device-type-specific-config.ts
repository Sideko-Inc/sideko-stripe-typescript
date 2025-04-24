import { External$File, File, Schemas$File } from "./file";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig =
  {
    /**
     * A File ID representing an image to display on the reader
     */
    splashscreen?: (string | File) | undefined;
  };

/**
 * @internal
 * TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig =
  {
    splashscreen?: (string | External$File) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
 */
const SchemaIn$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig: z.ZodType<
  TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    splashscreen: z
      .union([z.string(), z.lazy(() => Schemas$File.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
 */
const SchemaOut$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig: z.ZodType<
  External$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig // the object to be transformed
> = z
  .object({
    splashscreen: z
      .union([z.string(), z.lazy(() => Schemas$File.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      splashscreen: "splashscreen",
    });
  });

export const Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig =
  {
    in: SchemaIn$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig,
    out: SchemaOut$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig,
  };
