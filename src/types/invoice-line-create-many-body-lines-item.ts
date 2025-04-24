import {
  External$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item,
  InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item,
  Schemas$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item,
} from "./invoice-line-create-many-body-lines-item-discounts-arr0-item";
import {
  External$InvoiceLineCreateManyBodyLinesItemMetadataObj0,
  InvoiceLineCreateManyBodyLinesItemMetadataObj0,
  Schemas$InvoiceLineCreateManyBodyLinesItemMetadataObj0,
} from "./invoice-line-create-many-body-lines-item-metadata-obj0";
import {
  External$InvoiceLineCreateManyBodyLinesItemPeriod,
  InvoiceLineCreateManyBodyLinesItemPeriod,
  Schemas$InvoiceLineCreateManyBodyLinesItemPeriod,
} from "./invoice-line-create-many-body-lines-item-period";
import {
  External$InvoiceLineCreateManyBodyLinesItemPriceData,
  InvoiceLineCreateManyBodyLinesItemPriceData,
  Schemas$InvoiceLineCreateManyBodyLinesItemPriceData,
} from "./invoice-line-create-many-body-lines-item-price-data";
import {
  External$InvoiceLineCreateManyBodyLinesItemPricing,
  InvoiceLineCreateManyBodyLinesItemPricing,
  Schemas$InvoiceLineCreateManyBodyLinesItemPricing,
} from "./invoice-line-create-many-body-lines-item-pricing";
import {
  External$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0Item,
  InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0Item,
  Schemas$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0Item,
} from "./invoice-line-create-many-body-lines-item-tax-amounts-arr0-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineCreateManyBodyLinesItem
 */
export type InvoiceLineCreateManyBodyLinesItem = {
  amount?: number | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item[] | string)
    | undefined;
  invoiceItem?: string | undefined;
  metadata?:
    | (InvoiceLineCreateManyBodyLinesItemMetadataObj0 | string)
    | undefined;
  period?: InvoiceLineCreateManyBodyLinesItemPeriod | undefined;
  priceData?: InvoiceLineCreateManyBodyLinesItemPriceData | undefined;
  pricing?: InvoiceLineCreateManyBodyLinesItemPricing | undefined;
  quantity?: number | undefined;
  taxAmounts?:
    | (InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0Item[] | string)
    | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * InvoiceLineCreateManyBodyLinesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineCreateManyBodyLinesItem = {
  amount?: number | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (External$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item[] | string)
    | undefined;
  invoice_item?: string | undefined;
  metadata?:
    | (External$InvoiceLineCreateManyBodyLinesItemMetadataObj0 | string)
    | undefined;
  period?: External$InvoiceLineCreateManyBodyLinesItemPeriod | undefined;
  price_data?: External$InvoiceLineCreateManyBodyLinesItemPriceData | undefined;
  pricing?: External$InvoiceLineCreateManyBodyLinesItemPricing | undefined;
  quantity?: number | undefined;
  tax_amounts?:
    | (External$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0Item[] | string)
    | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineCreateManyBodyLinesItem
 */
const SchemaIn$InvoiceLineCreateManyBodyLinesItem: z.ZodType<
  InvoiceLineCreateManyBodyLinesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    invoice_item: z.string().optional(),
    metadata: z
      .union([
        Schemas$InvoiceLineCreateManyBodyLinesItemMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    period: Schemas$InvoiceLineCreateManyBodyLinesItemPeriod.in.optional(),
    price_data:
      Schemas$InvoiceLineCreateManyBodyLinesItemPriceData.in.optional(),
    pricing: Schemas$InvoiceLineCreateManyBodyLinesItemPricing.in.optional(),
    quantity: z.number().int().optional(),
    tax_amounts: z
      .union([
        z.array(
          Schemas$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      invoice_item: "invoiceItem",
      metadata: "metadata",
      period: "period",
      price_data: "priceData",
      pricing: "pricing",
      quantity: "quantity",
      tax_amounts: "taxAmounts",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineCreateManyBodyLinesItem
 */
const SchemaOut$InvoiceLineCreateManyBodyLinesItem: z.ZodType<
  External$InvoiceLineCreateManyBodyLinesItem, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineCreateManyBodyLinesItem // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(
          Schemas$InvoiceLineCreateManyBodyLinesItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    invoiceItem: z.string().optional(),
    metadata: z
      .union([
        Schemas$InvoiceLineCreateManyBodyLinesItemMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    period: Schemas$InvoiceLineCreateManyBodyLinesItemPeriod.out.optional(),
    priceData:
      Schemas$InvoiceLineCreateManyBodyLinesItemPriceData.out.optional(),
    pricing: Schemas$InvoiceLineCreateManyBodyLinesItemPricing.out.optional(),
    quantity: z.number().int().optional(),
    taxAmounts: z
      .union([
        z.array(
          Schemas$InvoiceLineCreateManyBodyLinesItemTaxAmountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      invoiceItem: "invoice_item",
      metadata: "metadata",
      period: "period",
      priceData: "price_data",
      pricing: "pricing",
      quantity: "quantity",
      taxAmounts: "tax_amounts",
      taxRates: "tax_rates",
    });
  });

export const Schemas$InvoiceLineCreateManyBodyLinesItem = {
  in: SchemaIn$InvoiceLineCreateManyBodyLinesItem,
  out: SchemaOut$InvoiceLineCreateManyBodyLinesItem,
};
