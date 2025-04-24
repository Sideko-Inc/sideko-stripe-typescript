import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyWifiObj0PersonalPsk
 */
export type TerminalConfigurationUpdateBodyWifiObj0PersonalPsk = {
  password: string;
  ssid: string;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyWifiObj0PersonalPsk without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk = {
  password: string;
  ssid: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyWifiObj0PersonalPsk
 */
const SchemaIn$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk: z.ZodType<
  TerminalConfigurationUpdateBodyWifiObj0PersonalPsk, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    password: z.string(),
    ssid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      password: "password",
      ssid: "ssid",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk
 */
const SchemaOut$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk: z.ZodType<
  External$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyWifiObj0PersonalPsk // the object to be transformed
> = z
  .object({
    password: z.string(),
    ssid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      password: "password",
      ssid: "ssid",
    });
  });

export const Schemas$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk = {
  in: SchemaIn$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk,
  out: SchemaOut$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk,
};
