import {
  External$SubscriptionCreateBodyItemsItemDiscountsArr0Item,
  Schemas$SubscriptionCreateBodyItemsItemDiscountsArr0Item,
  SubscriptionCreateBodyItemsItemDiscountsArr0Item,
} from "./subscription-create-body-items-item-discounts-arr0-item";
import {
  External$SubscriptionCreateBodyItemsItemMetadata,
  Schemas$SubscriptionCreateBodyItemsItemMetadata,
  SubscriptionCreateBodyItemsItemMetadata,
} from "./subscription-create-body-items-item-metadata";
import {
  External$SubscriptionCreateBodyItemsItemPriceData,
  Schemas$SubscriptionCreateBodyItemsItemPriceData,
  SubscriptionCreateBodyItemsItemPriceData,
} from "./subscription-create-body-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyItemsItem
 */
export type SubscriptionCreateBodyItemsItem = {
  discounts?:
    | (SubscriptionCreateBodyItemsItemDiscountsArr0Item[] | string)
    | undefined;
  metadata?: SubscriptionCreateBodyItemsItemMetadata | undefined;
  price?: string | undefined;
  priceData?: SubscriptionCreateBodyItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyItemsItem = {
  discounts?:
    | (External$SubscriptionCreateBodyItemsItemDiscountsArr0Item[] | string)
    | undefined;
  metadata?: External$SubscriptionCreateBodyItemsItemMetadata | undefined;
  price?: string | undefined;
  price_data?: External$SubscriptionCreateBodyItemsItemPriceData | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyItemsItem
 */
const SchemaIn$SubscriptionCreateBodyItemsItem: z.ZodType<
  SubscriptionCreateBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$SubscriptionCreateBodyItemsItemDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    metadata: Schemas$SubscriptionCreateBodyItemsItemMetadata.in.optional(),
    price: z.string().optional(),
    price_data: Schemas$SubscriptionCreateBodyItemsItemPriceData.in.optional(),
    quantity: z.number().int().optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      metadata: "metadata",
      price: "price",
      price_data: "priceData",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyItemsItem
 */
const SchemaOut$SubscriptionCreateBodyItemsItem: z.ZodType<
  External$SubscriptionCreateBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$SubscriptionCreateBodyItemsItemDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    metadata: Schemas$SubscriptionCreateBodyItemsItemMetadata.out.optional(),
    price: z.string().optional(),
    priceData: Schemas$SubscriptionCreateBodyItemsItemPriceData.out.optional(),
    quantity: z.number().int().optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      metadata: "metadata",
      price: "price",
      priceData: "price_data",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$SubscriptionCreateBodyItemsItem = {
  in: SchemaIn$SubscriptionCreateBodyItemsItem,
  out: SchemaOut$SubscriptionCreateBodyItemsItem,
};
