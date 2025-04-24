import {
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item,
} from "./subscription-schedule-update-body-phases-item-items-item-discounts-arr0-item";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata,
} from "./subscription-schedule-update-body-phases-item-items-item-metadata";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceData,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceData,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceData,
} from "./subscription-schedule-update-body-phases-item-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItem
 */
export type SubscriptionScheduleUpdateBodyPhasesItemItemsItem = {
  discounts?:
    | (
        | SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  metadata?:
    | SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata
    | undefined;
  price?: string | undefined;
  priceData?:
    | SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemItemsItem = {
  discounts?:
    | (
        | External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  metadata?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemItemsItem
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItem: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata.in.optional(),
    price: z.string().optional(),
    price_data:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemItemsItem
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItem: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata.out.optional(),
    price: z.string().optional(),
    priceData:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceData.out.optional(),
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

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItem = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItem,
  out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItem,
};
