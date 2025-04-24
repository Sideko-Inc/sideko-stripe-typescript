import {
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item,
  SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item,
} from "./subscription-schedule-create-body-phases-item-items-item-discounts-arr0-item";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata,
  SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata,
} from "./subscription-schedule-create-body-phases-item-items-item-metadata";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceData,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceData,
  SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceData,
} from "./subscription-schedule-create-body-phases-item-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemItemsItem
 */
export type SubscriptionScheduleCreateBodyPhasesItemItemsItem = {
  discounts?:
    | (
        | SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  metadata?:
    | SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata
    | undefined;
  price?: string | undefined;
  priceData?:
    | SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemItemsItem = {
  discounts?:
    | (
        | External$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  metadata?:
    | External$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemItemsItem
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItem: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata.in.optional(),
    price: z.string().optional(),
    price_data:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemItemsItem
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItem: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata.out.optional(),
    price: z.string().optional(),
    priceData:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceData.out.optional(),
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

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItem = {
  in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItem,
  out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItem,
};
