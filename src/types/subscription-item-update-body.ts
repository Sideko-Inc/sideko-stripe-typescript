import {
  External$SubscriptionItemUpdateBodyDiscountsArr0Item,
  Schemas$SubscriptionItemUpdateBodyDiscountsArr0Item,
  SubscriptionItemUpdateBodyDiscountsArr0Item,
} from "./subscription-item-update-body-discounts-arr0-item";
import {
  External$SubscriptionItemUpdateBodyMetadataObj0,
  Schemas$SubscriptionItemUpdateBodyMetadataObj0,
  SubscriptionItemUpdateBodyMetadataObj0,
} from "./subscription-item-update-body-metadata-obj0";
import {
  External$SubscriptionItemUpdateBodyPriceData,
  Schemas$SubscriptionItemUpdateBodyPriceData,
  SubscriptionItemUpdateBodyPriceData,
} from "./subscription-item-update-body-price-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionItemUpdateBody
 */
export type SubscriptionItemUpdateBody = {
  /**
   * The coupons to redeem into discounts for the subscription item.
   */
  discounts?:
    | (SubscriptionItemUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (SubscriptionItemUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).
   */
  offSession?: boolean | undefined;
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
   * The ID of the price object. One of `price` or `price_data` is required. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
   */
  price?: string | undefined;
  /**
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
   */
  priceData?: SubscriptionItemUpdateBodyPriceData | undefined;
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
   * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
   */
  taxRates?: (string[] | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((SubscriptionItemUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | ((SubscriptionItemUpdateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
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
    | (SubscriptionItemUpdateBodyPriceData | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | (number | undefined)
    | ((string[] | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionItemUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemUpdateBody = {
  discounts?:
    | (External$SubscriptionItemUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$SubscriptionItemUpdateBodyMetadataObj0 | string)
    | undefined;
  off_session?: boolean | undefined;
  payment_behavior?:
    | (
        | "allow_incomplete"
        | "default_incomplete"
        | "error_if_incomplete"
        | "pending_if_incomplete"
      )
    | undefined;
  price?: string | undefined;
  price_data?: External$SubscriptionItemUpdateBodyPriceData | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  proration_date?: number | undefined;
  quantity?: number | undefined;
  tax_rates?: (string[] | string) | undefined;

  [additionalProperty: string]:
    | (
        | (External$SubscriptionItemUpdateBodyDiscountsArr0Item[] | string)
        | undefined
      )
    | (string[] | undefined)
    | ((External$SubscriptionItemUpdateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
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
    | (External$SubscriptionItemUpdateBodyPriceData | undefined)
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | (number | undefined)
    | ((string[] | string) | undefined)
    | External$SubscriptionItemUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemUpdateBody
 */
const SchemaIn$SubscriptionItemUpdateBody: z.ZodType<
  SubscriptionItemUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$SubscriptionItemUpdateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$SubscriptionItemUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    off_session: z.boolean().optional(),
    payment_behavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    price: z.string().optional(),
    price_data: Schemas$SubscriptionItemUpdateBodyPriceData.in.optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    proration_date: z.number().int().optional(),
    quantity: z.number().int().optional(),
    tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      off_session: "offSession",
      payment_behavior: "paymentBehavior",
      price: "price",
      price_data: "priceData",
      proration_behavior: "prorationBehavior",
      proration_date: "prorationDate",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemUpdateBody
 */
const SchemaOut$SubscriptionItemUpdateBody: z.ZodType<
  External$SubscriptionItemUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemUpdateBody // the object to be transformed
> = z
  .object({
    discounts: z
      .union([
        z.array(Schemas$SubscriptionItemUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$SubscriptionItemUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    offSession: z.boolean().optional(),
    paymentBehavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    price: z.string().optional(),
    priceData: Schemas$SubscriptionItemUpdateBodyPriceData.out.optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    prorationDate: z.number().int().optional(),
    quantity: z.number().int().optional(),
    taxRates: z.union([z.array(z.string()), z.string()]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      expand: "expand",
      metadata: "metadata",
      offSession: "off_session",
      paymentBehavior: "payment_behavior",
      price: "price",
      priceData: "price_data",
      prorationBehavior: "proration_behavior",
      prorationDate: "proration_date",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$SubscriptionItemUpdateBody = {
  in: SchemaIn$SubscriptionItemUpdateBody,
  out: SchemaOut$SubscriptionItemUpdateBody,
};
