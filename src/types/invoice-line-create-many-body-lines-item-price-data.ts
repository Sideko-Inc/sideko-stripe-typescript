import {
  External$InvoiceLineCreateManyBodyLinesItemPriceDataProductData,
  InvoiceLineCreateManyBodyLinesItemPriceDataProductData,
  Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductData,
} from "./invoice-line-create-many-body-lines-item-price-data-product-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItemPriceData
 */
export type InvoiceLineCreateManyBodyLinesItemPriceData = {
  currency: string;
  product?: string | undefined;
  productData?:
    | InvoiceLineCreateManyBodyLinesItemPriceDataProductData
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItemPriceData = {
  currency: string;
  product?: string | undefined;
  product_data?:
    | External$InvoiceLineCreateManyBodyLinesItemPriceDataProductData
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItemPriceData
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItemPriceData: z.ZodType<
  InvoiceLineCreateManyBodyLinesItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    product_data:
      Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductData.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      product_data: "productData",
      tax_behavior: "taxBehavior",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItemPriceData
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItemPriceData: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    productData:
      Schemas$InvoiceLineCreateManyBodyLinesItemPriceDataProductData.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      productData: "product_data",
      taxBehavior: "tax_behavior",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItemPriceData = {
  in: SchemaIn$InvoiceLineCreateManyBodyLinesItemPriceData,
  out: SchemaOut$InvoiceLineCreateManyBodyLinesItemPriceData,
};
