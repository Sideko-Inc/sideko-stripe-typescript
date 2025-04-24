import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap
 */
export type TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap = {
  caCertificateFile?: string | undefined;
  password: string;
  ssid: string;
  username: string;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap =
  {
    ca_certificate_file?: string | undefined;
    password: string;
    ssid: string;
    username: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap
 */
const SchemaIn$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap: z.ZodType<
  TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap
 */
const SchemaOut$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap: z.ZodType<
  External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap // the object to be transformed
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

export const Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap =
  {
    in: SchemaIn$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap,
    out: SchemaOut$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap,
  };
