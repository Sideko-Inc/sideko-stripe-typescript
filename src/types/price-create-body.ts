import {
  External$PriceCreateBodyCurrencyOptions,
  PriceCreateBodyCurrencyOptions,
  Schemas$PriceCreateBodyCurrencyOptions,
} from "./price-create-body-currency-options";
import {
  External$PriceCreateBodyCustomUnitAmount,
  PriceCreateBodyCustomUnitAmount,
  Schemas$PriceCreateBodyCustomUnitAmount,
} from "./price-create-body-custom-unit-amount";
import {
  External$PriceCreateBodyMetadata,
  PriceCreateBodyMetadata,
  Schemas$PriceCreateBodyMetadata,
} from "./price-create-body-metadata";
import {
  External$PriceCreateBodyProductData,
  PriceCreateBodyProductData,
  Schemas$PriceCreateBodyProductData,
} from "./price-create-body-product-data";
import {
  External$PriceCreateBodyRecurring,
  PriceCreateBodyRecurring,
  Schemas$PriceCreateBodyRecurring,
} from "./price-create-body-recurring";
import {
  External$PriceCreateBodyTiersItem,
  PriceCreateBodyTiersItem,
  Schemas$PriceCreateBodyTiersItem,
} from "./price-create-body-tiers-item";
import {
  External$PriceCreateBodyTransformQuantity,
  PriceCreateBodyTransformQuantity,
  Schemas$PriceCreateBodyTransformQuantity,
} from "./price-create-body-transform-quantity";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceCreateBody
 */
