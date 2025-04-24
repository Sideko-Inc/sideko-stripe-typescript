import {
  External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemDiscountsItem,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemDiscountsItem,
  SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemDiscountsItem,
} from "./subscription-schedule-update-body-phases-item-add-invoice-items-item-discounts-item";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData,
  SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData,
} from "./subscription-schedule-update-body-phases-item-add-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem
 */
export type SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem = {
  discounts?:
    | SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  priceData?:
    | SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem =
  {
    discounts?:
      | External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemDiscountsItem[]
      | undefined;
    price?: string | undefined;
    price_data?:
      | External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData
      | undefined;
    quantity?: number | undefined;
    tax_rates?: (string[] | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(
        Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemDiscountsItem.in,
      )
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .array(
        Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemDiscountsItem.out,
      )
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItemPriceData.out.optional(),
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

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem,
  };
