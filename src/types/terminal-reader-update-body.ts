import {
  External$TerminalReaderUpdateBodyMetadataObj0,
  Schemas$TerminalReaderUpdateBodyMetadataObj0,
  TerminalReaderUpdateBodyMetadataObj0,
} from "./terminal-reader-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderUpdateBody
 */
export type TerminalReaderUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The new label of the reader.
   */
  label?: (string | string) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TerminalReaderUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((string | string) | undefined)
    | ((TerminalReaderUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalReaderUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderUpdateBody = {
  expand?: string[] | undefined;
  label?: (string | string) | undefined;
  metadata?:
    | (External$TerminalReaderUpdateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | ((string | string) | undefined)
    | ((External$TerminalReaderUpdateBodyMetadataObj0 | string) | undefined)
    | External$TerminalReaderUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderUpdateBody
 */
const SchemaIn$TerminalReaderUpdateBody: z.ZodType<
  TerminalReaderUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    label: z.union([z.string(), z.string()]).optional(),
    metadata: z
      .union([Schemas$TerminalReaderUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      label: "label",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderUpdateBody
 */
const SchemaOut$TerminalReaderUpdateBody: z.ZodType<
  External$TerminalReaderUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    label: z.union([z.string(), z.string()]).optional(),
    metadata: z
      .union([Schemas$TerminalReaderUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      label: "label",
      metadata: "metadata",
    });
  });

export const Schemas$TerminalReaderUpdateBody = {
  in: SchemaIn$TerminalReaderUpdateBody,
  out: SchemaOut$TerminalReaderUpdateBody,
};
