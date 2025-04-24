import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type RefundMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * RefundMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundMetadata = {
  [additionalProperty: string]:
    | (External$RefundMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundMetadata
 */
const SchemaIn$RefundMetadata: z.ZodType<
  RefundMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundMetadata
 */
const SchemaOut$RefundMetadata: z.ZodType<
  External$RefundMetadata, // output type of this zod object
  z.ZodTypeDef,
  RefundMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$RefundMetadata = {
  in: SchemaIn$RefundMetadata,
  out: SchemaOut$RefundMetadata,
};
