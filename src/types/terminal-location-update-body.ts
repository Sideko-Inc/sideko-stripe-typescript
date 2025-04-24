import {
  External$TerminalLocationUpdateBodyAddress,
  Schemas$TerminalLocationUpdateBodyAddress,
  TerminalLocationUpdateBodyAddress,
} from "./terminal-location-update-body-address";
import {
  External$TerminalLocationUpdateBodyMetadataObj0,
  Schemas$TerminalLocationUpdateBodyMetadataObj0,
  TerminalLocationUpdateBodyMetadataObj0,
} from "./terminal-location-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalLocationUpdateBody
 */
export type TerminalLocationUpdateBody = {
  /**
   * The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.
   */
  address?: TerminalLocationUpdateBodyAddress | undefined;
  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configurationOverrides?: (string | string) | undefined;
  /**
   * A name for the location.
   */
  displayName?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TerminalLocationUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (TerminalLocationUpdateBodyAddress | undefined)
    | ((string | string) | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((TerminalLocationUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalLocationUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalLocationUpdateBody = {
  address?: External$TerminalLocationUpdateBodyAddress | undefined;
  configuration_overrides?: (string | string) | undefined;
  display_name?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$TerminalLocationUpdateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (External$TerminalLocationUpdateBodyAddress | undefined)
    | ((string | string) | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((External$TerminalLocationUpdateBodyMetadataObj0 | string) | undefined)
    | External$TerminalLocationUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalLocationUpdateBody
 */
const SchemaIn$TerminalLocationUpdateBody: z.ZodType<
  TerminalLocationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TerminalLocationUpdateBodyAddress.in.optional(),
    configuration_overrides: z.union([z.string(), z.string()]).optional(),
    display_name: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configuration_overrides: "configurationOverrides",
      display_name: "displayName",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalLocationUpdateBody
 */
const SchemaOut$TerminalLocationUpdateBody: z.ZodType<
  External$TerminalLocationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalLocationUpdateBody // the object to be transformed
> = z
  .object({
    address: Schemas$TerminalLocationUpdateBodyAddress.out.optional(),
    configurationOverrides: z.union([z.string(), z.string()]).optional(),
    displayName: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      configurationOverrides: "configuration_overrides",
      displayName: "display_name",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$TerminalLocationUpdateBody = {
  in: SchemaIn$TerminalLocationUpdateBody,
  out: SchemaOut$TerminalLocationUpdateBody,
};
