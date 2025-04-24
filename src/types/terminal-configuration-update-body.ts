import {
  External$TerminalConfigurationUpdateBodyBbposWiseposEObj0,
  Schemas$TerminalConfigurationUpdateBodyBbposWiseposEObj0,
  TerminalConfigurationUpdateBodyBbposWiseposEObj0,
} from "./terminal-configuration-update-body-bbpos-wisepos-e-obj0";
import {
  External$TerminalConfigurationUpdateBodyOfflineObj0,
  Schemas$TerminalConfigurationUpdateBodyOfflineObj0,
  TerminalConfigurationUpdateBodyOfflineObj0,
} from "./terminal-configuration-update-body-offline-obj0";
import {
  External$TerminalConfigurationUpdateBodyRebootWindowObj0,
  Schemas$TerminalConfigurationUpdateBodyRebootWindowObj0,
  TerminalConfigurationUpdateBodyRebootWindowObj0,
} from "./terminal-configuration-update-body-reboot-window-obj0";
import {
  External$TerminalConfigurationUpdateBodyStripeS700Obj0,
  Schemas$TerminalConfigurationUpdateBodyStripeS700Obj0,
  TerminalConfigurationUpdateBodyStripeS700Obj0,
} from "./terminal-configuration-update-body-stripe-s700-obj0";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0,
  TerminalConfigurationUpdateBodyTippingObj0,
} from "./terminal-configuration-update-body-tipping-obj0";
import {
  External$TerminalConfigurationUpdateBodyVerifoneP400Obj0,
  Schemas$TerminalConfigurationUpdateBodyVerifoneP400Obj0,
  TerminalConfigurationUpdateBodyVerifoneP400Obj0,
} from "./terminal-configuration-update-body-verifone-p400-obj0";
import {
  External$TerminalConfigurationUpdateBodyWifiObj0,
  Schemas$TerminalConfigurationUpdateBodyWifiObj0,
  TerminalConfigurationUpdateBodyWifiObj0,
} from "./terminal-configuration-update-body-wifi-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBody
 */
