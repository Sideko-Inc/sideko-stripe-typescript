import { Discount, External$Discount, Schemas$Discount } from "./discount";
import { External$Price, Price, Schemas$Price } from "./price";
import {
  External$SubscriptionItemMetadata,
  Schemas$SubscriptionItemMetadata,
  SubscriptionItemMetadata,
} from "./subscription-item-metadata";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Subscription items allow you to create customer subscriptions with more than
 * one plan, making it easy to represent complex billing relationships.
 */
export type SubscriptionItem = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The end time of this subscription item's current billing period.
   */
  currentPeriodEnd: number;
  /**
   * The start time of this subscription item's current billing period.
   */
  currentPeriodStart: number;
  /**
   * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: (string | Discount)[];
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: SubscriptionItemMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "subscription_item";
  /**
   * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
   * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
   *
   * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
   *
   * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
   */
  price: Price;
  /**
   * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
   */
  quantity?: number | undefined;
  /**
   * The `subscription` this `subscription_item` belongs to.
   */
  subscription: string;
  /**
   * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
   */
  taxRates?: TaxRate[] | null | undefined;
};

/**
 * @internal
 * SubscriptionItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItem = {
  created: number;
  current_period_end: number;
  current_period_start: number;
  discounts: (string | External$Discount)[];
  id: string;
  metadata: External$SubscriptionItemMetadata;
  object: "subscription_item";
  price: External$Price;
  quantity?: number | undefined;
  subscription: string;
  tax_rates?: External$TaxRate[] | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItem
 */
const SchemaIn$SubscriptionItem: z.ZodType<
  SubscriptionItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    current_period_end: z.number().int(),
    current_period_start: z.number().int(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.in)]),
    ),
    id: z.string(),
    metadata: Schemas$SubscriptionItemMetadata.in,
    object: z.enum(["subscription_item"]),
    price: z.lazy(() => Schemas$Price.in),
    quantity: z.number().int().optional(),
    subscription: z.string(),
    tax_rates: z.array(Schemas$TaxRate.in).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      current_period_end: "currentPeriodEnd",
      current_period_start: "currentPeriodStart",
      discounts: "discounts",
      id: "id",
      metadata: "metadata",
      object: "object",
      price: "price",
      quantity: "quantity",
      subscription: "subscription",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItem
 */
const SchemaOut$SubscriptionItem: z.ZodType<
  External$SubscriptionItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItem // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    currentPeriodEnd: z.number().int(),
    currentPeriodStart: z.number().int(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.out)]),
    ),
    id: z.string(),
    metadata: Schemas$SubscriptionItemMetadata.out,
    object: z.enum(["subscription_item"]),
    price: z.lazy(() => Schemas$Price.out),
    quantity: z.number().int().optional(),
    subscription: z.string(),
    taxRates: z.array(Schemas$TaxRate.out).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      currentPeriodEnd: "current_period_end",
      currentPeriodStart: "current_period_start",
      discounts: "discounts",
      id: "id",
      metadata: "metadata",
      object: "object",
      price: "price",
      quantity: "quantity",
      subscription: "subscription",
      taxRates: "tax_rates",
    });
  });

export const Schemas$SubscriptionItem = {
  in: SchemaIn$SubscriptionItem,
  out: SchemaOut$SubscriptionItem,
};
