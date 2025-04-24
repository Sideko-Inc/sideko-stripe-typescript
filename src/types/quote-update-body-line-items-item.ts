import {
  External$QuoteUpdateBodyLineItemsItemDiscountsArr0Item,
  QuoteUpdateBodyLineItemsItemDiscountsArr0Item,
  Schemas$QuoteUpdateBodyLineItemsItemDiscountsArr0Item,
} from "./quote-update-body-line-items-item-discounts-arr0-item";
import {
  External$QuoteUpdateBodyLineItemsItemPriceData,
  QuoteUpdateBodyLineItemsItemPriceData,
  Schemas$QuoteUpdateBodyLineItemsItemPriceData,
} from "./quote-update-body-line-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyLineItemsItem
 */
export type QuoteUpdateBodyLineItemsItem = {
  discounts?:
    | (QuoteUpdateBodyLineItemsItemDiscountsArr0Item[] | string)
    | undefined;
  id?: string | undefined;
  price?: string | undefined;
  priceData?: QuoteUpdateBodyLineItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * QuoteUpdateBodyLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyLineItemsItem = {
  discounts?:
    | (External$QuoteUpdateBodyLineItemsItemDiscountsArr0Item[] | string)
    | undefined;
  id?: string | undefined;
  price?: string | undefined;
  price_data?: External$QuoteUpdateBodyLineItemsItemPriceData | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyLineItemsItem
 */
const SchemaIn$QuoteUpdateBodyLineItemsItem: z.ZodType<
  QuoteUpdateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$QuoteUpdateBodyLineItemsItemDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    price: z.string().optional(),
    price_data: Schemas$QuoteUpdateBodyLineItemsItemPriceData.in.optional(),
    quantity: z.number().int().optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      id: "id",
      price: "price",
      price_data: "priceData",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyLineItemsItem
 */
const SchemaOut$QuoteUpdateBodyLineItemsItem: z.ZodType<
  External$QuoteUpdateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyLineItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$QuoteUpdateBodyLineItemsItemDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    price: z.string().optional(),
    priceData: Schemas$QuoteUpdateBodyLineItemsItemPriceData.out.optional(),
    quantity: z.number().int().optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      id: "id",
      price: "price",
      priceData: "price_data",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$QuoteUpdateBodyLineItemsItem = {
  in: SchemaIn$QuoteUpdateBodyLineItemsItem,
  out: SchemaOut$QuoteUpdateBodyLineItemsItem,
};
