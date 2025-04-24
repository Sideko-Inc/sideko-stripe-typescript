import {
  External$SubscriptionItemCreateBodyDiscountsArr0Item,
  Schemas$SubscriptionItemCreateBodyDiscountsArr0Item,
  SubscriptionItemCreateBodyDiscountsArr0Item,
} from "./subscription-item-create-body-discounts-arr0-item";
import {
  External$SubscriptionItemCreateBodyMetadata,
  Schemas$SubscriptionItemCreateBodyMetadata,
  SubscriptionItemCreateBodyMetadata,
} from "./subscription-item-create-body-metadata";
import {
  External$SubscriptionItemCreateBodyPriceData,
  Schemas$SubscriptionItemCreateBodyPriceData,
  SubscriptionItemCreateBodyPriceData,
} from "./subscription-item-create-body-price-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionItemCreateBody
 */
export type SubscriptionItemCreateBody = {
  /**
   * The coupons to redeem into discounts for the subscription item.
   */
  discounts?:
    | (SubscriptionItemCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: SubscriptionItemCreateBodyMetadata | undefined;
  /**
   * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
   *
   * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription’s invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
   *
   * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
   *
   * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
   */
  paymentBehavior?:
    | (
        | "allow_incomplete"
        | "default_incomplete"
        | "error_if_incomplete"
        | "pending_if_incomplete"
      )
    | undefined;
  /**
   * The ID of the price object.
   */
  price?: string | undefined;
  /**
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
   */
  priceData?: SubscriptionItemCreateBodyPriceData | undefined;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
   */
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  /**
   * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
   */
  prorationDate?: number | undefined;
  /**
   * The quantity you'd like to apply to the subscription item you're creating.
   */
  quantity?: number | undefined;
  /**
   * The identifier of the subscription to modify.
   */
  subscription: string;
  /**
   * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
   */
  taxRates?: (string[] | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((SubscriptionItemCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (SubscriptionItemCreateBodyMetadata | undefined)
    | (
        | (
            | "allow_incomplete"
            | "default_incomplete"
            | "error_if_incomplete"
            | "pending_if_incomplete"
          )
        | undefined
      )
    | (string | undefined)
    | (SubscriptionItemCreateBodyPriceData | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | (number | undefined)
    | string
    | ((string[] | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionItemCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemCreateBody = {
  discounts?:
    | (External$SubscriptionItemCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  metadata?: External$SubscriptionItemCreateBodyMetadata | undefined;
  payment_behavior?:
    | (
        | "allow_incomplete"
        | "default_incomplete"
        | "error_if_incomplete"
        | "pending_if_incomplete"
      )
    | undefined;
  price?: string | undefined;
  price_data?: External$SubscriptionItemCreateBodyPriceData | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  proration_date?: number | undefined;
  quantity?: number | undefined;
  subscription: string;
  tax_rates?: (string[] | string) | undefined;

  [additionalProperty: string]:
    | (
        | (External$SubscriptionItemCreateBodyDiscountsArr0Item[] | string)
        | undefined
      )
    | (string[] | undefined)
    | (External$SubscriptionItemCreateBodyMetadata | undefined)
    | (
        | (
            | "allow_incomplete"
            | "default_incomplete"
            | "error_if_incomplete"
            | "pending_if_incomplete"
          )
        | undefined
      )
    | (string | undefined)
    | (External$SubscriptionItemCreateBodyPriceData | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | (number | undefined)
    | string
    | ((string[] | string) | undefined)
    | External$SubscriptionItemCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemCreateBody
 */
const SchemaIn$SubscriptionItemCreateBody: z.ZodType<
  SubscriptionItemCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$SubscriptionItemCreateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$SubscriptionItemCreateBodyMetadata.in.optional(),
    payment_behavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    price: z.string().optional(),
    price_data: Schemas$SubscriptionItemCreateBodyPriceData.in.optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    proration_date: z.number().int().optional(),
    quantity: z.number().int().optional(),
    subscription: z.string(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      payment_behavior: "paymentBehavior",
      price: "price",
      price_data: "priceData",
      proration_behavior: "prorationBehavior",
      proration_date: "prorationDate",
      quantity: "quantity",
      subscription: "subscription",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemCreateBody
 */
const SchemaOut$SubscriptionItemCreateBody: z.ZodType<
  External$SubscriptionItemCreateBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemCreateBody // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$SubscriptionItemCreateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$SubscriptionItemCreateBodyMetadata.out.optional(),
    paymentBehavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    price: z.string().optional(),
    priceData: Schemas$SubscriptionItemCreateBodyPriceData.out.optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    prorationDate: z.number().int().optional(),
    quantity: z.number().int().optional(),
    subscription: z.string(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      paymentBehavior: "payment_behavior",
      price: "price",
      priceData: "price_data",
      prorationBehavior: "proration_behavior",
      prorationDate: "proration_date",
      quantity: "quantity",
      subscription: "subscription",
      taxRates: "tax_rates",
    });
  });

export const Schemas$SubscriptionItemCreateBody = {
  in: SchemaIn$SubscriptionItemCreateBody,
  out: SchemaOut$SubscriptionItemCreateBody,
};
