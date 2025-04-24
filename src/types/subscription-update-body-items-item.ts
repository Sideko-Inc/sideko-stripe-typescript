import {
  External$SubscriptionUpdateBodyItemsItemDiscountsArr0Item,
  Schemas$SubscriptionUpdateBodyItemsItemDiscountsArr0Item,
  SubscriptionUpdateBodyItemsItemDiscountsArr0Item,
} from "./subscription-update-body-items-item-discounts-arr0-item";
import {
  External$SubscriptionUpdateBodyItemsItemMetadataObj0,
  Schemas$SubscriptionUpdateBodyItemsItemMetadataObj0,
  SubscriptionUpdateBodyItemsItemMetadataObj0,
} from "./subscription-update-body-items-item-metadata-obj0";
import {
  External$SubscriptionUpdateBodyItemsItemPriceData,
  Schemas$SubscriptionUpdateBodyItemsItemPriceData,
  SubscriptionUpdateBodyItemsItemPriceData,
} from "./subscription-update-body-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyItemsItem
 */
export type SubscriptionUpdateBodyItemsItem = {
  clearUsage?: boolean | undefined;
  deleted?: boolean | undefined;
  discounts?:
    | (SubscriptionUpdateBodyItemsItemDiscountsArr0Item[] | string)
    | undefined;
  id?: string | undefined;
  metadata?: (SubscriptionUpdateBodyItemsItemMetadataObj0 | string) | undefined;
  price?: string | undefined;
  priceData?: SubscriptionUpdateBodyItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyItemsItem = {
  clear_usage?: boolean | undefined;
  deleted?: boolean | undefined;
  discounts?:
    | (External$SubscriptionUpdateBodyItemsItemDiscountsArr0Item[] | string)
    | undefined;
  id?: string | undefined;
  metadata?:
    | (External$SubscriptionUpdateBodyItemsItemMetadataObj0 | string)
    | undefined;
  price?: string | undefined;
  price_data?: External$SubscriptionUpdateBodyItemsItemPriceData | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyItemsItem
 */
const SchemaIn$SubscriptionUpdateBodyItemsItem: z.ZodType<
  SubscriptionUpdateBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clear_usage: z.boolean().optional(),
    deleted: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$SubscriptionUpdateBodyItemsItemDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    metadata: z
      .union([
        Schemas$SubscriptionUpdateBodyItemsItemMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    price_data: Schemas$SubscriptionUpdateBodyItemsItemPriceData.in.optional(),
    quantity: z.number().int().optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clear_usage: "clearUsage",
      deleted: "deleted",
      discounts: "discounts",
      id: "id",
      metadata: "metadata",
      price: "price",
      price_data: "priceData",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyItemsItem
 */
const SchemaOut$SubscriptionUpdateBodyItemsItem: z.ZodType<
  External$SubscriptionUpdateBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyItemsItem // the object to be transformed
> = z
  .object({
    clearUsage: z.boolean().optional(),
    deleted: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$SubscriptionUpdateBodyItemsItemDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    metadata: z
      .union([
        Schemas$SubscriptionUpdateBodyItemsItemMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    priceData: Schemas$SubscriptionUpdateBodyItemsItemPriceData.out.optional(),
    quantity: z.number().int().optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      clearUsage: "clear_usage",
      deleted: "deleted",
      discounts: "discounts",
      id: "id",
      metadata: "metadata",
      price: "price",
      priceData: "price_data",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$SubscriptionUpdateBodyItemsItem = {
  in: SchemaIn$SubscriptionUpdateBodyItemsItem,
  out: SchemaOut$SubscriptionUpdateBodyItemsItem,
};
