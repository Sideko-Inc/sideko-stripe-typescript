import {
  External$SubscriptionCreateBodyItemsItemPriceDataRecurring,
  Schemas$SubscriptionCreateBodyItemsItemPriceDataRecurring,
  SubscriptionCreateBodyItemsItemPriceDataRecurring,
} from "./subscription-create-body-items-item-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyItemsItemPriceData
 */
export type SubscriptionCreateBodyItemsItemPriceData = {
  currency: string;
  product: string;
  recurring: SubscriptionCreateBodyItemsItemPriceDataRecurring;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyItemsItemPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyItemsItemPriceData = {
  currency: string;
  product: string;
  recurring: External$SubscriptionCreateBodyItemsItemPriceDataRecurring;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyItemsItemPriceData
 */
const SchemaIn$SubscriptionCreateBodyItemsItemPriceData: z.ZodType<
  SubscriptionCreateBodyItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionCreateBodyItemsItemPriceDataRecurring.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyItemsItemPriceData
 */
const SchemaOut$SubscriptionCreateBodyItemsItemPriceData: z.ZodType<
  External$SubscriptionCreateBodyItemsItemPriceData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyItemsItemPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionCreateBodyItemsItemPriceDataRecurring.out,
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

export const Schemas$SubscriptionCreateBodyItemsItemPriceData = {
  in: SchemaIn$SubscriptionCreateBodyItemsItemPriceData,
  out: SchemaOut$SubscriptionCreateBodyItemsItemPriceData,
};
