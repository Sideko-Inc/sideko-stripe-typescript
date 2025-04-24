import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$ProductCreateBodyDefaultPriceData,
  ProductCreateBodyDefaultPriceData,
  Schemas$ProductCreateBodyDefaultPriceData,
} from "@sideko-inc/stripe/types/product-create-body-default-price-data";
import {
  External$ProductCreateBodyMarketingFeaturesItem,
  ProductCreateBodyMarketingFeaturesItem,
  Schemas$ProductCreateBodyMarketingFeaturesItem,
} from "@sideko-inc/stripe/types/product-create-body-marketing-features-item";
import {
  External$ProductCreateBodyMetadata,
  ProductCreateBodyMetadata,
  Schemas$ProductCreateBodyMetadata,
} from "@sideko-inc/stripe/types/product-create-body-metadata";
import {
  External$ProductCreateBodyPackageDimensions,
  ProductCreateBodyPackageDimensions,
  Schemas$ProductCreateBodyPackageDimensions,
} from "@sideko-inc/stripe/types/product-create-body-package-dimensions";
import {
  External$ProductListCreatedObj0,
  ProductListCreatedObj0,
  Schemas$ProductListCreatedObj0,
} from "@sideko-inc/stripe/types/product-list-created-obj0";
import {
  External$ProductUpdateBody,
  ProductUpdateBody,
  Schemas$ProductUpdateBody,
} from "@sideko-inc/stripe/types/product-update-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  id: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  id: string;
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
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
   * Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
   */
  active?: boolean | undefined;
  /**
   * Only return products that were created during the given date interval.
   */
  created?: (ProductListCreatedObj0 | number) | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Only return products with the given IDs. Cannot be used with [starting_after](https://stripe.com/docs/api#list_products-starting_after) or [ending_before](https://stripe.com/docs/api#list_products-ending_before).
   */
  ids?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * Only return products that can be shipped (i.e., physical, not digital products).
   */
  shippable?: boolean | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return products with the given url.
   */
  url?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  active?: boolean | undefined;
  created?: (External$ProductListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  ids?: string[] | undefined;
  limit?: number | undefined;
  shippable?: boolean | undefined;
  starting_after?: string | undefined;
  url?: string | undefined;
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
      .union([Schemas$ProductListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    ids: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    shippable: z.boolean().optional(),
    starting_after: z.string().optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      ids: "ids",
      limit: "limit",
      shippable: "shippable",
      starting_after: "startingAfter",
      url: "url",
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
      .union([Schemas$ProductListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    ids: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    shippable: z.boolean().optional(),
    startingAfter: z.string().optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      ids: "ids",
      limit: "limit",
      shippable: "shippable",
      startingAfter: "starting_after",
      url: "url",
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
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for products](https://stripe.com/docs/search#query-fields-for-products).
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
  id: string;
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
  id: string;
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
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
    id: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
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
   * Whether the product is currently available for purchase. Defaults to `true`.
   */
  active?: boolean | undefined;
  /**
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object. This Price will be set as the default price for this product.
   */
  defaultPriceData?: ProductCreateBodyDefaultPriceData | undefined;
  /**
   * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * An identifier will be randomly generated by Stripe. You can optionally override this ID, but the ID must be unique across all products in your Stripe account.
   */
  id?: string | undefined;
  /**
   * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
   */
  images?: string[] | undefined;
  /**
   * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
   */
  marketingFeatures?: ProductCreateBodyMarketingFeaturesItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ProductCreateBodyMetadata | undefined;
  /**
   * The product's name, meant to be displayable to the customer.
   */
  name: string;
  /**
   * The dimensions of this product for shipping purposes.
   */
  packageDimensions?: ProductCreateBodyPackageDimensions | undefined;
  /**
   * Whether this product is shipped (i.e., physical goods).
   */
  shippable?: boolean | undefined;
  /**
   * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
   *
   * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
   *  It must contain at least one letter. Only used for subscription payments.
   */
  statementDescriptor?: string | undefined;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: string | undefined;
  /**
   * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
   */
  unitLabel?: string | undefined;
  /**
   * A URL of a publicly-accessible webpage for this product.
   */
  url?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  active?: boolean | undefined;
  default_price_data?: External$ProductCreateBodyDefaultPriceData | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  id?: string | undefined;
  images?: string[] | undefined;
  marketing_features?:
    | External$ProductCreateBodyMarketingFeaturesItem[]
    | undefined;
  metadata?: External$ProductCreateBodyMetadata | undefined;
  name: string;
  package_dimensions?: External$ProductCreateBodyPackageDimensions | undefined;
  shippable?: boolean | undefined;
  statement_descriptor?: string | undefined;
  tax_code?: string | undefined;
  unit_label?: string | undefined;
  url?: string | undefined;
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
    default_price_data: Schemas$ProductCreateBodyDefaultPriceData.in.optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    images: z.array(z.string()).optional(),
    marketing_features: z
      .array(Schemas$ProductCreateBodyMarketingFeaturesItem.in)
      .optional(),
    metadata: Schemas$ProductCreateBodyMetadata.in.optional(),
    name: z.string(),
    package_dimensions:
      Schemas$ProductCreateBodyPackageDimensions.in.optional(),
    shippable: z.boolean().optional(),
    statement_descriptor: z.string().optional(),
    tax_code: z.string().optional(),
    unit_label: z.string().optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      default_price_data: "defaultPriceData",
      description: "description",
      expand: "expand",
      id: "id",
      images: "images",
      marketing_features: "marketingFeatures",
      metadata: "metadata",
      name: "name",
      package_dimensions: "packageDimensions",
      shippable: "shippable",
      statement_descriptor: "statementDescriptor",
      tax_code: "taxCode",
      unit_label: "unitLabel",
      url: "url",
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
    defaultPriceData: Schemas$ProductCreateBodyDefaultPriceData.out.optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    id: z.string().optional(),
    images: z.array(z.string()).optional(),
    marketingFeatures: z
      .array(Schemas$ProductCreateBodyMarketingFeaturesItem.out)
      .optional(),
    metadata: Schemas$ProductCreateBodyMetadata.out.optional(),
    name: z.string(),
    packageDimensions:
      Schemas$ProductCreateBodyPackageDimensions.out.optional(),
    shippable: z.boolean().optional(),
    statementDescriptor: z.string().optional(),
    taxCode: z.string().optional(),
    unitLabel: z.string().optional(),
    url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      defaultPriceData: "default_price_data",
      description: "description",
      expand: "expand",
      id: "id",
      images: "images",
      marketingFeatures: "marketing_features",
      metadata: "metadata",
      name: "name",
      packageDimensions: "package_dimensions",
      shippable: "shippable",
      statementDescriptor: "statement_descriptor",
      taxCode: "tax_code",
      unitLabel: "unit_label",
      url: "url",
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
  data?: ProductUpdateBody | undefined;
  id: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$ProductUpdateBody | undefined;
  id: string;
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
    data: Schemas$ProductUpdateBody.in.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
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
    data: Schemas$ProductUpdateBody.out.optional(),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      id: "id",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
