import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourcePersonalPskWifi = {
  /**
   * Password for connecting to the WiFi network
   */
  password: string;
  /**
   * Name of the WiFi network
   */
  ssid: string;
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourcePersonalPskWifi without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourcePersonalPskWifi =
  {
    password: string;
    ssid: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourcePersonalPskWifi
 */
const SchemaIn$TerminalConfigurationConfigurationResourcePersonalPskWifi: z.ZodType<
  TerminalConfigurationConfigurationResourcePersonalPskWifi, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourcePersonalPskWifi
 */
const SchemaOut$TerminalConfigurationConfigurationResourcePersonalPskWifi: z.ZodType<
  External$TerminalConfigurationConfigurationResourcePersonalPskWifi, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourcePersonalPskWifi // the object to be transformed
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

export const Schemas$TerminalConfigurationConfigurationResourcePersonalPskWifi =
  {
    in: SchemaIn$TerminalConfigurationConfigurationResourcePersonalPskWifi,
    out: SchemaOut$TerminalConfigurationConfigurationResourcePersonalPskWifi,
  };
