import {
  External$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig,
  Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig,
  TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig,
} from "./terminal-configuration-configuration-resource-device-type-specific-config";
import {
  External$TerminalConfigurationConfigurationResourceOfflineConfig,
  Schemas$TerminalConfigurationConfigurationResourceOfflineConfig,
  TerminalConfigurationConfigurationResourceOfflineConfig,
} from "./terminal-configuration-configuration-resource-offline-config";
import {
  External$TerminalConfigurationConfigurationResourceRebootWindow,
  Schemas$TerminalConfigurationConfigurationResourceRebootWindow,
  TerminalConfigurationConfigurationResourceRebootWindow,
} from "./terminal-configuration-configuration-resource-reboot-window";
import {
  External$TerminalConfigurationConfigurationResourceTipping,
  Schemas$TerminalConfigurationConfigurationResourceTipping,
  TerminalConfigurationConfigurationResourceTipping,
} from "./terminal-configuration-configuration-resource-tipping";
import {
  External$TerminalConfigurationConfigurationResourceWifiConfig,
  Schemas$TerminalConfigurationConfigurationResourceWifiConfig,
  TerminalConfigurationConfigurationResourceWifiConfig,
} from "./terminal-configuration-configuration-resource-wifi-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Configurations object represents how features should be configured for terminal readers.
 */
export type TerminalConfiguration = {
  bbposWiseposE?:
    | TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
    | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Whether this Configuration is the default for your account
   */
  isAccountDefault?: boolean | null | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String indicating the name of the Configuration object, set by the user
   */
  name?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "terminal.configuration";
  offline?: TerminalConfigurationConfigurationResourceOfflineConfig | undefined;
  rebootWindow?:
    | TerminalConfigurationConfigurationResourceRebootWindow
    | undefined;
  stripeS700?:
    | TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
    | undefined;
  tipping?: TerminalConfigurationConfigurationResourceTipping | undefined;
  verifoneP400?:
    | TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
    | undefined;
  wifi?: TerminalConfigurationConfigurationResourceWifiConfig | undefined;
};

/**
 * @internal
 * TerminalConfiguration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfiguration = {
  bbpos_wisepos_e?:
    | External$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
    | undefined;
  id: string;
  is_account_default?: boolean | null | undefined;
  livemode: boolean;
  name?: string | null | undefined;
  object: "terminal.configuration";
  offline?:
    | External$TerminalConfigurationConfigurationResourceOfflineConfig
    | undefined;
  reboot_window?:
    | External$TerminalConfigurationConfigurationResourceRebootWindow
    | undefined;
  stripe_s700?:
    | External$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
    | undefined;
  tipping?:
    | External$TerminalConfigurationConfigurationResourceTipping
    | undefined;
  verifone_p400?:
    | External$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
    | undefined;
  wifi?:
    | External$TerminalConfigurationConfigurationResourceWifiConfig
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfiguration
 */
const SchemaIn$TerminalConfiguration: z.ZodType<
  TerminalConfiguration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bbpos_wisepos_e: z.lazy(() =>
      Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig.in.optional(),
    ),
    id: z.string(),
    is_account_default: z.boolean().nullable().optional(),
    livemode: z.boolean(),
    name: z.string().nullable().optional(),
    object: z.enum(["terminal.configuration"]),
    offline:
      Schemas$TerminalConfigurationConfigurationResourceOfflineConfig.in.optional(),
    reboot_window:
      Schemas$TerminalConfigurationConfigurationResourceRebootWindow.in.optional(),
    stripe_s700: z.lazy(() =>
      Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig.in.optional(),
    ),
    tipping:
      Schemas$TerminalConfigurationConfigurationResourceTipping.in.optional(),
    verifone_p400: z.lazy(() =>
      Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig.in.optional(),
    ),
    wifi: Schemas$TerminalConfigurationConfigurationResourceWifiConfig.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bbpos_wisepos_e: "bbposWiseposE",
      id: "id",
      is_account_default: "isAccountDefault",
      livemode: "livemode",
      name: "name",
      object: "object",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfiguration
 */
const SchemaOut$TerminalConfiguration: z.ZodType<
  External$TerminalConfiguration, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfiguration // the object to be transformed
> = z
  .object({
    bbposWiseposE: z.lazy(() =>
      Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig.out.optional(),
    ),
    id: z.string(),
    isAccountDefault: z.boolean().nullable().optional(),
    livemode: z.boolean(),
    name: z.string().nullable().optional(),
    object: z.enum(["terminal.configuration"]),
    offline:
      Schemas$TerminalConfigurationConfigurationResourceOfflineConfig.out.optional(),
    rebootWindow:
      Schemas$TerminalConfigurationConfigurationResourceRebootWindow.out.optional(),
    stripeS700: z.lazy(() =>
      Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig.out.optional(),
    ),
    tipping:
      Schemas$TerminalConfigurationConfigurationResourceTipping.out.optional(),
    verifoneP400: z.lazy(() =>
      Schemas$TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig.out.optional(),
    ),
    wifi: Schemas$TerminalConfigurationConfigurationResourceWifiConfig.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bbposWiseposE: "bbpos_wisepos_e",
      id: "id",
      isAccountDefault: "is_account_default",
      livemode: "livemode",
      name: "name",
      object: "object",
      offline: "offline",
      rebootWindow: "reboot_window",
      stripeS700: "stripe_s700",
      tipping: "tipping",
      verifoneP400: "verifone_p400",
      wifi: "wifi",
    });
  });

export const Schemas$TerminalConfiguration = {
  in: SchemaIn$TerminalConfiguration,
  out: SchemaOut$TerminalConfiguration,
};
