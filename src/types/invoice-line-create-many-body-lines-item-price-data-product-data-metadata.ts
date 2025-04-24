import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata
 */
export type InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata =
  {
    [additionalProperty: string]:
      | External$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata =
  {
    in: SchemaIn$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata,
    out: SchemaOut$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata,
  };