export type TerminalConfigurationUpdateBody = {
  /**
   * An object containing device type specific settings for BBPOS WisePOS E readers
   */
  bbposWiseposE?:
    | (TerminalConfigurationUpdateBodyBbposWiseposEObj0 | string)
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Name of the configuration
   */
  name?: string | undefined;
  /**
   * Configurations for collecting transactions offline.
   */
  offline?: (TerminalConfigurationUpdateBodyOfflineObj0 | string) | undefined;
  /**
   * Reboot time settings for readers that support customized reboot time configuration.
   */
  rebootWindow?:
    | (TerminalConfigurationUpdateBodyRebootWindowObj0 | string)
    | undefined;
  /**
   * An object containing device type specific settings for Stripe S700 readers
   */
  stripeS700?:
    | (TerminalConfigurationUpdateBodyStripeS700Obj0 | string)
    | undefined;
  /**
   * Tipping configurations for readers supporting on-reader tips
   */
  tipping?: (TerminalConfigurationUpdateBodyTippingObj0 | string) | undefined;
  /**
   * An object containing device type specific settings for Verifone P400 readers
   */
  verifoneP400?:
    | (TerminalConfigurationUpdateBodyVerifoneP400Obj0 | string)
    | undefined;
  /**
   * Configurations for connecting to a WiFi network.
   */
  wifi?: (TerminalConfigurationUpdateBodyWifiObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((TerminalConfigurationUpdateBodyBbposWiseposEObj0 | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((TerminalConfigurationUpdateBodyOfflineObj0 | string) | undefined)
    | ((TerminalConfigurationUpdateBodyRebootWindowObj0 | string) | undefined)
    | ((TerminalConfigurationUpdateBodyStripeS700Obj0 | string) | undefined)
    | ((TerminalConfigurationUpdateBodyTippingObj0 | string) | undefined)
    | ((TerminalConfigurationUpdateBodyVerifoneP400Obj0 | string) | undefined)
    | ((TerminalConfigurationUpdateBodyWifiObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalConfigurationUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBody = {
  bbpos_wisepos_e?:
    | (External$TerminalConfigurationUpdateBodyBbposWiseposEObj0 | string)
    | undefined;
  expand?: string[] | undefined;
  name?: string | undefined;
  offline?:
    | (External$TerminalConfigurationUpdateBodyOfflineObj0 | string)
    | undefined;
  reboot_window?:
    | (External$TerminalConfigurationUpdateBodyRebootWindowObj0 | string)
    | undefined;
  stripe_s700?:
    | (External$TerminalConfigurationUpdateBodyStripeS700Obj0 | string)
    | undefined;
  tipping?:
    | (External$TerminalConfigurationUpdateBodyTippingObj0 | string)
    | undefined;
  verifone_p400?:
    | (External$TerminalConfigurationUpdateBodyVerifoneP400Obj0 | string)
    | undefined;
  wifi?:
    | (External$TerminalConfigurationUpdateBodyWifiObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (
        | (External$TerminalConfigurationUpdateBodyBbposWiseposEObj0 | string)
        | undefined
      )
    | (string[] | undefined)
    | (string | undefined)
    | (
        | (External$TerminalConfigurationUpdateBodyOfflineObj0 | string)
        | undefined
      )
    | (
        | (External$TerminalConfigurationUpdateBodyRebootWindowObj0 | string)
        | undefined
      )
    | (
        | (External$TerminalConfigurationUpdateBodyStripeS700Obj0 | string)
        | undefined
      )
    | (
        | (External$TerminalConfigurationUpdateBodyTippingObj0 | string)
        | undefined
      )
    | (
        | (External$TerminalConfigurationUpdateBodyVerifoneP400Obj0 | string)
        | undefined
      )
    | ((External$TerminalConfigurationUpdateBodyWifiObj0 | string) | undefined)
    | External$TerminalConfigurationUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBody
 */
const SchemaIn$TerminalConfigurationUpdateBody: z.ZodType<
  TerminalConfigurationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bbpos_wisepos_e: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyBbposWiseposEObj0.in,
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyOfflineObj0.in,
        z.string(),
      ])
      .optional(),
    reboot_window: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyRebootWindowObj0.in,
        z.string(),
      ])
      .optional(),
    stripe_s700: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyStripeS700Obj0.in,
        z.string(),
      ])
      .optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyTippingObj0.in,
        z.string(),
      ])
      .optional(),
    verifone_p400: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyVerifoneP400Obj0.in,
        z.string(),
      ])
      .optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationUpdateBodyWifiObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      bbpos_wisepos_e: "bbposWiseposE",
      expand: "expand",
      name: "name",
      offline: "offline",
      reboot_window: "rebootWindow",
      stripe_s700: "stripeS700",
      tipping: "tipping",
      verifone_p400: "verifoneP400",
      wifi: "wifi",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBody
 */
const SchemaOut$TerminalConfigurationUpdateBody: z.ZodType<
  External$TerminalConfigurationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBody // the object to be transformed
> = z
  .object({
    bbposWiseposE: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyBbposWiseposEObj0.out,
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyOfflineObj0.out,
        z.string(),
      ])
      .optional(),
    rebootWindow: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyRebootWindowObj0.out,
        z.string(),
      ])
      .optional(),
    stripeS700: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyStripeS700Obj0.out,
        z.string(),
      ])
      .optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyTippingObj0.out,
        z.string(),
      ])
      .optional(),
    verifoneP400: z
      .union([
        Schemas$TerminalConfigurationUpdateBodyVerifoneP400Obj0.out,
        z.string(),
      ])
      .optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationUpdateBodyWifiObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      bbposWiseposE: "bbpos_wisepos_e",
      expand: "expand",
      name: "name",
      offline: "offline",
      rebootWindow: "reboot_window",
      stripeS700: "stripe_s700",
      tipping: "tipping",
      verifoneP400: "verifone_p400",
      wifi: "wifi",
    });
  });

export const Schemas$TerminalConfigurationUpdateBody = {
  in: SchemaIn$TerminalConfigurationUpdateBody,
  out: SchemaOut$TerminalConfigurationUpdateBody,
};
