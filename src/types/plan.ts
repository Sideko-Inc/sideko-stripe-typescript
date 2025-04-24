import {
  DeletedProduct,
  External$DeletedProduct,
  Schemas$DeletedProduct,
} from "./deleted-product";
import {
  External$PlanMetadata,
  PlanMetadata,
  Schemas$PlanMetadata,
} from "./plan-metadata";
import { External$PlanTier, PlanTier, Schemas$PlanTier } from "./plan-tier";
import { External$Product, Product, Schemas$Product } from "./product";
import {
  External$TransformUsage,
  Schemas$TransformUsage,
  TransformUsage,
} from "./transform-usage";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.
 *
 * Plans define the base price, currency, and billing cycle for recurring purchases of products.
 * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and plans help you track pricing. Different physical goods or levels of service should be represented by products, and pricing options should be represented by plans. This approach lets you change prices without having to change your provisioning scheme.
 *
 * For example, you might have a single "gold" product that has plans for $10/month, $100/year, €9/month, and €90/year.
 *
 * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) and more about [products and prices](https://stripe.com/docs/products-prices/overview).
 */
export type Plan = {
  /**
   * Whether the plan can be used for new purchases.
   */
  active: boolean;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
   */
  amount?: number | null | undefined;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
   */
  amountDecimal?: string | null | undefined;
  /**
   * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
   */
  billingScheme: "per_unit" | "tiered";
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
   */
  interval: "day" | "month" | "week" | "year";
  /**
   * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
   */
  intervalCount: number;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: PlanMetadata | null | undefined;
  /**
   * The meter tracking the usage of a metered price
   */
  meter?: string | null | undefined;
  /**
   * A brief description of the plan, hidden from customers.
   */
  nickname?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "plan";
  /**
   * The product whose pricing this plan determines.
   */
  product?: (string | Product | DeletedProduct) | undefined;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: PlanTier[] | undefined;
  /**
   * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
   */
  tiersMode?: ("graduated" | "volume") | null | undefined;
  transformUsage?: TransformUsage | undefined;
  /**
   * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
   */
  trialPeriodDays?: number | null | undefined;
  /**
   * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
   */
  usageType: "licensed" | "metered";
};

/**
 * @internal
 * Plan without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Plan = {
  active: boolean;
  amount?: number | null | undefined;
  amount_decimal?: string | null | undefined;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  id: string;
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  livemode: boolean;
  metadata?: External$PlanMetadata | null | undefined;
  meter?: string | null | undefined;
  nickname?: string | null | undefined;
  object: "plan";
  product?: (string | External$Product | External$DeletedProduct) | undefined;
  tiers?: External$PlanTier[] | undefined;
  tiers_mode?: ("graduated" | "volume") | null | undefined;
  transform_usage?: External$TransformUsage | undefined;
  trial_period_days?: number | null | undefined;
  usage_type: "licensed" | "metered";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Plan
 */
const SchemaIn$Plan: z.ZodType<
  Plan, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    amount: z.number().int().nullable().optional(),
    amount_decimal: z.string().nullable().optional(),
    billing_scheme: z.enum(["per_unit", "tiered"]),
    created: z.number().int(),
    currency: z.string(),
    id: z.string(),
    interval: z.enum(["day", "month", "week", "year"]),
    interval_count: z.number().int(),
    livemode: z.boolean(),
    metadata: Schemas$PlanMetadata.in.nullable().optional(),
    meter: z.string().nullable().optional(),
    nickname: z.string().nullable().optional(),
    object: z.enum(["plan"]),
    product: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Product.in),
        Schemas$DeletedProduct.in,
      ])
      .optional(),
    tiers: z.array(Schemas$PlanTier.in).optional(),
    tiers_mode: z.enum(["graduated", "volume"]).nullable().optional(),
    transform_usage: Schemas$TransformUsage.in.optional(),
    trial_period_days: z.number().int().nullable().optional(),
    usage_type: z.enum(["licensed", "metered"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      amount: "amount",
      amount_decimal: "amountDecimal",
      billing_scheme: "billingScheme",
      created: "created",
      currency: "currency",
      id: "id",
      interval: "interval",
      interval_count: "intervalCount",
      livemode: "livemode",
      metadata: "metadata",
      meter: "meter",
      nickname: "nickname",
      object: "object",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Plan
 */
const SchemaOut$Plan: z.ZodType<
  External$Plan, // output type of this zod object
  z.ZodTypeDef,
  Plan // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    amount: z.number().int().nullable().optional(),
    amountDecimal: z.string().nullable().optional(),
    billingScheme: z.enum(["per_unit", "tiered"]),
    created: z.number().int(),
    currency: z.string(),
    id: z.string(),
    interval: z.enum(["day", "month", "week", "year"]),
    intervalCount: z.number().int(),
    livemode: z.boolean(),
    metadata: Schemas$PlanMetadata.out.nullable().optional(),
    meter: z.string().nullable().optional(),
    nickname: z.string().nullable().optional(),
    object: z.enum(["plan"]),
    product: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Product.out),
        Schemas$DeletedProduct.out,
      ])
      .optional(),
    tiers: z.array(Schemas$PlanTier.out).optional(),
    tiersMode: z.enum(["graduated", "volume"]).nullable().optional(),
    transformUsage: Schemas$TransformUsage.out.optional(),
    trialPeriodDays: z.number().int().nullable().optional(),
    usageType: z.enum(["licensed", "metered"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      amount: "amount",
      amountDecimal: "amount_decimal",
      billingScheme: "billing_scheme",
      created: "created",
      currency: "currency",
      id: "id",
      interval: "interval",
      intervalCount: "interval_count",
      livemode: "livemode",
      metadata: "metadata",
      meter: "meter",
      nickname: "nickname",
      object: "object",
      product: "product",
      tiers: "tiers",
      tiersMode: "tiers_mode",
      transformUsage: "transform_usage",
      trialPeriodDays: "trial_period_days",
      usageType: "usage_type",
    });
  });

export const Schemas$Plan = {
  in: SchemaIn$Plan,
  out: SchemaOut$Plan,
};
