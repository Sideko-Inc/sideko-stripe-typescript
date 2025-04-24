import {
  External$TerminalConfigurationCreateBodyBbposWiseposE,
  Schemas$TerminalConfigurationCreateBodyBbposWiseposE,
  TerminalConfigurationCreateBodyBbposWiseposE,
} from "./terminal-configuration-create-body-bbpos-wisepos-e";
import {
  External$TerminalConfigurationCreateBodyOfflineObj0,
  Schemas$TerminalConfigurationCreateBodyOfflineObj0,
  TerminalConfigurationCreateBodyOfflineObj0,
} from "./terminal-configuration-create-body-offline-obj0";
import {
  External$TerminalConfigurationCreateBodyRebootWindow,
  Schemas$TerminalConfigurationCreateBodyRebootWindow,
  TerminalConfigurationCreateBodyRebootWindow,
} from "./terminal-configuration-create-body-reboot-window";
import {
  External$TerminalConfigurationCreateBodyStripeS700,
  Schemas$TerminalConfigurationCreateBodyStripeS700,
  TerminalConfigurationCreateBodyStripeS700,
} from "./terminal-configuration-create-body-stripe-s700";
import {
  External$TerminalConfigurationCreateBodyTippingObj0,
  Schemas$TerminalConfigurationCreateBodyTippingObj0,
  TerminalConfigurationCreateBodyTippingObj0,
} from "./terminal-configuration-create-body-tipping-obj0";
import {
  External$TerminalConfigurationCreateBodyVerifoneP400,
  Schemas$TerminalConfigurationCreateBodyVerifoneP400,
  TerminalConfigurationCreateBodyVerifoneP400,
} from "./terminal-configuration-create-body-verifone-p400";
import {
  External$TerminalConfigurationCreateBodyWifiObj0,
  Schemas$TerminalConfigurationCreateBodyWifiObj0,
  TerminalConfigurationCreateBodyWifiObj0,
} from "./terminal-configuration-create-body-wifi-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBody
 */
export type TerminalConfigurationCreateBody = {
  /**
   * An object containing device type specific settings for BBPOS WisePOS E readers
   */
  bbposWiseposE?: TerminalConfigurationCreateBodyBbposWiseposE | undefined;
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
  offline?: (TerminalConfigurationCreateBodyOfflineObj0 | string) | undefined;
  /**
   * Reboot time settings for readers that support customized reboot time configuration.
   */
  rebootWindow?: TerminalConfigurationCreateBodyRebootWindow | undefined;
  /**
   * An object containing device type specific settings for Stripe S700 readers
   */
  stripeS700?: TerminalConfigurationCreateBodyStripeS700 | undefined;
  /**
   * Tipping configurations for readers supporting on-reader tips
   */
  tipping?: (TerminalConfigurationCreateBodyTippingObj0 | string) | undefined;
  /**
   * An object containing device type specific settings for Verifone P400 readers
   */
  verifoneP400?: TerminalConfigurationCreateBodyVerifoneP400 | undefined;
  /**
   * Configurations for connecting to a WiFi network.
   */
  wifi?: (TerminalConfigurationCreateBodyWifiObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (TerminalConfigurationCreateBodyBbposWiseposE | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((TerminalConfigurationCreateBodyOfflineObj0 | string) | undefined)
    | (TerminalConfigurationCreateBodyRebootWindow | undefined)
    | (TerminalConfigurationCreateBodyStripeS700 | undefined)
    | ((TerminalConfigurationCreateBodyTippingObj0 | string) | undefined)
    | (TerminalConfigurationCreateBodyVerifoneP400 | undefined)
    | ((TerminalConfigurationCreateBodyWifiObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBody = {
  bbpos_wisepos_e?:
    | External$TerminalConfigurationCreateBodyBbposWiseposE
    | undefined;
  expand?: string[] | undefined;
  name?: string | undefined;
  offline?:
    | (External$TerminalConfigurationCreateBodyOfflineObj0 | string)
    | undefined;
  reboot_window?:
    | External$TerminalConfigurationCreateBodyRebootWindow
    | undefined;
  stripe_s700?: External$TerminalConfigurationCreateBodyStripeS700 | undefined;
  tipping?:
    | (External$TerminalConfigurationCreateBodyTippingObj0 | string)
    | undefined;
  verifone_p400?:
    | External$TerminalConfigurationCreateBodyVerifoneP400
    | undefined;
  wifi?:
    | (External$TerminalConfigurationCreateBodyWifiObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (External$TerminalConfigurationCreateBodyBbposWiseposE | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (
        | (External$TerminalConfigurationCreateBodyOfflineObj0 | string)
        | undefined
      )
    | (External$TerminalConfigurationCreateBodyRebootWindow | undefined)
    | (External$TerminalConfigurationCreateBodyStripeS700 | undefined)
    | (
        | (External$TerminalConfigurationCreateBodyTippingObj0 | string)
        | undefined
      )
    | (External$TerminalConfigurationCreateBodyVerifoneP400 | undefined)
    | ((External$TerminalConfigurationCreateBodyWifiObj0 | string) | undefined)
    | External$TerminalConfigurationCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBody
 */
const SchemaIn$TerminalConfigurationCreateBody: z.ZodType<
  TerminalConfigurationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bbpos_wisepos_e:
      Schemas$TerminalConfigurationCreateBodyBbposWiseposE.in.optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationCreateBodyOfflineObj0.in,
        z.string(),
      ])
      .optional(),
    reboot_window:
      Schemas$TerminalConfigurationCreateBodyRebootWindow.in.optional(),
    stripe_s700:
      Schemas$TerminalConfigurationCreateBodyStripeS700.in.optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationCreateBodyTippingObj0.in,
        z.string(),
      ])
      .optional(),
    verifone_p400:
      Schemas$TerminalConfigurationCreateBodyVerifoneP400.in.optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationCreateBodyWifiObj0.in, z.string()])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBody
 */
const SchemaOut$TerminalConfigurationCreateBody: z.ZodType<
  External$TerminalConfigurationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBody // the object to be transformed
> = z
  .object({
    bbposWiseposE:
      Schemas$TerminalConfigurationCreateBodyBbposWiseposE.out.optional(),
    expand: z.array(z.string()).optional(),
    name: z.string().optional(),
    offline: z
      .union([
        Schemas$TerminalConfigurationCreateBodyOfflineObj0.out,
        z.string(),
      ])
      .optional(),
    rebootWindow:
      Schemas$TerminalConfigurationCreateBodyRebootWindow.out.optional(),
    stripeS700:
      Schemas$TerminalConfigurationCreateBodyStripeS700.out.optional(),
    tipping: z
      .union([
        Schemas$TerminalConfigurationCreateBodyTippingObj0.out,
        z.string(),
      ])
      .optional(),
    verifoneP400:
      Schemas$TerminalConfigurationCreateBodyVerifoneP400.out.optional(),
    wifi: z
      .union([Schemas$TerminalConfigurationCreateBodyWifiObj0.out, z.string()])
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

export const Schemas$TerminalConfigurationCreateBody = {
  in: SchemaIn$TerminalConfigurationCreateBody,
  out: SchemaOut$TerminalConfigurationCreateBody,
};
