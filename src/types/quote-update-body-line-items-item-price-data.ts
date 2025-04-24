import {
  External$QuoteUpdateBodyLineItemsItemPriceDataRecurring,
  QuoteUpdateBodyLineItemsItemPriceDataRecurring,
  Schemas$QuoteUpdateBodyLineItemsItemPriceDataRecurring,
} from "./quote-update-body-line-items-item-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyLineItemsItemPriceData
 */
export type QuoteUpdateBodyLineItemsItemPriceData = {
  currency: string;
  product: string;
  recurring?: QuoteUpdateBodyLineItemsItemPriceDataRecurring | undefined;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * QuoteUpdateBodyLineItemsItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyLineItemsItemPriceData = {
  currency: string;
  product: string;
  recurring?:
    | External$QuoteUpdateBodyLineItemsItemPriceDataRecurring
    | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyLineItemsItemPriceData
 */
const SchemaIn$QuoteUpdateBodyLineItemsItemPriceData: z.ZodType<
  QuoteUpdateBodyLineItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring:
      Schemas$QuoteUpdateBodyLineItemsItemPriceDataRecurring.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyLineItemsItemPriceData
 */
const SchemaOut$QuoteUpdateBodyLineItemsItemPriceData: z.ZodType<
  External$QuoteUpdateBodyLineItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyLineItemsItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring:
      Schemas$QuoteUpdateBodyLineItemsItemPriceDataRecurring.out.optional(),
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

export const Schemas$QuoteUpdateBodyLineItemsItemPriceData = {
  in: SchemaIn$QuoteUpdateBodyLineItemsItemPriceData,
  out: SchemaOut$QuoteUpdateBodyLineItemsItemPriceData,
};
