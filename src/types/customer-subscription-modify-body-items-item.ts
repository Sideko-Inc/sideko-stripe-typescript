import {
  CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item,
  External$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item,
  Schemas$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item,
} from "./customer-subscription-modify-body-items-item-discounts-arr0-item";
import {
  CustomerSubscriptionModifyBodyItemsItemMetadataObj0,
  External$CustomerSubscriptionModifyBodyItemsItemMetadataObj0,
  Schemas$CustomerSubscriptionModifyBodyItemsItemMetadataObj0,
} from "./customer-subscription-modify-body-items-item-metadata-obj0";
import {
  CustomerSubscriptionModifyBodyItemsItemPriceData,
  External$CustomerSubscriptionModifyBodyItemsItemPriceData,
  Schemas$CustomerSubscriptionModifyBodyItemsItemPriceData,
} from "./customer-subscription-modify-body-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyItemsItem
 */
export type CustomerSubscriptionModifyBodyItemsItem = {
  clearUsage?: boolean | undefined;
  deleted?: boolean | undefined;
  discounts?:
    | (CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item[] | string)
    | undefined;
  id?: string | undefined;
  metadata?:
    | (CustomerSubscriptionModifyBodyItemsItemMetadataObj0 | string)
    | undefined;
  price?: string | undefined;
  priceData?: CustomerSubscriptionModifyBodyItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyItemsItem = {
  clear_usage?: boolean | undefined;
  deleted?: boolean | undefined;
  discounts?:
    | (
        | External$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  id?: string | undefined;
  metadata?:
    | (External$CustomerSubscriptionModifyBodyItemsItemMetadataObj0 | string)
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$CustomerSubscriptionModifyBodyItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyItemsItem
 */
const SchemaIn$CustomerSubscriptionModifyBodyItemsItem: z.ZodType<
  CustomerSubscriptionModifyBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clear_usage: z.boolean().optional(),
    deleted: z.boolean().optional(),
    discounts: z
      .union([
        z.array(
          Schemas$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    metadata: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyItemsItemMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$CustomerSubscriptionModifyBodyItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyItemsItem
 */
const SchemaOut$CustomerSubscriptionModifyBodyItemsItem: z.ZodType<
  External$CustomerSubscriptionModifyBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyItemsItem // the object to be transformed
> = z
  .object({
    clearUsage: z.boolean().optional(),
    deleted: z.boolean().optional(),
    discounts: z
      .union([
        z.array(
          Schemas$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    metadata: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyItemsItemMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$CustomerSubscriptionModifyBodyItemsItemPriceData.out.optional(),
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

export const Schemas$CustomerSubscriptionModifyBodyItemsItem = {
  in: SchemaIn$CustomerSubscriptionModifyBodyItemsItem,
  out: SchemaOut$CustomerSubscriptionModifyBodyItemsItem,
};
