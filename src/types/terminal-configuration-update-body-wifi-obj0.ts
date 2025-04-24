import {
  External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap,
  Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap,
  TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap,
} from "./terminal-configuration-update-body-wifi-obj0-enterprise-eap-peap";
import {
  External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls,
  Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls,
  TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls,
} from "./terminal-configuration-update-body-wifi-obj0-enterprise-eap-tls";
import {
  External$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk,
  Schemas$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk,
  TerminalConfigurationUpdateBodyWifiObj0PersonalPsk,
} from "./terminal-configuration-update-body-wifi-obj0-personal-psk";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyWifiObj0
 */
export type TerminalConfigurationUpdateBodyWifiObj0 = {
  enterpriseEapPeap?:
    | TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap
    | undefined;
  enterpriseEapTls?:
    | TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls
    | undefined;
  personalPsk?: TerminalConfigurationUpdateBodyWifiObj0PersonalPsk | undefined;
  type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyWifiObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyWifiObj0 = {
  enterprise_eap_peap?:
    | External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap
    | undefined;
  enterprise_eap_tls?:
    | External$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls
    | undefined;
  personal_psk?:
    | External$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk
    | undefined;
  type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyWifiObj0
 */
const SchemaIn$TerminalConfigurationUpdateBodyWifiObj0: z.ZodType<
  TerminalConfigurationUpdateBodyWifiObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enterprise_eap_peap:
      Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap.in.optional(),
    enterprise_eap_tls:
      Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls.in.optional(),
    personal_psk:
      Schemas$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyWifiObj0
 */
const SchemaOut$TerminalConfigurationUpdateBodyWifiObj0: z.ZodType<
  External$TerminalConfigurationUpdateBodyWifiObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyWifiObj0 // the object to be transformed
> = z
  .object({
    enterpriseEapPeap:
      Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapPeap.out.optional(),
    enterpriseEapTls:
      Schemas$TerminalConfigurationUpdateBodyWifiObj0EnterpriseEapTls.out.optional(),
    personalPsk:
      Schemas$TerminalConfigurationUpdateBodyWifiObj0PersonalPsk.out.optional(),
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

export const Schemas$TerminalConfigurationUpdateBodyWifiObj0 = {
  in: SchemaIn$TerminalConfigurationUpdateBodyWifiObj0,
  out: SchemaOut$TerminalConfigurationUpdateBodyWifiObj0,
};
