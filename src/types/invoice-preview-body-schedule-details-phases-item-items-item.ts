import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemDiscountsArr0Item,
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemDiscountsArr0Item,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemDiscountsArr0Item,
} from "./invoice-preview-body-schedule-details-phases-item-items-item-discounts-arr0-item";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata,
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata,
} from "./invoice-preview-body-schedule-details-phases-item-items-item-metadata";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemPriceData,
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemPriceData,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemPriceData,
} from "./invoice-preview-body-schedule-details-phases-item-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem = {
  discounts?:
    | (
        | InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  metadata?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata
    | undefined;
  price?: string | undefined;
  priceData?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem = {
  discounts?:
    | (
        | External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  metadata?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata
    | undefined;
  price?: string | undefined;
  price_data?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata.in.optional(),
    price: z.string().optional(),
    price_data:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(
          Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    metadata:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemMetadata.out.optional(),
    price: z.string().optional(),
    priceData:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItemPriceData.out.optional(),
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

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem = {
  in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem,
  out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem,
};
