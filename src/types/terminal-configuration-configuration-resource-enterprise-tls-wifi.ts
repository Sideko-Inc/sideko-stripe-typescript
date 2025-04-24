import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceEnterpriseTlsWifi = {
  /**
   * A File ID representing a PEM file containing the server certificate
   */
  caCertificateFile?: string | undefined;
  /**
   * A File ID representing a PEM file containing the client certificate
   */
  clientCertificateFile: string;
  /**
   * A File ID representing a PEM file containing the client RSA private key
   */
  privateKeyFile: string;
  /**
   * Password for the private key file
   */
  privateKeyFilePassword?: string | undefined;
  /**
   * Name of the WiFi network
   */
  ssid: string;
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourceEnterpriseTlsWifi without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi =
  {
    ca_certificate_file?: string | undefined;
    client_certificate_file: string;
    private_key_file: string;
    private_key_file_password?: string | undefined;
    ssid: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceEnterpriseTlsWifi
 */
const SchemaIn$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi: z.ZodType<
  TerminalConfigurationConfigurationResourceEnterpriseTlsWifi, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ca_certificate_file: z.string().optional(),
    client_certificate_file: z.string(),
    private_key_file: z.string(),
    private_key_file_password: z.string().optional(),
    ssid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ca_certificate_file: "caCertificateFile",
      client_certificate_file: "clientCertificateFile",
      private_key_file: "privateKeyFile",
      private_key_file_password: "privateKeyFilePassword",
      ssid: "ssid",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi
 */
const SchemaOut$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi: z.ZodType<
  External$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceEnterpriseTlsWifi // the object to be transformed
> = z
  .object({
    caCertificateFile: z.string().optional(),
    clientCertificateFile: z.string(),
    privateKeyFile: z.string(),
    privateKeyFilePassword: z.string().optional(),
    ssid: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      caCertificateFile: "ca_certificate_file",
      clientCertificateFile: "client_certificate_file",
      privateKeyFile: "private_key_file",
      privateKeyFilePassword: "private_key_file_password",
      ssid: "ssid",
    });
  });

export const Schemas$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi =
  {
    in: SchemaIn$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi,
    out: SchemaOut$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi,
  };
