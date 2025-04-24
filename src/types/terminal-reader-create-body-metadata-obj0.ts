import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderCreateBodyMetadataObj0
 */
export type TerminalReaderCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TerminalReaderCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TerminalReaderCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderCreateBodyMetadataObj0
 */
const SchemaIn$TerminalReaderCreateBodyMetadataObj0: z.ZodType<
  TerminalReaderCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderCreateBodyMetadataObj0
 */
const SchemaOut$TerminalReaderCreateBodyMetadataObj0: z.ZodType<
  External$TerminalReaderCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TerminalReaderCreateBodyMetadataObj0 = {
  in: SchemaIn$TerminalReaderCreateBodyMetadataObj0,
  out: SchemaOut$TerminalReaderCreateBodyMetadataObj0,
};
