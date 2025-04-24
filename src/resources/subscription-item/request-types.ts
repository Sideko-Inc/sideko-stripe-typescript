import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$SubscriptionItemCreateBodyDiscountsArr0Item,
  Schemas$SubscriptionItemCreateBodyDiscountsArr0Item,
  SubscriptionItemCreateBodyDiscountsArr0Item,
} from "@sideko-inc/stripe/types/subscription-item-create-body-discounts-arr0-item";
import {
  External$SubscriptionItemCreateBodyMetadata,
  Schemas$SubscriptionItemCreateBodyMetadata,
  SubscriptionItemCreateBodyMetadata,
} from "@sideko-inc/stripe/types/subscription-item-create-body-metadata";
import {
  External$SubscriptionItemCreateBodyPriceData,
  Schemas$SubscriptionItemCreateBodyPriceData,
  SubscriptionItemCreateBodyPriceData,
} from "@sideko-inc/stripe/types/subscription-item-create-body-price-data";
import {
  External$SubscriptionItemDeleteBody,
  Schemas$SubscriptionItemDeleteBody,
  SubscriptionItemDeleteBody,
} from "@sideko-inc/stripe/types/subscription-item-delete-body";
import {
  External$SubscriptionItemUpdateBody,
  Schemas$SubscriptionItemUpdateBody,
  SubscriptionItemUpdateBody,
} from "@sideko-inc/stripe/types/subscription-item-update-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  data?: SubscriptionItemDeleteBody | undefined;
  item: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  data?: External$SubscriptionItemDeleteBody | undefined;
  item: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SubscriptionItemDeleteBody.in.optional(),
    item: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      item: "item",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SubscriptionItemDeleteBody.out.optional(),
    item: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      item: "item",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * The ID of the subscription whose items will be retrieved.
   */
  subscription: string;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  subscription: string;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    subscription: z.string(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription: "subscription",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    subscription: z.string(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription: "subscription",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  item: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  item: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    item: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      item: "item",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    item: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      item: "item",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: SubscriptionItemUpdateBody | undefined;
  item: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$SubscriptionItemUpdateBody | undefined;
  item: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$SubscriptionItemUpdateBody.in.optional(),
    item: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      item: "item",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$SubscriptionItemUpdateBody.out.optional(),
    item: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      item: "item",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
