import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PlanCreateBodyMetadataObj0,
  PlanCreateBodyMetadataObj0,
  Schemas$PlanCreateBodyMetadataObj0,
} from "@sideko-inc/stripe/types/plan-create-body-metadata-obj0";
import {
  External$PlanCreateBodyProductObj0,
  PlanCreateBodyProductObj0,
  Schemas$PlanCreateBodyProductObj0,
} from "@sideko-inc/stripe/types/plan-create-body-product-obj0";
import {
  External$PlanCreateBodyTiersItem,
  PlanCreateBodyTiersItem,
  Schemas$PlanCreateBodyTiersItem,
} from "@sideko-inc/stripe/types/plan-create-body-tiers-item";
import {
  External$PlanCreateBodyTransformUsage,
  PlanCreateBodyTransformUsage,
  Schemas$PlanCreateBodyTransformUsage,
} from "@sideko-inc/stripe/types/plan-create-body-transform-usage";
import {
  External$PlanListCreatedObj0,
  PlanListCreatedObj0,
  Schemas$PlanListCreatedObj0,
} from "@sideko-inc/stripe/types/plan-list-created-obj0";
import {
  External$PlanUpdateBody,
  PlanUpdateBody,
  Schemas$PlanUpdateBody,
} from "@sideko-inc/stripe/types/plan-update-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  plan: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  plan: string;
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
    plan: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      plan: "plan",
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
    plan: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      plan: "plan",
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
   * Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans).
   */
  active?: boolean | undefined;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (PlanListCreatedObj0 | number) | undefined;
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
   * Only return plans for the given product.
   */
  product?: string | undefined;
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
  active?: boolean | undefined;
  created?: (External$PlanListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  product?: string | undefined;
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
    active: z.boolean().optional(),
    created: z
      .union([Schemas$PlanListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    product: z.string().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      product: "product",
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
    active: z.boolean().optional(),
    created: z
      .union([Schemas$PlanListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    product: z.string().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      product: "product",
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
  plan: string;
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
  plan: string;
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
    plan: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      plan: "plan",
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
    plan: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      plan: "plan",
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
   * Whether the plan is currently available for new subscriptions. Defaults to `true`.
   */
  active?: boolean | undefined;
  /**
   * A positive integer in cents (or local equivalent) (or 0 for a free plan) representing how much to charge on a recurring basis.
   */
  amount?: number | undefined;
  /**
   * Same as `amount`, but accepts a decimal value with at most 12 decimal places. Only one of `amount` and `amount_decimal` can be set.
   */
  amountDecimal?: string | undefined;
  /**
   * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
   */
  billingScheme?: ("per_unit" | "tiered") | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.
   */
  id?: string | undefined;
  /**
   * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
   */
  interval: "day" | "month" | "week" | "year";
  /**
   * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
   */
  intervalCount?: number | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PlanCreateBodyMetadataObj0 | string) | undefined;
  /**
   * The meter tracking the usage of a metered price
   */
  meter?: string | undefined;
  /**
   * A brief description of the plan, hidden from customers.
   */
  nickname?: string | undefined;
  product?: (PlanCreateBodyProductObj0 | string) | undefined;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: PlanCreateBodyTiersItem[] | undefined;
  /**
   * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
   */
  tiersMode?: ("graduated" | "volume") | undefined;
  /**
   * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
   */
  transformUsage?: PlanCreateBodyTransformUsage | undefined;
  /**
   * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
   */
  trialPeriodDays?: number | undefined;
  /**
   * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
   */
  usageType?: ("licensed" | "metered") | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  active?: boolean | undefined;
  amount?: number | undefined;
  amount_decimal?: string | undefined;
  billing_scheme?: ("per_unit" | "tiered") | undefined;
  currency: string;
  expand?: string[] | undefined;
  id?: string | undefined;
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
  metadata?: (External$PlanCreateBodyMetadataObj0 | string) | undefined;
  meter?: string | undefined;
  nickname?: string | undefined;
  product?: (External$PlanCreateBodyProductObj0 | string) | undefined;
  tiers?: External$PlanCreateBodyTiersItem[] | undefined;
  tiers_mode?: ("graduated" | "volume") | undefined;
  transform_usage?: External$PlanCreateBodyTransformUsage | undefined;
  trial_period_days?: number | undefined;
  usage_type?: ("licensed" | "metered") | undefined;
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
    active: z.boolean().optional(),
    amount: z.number().int().optional(),
    amount_decimal: z.string().optional(),
    billing_scheme: z.enum(["per_unit", "tiered"]).optional(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    interval: z.enum(["day", "month", "week", "year"]),
    interval_count: z.number().int().optional(),
    metadata: z
      .union([Schemas$PlanCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    meter: z.string().optional(),
    nickname: z.string().optional(),
    product: z
      .union([Schemas$PlanCreateBodyProductObj0.in, z.string()])
      .optional(),
    tiers: z.array(Schemas$PlanCreateBodyTiersItem.in).optional(),
    tiers_mode: z.enum(["graduated", "volume"]).optional(),
    transform_usage: Schemas$PlanCreateBodyTransformUsage.in.optional(),
    trial_period_days: z.number().int().optional(),
    usage_type: z.enum(["licensed", "metered"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      amount: "amount",
      amount_decimal: "amountDecimal",
      billing_scheme: "billingScheme",
      currency: "currency",
      expand: "expand",
      id: "id",
      interval: "interval",
      interval_count: "intervalCount",
      metadata: "metadata",
      meter: "meter",
      nickname: "nickname",
      product: "product",
      tiers: "tiers",
      tiers_mode: "tiersMode",
      transform_usage: "transformUsage",
      trial_period_days: "trialPeriodDays",
      usage_type: "usageType",
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
    active: z.boolean().optional(),
    amount: z.number().int().optional(),
    amountDecimal: z.string().optional(),
    billingScheme: z.enum(["per_unit", "tiered"]).optional(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    interval: z.enum(["day", "month", "week", "year"]),
    intervalCount: z.number().int().optional(),
    metadata: z
      .union([Schemas$PlanCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    meter: z.string().optional(),
    nickname: z.string().optional(),
    product: z
      .union([Schemas$PlanCreateBodyProductObj0.out, z.string()])
      .optional(),
    tiers: z.array(Schemas$PlanCreateBodyTiersItem.out).optional(),
    tiersMode: z.enum(["graduated", "volume"]).optional(),
    transformUsage: Schemas$PlanCreateBodyTransformUsage.out.optional(),
    trialPeriodDays: z.number().int().optional(),
    usageType: z.enum(["licensed", "metered"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      amount: "amount",
      amountDecimal: "amount_decimal",
      billingScheme: "billing_scheme",
      currency: "currency",
      expand: "expand",
      id: "id",
      interval: "interval",
      intervalCount: "interval_count",
      metadata: "metadata",
      meter: "meter",
      nickname: "nickname",
      product: "product",
      tiers: "tiers",
      tiersMode: "tiers_mode",
      transformUsage: "transform_usage",
      trialPeriodDays: "trial_period_days",
      usageType: "usage_type",
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
  data?: PlanUpdateBody | undefined;
  plan: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$PlanUpdateBody | undefined;
  plan: string;
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
    data: Schemas$PlanUpdateBody.in.optional(),
    plan: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      plan: "plan",
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
    data: Schemas$PlanUpdateBody.out.optional(),
    plan: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      plan: "plan",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
