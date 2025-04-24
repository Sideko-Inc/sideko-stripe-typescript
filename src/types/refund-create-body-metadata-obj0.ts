import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RefundCreateBodyMetadataObj0
 */
export type RefundCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * RefundCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$RefundCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundCreateBodyMetadataObj0
 */
const SchemaIn$RefundCreateBodyMetadataObj0: z.ZodType<
  RefundCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundCreateBodyMetadataObj0
 */
const SchemaOut$RefundCreateBodyMetadataObj0: z.ZodType<
  External$RefundCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  RefundCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$RefundCreateBodyMetadataObj0 = {
  in: SchemaIn$RefundCreateBodyMetadataObj0,
  out: SchemaOut$RefundCreateBodyMetadataObj0,
};