export type PriceCreateBody = {
  /**
   * Whether the price can be used for new purchases. Defaults to `true`.
   */
  active?: boolean | undefined;
  /**
   * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
   */
  billingScheme?: ("per_unit" | "tiered") | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: PriceCreateBodyCurrencyOptions | undefined;
  /**
   * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
   */
  customUnitAmount?: PriceCreateBodyCustomUnitAmount | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PriceCreateBodyMetadata | undefined;
  /**
   * A brief description of the price, hidden from customers.
   */
  nickname?: string | undefined;
  /**
   * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
   */
  product?: string | undefined;
  /**
   * These fields can be used to create a new product that this price will belong to.
   */
  productData?: PriceCreateBodyProductData | undefined;
  /**
   * The recurring components of a price such as `interval` and `usage_type`.
   */
  recurring?: PriceCreateBodyRecurring | undefined;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: PriceCreateBodyTiersItem[] | undefined;
  /**
   * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
   */
  tiersMode?: ("graduated" | "volume") | undefined;
  /**
   * If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
   */
  transferLookupKey?: boolean | undefined;
  /**
   * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
   */
  transformQuantity?: PriceCreateBodyTransformQuantity | undefined;
  /**
   * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. One of `unit_amount`, `unit_amount_decimal`, or `custom_unit_amount` is required, unless `billing_scheme=tiered`.
   */
  unitAmount?: number | undefined;
  /**
   * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
   */
  unitAmountDecimal?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (("per_unit" | "tiered") | undefined)
    | string
    | (PriceCreateBodyCurrencyOptions | undefined)
    | (PriceCreateBodyCustomUnitAmount | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (PriceCreateBodyMetadata | undefined)
    | (string | undefined)
    | (string | undefined)
    | (PriceCreateBodyProductData | undefined)
    | (PriceCreateBodyRecurring | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | (PriceCreateBodyTiersItem[] | undefined)
    | (("graduated" | "volume") | undefined)
    | (boolean | undefined)
    | (PriceCreateBodyTransformQuantity | undefined)
    | (number | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PriceCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBody = {
  active?: boolean | undefined;
  billing_scheme?: ("per_unit" | "tiered") | undefined;
  currency: string;
  currency_options?: External$PriceCreateBodyCurrencyOptions | undefined;
  custom_unit_amount?: External$PriceCreateBodyCustomUnitAmount | undefined;
  expand?: string[] | undefined;
  lookup_key?: string | undefined;
  metadata?: External$PriceCreateBodyMetadata | undefined;
  nickname?: string | undefined;
  product?: string | undefined;
  product_data?: External$PriceCreateBodyProductData | undefined;
  recurring?: External$PriceCreateBodyRecurring | undefined;
  tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  tiers?: External$PriceCreateBodyTiersItem[] | undefined;
  tiers_mode?: ("graduated" | "volume") | undefined;
  transfer_lookup_key?: boolean | undefined;
  transform_quantity?: External$PriceCreateBodyTransformQuantity | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (("per_unit" | "tiered") | undefined)
    | string
    | (External$PriceCreateBodyCurrencyOptions | undefined)
    | (External$PriceCreateBodyCustomUnitAmount | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$PriceCreateBodyMetadata | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$PriceCreateBodyProductData | undefined)
    | (External$PriceCreateBodyRecurring | undefined)
    | (("exclusive" | "inclusive" | "unspecified") | undefined)
    | (External$PriceCreateBodyTiersItem[] | undefined)
    | (("graduated" | "volume") | undefined)
    | (boolean | undefined)
    | (External$PriceCreateBodyTransformQuantity | undefined)
    | (number | undefined)
    | (string | undefined)
    | External$PriceCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBody
 */
const SchemaIn$PriceCreateBody: z.ZodType<
  PriceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    billing_scheme: z.enum(["per_unit", "tiered"]).optional(),
    currency: z.string(),
    currency_options: Schemas$PriceCreateBodyCurrencyOptions.in.optional(),
    custom_unit_amount: Schemas$PriceCreateBodyCustomUnitAmount.in.optional(),
    expand: z.array(z.string()).optional(),
    lookup_key: z.string().optional(),
    metadata: Schemas$PriceCreateBodyMetadata.in.optional(),
    nickname: z.string().optional(),
    product: z.string().optional(),
    product_data: Schemas$PriceCreateBodyProductData.in.optional(),
    recurring: Schemas$PriceCreateBodyRecurring.in.optional(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z.array(Schemas$PriceCreateBodyTiersItem.in).optional(),
    tiers_mode: z.enum(["graduated", "volume"]).optional(),
    transfer_lookup_key: z.boolean().optional(),
    transform_quantity: Schemas$PriceCreateBodyTransformQuantity.in.optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      billing_scheme: "billingScheme",
      currency: "currency",
      currency_options: "currencyOptions",
      custom_unit_amount: "customUnitAmount",
      expand: "expand",
      lookup_key: "lookupKey",
      metadata: "metadata",
      nickname: "nickname",
      product: "product",
      product_data: "productData",
      recurring: "recurring",
      tax_behavior: "taxBehavior",
      tiers: "tiers",
      tiers_mode: "tiersMode",
      transfer_lookup_key: "transferLookupKey",
      transform_quantity: "transformQuantity",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBody
 */
const SchemaOut$PriceCreateBody: z.ZodType<
  External$PriceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    billingScheme: z.enum(["per_unit", "tiered"]).optional(),
    currency: z.string(),
    currencyOptions: Schemas$PriceCreateBodyCurrencyOptions.out.optional(),
    customUnitAmount: Schemas$PriceCreateBodyCustomUnitAmount.out.optional(),
    expand: z.array(z.string()).optional(),
    lookupKey: z.string().optional(),
    metadata: Schemas$PriceCreateBodyMetadata.out.optional(),
    nickname: z.string().optional(),
    product: z.string().optional(),
    productData: Schemas$PriceCreateBodyProductData.out.optional(),
    recurring: Schemas$PriceCreateBodyRecurring.out.optional(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
    tiers: z.array(Schemas$PriceCreateBodyTiersItem.out).optional(),
    tiersMode: z.enum(["graduated", "volume"]).optional(),
    transferLookupKey: z.boolean().optional(),
    transformQuantity: Schemas$PriceCreateBodyTransformQuantity.out.optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      billingScheme: "billing_scheme",
      currency: "currency",
      currencyOptions: "currency_options",
      customUnitAmount: "custom_unit_amount",
      expand: "expand",
      lookupKey: "lookup_key",
      metadata: "metadata",
      nickname: "nickname",
      product: "product",
      productData: "product_data",
      recurring: "recurring",
      taxBehavior: "tax_behavior",
      tiers: "tiers",
      tiersMode: "tiers_mode",
      transferLookupKey: "transfer_lookup_key",
      transformQuantity: "transform_quantity",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
    });
  });

export const Schemas$PriceCreateBody = {
  in: SchemaIn$PriceCreateBody,
  out: SchemaOut$PriceCreateBody,
};
