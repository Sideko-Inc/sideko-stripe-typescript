import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls
 */
export type TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls = {
  caCertificateFile?: string | undefined;
  clientCertificateFile: string;
  privateKeyFile: string;
  privateKeyFilePassword?: string | undefined;
  ssid: string;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls = {
  ca_certificate_file?: string | undefined;
  client_certificate_file: string;
  private_key_file: string;
  private_key_file_password?: string | undefined;
  ssid: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls
 */
const SchemaIn$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls: z.ZodType<
  TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls
 */
const SchemaOut$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls: z.ZodType<
  External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls // the object to be transformed
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

export const Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls = {
  in: SchemaIn$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls,
  out: SchemaOut$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls,
};
