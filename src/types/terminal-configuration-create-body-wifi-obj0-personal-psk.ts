import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyWifiObj0PersonalPsk
 */
export type TerminalConfigurationCreateBodyWifiObj0PersonalPsk = {
  password: string;
  ssid: string;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyWifiObj0PersonalPsk without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyWifiObj0PersonalPsk = {
  password: string;
  ssid: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyWifiObj0PersonalPsk
 */
const SchemaIn$TerminalConfigurationCreateBodyWifiObj0PersonalPsk: z.ZodType<
  TerminalConfigurationCreateBodyWifiObj0PersonalPsk, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyWifiObj0PersonalPsk
 */
const SchemaOut$TerminalConfigurationCreateBodyWifiObj0PersonalPsk: z.ZodType<
  External$TerminalConfigurationCreateBodyWifiObj0PersonalPsk, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyWifiObj0PersonalPsk // the object to be transformed
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

export const Schemas$TerminalConfigurationCreateBodyWifiObj0PersonalPsk = {
  in: SchemaIn$TerminalConfigurationCreateBodyWifiObj0PersonalPsk,
  out: SchemaOut$TerminalConfigurationCreateBodyWifiObj0PersonalPsk,
};
