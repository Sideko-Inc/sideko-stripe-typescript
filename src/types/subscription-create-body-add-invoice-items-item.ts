import {
  External$SubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
  Schemas$SubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
  SubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
} from "./subscription-create-body-add-invoice-items-item-discounts-item";
import {
  External$SubscriptionCreateBodyAddInvoiceItemsItemPriceData,
  Schemas$SubscriptionCreateBodyAddInvoiceItemsItemPriceData,
  SubscriptionCreateBodyAddInvoiceItemsItemPriceData,
} from "./subscription-create-body-add-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyAddInvoiceItemsItem
 */
export type SubscriptionCreateBodyAddInvoiceItemsItem = {
  discounts?:
    | SubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  priceData?: SubscriptionCreateBodyAddInvoiceItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyAddInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyAddInvoiceItemsItem = {
  discounts?:
    | External$SubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$SubscriptionCreateBodyAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyAddInvoiceItemsItem
 */
const SchemaIn$SubscriptionCreateBodyAddInvoiceItemsItem: z.ZodType<
  SubscriptionCreateBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(Schemas$SubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem.in)
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$SubscriptionCreateBodyAddInvoiceItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyAddInvoiceItemsItem
 */
const SchemaOut$SubscriptionCreateBodyAddInvoiceItemsItem: z.ZodType<
  External$SubscriptionCreateBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyAddInvoiceItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .array(Schemas$SubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem.out)
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$SubscriptionCreateBodyAddInvoiceItemsItemPriceData.out.optional(),
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

export const Schemas$SubscriptionCreateBodyAddInvoiceItemsItem = {
  in: SchemaIn$SubscriptionCreateBodyAddInvoiceItemsItem,
  out: SchemaOut$SubscriptionCreateBodyAddInvoiceItemsItem,
};
