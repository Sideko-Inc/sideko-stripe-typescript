import {
  External$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item,
  InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item,
  Schemas$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item,
} from "./invoice-preview-body-invoice-items-item-discounts-arr0-item";
import {
  External$InvoicePreviewBodyInvoiceItemsItemMetadataObj0,
  InvoicePreviewBodyInvoiceItemsItemMetadataObj0,
  Schemas$InvoicePreviewBodyInvoiceItemsItemMetadataObj0,
} from "./invoice-preview-body-invoice-items-item-metadata-obj0";
import {
  External$InvoicePreviewBodyInvoiceItemsItemPeriod,
  InvoicePreviewBodyInvoiceItemsItemPeriod,
  Schemas$InvoicePreviewBodyInvoiceItemsItemPeriod,
} from "./invoice-preview-body-invoice-items-item-period";
import {
  External$InvoicePreviewBodyInvoiceItemsItemPriceData,
  InvoicePreviewBodyInvoiceItemsItemPriceData,
  Schemas$InvoicePreviewBodyInvoiceItemsItemPriceData,
} from "./invoice-preview-body-invoice-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyInvoiceItemsItem
 */
export type InvoicePreviewBodyInvoiceItemsItem = {
  amount?: number | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item[] | string)
    | undefined;
  invoiceitem?: string | undefined;
  metadata?:
    | (InvoicePreviewBodyInvoiceItemsItemMetadataObj0 | string)
    | undefined;
  period?: InvoicePreviewBodyInvoiceItemsItemPeriod | undefined;
  price?: string | undefined;
  priceData?: InvoicePreviewBodyInvoiceItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  taxCode?: (string | string) | undefined;
  taxRates?: (string[] | string) | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyInvoiceItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyInvoiceItemsItem = {
  amount?: number | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  discountable?: boolean | undefined;
  discounts?:
    | (External$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item[] | string)
    | undefined;
  invoiceitem?: string | undefined;
  metadata?:
    | (External$InvoicePreviewBodyInvoiceItemsItemMetadataObj0 | string)
    | undefined;
  period?: External$InvoicePreviewBodyInvoiceItemsItemPeriod | undefined;
  price?: string | undefined;
  price_data?: External$InvoicePreviewBodyInvoiceItemsItemPriceData | undefined;
  quantity?: number | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tax_code?: (string | string) | undefined;
  tax_rates?: (string[] | string) | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyInvoiceItemsItem
 */
const SchemaIn$InvoicePreviewBodyInvoiceItemsItem: z.ZodType<
  InvoicePreviewBodyInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    invoiceitem: z.string().optional(),
    metadata: z
      .union([
        Schemas$InvoicePreviewBodyInvoiceItemsItemMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    period: Schemas$InvoicePreviewBodyInvoiceItemsItemPeriod.in.optional(),
    price: z.string().optional(),
    price_data:
      Schemas$InvoicePreviewBodyInvoiceItemsItemPriceData.in.optional(),
    quantity: z.number().int().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tax_code: z.union([z.string(), z.string()]).optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      invoiceitem: "invoiceitem",
      metadata: "metadata",
      period: "period",
      price: "price",
      price_data: "priceData",
      quantity: "quantity",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
      tax_rates: "taxRates",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyInvoiceItemsItem
 */
const SchemaOut$InvoicePreviewBodyInvoiceItemsItem: z.ZodType<
  External$InvoicePreviewBodyInvoiceItemsItem, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyInvoiceItemsItem // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    description: z.string().optional(),
    discountable: z.boolean().optional(),
    discounts: z
      .union([
        z.array(
          Schemas$InvoicePreviewBodyInvoiceItemsItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    invoiceitem: z.string().optional(),
    metadata: z
      .union([
        Schemas$InvoicePreviewBodyInvoiceItemsItemMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    period: Schemas$InvoicePreviewBodyInvoiceItemsItemPeriod.out.optional(),
    price: z.string().optional(),
    priceData:
      Schemas$InvoicePreviewBodyInvoiceItemsItemPriceData.out.optional(),
    quantity: z.number().int().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    taxCode: z.union([z.string(), z.string()]).optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      discountable: "discountable",
      discounts: "discounts",
      invoiceitem: "invoiceitem",
      metadata: "metadata",
      period: "period",
      price: "price",
      priceData: "price_data",
      quantity: "quantity",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
      taxRates: "tax_rates",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$InvoicePreviewBodyInvoiceItemsItem = {
  in: SchemaIn$InvoicePreviewBodyInvoiceItemsItem,
  out: SchemaOut$InvoicePreviewBodyInvoiceItemsItem,
};
