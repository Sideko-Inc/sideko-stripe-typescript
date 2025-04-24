import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata
 */
export type InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata =
  {
    [additionalProperty: string]:
      | External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata =
  {
    in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata,
    out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata,
  };
