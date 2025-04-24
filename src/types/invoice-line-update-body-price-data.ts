import {
  External$InvoiceLineUpdateBodyPriceDataProductData,
  InvoiceLineUpdateBodyPriceDataProductData,
  Schemas$InvoiceLineUpdateBodyPriceDataProductData,
} from "./invoice-line-update-body-price-data-product-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
 */
export type InvoiceLineUpdateBodyPriceData = {
  currency: string;
  product?: string | undefined;
  productData?: InvoiceLineUpdateBodyPriceDataProductData | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateBodyPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateBodyPriceData = {
  currency: string;
  product?: string | undefined;
  product_data?: External$InvoiceLineUpdateBodyPriceDataProductData | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateBodyPriceData
 */
const SchemaIn$InvoiceLineUpdateBodyPriceData: z.ZodType<
  InvoiceLineUpdateBodyPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    product_data:
      Schemas$InvoiceLineUpdateBodyPriceDataProductData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateBodyPriceData
 */
const SchemaOut$InvoiceLineUpdateBodyPriceData: z.ZodType<
  External$InvoiceLineUpdateBodyPriceData, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateBodyPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string().optional(),
    productData:
      Schemas$InvoiceLineUpdateBodyPriceDataProductData.out.optional(),
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

export const Schemas$InvoiceLineUpdateBodyPriceData = {
  in: SchemaIn$InvoiceLineUpdateBodyPriceData,
  out: SchemaOut$InvoiceLineUpdateBodyPriceData,
};
