import {
  External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata,
  InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata,
  Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata,
} from "./invoice-line-update-many-body-lines-item-price-data-product-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemPriceDataProductData
 */
export type InvoiceLineUpdateManyBodyLinesItemPriceDataProductData = {
  description?: string | undefined;
  images?: string[] | undefined;
  metadata?:
    | InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata
    | undefined;
  name: string;
  taxCode?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemPriceDataProductData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData = {
  description?: string | undefined;
  images?: string[] | undefined;
  metadata?:
    | External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata
    | undefined;
  name: string;
  tax_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemPriceDataProductData
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemPriceDataProductData // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductDataMetadata.out.optional(),
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

export const Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData,
};
