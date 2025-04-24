import {
  External$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item,
  InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item,
  Schemas$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item,
} from "./invoice-line-update-many-body-lines-item-discounts-arr0-item";
import {
  External$InvoiceLineUpdateManyBodyLinesItemMetadataObj0,
  InvoiceLineUpdateManyBodyLinesItemMetadataObj0,
  Schemas$InvoiceLineUpdateManyBodyLinesItemMetadataObj0,
} from "./invoice-line-update-many-body-lines-item-metadata-obj0";
import {
  External$InvoiceLineUpdateManyBodyLinesItemPeriod,
  InvoiceLineUpdateManyBodyLinesItemPeriod,
  Schemas$InvoiceLineUpdateManyBodyLinesItemPeriod,
} from "./invoice-line-update-many-body-lines-item-period";
import {
  External$InvoiceLineUpdateManyBodyLinesItemPriceData,
  InvoiceLineUpdateManyBodyLinesItemPriceData,
  Schemas$InvoiceLineUpdateManyBodyLinesItemPriceData,
} from "./invoice-line-update-many-body-lines-item-price-data";
import {
  External$InvoiceLineUpdateManyBodyLinesItemPricing,
  InvoiceLineUpdateManyBodyLinesItemPricing,
  Schemas$InvoiceLineUpdateManyBodyLinesItemPricing,
} from "./invoice-line-update-many-body-lines-item-pricing";
import {
  External$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item,
  InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item,
  Schemas$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item,
} from "./invoice-line-update-many-body-lines-item-tax-amounts-arr0-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineUpdateManyBodyLinesItem
 */
export type InvoiceLineUpdateManyBodyLinesItem = {
  amount?: number | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item[] | string)
    | undefined;
  id: string;
  metadata?:
    | (InvoiceLineUpdateManyBodyLinesItemMetadataObj0 | string)
    | undefined;
  period?: InvoiceLineUpdateManyBodyLinesItemPeriod | undefined;
  priceData?: InvoiceLineUpdateManyBodyLinesItemPriceData | undefined;
  pricing?: InvoiceLineUpdateManyBodyLinesItemPricing | undefined;
  quantity?: number | undefined;
  taxAmounts?:
    | (InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item[] | string)
    | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * InvoiceLineUpdateManyBodyLinesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineUpdateManyBodyLinesItem = {
  amount?: number | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (External$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item[] | string)
    | undefined;
  id: string;
  metadata?:
    | (External$InvoiceLineUpdateManyBodyLinesItemMetadataObj0 | string)
    | undefined;
  period?: External$InvoiceLineUpdateManyBodyLinesItemPeriod | undefined;
  price_data?: External$InvoiceLineUpdateManyBodyLinesItemPriceData | undefined;
  pricing?: External$InvoiceLineUpdateManyBodyLinesItemPricing | undefined;
  quantity?: number | undefined;
  tax_amounts?:
    | (External$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item[] | string)
    | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineUpdateManyBodyLinesItem
 */
const SchemaIn$InvoiceLineUpdateManyBodyLinesItem: z.ZodType<
  InvoiceLineUpdateManyBodyLinesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    id: z.string(),
    metadata: z
      .union([
        Schemas$InvoiceLineUpdateManyBodyLinesItemMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    period: Schemas$InvoiceLineUpdateManyBodyLinesItemPeriod.in.optional(),
    price_data:
      Schemas$InvoiceLineUpdateManyBodyLinesItemPriceData.in.optional(),
    pricing: Schemas$InvoiceLineUpdateManyBodyLinesItemPricing.in.optional(),
    quantity: z.number().int().optional(),
    tax_amounts: z
      .union([
        z.array(
          Schemas$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item.in,
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
      id: "id",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineUpdateManyBodyLinesItem
 */
const SchemaOut$InvoiceLineUpdateManyBodyLinesItem: z.ZodType<
  External$InvoiceLineUpdateManyBodyLinesItem, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineUpdateManyBodyLinesItem // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(
          Schemas$InvoiceLineUpdateManyBodyLinesItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    id: z.string(),
    metadata: z
      .union([
        Schemas$InvoiceLineUpdateManyBodyLinesItemMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    period: Schemas$InvoiceLineUpdateManyBodyLinesItemPeriod.out.optional(),
    priceData:
      Schemas$InvoiceLineUpdateManyBodyLinesItemPriceData.out.optional(),
    pricing: Schemas$InvoiceLineUpdateManyBodyLinesItemPricing.out.optional(),
    quantity: z.number().int().optional(),
    taxAmounts: z
      .union([
        z.array(
          Schemas$InvoiceLineUpdateManyBodyLinesItemTaxAmountsArr0Item.out,
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
      id: "id",
      metadata: "metadata",
      period: "period",
      priceData: "price_data",
      pricing: "pricing",
      quantity: "quantity",
      taxAmounts: "tax_amounts",
      taxRates: "tax_rates",
    });
  });

export const Schemas$InvoiceLineUpdateManyBodyLinesItem = {
  in: SchemaIn$InvoiceLineUpdateManyBodyLinesItem,
  out: SchemaOut$InvoiceLineUpdateManyBodyLinesItem,
};
