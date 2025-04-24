import {
  External$QuoteCreateBodyLineItemsItemDiscountsArr0Item,
  QuoteCreateBodyLineItemsItemDiscountsArr0Item,
  Schemas$QuoteCreateBodyLineItemsItemDiscountsArr0Item,
} from "./quote-create-body-line-items-item-discounts-arr0-item";
import {
  External$QuoteCreateBodyLineItemsItemPriceData,
  QuoteCreateBodyLineItemsItemPriceData,
  Schemas$QuoteCreateBodyLineItemsItemPriceData,
} from "./quote-create-body-line-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteCreateBodyLineItemsItem
 */
export type QuoteCreateBodyLineItemsItem = {
  discounts?:
    | (QuoteCreateBodyLineItemsItemDiscountsArr0Item[] | string)
    | undefined;
  price?: string | undefined;
  priceData?: QuoteCreateBodyLineItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * QuoteCreateBodyLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodyLineItemsItem = {
  discounts?:
    | (External$QuoteCreateBodyLineItemsItemDiscountsArr0Item[] | string)
    | undefined;
  price?: string | undefined;
  price_data?: External$QuoteCreateBodyLineItemsItemPriceData | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodyLineItemsItem
 */
const SchemaIn$QuoteCreateBodyLineItemsItem: z.ZodType<
  QuoteCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$QuoteCreateBodyLineItemsItemDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    price_data: Schemas$QuoteCreateBodyLineItemsItemPriceData.in.optional(),
    quantity: z.number().int().optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      price: "price",
      price_data: "priceData",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodyLineItemsItem
 */
const SchemaOut$QuoteCreateBodyLineItemsItem: z.ZodType<
  External$QuoteCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodyLineItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$QuoteCreateBodyLineItemsItemDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    priceData: Schemas$QuoteCreateBodyLineItemsItemPriceData.out.optional(),
    quantity: z.number().int().optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      price: "price",
      priceData: "price_data",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$QuoteCreateBodyLineItemsItem = {
  in: SchemaIn$QuoteCreateBodyLineItemsItem,
  out: SchemaOut$QuoteCreateBodyLineItemsItem,
};
