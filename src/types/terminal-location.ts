import { Address, External$Address, Schemas$Address } from "./address";
import {
  External$TerminalLocationMetadata,
  Schemas$TerminalLocationMetadata,
  TerminalLocationMetadata,
} from "./terminal-location-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Location represents a grouping of readers.
 *
 * Related guide: [Fleet management](https://stripe.com/docs/terminal/fleet/locations)
 */
export type TerminalLocation = {
  address: Address;
  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configurationOverrides?: string | undefined;
  /**
   * The display name of the location.
   */
  displayName: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: TerminalLocationMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "terminal.location";
};

/**
 * @internal
 * TerminalLocation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalLocation = {
  address: External$Address;
  configuration_overrides?: string | undefined;
  display_name: string;
  id: string;
  livemode: boolean;
  metadata: External$TerminalLocationMetadata;
  object: "terminal.location";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalLocation
 */
const SchemaIn$TerminalLocation: z.ZodType<
  TerminalLocation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in,
    configuration_overrides: z.string().optional(),
    display_name: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TerminalLocationMetadata.in,
    object: z.enum(["terminal.location"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configuration_overrides: "configurationOverrides",
      display_name: "displayName",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalLocation
 */
const SchemaOut$TerminalLocation: z.ZodType<
  External$TerminalLocation, // output type of this zod object
  z.ZodTypeDef,
  TerminalLocation // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out,
    configurationOverrides: z.string().optional(),
    displayName: z.string(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$TerminalLocationMetadata.out,
    object: z.enum(["terminal.location"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configurationOverrides: "configuration_overrides",
      displayName: "display_name",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
    });
  });

export const Schemas$TerminalLocation = {
  in: SchemaIn$TerminalLocation,
  out: SchemaOut$TerminalLocation,
};
