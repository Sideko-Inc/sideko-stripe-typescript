import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingAuthorizationApproveBodyMetadataObj0
 */
export type IssuingAuthorizationApproveBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationApproveBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationApproveBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$IssuingAuthorizationApproveBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationApproveBodyMetadataObj0
 */
const SchemaIn$IssuingAuthorizationApproveBodyMetadataObj0: z.ZodType<
  IssuingAuthorizationApproveBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationApproveBodyMetadataObj0
 */
const SchemaOut$IssuingAuthorizationApproveBodyMetadataObj0: z.ZodType<
  External$IssuingAuthorizationApproveBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationApproveBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$IssuingAuthorizationApproveBodyMetadataObj0 = {
  in: SchemaIn$IssuingAuthorizationApproveBodyMetadataObj0,
  out: SchemaOut$IssuingAuthorizationApproveBodyMetadataObj0,
};
