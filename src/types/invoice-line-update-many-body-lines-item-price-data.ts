import {
  External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData,
  InvoiceLineUpdateManyBodyLinesItemPriceDataProductData,
  Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData,
} from "./invoice-line-update-many-body-lines-item-price-data-product-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItemPriceData
 */
export type InvoiceLineUpdateManyBodyLinesItemPriceData = {
  currency: string;
  product?: string | undefined;
  productData?:
    | InvoiceLineUpdateManyBodyLinesItemPriceDataProductData
    | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItemPriceData = {
  currency: string;
  product?: string | undefined;
  product_data?:
    | External$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItemPriceData
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItemPriceData: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    product_data:
      Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItemPriceData
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItemPriceData: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    productData:
      Schemas$InvoiceLineUpdateManyBodyLinesItemPriceDataProductData.out.optional(),
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

export const Schemas$InvoiceLineUpdateManyBodyLinesItemPriceData = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItemPriceData,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItemPriceData,
};
