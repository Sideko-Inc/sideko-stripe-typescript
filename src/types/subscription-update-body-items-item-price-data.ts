import {
  External$SubscriptionUpdateBodyItemsItemPriceDataRecurring,
  Schemas$SubscriptionUpdateBodyItemsItemPriceDataRecurring,
  SubscriptionUpdateBodyItemsItemPriceDataRecurring,
} from "./subscription-update-body-items-item-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyItemsItemPriceData
 */
export type SubscriptionUpdateBodyItemsItemPriceData = {
  currency: string;
  product: string;
  recurring: SubscriptionUpdateBodyItemsItemPriceDataRecurring;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyItemsItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyItemsItemPriceData = {
  currency: string;
  product: string;
  recurring: External$SubscriptionUpdateBodyItemsItemPriceDataRecurring;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyItemsItemPriceData
 */
const SchemaIn$SubscriptionUpdateBodyItemsItemPriceData: z.ZodType<
  SubscriptionUpdateBodyItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionUpdateBodyItemsItemPriceDataRecurring.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyItemsItemPriceData
 */
const SchemaOut$SubscriptionUpdateBodyItemsItemPriceData: z.ZodType<
  External$SubscriptionUpdateBodyItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyItemsItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionUpdateBodyItemsItemPriceDataRecurring.out,
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

export const Schemas$SubscriptionUpdateBodyItemsItemPriceData = {
  in: SchemaIn$SubscriptionUpdateBodyItemsItemPriceData,
  out: SchemaOut$SubscriptionUpdateBodyItemsItemPriceData,
};
