import {
  CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
  External$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
  Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem,
} from "./customer-subscription-create-body-add-invoice-items-item-discounts-item";
import {
  CustomerSubscriptionCreateBodyAddInvoiceItemsItemPriceData,
  External$CustomerSubscriptionCreateBodyAddInvoiceItemsItemPriceData,
  Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItemPriceData,
} from "./customer-subscription-create-body-add-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyAddInvoiceItemsItem
 */
export type CustomerSubscriptionCreateBodyAddInvoiceItemsItem = {
  discounts?:
    | CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  priceData?:
    | CustomerSubscriptionCreateBodyAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyAddInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyAddInvoiceItemsItem = {
  discounts?:
    | External$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$CustomerSubscriptionCreateBodyAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyAddInvoiceItemsItem
 */
const SchemaIn$CustomerSubscriptionCreateBodyAddInvoiceItemsItem: z.ZodType<
  CustomerSubscriptionCreateBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(
        Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem.in,
      )
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyAddInvoiceItemsItem
 */
const SchemaOut$CustomerSubscriptionCreateBodyAddInvoiceItemsItem: z.ZodType<
  External$CustomerSubscriptionCreateBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyAddInvoiceItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .array(
        Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItemDiscountsItem.out,
      )
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItemPriceData.out.optional(),
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

export const Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItem = {
  in: SchemaIn$CustomerSubscriptionCreateBodyAddInvoiceItemsItem,
  out: SchemaOut$CustomerSubscriptionCreateBodyAddInvoiceItemsItem,
};
