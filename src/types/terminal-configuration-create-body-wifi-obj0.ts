import {
  External$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap,
  Schemas$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap,
  TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap,
} from "./terminal-configuration-create-body-wifi-obj0-enterprise-eap-peap";
import {
  External$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapTls,
  Schemas$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapTls,
  TerminalConfigurationCreateBodyWifiObj0EnterpriseEapTls,
} from "./terminal-configuration-create-body-wifi-obj0-enterprise-eap-tls";
import {
  External$TerminalConfigurationCreateBodyWifiObj0PersonalPsk,
  Schemas$TerminalConfigurationCreateBodyWifiObj0PersonalPsk,
  TerminalConfigurationCreateBodyWifiObj0PersonalPsk,
} from "./terminal-configuration-create-body-wifi-obj0-personal-psk";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyWifiObj0
 */
export type TerminalConfigurationCreateBodyWifiObj0 = {
  enterpriseEapPeap?:
    | TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap
    | undefined;
  enterpriseEapTls?:
    | TerminalConfigurationCreateBodyWifiObj0EnterpriseEapTls
    | undefined;
  personalPsk?: TerminalConfigurationCreateBodyWifiObj0PersonalPsk | undefined;
  type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
};

/**
 * @internal
 * TerminalConfigurationCreateBodyWifiObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyWifiObj0 = {
  enterprise_eap_peap?:
    | External$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap
    | undefined;
  enterprise_eap_tls?:
    | External$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapTls
    | undefined;
  personal_psk?:
    | External$TerminalConfigurationCreateBodyWifiObj0PersonalPsk
    | undefined;
  type: "enterprise_eap_peap" | "enterprise_eap_tls" | "personal_psk";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyWifiObj0
 */
const SchemaIn$TerminalConfigurationCreateBodyWifiObj0: z.ZodType<
  TerminalConfigurationCreateBodyWifiObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enterprise_eap_peap:
      Schemas$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap.in.optional(),
    enterprise_eap_tls:
      Schemas$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapTls.in.optional(),
    personal_psk:
      Schemas$TerminalConfigurationCreateBodyWifiObj0PersonalPsk.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyWifiObj0
 */
const SchemaOut$TerminalConfigurationCreateBodyWifiObj0: z.ZodType<
  External$TerminalConfigurationCreateBodyWifiObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyWifiObj0 // the object to be transformed
> = z
  .object({
    enterpriseEapPeap:
      Schemas$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapPeap.out.optional(),
    enterpriseEapTls:
      Schemas$TerminalConfigurationCreateBodyWifiObj0EnterpriseEapTls.out.optional(),
    personalPsk:
      Schemas$TerminalConfigurationCreateBodyWifiObj0PersonalPsk.out.optional(),
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

export const Schemas$TerminalConfigurationCreateBodyWifiObj0 = {
  in: SchemaIn$TerminalConfigurationCreateBodyWifiObj0,
  out: SchemaOut$TerminalConfigurationCreateBodyWifiObj0,
};
