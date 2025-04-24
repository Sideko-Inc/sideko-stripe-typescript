import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TopupsUpdateBodyMetadataObj0
 */
export type TopupsUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TopupsUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TopupsUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TopupsUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TopupsUpdateBodyMetadataObj0
 */
const SchemaIn$TopupsUpdateBodyMetadataObj0: z.ZodType<
  TopupsUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TopupsUpdateBodyMetadataObj0
 */
const SchemaOut$TopupsUpdateBodyMetadataObj0: z.ZodType<
  External$TopupsUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TopupsUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TopupsUpdateBodyMetadataObj0 = {
  in: SchemaIn$TopupsUpdateBodyMetadataObj0,
  out: SchemaOut$TopupsUpdateBodyMetadataObj0,
};
