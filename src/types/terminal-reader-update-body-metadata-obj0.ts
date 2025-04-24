import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderUpdateBodyMetadataObj0
 */
export type TerminalReaderUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TerminalReaderUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TerminalReaderUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderUpdateBodyMetadataObj0
 */
const SchemaIn$TerminalReaderUpdateBodyMetadataObj0: z.ZodType<
  TerminalReaderUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderUpdateBodyMetadataObj0
 */
const SchemaOut$TerminalReaderUpdateBodyMetadataObj0: z.ZodType<
  External$TerminalReaderUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TerminalReaderUpdateBodyMetadataObj0 = {
  in: SchemaIn$TerminalReaderUpdateBodyMetadataObj0,
  out: SchemaOut$TerminalReaderUpdateBodyMetadataObj0,
};
