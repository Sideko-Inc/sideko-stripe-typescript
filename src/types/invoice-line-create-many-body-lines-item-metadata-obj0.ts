import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemMetadataObj0
 */
export type InvoiceLineCreateManyBodyLinesItemMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceLineCreateManyBodyLinesItemMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemMetadataObj0
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemMetadataObj0: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemMetadataObj0
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemMetadataObj0: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItemMetadataObj0 = {
  in: SchemaIn$InvoiceLineCreateManyBodyLinesItemMetadataObj0,
  out: SchemaOut$InvoiceLineCreateManyBodyLinesItemMetadataObj0,
};
