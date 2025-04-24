import {
  External$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata,
  InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata,
  Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata,
} from "./invoice-line-create-many-body-lines-item-price-data-product-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemPriceDataProductData
 */
export type InvoiceLineCreateManyBodyLinesItemPriceDataProductData = {
  description?: string | undefined;
  images?: string[] | undefined;
  metadata?:
    | InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata
    | undefined;
  name: string;
  taxCode?: string | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemPriceDataProductData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemPriceDataProductData = {
  description?: string | undefined;
  images?: string[] | undefined;
  metadata?:
    | External$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata
    | undefined;
  name: string;
  tax_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemPriceDataProductData
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemPriceDataProductData: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata.in.optional(),
    name: z.string(),
    tax_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      images: "images",
      metadata: "metadata",
      name: "name",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemPriceDataProductData
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemPriceDataProductData: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemPriceDataProductData // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductDataMetadata.out.optional(),
    name: z.string(),
    taxCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      images: "images",
      metadata: "metadata",
      name: "name",
      taxCode: "tax_code",
    });
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductData = {
  in: SchemaIn$InvoiceLineCreateManyBodyLinesItemPriceDataProductData,
  out: SchemaOut$InvoiceLineCreateManyBodyLinesItemPriceDataProductData,
};
