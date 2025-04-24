import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemDiscountsItem,
  InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemDiscountsItem,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemDiscountsItem,
} from "./invoice-preview-body-schedule-details-phases-item-add-invoice-items-item-discounts-item";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemPriceData,
  InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemPriceData,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemPriceData,
} from "./invoice-preview-body-schedule-details-phases-item-add-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem = {
  discounts?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemDiscountsItem[]
    | undefined;
  price?: string | undefined;
  priceData?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  taxRates?: (string[] | string) | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem =
  {
    discounts?:
      | External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemDiscountsItem[]
      | undefined;
    price?: string | undefined;
    price_data?:
      | External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemPriceData
      | undefined;
    quantity?: number | undefined;
    tax_rates?: (string[] | string) | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(
        Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemDiscountsItem.in,
      )
      .optional(),
    price: z.string().optional(),
    price_data:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemPriceData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem // the object to be transformed
> = z
  .object({
    discounts: z
      .array(
        Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemDiscountsItem.out,
      )
      .optional(),
    price: z.string().optional(),
    priceData:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItemPriceData.out.optional(),
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

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem =
  {
    in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem,
    out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem,
  };
