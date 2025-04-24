import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap
 */
export type TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap = {
  caCertificateFile?: string | undefined;
  password: string;
  ssid: string;
  username: string;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap =
  {
    ca_certificate_file?: string | undefined;
    password: string;
    ssid: string;
    username: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap
 */
const SchemaIn$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap: z.ZodType<
  TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap
 */
const SchemaOut$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap: z.ZodType<
  External$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap // the object to be transformed
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

export const Schemas$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap =
  {
    in: SchemaIn$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap,
    out: SchemaOut$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap,
  };
