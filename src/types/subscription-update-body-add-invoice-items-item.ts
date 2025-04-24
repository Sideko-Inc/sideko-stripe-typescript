import {
  External$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem,
  Schemas$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem,
  SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem,
} from "./subscription-update-body-add-invoice-items-item-discounts-item";
import {
  External$SubscriptionUpdateBodyAddInvoiceItemsItemPriceData,
  Schemas$SubscriptionUpdateBodyAddInvoiceItemsItemPriceData,
  SubscriptionUpdateBodyAddInvoiceItemsItemPriceData,
} from "./subscription-update-body-add-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyAddInvoiceItemsItem
 */
export type SubscriptionUpdateBodyAddInvoiceItemsItem = {
  discounts?:
    | SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  priceData?: SubscriptionUpdateBodyAddInvoiceItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyAddInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyAddInvoiceItemsItem = {
  discounts?:
    | External$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$SubscriptionUpdateBodyAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyAddInvoiceItemsItem
 */
const SchemaIn$SubscriptionUpdateBodyAddInvoiceItemsItem: z.ZodType<
  SubscriptionUpdateBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(Schemas$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem.in)
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$SubscriptionUpdateBodyAddInvoiceItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyAddInvoiceItemsItem
 */
const SchemaOut$SubscriptionUpdateBodyAddInvoiceItemsItem: z.ZodType<
  External$SubscriptionUpdateBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyAddInvoiceItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .array(Schemas$SubscriptionUpdateBodyAddInvoiceItemsItemDiscountsItem.out)
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$SubscriptionUpdateBodyAddInvoiceItemsItemPriceData.out.optional(),
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

export const Schemas$SubscriptionUpdateBodyAddInvoiceItemsItem = {
  in: SchemaIn$SubscriptionUpdateBodyAddInvoiceItemsItem,
  out: SchemaOut$SubscriptionUpdateBodyAddInvoiceItemsItem,
};
