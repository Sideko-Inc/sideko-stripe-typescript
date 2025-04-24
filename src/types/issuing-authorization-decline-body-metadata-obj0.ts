import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingAuthorizationDeclineBodyMetadataObj0
 */
export type IssuingAuthorizationDeclineBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationDeclineBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationDeclineBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$IssuingAuthorizationDeclineBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationDeclineBodyMetadataObj0
 */
const SchemaIn$IssuingAuthorizationDeclineBodyMetadataObj0: z.ZodType<
  IssuingAuthorizationDeclineBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationDeclineBodyMetadataObj0
 */
const SchemaOut$IssuingAuthorizationDeclineBodyMetadataObj0: z.ZodType<
  External$IssuingAuthorizationDeclineBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationDeclineBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$IssuingAuthorizationDeclineBodyMetadataObj0 = {
  in: SchemaIn$IssuingAuthorizationDeclineBodyMetadataObj0,
  out: SchemaOut$IssuingAuthorizationDeclineBodyMetadataObj0,
};
