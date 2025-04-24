import {
  External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring,
  InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring,
  Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring,
} from "./invoice-preview-body-subscription-details-items-item-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodySubscriptionDetailsItemsItemPriceData
 */
export type InvoicePreviewBodySubscriptionDetailsItemsItemPriceData = {
  currency: string;
  product: string;
  recurring: InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * InvoicePreviewBodySubscriptionDetailsItemsItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData = {
  currency: string;
  product: string;
  recurring: External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodySubscriptionDetailsItemsItemPriceData
 */
const SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData: z.ZodType<
  InvoicePreviewBodySubscriptionDetailsItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring:
      Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring.in,
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      recurring: "recurring",
      tax_behavior: "taxBehavior",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData
 */
const SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData: z.ZodType<
  External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodySubscriptionDetailsItemsItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring:
      Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring.out,
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      product: "product",
      recurring: "recurring",
      taxBehavior: "tax_behavior",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData = {
  in: SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData,
  out: SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItemPriceData,
};
