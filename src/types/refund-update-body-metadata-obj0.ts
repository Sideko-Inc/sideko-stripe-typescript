import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RefundUpdateBodyMetadataObj0
 */
export type RefundUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * RefundUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$RefundUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundUpdateBodyMetadataObj0
 */
const SchemaIn$RefundUpdateBodyMetadataObj0: z.ZodType<
  RefundUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundUpdateBodyMetadataObj0
 */
const SchemaOut$RefundUpdateBodyMetadataObj0: z.ZodType<
  External$RefundUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  RefundUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$RefundUpdateBodyMetadataObj0 = {
  in: SchemaIn$RefundUpdateBodyMetadataObj0,
  out: SchemaOut$RefundUpdateBodyMetadataObj0,
};
