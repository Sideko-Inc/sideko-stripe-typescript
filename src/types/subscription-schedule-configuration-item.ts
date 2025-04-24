import {
  DeletedPrice,
  External$DeletedPrice,
  Schemas$DeletedPrice,
} from "./deleted-price";
import {
  DiscountsResourceStackableDiscount,
  External$DiscountsResourceStackableDiscount,
  Schemas$DiscountsResourceStackableDiscount,
} from "./discounts-resource-stackable-discount";
import { External$Price, Price, Schemas$Price } from "./price";
import {
  External$SubscriptionScheduleConfigurationItemMetadata,
  Schemas$SubscriptionScheduleConfigurationItemMetadata,
  SubscriptionScheduleConfigurationItemMetadata,
} from "./subscription-schedule-configuration-item-metadata";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A phase item describes the price and quantity of a phase.
 */
export type SubscriptionScheduleConfigurationItem = {
  /**
   * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: DiscountsResourceStackableDiscount[];
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
   */
  metadata?: SubscriptionScheduleConfigurationItemMetadata | null | undefined;
  /**
   * ID of the price to which the customer should be subscribed.
   */
  price: string | Price | DeletedPrice;
  /**
   * Quantity of the plan to which the customer should be subscribed.
   */
  quantity?: number | undefined;
  /**
   * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
   */
  taxRates?: TaxRate[] | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleConfigurationItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleConfigurationItem = {
  discounts: External$DiscountsResourceStackableDiscount[];
  metadata?:
    | External$SubscriptionScheduleConfigurationItemMetadata
    | null
    | undefined;
  price: string | External$Price | External$DeletedPrice;
  quantity?: number | undefined;
  tax_rates?: External$TaxRate[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleConfigurationItem
 */
const SchemaIn$SubscriptionScheduleConfigurationItem: z.ZodType<
  SubscriptionScheduleConfigurationItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceStackableDiscount.in),
    ),
    metadata: Schemas$SubscriptionScheduleConfigurationItemMetadata.in
      .nullable()
      .optional(),
    price: z.union([
      z.string(),
      z.lazy(() => Schemas$Price.in),
      Schemas$DeletedPrice.in,
    ]),
    quantity: z.number().int().optional(),
    tax_rates: z.array(Schemas$TaxRate.in).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      metadata: "metadata",
      price: "price",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleConfigurationItem
 */
const SchemaOut$SubscriptionScheduleConfigurationItem: z.ZodType<
  External$SubscriptionScheduleConfigurationItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleConfigurationItem // the object to be transformed
> = z
  .object({
    discounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceStackableDiscount.out),
    ),
    metadata: Schemas$SubscriptionScheduleConfigurationItemMetadata.out
      .nullable()
      .optional(),
    price: z.union([
      z.string(),
      z.lazy(() => Schemas$Price.out),
      Schemas$DeletedPrice.out,
    ]),
    quantity: z.number().int().optional(),
    taxRates: z.array(Schemas$TaxRate.out).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      metadata: "metadata",
      price: "price",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$SubscriptionScheduleConfigurationItem = {
  in: SchemaIn$SubscriptionScheduleConfigurationItem,
  out: SchemaOut$SubscriptionScheduleConfigurationItem,
};
