import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalLocationUpdateBodyMetadataObj0
 */
export type TerminalLocationUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TerminalLocationUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalLocationUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TerminalLocationUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalLocationUpdateBodyMetadataObj0
 */
const SchemaIn$TerminalLocationUpdateBodyMetadataObj0: z.ZodType<
  TerminalLocationUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalLocationUpdateBodyMetadataObj0
 */
const SchemaOut$TerminalLocationUpdateBodyMetadataObj0: z.ZodType<
  External$TerminalLocationUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalLocationUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TerminalLocationUpdateBodyMetadataObj0 = {
  in: SchemaIn$TerminalLocationUpdateBodyMetadataObj0,
  out: SchemaOut$TerminalLocationUpdateBodyMetadataObj0,
};
