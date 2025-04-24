import {
  CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item,
  External$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item,
  Schemas$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item,
} from "./customer-subscription-create-body-items-item-discounts-arr0-item";
import {
  CustomerSubscriptionCreateBodyItemsItemMetadata,
  External$CustomerSubscriptionCreateBodyItemsItemMetadata,
  Schemas$CustomerSubscriptionCreateBodyItemsItemMetadata,
} from "./customer-subscription-create-body-items-item-metadata";
import {
  CustomerSubscriptionCreateBodyItemsItemPriceData,
  External$CustomerSubscriptionCreateBodyItemsItemPriceData,
  Schemas$CustomerSubscriptionCreateBodyItemsItemPriceData,
} from "./customer-subscription-create-body-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyItemsItem
 */
export type CustomerSubscriptionCreateBodyItemsItem = {
  discounts?:
    | (CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item[] | string)
    | undefined;
  metadata?: CustomerSubscriptionCreateBodyItemsItemMetadata | undefined;
  price?: string | undefined;
  priceData?: CustomerSubscriptionCreateBodyItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyItemsItem = {
  discounts?:
    | (
        | External$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  metadata?:
    | External$CustomerSubscriptionCreateBodyItemsItemMetadata
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$CustomerSubscriptionCreateBodyItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyItemsItem
 */
const SchemaIn$CustomerSubscriptionCreateBodyItemsItem: z.ZodType<
  CustomerSubscriptionCreateBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$CustomerSubscriptionCreateBodyItemsItemMetadata.in.optional(),
    price: z.string().optional(),
    price_data:
      Schemas$CustomerSubscriptionCreateBodyItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyItemsItem
 */
const SchemaOut$CustomerSubscriptionCreateBodyItemsItem: z.ZodType<
  External$CustomerSubscriptionCreateBodyItemsItem, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$CustomerSubscriptionCreateBodyItemsItemMetadata.out.optional(),
    price: z.string().optional(),
    priceData:
      Schemas$CustomerSubscriptionCreateBodyItemsItemPriceData.out.optional(),
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

export const Schemas$CustomerSubscriptionCreateBodyItemsItem = {
  in: SchemaIn$CustomerSubscriptionCreateBodyItemsItem,
  out: SchemaOut$CustomerSubscriptionCreateBodyItemsItem,
};
