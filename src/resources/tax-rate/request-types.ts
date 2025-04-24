import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TaxRateCreateBodyMetadata,
  Schemas$TaxRateCreateBodyMetadata,
  TaxRateCreateBodyMetadata,
} from "@sideko-inc/stripe/types/tax-rate-create-body-metadata";
import {
  External$TaxRateListCreatedObj0,
  Schemas$TaxRateListCreatedObj0,
  TaxRateListCreatedObj0,
} from "@sideko-inc/stripe/types/tax-rate-list-created-obj0";
import {
  External$TaxRateUpdateBody,
  Schemas$TaxRateUpdateBody,
  TaxRateUpdateBody,
} from "@sideko-inc/stripe/types/tax-rate-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Optional flag to filter by tax rates that are either active or inactive (archived).
   */
  active?: boolean | undefined;
  /**
   * Optional range for filtering created date.
   */
  created?: (TaxRateListCreatedObj0 | number) | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).
   */
  inclusive?: boolean | undefined;
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
  active?: boolean | undefined;
  created?: (External$TaxRateListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  inclusive?: boolean | undefined;
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
    active: z.boolean().optional(),
    created: z
      .union([Schemas$TaxRateListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    inclusive: z.boolean().optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      ending_before: "endingBefore",
      expand: "expand",
      inclusive: "inclusive",
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
    active: z.boolean().optional(),
    created: z
      .union([Schemas$TaxRateListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    inclusive: z.boolean().optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      created: "created",
      endingBefore: "ending_before",
      expand: "expand",
      inclusive: "inclusive",
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
  taxRate: string;
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
  tax_rate: string;
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
    tax_rate: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tax_rate: "taxRate",
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
    taxRate: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxRate: "tax_rate",
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
   * Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
   */
  active?: boolean | undefined;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country?: string | undefined;
  /**
   * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
   */
  description?: string | undefined;
  /**
   * The display name of the tax rate, which will be shown to users.
   */
  displayName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * This specifies if the tax rate is inclusive or exclusive.
   */
  inclusive: boolean;
  /**
   * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
   */
  jurisdiction?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: TaxRateCreateBodyMetadata | undefined;
  /**
   * This represents the tax rate percent out of 100.
   */
  percentage: number;
  /**
   * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
   */
  state?: string | undefined;
  /**
   * The high-level tax type, such as `vat` or `sales_tax`.
   */
  taxType?:
    | (
        | "amusement_tax"
        | "communications_tax"
        | "gst"
        | "hst"
        | "igst"
        | "jct"
        | "lease_tax"
        | "pst"
        | "qst"
        | "retail_delivery_fee"
        | "rst"
        | "sales_tax"
        | "service_tax"
        | "vat"
      )
    | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  active?: boolean | undefined;
  country?: string | undefined;
  description?: string | undefined;
  display_name: string;
  expand?: string[] | undefined;
  inclusive: boolean;
  jurisdiction?: string | undefined;
  metadata?: External$TaxRateCreateBodyMetadata | undefined;
  percentage: number;
  state?: string | undefined;
  tax_type?:
    | (
        | "amusement_tax"
        | "communications_tax"
        | "gst"
        | "hst"
        | "igst"
        | "jct"
        | "lease_tax"
        | "pst"
        | "qst"
        | "retail_delivery_fee"
        | "rst"
        | "sales_tax"
        | "service_tax"
        | "vat"
      )
    | undefined;
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
    country: z.string().optional(),
    description: z.string().optional(),
    display_name: z.string(),
    expand: z.array(z.string()).optional(),
    inclusive: z.boolean(),
    jurisdiction: z.string().optional(),
    metadata: Schemas$TaxRateCreateBodyMetadata.in.optional(),
    percentage: z.number(),
    state: z.string().optional(),
    tax_type: z
      .enum([
        "amusement_tax",
        "communications_tax",
        "gst",
        "hst",
        "igst",
        "jct",
        "lease_tax",
        "pst",
        "qst",
        "retail_delivery_fee",
        "rst",
        "sales_tax",
        "service_tax",
        "vat",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      country: "country",
      description: "description",
      display_name: "displayName",
      expand: "expand",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      metadata: "metadata",
      percentage: "percentage",
      state: "state",
      tax_type: "taxType",
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
    country: z.string().optional(),
    description: z.string().optional(),
    displayName: z.string(),
    expand: z.array(z.string()).optional(),
    inclusive: z.boolean(),
    jurisdiction: z.string().optional(),
    metadata: Schemas$TaxRateCreateBodyMetadata.out.optional(),
    percentage: z.number(),
    state: z.string().optional(),
    taxType: z
      .enum([
        "amusement_tax",
        "communications_tax",
        "gst",
        "hst",
        "igst",
        "jct",
        "lease_tax",
        "pst",
        "qst",
        "retail_delivery_fee",
        "rst",
        "sales_tax",
        "service_tax",
        "vat",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      country: "country",
      description: "description",
      displayName: "display_name",
      expand: "expand",
      inclusive: "inclusive",
      jurisdiction: "jurisdiction",
      metadata: "metadata",
      percentage: "percentage",
      state: "state",
      taxType: "tax_type",
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
  data?: TaxRateUpdateBody | undefined;
  taxRate: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$TaxRateUpdateBody | undefined;
  tax_rate: string;
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
    data: Schemas$TaxRateUpdateBody.in.optional(),
    tax_rate: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      tax_rate: "taxRate",
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
    data: Schemas$TaxRateUpdateBody.out.optional(),
    taxRate: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      taxRate: "tax_rate",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
