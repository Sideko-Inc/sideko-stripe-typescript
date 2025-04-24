import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Reboot time settings for readers that support customized reboot time configuration.
 */
export type TerminalConfigurationCreateBodyRebootWindow = {
  endHour: number;
  startHour: number;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyRebootWindow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyRebootWindow = {
  end_hour: number;
  start_hour: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyRebootWindow
 */
const SchemaIn$TerminalConfigurationCreateBodyRebootWindow: z.ZodType<
  TerminalConfigurationCreateBodyRebootWindow, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyRebootWindow
 */
const SchemaOut$TerminalConfigurationCreateBodyRebootWindow: z.ZodType<
  External$TerminalConfigurationCreateBodyRebootWindow, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyRebootWindow // the object to be transformed
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

export const Schemas$TerminalConfigurationCreateBodyRebootWindow = {
  in: SchemaIn$TerminalConfigurationCreateBodyRebootWindow,
  out: SchemaOut$TerminalConfigurationCreateBodyRebootWindow,
};
