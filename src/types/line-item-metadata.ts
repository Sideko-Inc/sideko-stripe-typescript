import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription`, `metadata` reflects the current metadata from the subscription associated with the line item, unless the invoice line was directly updated with different metadata after creation.
 */
export type LineItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * LineItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LineItemMetadata = {
  [additionalProperty: string]: External$LineItemMetadata | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LineItemMetadata
 */
const SchemaIn$LineItemMetadata: z.ZodType<
  LineItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LineItemMetadata
 */
const SchemaOut$LineItemMetadata: z.ZodType<
  External$LineItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  LineItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$LineItemMetadata = {
  in: SchemaIn$LineItemMetadata,
  out: SchemaOut$LineItemMetadata,
};
