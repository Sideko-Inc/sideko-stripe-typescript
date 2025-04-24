import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalLocationCreateBodyMetadataObj0
 */
export type TerminalLocationCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TerminalLocationCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalLocationCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TerminalLocationCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalLocationCreateBodyMetadataObj0
 */
const SchemaIn$TerminalLocationCreateBodyMetadataObj0: z.ZodType<
  TerminalLocationCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalLocationCreateBodyMetadataObj0
 */
const SchemaOut$TerminalLocationCreateBodyMetadataObj0: z.ZodType<
  External$TerminalLocationCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalLocationCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TerminalLocationCreateBodyMetadataObj0 = {
  in: SchemaIn$TerminalLocationCreateBodyMetadataObj0,
  out: SchemaOut$TerminalLocationCreateBodyMetadataObj0,
};
