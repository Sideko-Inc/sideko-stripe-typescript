import {
  External$InvoiceLineUpdateBodyPriceDataProductDataMetadata,
  InvoiceLineUpdateBodyPriceDataProductDataMetadata,
  Schemas$InvoiceLineUpdateBodyPriceDataProductDataMetadata,
} from "./invoice-line-update-body-price-data-product-data-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateBodyPriceDataProductData
 */
export type InvoiceLineUpdateBodyPriceDataProductData = {
  description?: string | undefined;
  images?: string[] | undefined;
  metadata?: InvoiceLineUpdateBodyPriceDataProductDataMetadata | undefined;
  name: string;
  taxCode?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateBodyPriceDataProductData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateBodyPriceDataProductData = {
  description?: string | undefined;
  images?: string[] | undefined;
  metadata?:
    | External$InvoiceLineUpdateBodyPriceDataProductDataMetadata
    | undefined;
  name: string;
  tax_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateBodyPriceDataProductData
 */
const SchemaIn$InvoiceLineUpdateBodyPriceDataProductData: z.ZodType<
  InvoiceLineUpdateBodyPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$InvoiceLineUpdateBodyPriceDataProductDataMetadata.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateBodyPriceDataProductData
 */
const SchemaOut$InvoiceLineUpdateBodyPriceDataProductData: z.ZodType<
  External$InvoiceLineUpdateBodyPriceDataProductData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateBodyPriceDataProductData // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
    metadata:
      Schemas$InvoiceLineUpdateBodyPriceDataProductDataMetadata.out.optional(),
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

export const Schemas$InvoiceLineUpdateBodyPriceDataProductData = {
  in: SchemaIn$InvoiceLineUpdateBodyPriceDataProductData,
  out: SchemaOut$InvoiceLineUpdateBodyPriceDataProductData,
};
