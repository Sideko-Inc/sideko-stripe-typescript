import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TopupsCreateBodyMetadataObj0
 */
export type TopupsCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TopupsCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TopupsCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TopupsCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TopupsCreateBodyMetadataObj0
 */
const SchemaIn$TopupsCreateBodyMetadataObj0: z.ZodType<
  TopupsCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TopupsCreateBodyMetadataObj0
 */
const SchemaOut$TopupsCreateBodyMetadataObj0: z.ZodType<
  External$TopupsCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TopupsCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TopupsCreateBodyMetadataObj0 = {
  in: SchemaIn$TopupsCreateBodyMetadataObj0,
  out: SchemaOut$TopupsCreateBodyMetadataObj0,
};
