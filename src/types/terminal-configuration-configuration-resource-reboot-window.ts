import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceRebootWindow = {
  /**
   * Integer between 0 to 23 that represents the end hour of the reboot time window. The value must be different than the start_hour.
   */
  endHour: number;
  /**
   * Integer between 0 to 23 that represents the start hour of the reboot time window.
   */
  startHour: number;
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourceRebootWindow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceRebootWindow = {
  end_hour: number;
  start_hour: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceRebootWindow
 */
const SchemaIn$TerminalConfigurationConfigurationResourceRebootWindow: z.ZodType<
  TerminalConfigurationConfigurationResourceRebootWindow, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    end_hour: z.number().int(),
    start_hour: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      end_hour: "endHour",
      start_hour: "startHour",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceRebootWindow
 */
const SchemaOut$TerminalConfigurationConfigurationResourceRebootWindow: z.ZodType<
  External$TerminalConfigurationConfigurationResourceRebootWindow, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceRebootWindow // the object to be transformed
> = z
  .object({
    endHour: z.number().int(),
    startHour: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      endHour: "end_hour",
      startHour: "start_hour",
    });
  });

export const Schemas$TerminalConfigurationConfigurationResourceRebootWindow = {
  in: SchemaIn$TerminalConfigurationConfigurationResourceRebootWindow,
  out: SchemaOut$TerminalConfigurationConfigurationResourceRebootWindow,
};
