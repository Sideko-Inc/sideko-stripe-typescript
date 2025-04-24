import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingAuthorizationUpdateBodyMetadataObj0
 */
export type IssuingAuthorizationUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$IssuingAuthorizationUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationUpdateBodyMetadataObj0
 */
const SchemaIn$IssuingAuthorizationUpdateBodyMetadataObj0: z.ZodType<
  IssuingAuthorizationUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationUpdateBodyMetadataObj0
 */
const SchemaOut$IssuingAuthorizationUpdateBodyMetadataObj0: z.ZodType<
  External$IssuingAuthorizationUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$IssuingAuthorizationUpdateBodyMetadataObj0 = {
  in: SchemaIn$IssuingAuthorizationUpdateBodyMetadataObj0,
  out: SchemaOut$IssuingAuthorizationUpdateBodyMetadataObj0,
};
