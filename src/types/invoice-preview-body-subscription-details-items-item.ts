import {
  External$InvoicePreviewBodySubscriptionDetailsItemsItemDiscountsArr0Item,
  InvoicePreviewBodySubscriptionDetailsItemsItemDiscountsArr0Item,
  Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemDiscountsArr0Item,
} from "./invoice-preview-body-subscription-details-items-item-discounts-arr0-item";
import {
  External$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0,
  InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0,
  Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0,
} from "./invoice-preview-body-subscription-details-items-item-metadata-obj0";
import {
  External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData,
  InvoicePreviewBodySubscriptionDetailsItemsItemPriceData,
  Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData,
} from "./invoice-preview-body-subscription-details-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodySubscriptionDetailsItemsItem
 */
export type InvoicePreviewBodySubscriptionDetailsItemsItem = {
  clearUsage?: boolean | undefined;
  deleted?: boolean | undefined;
  discounts?:
    | (
        | InvoicePreviewBodySubscriptionDetailsItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  id?: string | undefined;
  metadata?:
    | (InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0 | string)
    | undefined;
  price?: string | undefined;
  priceData?:
    | InvoicePreviewBodySubscriptionDetailsItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * InvoicePreviewBodySubscriptionDetailsItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodySubscriptionDetailsItemsItem = {
  clear_usage?: boolean | undefined;
  deleted?: boolean | undefined;
  discounts?:
    | (
        | External$InvoicePreviewBodySubscriptionDetailsItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  id?: string | undefined;
  metadata?:
    | (
        | External$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0
        | string
      )
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodySubscriptionDetailsItemsItem
 */
const SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItem: z.ZodType<
  InvoicePreviewBodySubscriptionDetailsItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    clear_usage: z.boolean().optional(),
    deleted: z.boolean().optional(),
    discounts: z
      .union([
        z.array(
          Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    metadata: z
      .union([
        Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodySubscriptionDetailsItemsItem
 */
const SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItem: z.ZodType<
  External$InvoicePreviewBodySubscriptionDetailsItemsItem, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodySubscriptionDetailsItemsItem // the object to be transformed
> = z
  .object({
    clearUsage: z.boolean().optional(),
    deleted: z.boolean().optional(),
    discounts: z
      .union([
        z.array(
          Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    id: z.string().optional(),
    metadata: z
      .union([
        Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData.out.optional(),
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

export const Schemas$InvoicePreviewBodySubscriptionDetailsItemsItem = {
  in: SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItem,
  out: SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItem,
};
