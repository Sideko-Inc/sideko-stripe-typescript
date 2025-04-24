import {
  External$SubscriptionItemCreateBodyPriceDataRecurring,
  Schemas$SubscriptionItemCreateBodyPriceDataRecurring,
  SubscriptionItemCreateBodyPriceDataRecurring,
} from "./subscription-item-create-body-price-data-recurring";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
 */
export type SubscriptionItemCreateBodyPriceData = {
  currency: string;
  product: string;
  recurring: SubscriptionItemCreateBodyPriceDataRecurring;
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
};

/**
 * @internal
 * SubscriptionItemCreateBodyPriceData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemCreateBodyPriceData = {
  currency: string;
  product: string;
  recurring: External$SubscriptionItemCreateBodyPriceDataRecurring;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemCreateBodyPriceData
 */
const SchemaIn$SubscriptionItemCreateBodyPriceData: z.ZodType<
  SubscriptionItemCreateBodyPriceData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionItemCreateBodyPriceDataRecurring.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemCreateBodyPriceData
 */
const SchemaOut$SubscriptionItemCreateBodyPriceData: z.ZodType<
  External$SubscriptionItemCreateBodyPriceData, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemCreateBodyPriceData // the object to be transformed
> = z
  .object({
    currency: z.string(),
    product: z.string(),
    recurring: Schemas$SubscriptionItemCreateBodyPriceDataRecurring.out,
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

export const Schemas$SubscriptionItemCreateBodyPriceData = {
  in: SchemaIn$SubscriptionItemCreateBodyPriceData,
  out: SchemaOut$SubscriptionItemCreateBodyPriceData,
};
