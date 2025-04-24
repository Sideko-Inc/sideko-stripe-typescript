import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PriceCreateBodyCurrencyOptions,
  PriceCreateBodyCurrencyOptions,
  Schemas$PriceCreateBodyCurrencyOptions,
} from "@sideko-inc/stripe/types/price-create-body-currency-options";
import {
  External$PriceCreateBodyCustomUnitAmount,
  PriceCreateBodyCustomUnitAmount,
  Schemas$PriceCreateBodyCustomUnitAmount,
} from "@sideko-inc/stripe/types/price-create-body-custom-unit-amount";
import {
  External$PriceCreateBodyMetadata,
  PriceCreateBodyMetadata,
  Schemas$PriceCreateBodyMetadata,
} from "@sideko-inc/stripe/types/price-create-body-metadata";
import {
  External$PriceCreateBodyProductData,
  PriceCreateBodyProductData,
  Schemas$PriceCreateBodyProductData,
} from "@sideko-inc/stripe/types/price-create-body-product-data";
import {
  External$PriceCreateBodyRecurring,
  PriceCreateBodyRecurring,
  Schemas$PriceCreateBodyRecurring,
} from "@sideko-inc/stripe/types/price-create-body-recurring";
import {
  External$PriceCreateBodyTiersItem,
  PriceCreateBodyTiersItem,
  Schemas$PriceCreateBodyTiersItem,
} from "@sideko-inc/stripe/types/price-create-body-tiers-item";
import {
  External$PriceCreateBodyTransformQuantity,
  PriceCreateBodyTransformQuantity,
  Schemas$PriceCreateBodyTransformQuantity,
} from "@sideko-inc/stripe/types/price-create-body-transform-quantity";
import {
  External$PriceListCreatedObj0,
  PriceListCreatedObj0,
  Schemas$PriceListCreatedObj0,
} from "@sideko-inc/stripe/types/price-list-created-obj0";
import {
  External$PriceListRecurring,
  PriceListRecurring,
  Schemas$PriceListRecurring,
} from "@sideko-inc/stripe/types/price-list-recurring";
import {
  External$PriceUpdateBody,
  PriceUpdateBody,
  Schemas$PriceUpdateBody,
} from "@sideko-inc/stripe/types/price-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices).
   */
  active?: boolean | undefined;
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: (PriceListCreatedObj0 | number) | undefined;
  /**
   * Only return prices for the given currency.
   */
  currency?: string | undefined;
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
   * Only return the price with these lookup_keys, if any exist. You can specify up to 10 lookup_keys.
   */
  lookupKeys?: string[] | undefined;
  /**
   * Only return prices for the given product.
   */
  product?: string | undefined;
  /**
   * Only return prices with these recurring fields.
   */
  recurring?: PriceListRecurring | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return prices of type `recurring` or `one_time`.
   */
  type?: ("one_time" | "recurring") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  active?: boolean | undefined;
  created?: (External$PriceListCreatedObj0 | number) | undefined;
  currency?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  lookup_keys?: string[] | undefined;
  product?: string | undefined;
  recurring?: External$PriceListRecurring | undefined;
  starting_after?: string | undefined;
  type?: ("one_time" | "recurring") | undefined;
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
      .union([Schemas$PriceListCreatedObj0.in, z.number().int()])
      .optional(),
    currency: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    lookup_keys: z.array(z.string()).optional(),
    product: z.string().optional(),
    recurring: Schemas$PriceListRecurring.in.optional(),
    starting_after: z.string().optional(),
    type: z.enum(["one_time", "recurring"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      currency: "currency",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      lookup_keys: "lookupKeys",
      product: "product",
      recurring: "recurring",
      starting_after: "startingAfter",
      type: "type",
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
      .union([Schemas$PriceListCreatedObj0.out, z.number().int()])
      .optional(),
    currency: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    lookupKeys: z.array(z.string()).optional(),
    product: z.string().optional(),
    recurring: Schemas$PriceListRecurring.out.optional(),
    startingAfter: z.string().optional(),
    type: z.enum(["one_time", "recurring"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      currency: "currency",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      lookupKeys: "lookup_keys",
      product: "product",
      recurring: "recurring",
      startingAfter: "starting_after",
      type: "type",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * SearchRequest
 */
export type SearchRequest = {
  /**
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for prices](https://stripe.com/docs/search#query-fields-for-prices).
   */
  query: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
   */
  page?: string | undefined;
};

/**
 * @internal
 * SearchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SearchRequest = {
  query: string;
  expand?: string[] | undefined;
  limit?: number | undefined;
  page?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SearchRequest
 */
const SchemaIn$SearchRequest: z.ZodType<
  SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SearchRequest
 */
const SchemaOut$SearchRequest: z.ZodType<
  External$SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  SearchRequest // the object to be transformed
> = z
  .object({
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

export const Schemas$SearchRequest = {
  in: SchemaIn$SearchRequest,
  out: SchemaOut$SearchRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  price: string;
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
  price: string;
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
    price: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
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
    price: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      price: "price",
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: PriceUpdateBody | undefined;
  price: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$PriceUpdateBody | undefined;
  price: string;
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
    data: Schemas$PriceUpdateBody.in.optional(),
    price: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      price: "price",
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
    data: Schemas$PriceUpdateBody.out.optional(),
    price: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      price: "price",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
