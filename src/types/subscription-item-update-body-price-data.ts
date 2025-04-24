import {
  External$SubscriptionItemUpdateBodyPriceDataRecurring,
  Schemas$SubscriptionItemUpdateBodyPriceDataRecurring,
  SubscriptionItemUpdateBodyPriceDataRecurring,
} from "./subscription-item-update-body-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
 */
export type SubscriptionItemUpdateBodyPriceData = {
  currency: string;
  product: string;
  recurring: SubscriptionItemUpdateBodyPriceDataRecurring;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * SubscriptionItemUpdateBodyPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemUpdateBodyPriceData = {
  currency: string;
  product: string;
  recurring: External$SubscriptionItemUpdateBodyPriceDataRecurring;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemUpdateBodyPriceData
 */
const SchemaIn$SubscriptionItemUpdateBodyPriceData: z.ZodType<
  SubscriptionItemUpdateBodyPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionItemUpdateBodyPriceDataRecurring.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemUpdateBodyPriceData
 */
const SchemaOut$SubscriptionItemUpdateBodyPriceData: z.ZodType<
  External$SubscriptionItemUpdateBodyPriceData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemUpdateBodyPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionItemUpdateBodyPriceDataRecurring.out,
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

export const Schemas$SubscriptionItemUpdateBodyPriceData = {
  in: SchemaIn$SubscriptionItemUpdateBodyPriceData,
  out: SchemaOut$SubscriptionItemUpdateBodyPriceData,
};
