import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyRebootWindowObj0
 */
export type TerminalConfigurationUpdateBodyRebootWindowObj0 = {
  endHour: number;
  startHour: number;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyRebootWindowObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyRebootWindowObj0 = {
  end_hour: number;
  start_hour: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyRebootWindowObj0
 */
const SchemaIn$TerminalConfigurationUpdateBodyRebootWindowObj0: z.ZodType<
  TerminalConfigurationUpdateBodyRebootWindowObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyRebootWindowObj0
 */
const SchemaOut$TerminalConfigurationUpdateBodyRebootWindowObj0: z.ZodType<
  External$TerminalConfigurationUpdateBodyRebootWindowObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyRebootWindowObj0 // the object to be transformed
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

export const Schemas$TerminalConfigurationUpdateBodyRebootWindowObj0 = {
  in: SchemaIn$TerminalConfigurationUpdateBodyRebootWindowObj0,
  out: SchemaOut$TerminalConfigurationUpdateBodyRebootWindowObj0,
};
