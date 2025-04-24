import {
  External$TerminalConfigurationConfigurationResourceEnterprisePeapWifi,
  Schemas$TerminalConfigurationConfigurationResourceEnterprisePeapWifi,
  TerminalConfigurationConfigurationResourceEnterprisePeapWifi,
} from "./terminal-configuration-configuration-resource-enterprise-peap-wifi";
import {
  External$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi,
  Schemas$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi,
  TerminalConfigurationConfigurationResourceEnterpriseTlsWifi,
} from "./terminal-configuration-configuration-resource-enterprise-tls-wifi";
import {
  External$TerminalConfigurationConfigurationResourcePersonalPskWifi,
  Schemas$TerminalConfigurationConfigurationResourcePersonalPskWifi,
  TerminalConfigurationConfigurationResourcePersonalPskWifi,
} from "./terminal-configuration-configuration-resource-personal-psk-wifi";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceWifiConfig = {
  enterpriseEapPeap?:
    | TerminalConfigurationConfigurationResourceEnterprisePeapWifi
    | undefined;
  enterpriseEapTls?:
    | TerminalConfigurationConfigurationResourceEnterpriseTlsWifi
    | undefined;
  personalPsk?:
    | TerminalConfigurationConfigurationResourcePersonalPskWifi
    | undefined;
  /**
   * Security type of the WiFi network. The hash with the corresponding name contains the credentials for this security type.
   */
  type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourceWifiConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceWifiConfig = {
  enterprise_eap_peap?:
    | External$TerminalConfigurationConfigurationResourceEnterprisePeapWifi
    | undefined;
  enterprise_eap_tls?:
    | External$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi
    | undefined;
  personal_psk?:
    | External$TerminalConfigurationConfigurationResourcePersonalPskWifi
    | undefined;
  type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceWifiConfig
 */
const SchemaIn$TerminalConfigurationConfigurationResourceWifiConfig: z.ZodType<
  TerminalConfigurationConfigurationResourceWifiConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enterprise_eap_peap:
      Schemas$TerminalConfigurationConfigurationResourceEnterprisePeapWifi.in.optional(),
    enterprise_eap_tls:
      Schemas$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi.in.optional(),
    personal_psk:
      Schemas$TerminalConfigurationConfigurationResourcePersonalPskWifi.in.optional(),
    type: z.enum(["enterprise_eap_peap", "enterprise_eap_tls", "personal_psk"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enterprise_eap_peap: "enterpriseEapPeap",
      enterprise_eap_tls: "enterpriseEapTls",
      personal_psk: "personalPsk",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceWifiConfig
 */
const SchemaOut$TerminalConfigurationConfigurationResourceWifiConfig: z.ZodType<
  External$TerminalConfigurationConfigurationResourceWifiConfig, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceWifiConfig // the object to be transformed
> = z
  .object({
    enterpriseEapPeap:
      Schemas$TerminalConfigurationConfigurationResourceEnterprisePeapWifi.out.optional(),
    enterpriseEapTls:
      Schemas$TerminalConfigurationConfigurationResourceEnterpriseTlsWifi.out.optional(),
    personalPsk:
      Schemas$TerminalConfigurationConfigurationResourcePersonalPskWifi.out.optional(),
    type: z.enum(["enterprise_eap_peap", "enterprise_eap_tls", "personal_psk"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enterpriseEapPeap: "enterprise_eap_peap",
      enterpriseEapTls: "enterprise_eap_tls",
      personalPsk: "personal_psk",
      type: "type",
    });
  });

export const Schemas$TerminalConfigurationConfigurationResourceWifiConfig = {
  in: SchemaIn$TerminalConfigurationConfigurationResourceWifiConfig,
  out: SchemaOut$TerminalConfigurationConfigurationResourceWifiConfig,
};
