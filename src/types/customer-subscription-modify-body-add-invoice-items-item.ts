import {
  CustomerSubscriptionModifyBodyAddInvoiceItemsItemDiscountsItem,
  External$CustomerSubscriptionModifyBodyAddInvoiceItemsItemDiscountsItem,
  Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItemDiscountsItem,
} from "./customer-subscription-modify-body-add-invoice-items-item-discounts-item";
import {
  CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData,
  External$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData,
  Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData,
} from "./customer-subscription-modify-body-add-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyAddInvoiceItemsItem
 */
export type CustomerSubscriptionModifyBodyAddInvoiceItemsItem = {
  discounts?:
    | CustomerSubscriptionModifyBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  priceData?:
    | CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyAddInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyAddInvoiceItemsItem = {
  discounts?:
    | External$CustomerSubscriptionModifyBodyAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyAddInvoiceItemsItem
 */
const SchemaIn$CustomerSubscriptionModifyBodyAddInvoiceItemsItem: z.ZodType<
  CustomerSubscriptionModifyBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(
        Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItemDiscountsItem.in,
      )
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyAddInvoiceItemsItem
 */
const SchemaOut$CustomerSubscriptionModifyBodyAddInvoiceItemsItem: z.ZodType<
  External$CustomerSubscriptionModifyBodyAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyAddInvoiceItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .array(
        Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItemDiscountsItem.out,
      )
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItemPriceData.out.optional(),
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

export const Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItem = {
  in: SchemaIn$CustomerSubscriptionModifyBodyAddInvoiceItemsItem,
  out: SchemaOut$CustomerSubscriptionModifyBodyAddInvoiceItemsItem,
};
