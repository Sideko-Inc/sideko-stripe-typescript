import {
  CustomUnitAmount,
  External$CustomUnitAmount,
  Schemas$CustomUnitAmount,
} from "./custom-unit-amount";
import {
  DeletedProduct,
  External$DeletedProduct,
  Schemas$DeletedProduct,
} from "./deleted-product";
import {
  External$PriceCurrencyOptions,
  PriceCurrencyOptions,
  Schemas$PriceCurrencyOptions,
} from "./price-currency-options";
import {
  External$PriceMetadata,
  PriceMetadata,
  Schemas$PriceMetadata,
} from "./price-metadata";
import { External$PriceTier, PriceTier, Schemas$PriceTier } from "./price-tier";
import { External$Product, Product, Schemas$Product } from "./product";
import { External$Recurring, Recurring, Schemas$Recurring } from "./recurring";
import {
  External$TransformQuantity,
  Schemas$TransformQuantity,
  TransformQuantity,
} from "./transform-quantity";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
 * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
 *
 * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
 *
 * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
 */
export type Price = {
  /**
   * Whether the price can be used for new purchases.
   */
  active: boolean;
  /**
   * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
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
   * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: PriceCurrencyOptions | undefined;
  customUnitAmount?: CustomUnitAmount | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: PriceMetadata;
  /**
   * A brief description of the price, hidden from customers.
   */
  nickname?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "price";
  /**
   * The ID of the product this price is associated with.
   */
  product: string | Product | DeletedProduct;
  recurring?: Recurring | undefined;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | null | undefined;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: PriceTier[] | undefined;
  /**
   * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
   */
  tiersMode?: ("graduated" | "volume") | null | undefined;
  transformQuantity?: TransformQuantity | undefined;
  /**
   * One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
   */
  type: "one_time" | "recurring";
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
   */
  unitAmount?: number | null | undefined;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
   */
  unitAmountDecimal?: string | null | undefined;
};

/**
 * @internal
 * Price without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Price = {
  active: boolean;
  billing_scheme: "per_unit" | "tiered";
  created: number;
  currency: string;
  currency_options?: External$PriceCurrencyOptions | undefined;
  custom_unit_amount?: External$CustomUnitAmount | undefined;
  id: string;
  livemode: boolean;
  lookup_key?: string | null | undefined;
  metadata: External$PriceMetadata;
  nickname?: string | null | undefined;
  object: "price";
  product: string | External$Product | External$DeletedProduct;
  recurring?: External$Recurring | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | null | undefined;
  tiers?: External$PriceTier[] | undefined;
  tiers_mode?: ("graduated" | "volume") | null | undefined;
  transform_quantity?: External$TransformQuantity | undefined;
  type: "one_time" | "recurring";
  unit_amount?: number | null | undefined;
  unit_amount_decimal?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Price
 */
const SchemaIn$Price: z.ZodType<
  Price, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    billing_scheme: z.enum(["per_unit", "tiered"]),
    created: z.number().int(),
    currency: z.string(),
    currency_options: Schemas$PriceCurrencyOptions.in.optional(),
    custom_unit_amount: Schemas$CustomUnitAmount.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    lookup_key: z.string().nullable().optional(),
    metadata: Schemas$PriceMetadata.in,
    nickname: z.string().nullable().optional(),
    object: z.enum(["price"]),
    product: z.union([
      z.string(),
      z.lazy(() => Schemas$Product.in),
      Schemas$DeletedProduct.in,
    ]),
    recurring: Schemas$Recurring.in.optional(),
    tax_behavior: z
      .enum(["exclusive", "inclusive", "unspecified"])
      .nullable()
      .optional(),
    tiers: z.array(Schemas$PriceTier.in).optional(),
    tiers_mode: z.enum(["graduated", "volume"]).nullable().optional(),
    transform_quantity: Schemas$TransformQuantity.in.optional(),
    type: z.enum(["one_time", "recurring"]),
    unit_amount: z.number().int().nullable().optional(),
    unit_amount_decimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      billing_scheme: "billingScheme",
      created: "created",
      currency: "currency",
      currency_options: "currencyOptions",
      custom_unit_amount: "customUnitAmount",
      id: "id",
      livemode: "livemode",
      lookup_key: "lookupKey",
      metadata: "metadata",
      nickname: "nickname",
      object: "object",
      product: "product",
      recurring: "recurring",
      tax_behavior: "taxBehavior",
      tiers: "tiers",
      tiers_mode: "tiersMode",
      transform_quantity: "transformQuantity",
      type: "type",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Price
 */
const SchemaOut$Price: z.ZodType<
  External$Price, // output type of this zod object
  z.ZodTypeDef,
  Price // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    billingScheme: z.enum(["per_unit", "tiered"]),
    created: z.number().int(),
    currency: z.string(),
    currencyOptions: Schemas$PriceCurrencyOptions.out.optional(),
    customUnitAmount: Schemas$CustomUnitAmount.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    lookupKey: z.string().nullable().optional(),
    metadata: Schemas$PriceMetadata.out,
    nickname: z.string().nullable().optional(),
    object: z.enum(["price"]),
    product: z.union([
      z.string(),
      z.lazy(() => Schemas$Product.out),
      Schemas$DeletedProduct.out,
    ]),
    recurring: Schemas$Recurring.out.optional(),
    taxBehavior: z
      .enum(["exclusive", "inclusive", "unspecified"])
      .nullable()
      .optional(),
    tiers: z.array(Schemas$PriceTier.out).optional(),
    tiersMode: z.enum(["graduated", "volume"]).nullable().optional(),
    transformQuantity: Schemas$TransformQuantity.out.optional(),
    type: z.enum(["one_time", "recurring"]),
    unitAmount: z.number().int().nullable().optional(),
    unitAmountDecimal: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      billingScheme: "billing_scheme",
      created: "created",
      currency: "currency",
      currencyOptions: "currency_options",
      customUnitAmount: "custom_unit_amount",
      id: "id",
      livemode: "livemode",
      lookupKey: "lookup_key",
      metadata: "metadata",
      nickname: "nickname",
      object: "object",
      product: "product",
      recurring: "recurring",
      taxBehavior: "tax_behavior",
      tiers: "tiers",
      tiersMode: "tiers_mode",
      transformQuantity: "transform_quantity",
      type: "type",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$Price = {
  in: SchemaIn$Price,
  out: SchemaOut$Price,
};
