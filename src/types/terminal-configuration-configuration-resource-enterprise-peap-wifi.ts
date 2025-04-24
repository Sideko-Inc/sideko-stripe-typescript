import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceEnterprisePeapWifi = {
  /**
   * A File ID representing a PEM file containing the server certificate
   */
  caCertificateFile?: string | undefined;
  /**
   * Password for connecting to the WiFi network
   */
  password: string;
  /**
   * Name of the WiFi network
   */
  ssid: string;
  /**
   * Username for connecting to the WiFi network
   */
  username: string;
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourceEnterprisePeapWifi without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceEnterprisePeapWifi =
  {
    ca_certificate_file?: string | undefined;
    password: string;
    ssid: string;
    username: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceEnterprisePeapWifi
 */
const SchemaIn$TerminalConfigurationConfigurationResourceEnterprisePeapWifi: z.ZodType<
  TerminalConfigurationConfigurationResourceEnterprisePeapWifi, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ca_certificate_file: z.string().optional(),
    password: z.string(),
    ssid: z.string(),
    username: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ca_certificate_file: "caCertificateFile",
      password: "password",
      ssid: "ssid",
      username: "username",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceEnterprisePeapWifi
 */
const SchemaOut$TerminalConfigurationConfigurationResourceEnterprisePeapWifi: z.ZodType<
  External$TerminalConfigurationConfigurationResourceEnterprisePeapWifi, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceEnterprisePeapWifi // the object to be transformed
> = z
  .object({
    caCertificateFile: z.string().optional(),
    password: z.string(),
    ssid: z.string(),
    username: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      caCertificateFile: "ca_certificate_file",
      password: "password",
      ssid: "ssid",
      username: "username",
    });
  });

export const Schemas$TerminalConfigurationConfigurationResourceEnterprisePeapWifi =
  {
    in: SchemaIn$TerminalConfigurationConfigurationResourceEnterprisePeapWifi,
    out: SchemaOut$TerminalConfigurationConfigurationResourceEnterprisePeapWifi,
  };
