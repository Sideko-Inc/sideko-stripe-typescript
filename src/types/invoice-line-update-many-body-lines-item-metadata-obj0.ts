import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemMetadataObj0
 */
export type InvoiceLineUpdateManyBodyLinesItemMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemMetadataObj0 = {
  [additionalProperty: string]:
    | External$InvoiceLineUpdateManyBodyLinesItemMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemMetadataObj0
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemMetadataObj0: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemMetadataObj0
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemMetadataObj0: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineUpdateManyBodyLinesItemMetadataObj0 = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemMetadataObj0,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemMetadataObj0,
};
