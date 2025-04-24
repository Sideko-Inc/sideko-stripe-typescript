import {
  External$TerminalLocationCreateBodyAddress,
  Schemas$TerminalLocationCreateBodyAddress,
  TerminalLocationCreateBodyAddress,
} from "./terminal-location-create-body-address";
import {
  External$TerminalLocationCreateBodyMetadataObj0,
  Schemas$TerminalLocationCreateBodyMetadataObj0,
  TerminalLocationCreateBodyMetadataObj0,
} from "./terminal-location-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalLocationCreateBody
 */
export type TerminalLocationCreateBody = {
  /**
   * The full address of the location.
   */
  address: TerminalLocationCreateBodyAddress;
  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configurationOverrides?: string | undefined;
  /**
   * A name for the location. Maximum length is 1000 characters.
   */
  displayName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TerminalLocationCreateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | TerminalLocationCreateBodyAddress
    | (string | undefined)
    | string
    | (string[] | undefined)
    | ((TerminalLocationCreateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalLocationCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalLocationCreateBody = {
  address: External$TerminalLocationCreateBodyAddress;
  configuration_overrides?: string | undefined;
  display_name: string;
  expand?: string[] | undefined;
  metadata?:
    | (External$TerminalLocationCreateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | External$TerminalLocationCreateBodyAddress
    | (string | undefined)
    | string
    | (string[] | undefined)
    | ((External$TerminalLocationCreateBodyMetadataObj0 | string) | undefined)
    | External$TerminalLocationCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalLocationCreateBody
 */
const SchemaIn$TerminalLocationCreateBody: z.ZodType<
  TerminalLocationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TerminalLocationCreateBodyAddress.in,
    configuration_overrides: z.string().optional(),
    display_name: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationCreateBodyMetadataObj0.in, z.string()])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalLocationCreateBody
 */
const SchemaOut$TerminalLocationCreateBody: z.ZodType<
  External$TerminalLocationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalLocationCreateBody // the object to be transformed
> = z
  .object({
    address: Schemas$TerminalLocationCreateBodyAddress.out,
    configurationOverrides: z.string().optional(),
    displayName: z.string(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TerminalLocationCreateBodyMetadataObj0.out, z.string()])
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

export const Schemas$TerminalLocationCreateBody = {
  in: SchemaIn$TerminalLocationCreateBody,
  out: SchemaOut$TerminalLocationCreateBody,
};
