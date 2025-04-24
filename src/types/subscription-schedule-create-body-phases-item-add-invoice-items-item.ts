import {
  External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemDiscountsItem,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemDiscountsItem,
  SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemDiscountsItem,
} from "./subscription-schedule-create-body-phases-item-add-invoice-items-item-discounts-item";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemPriceData,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemPriceData,
  SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemPriceData,
} from "./subscription-schedule-create-body-phases-item-add-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem
 */
export type SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem = {
  discounts?:
    | SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  priceData?:
    | SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem =
  {
    discounts?:
      | External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemDiscountsItem[]
      | undefined;
    price?: string | undefined;
    price_data?:
      | External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemPriceData
      | undefined;
    quantity?: number | undefined;
    tax_rates?: (string[] | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(
        Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemDiscountsItem.in,
      )
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .array(
        Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemDiscountsItem.out,
      )
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItemPriceData.out.optional(),
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

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem,
    out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem,
  };
