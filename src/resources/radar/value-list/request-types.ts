import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$RadarValueListCreateBodyMetadata,
  RadarValueListCreateBodyMetadata,
  Schemas$RadarValueListCreateBodyMetadata,
} from "@sideko-inc/stripe/types/radar-value-list-create-body-metadata";
import {
  External$RadarValueListListCreatedObj0,
  RadarValueListListCreatedObj0,
  Schemas$RadarValueListListCreatedObj0,
} from "@sideko-inc/stripe/types/radar-value-list-list-created-obj0";
import {
  External$RadarValueListUpdateBody,
  RadarValueListUpdateBody,
  Schemas$RadarValueListUpdateBody,
} from "@sideko-inc/stripe/types/radar-value-list-update-body";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  valueList: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  value_list: string;
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
    value_list: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      value_list: "valueList",
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
    valueList: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      valueList: "value_list",
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
   * The alias used to reference the value list when writing rules.
   */
  alias?: string | undefined;
  /**
   * A value contained within a value list - returns all value lists containing this value.
   */
  contains?: string | undefined;
  /**
   * Only return value lists that were created during the given date interval.
   */
  created?: (RadarValueListListCreatedObj0 | number) | undefined;
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
  alias?: string | undefined;
  contains?: string | undefined;
  created?: (External$RadarValueListListCreatedObj0 | number) | undefined;
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
    alias: z.string().optional(),
    contains: z.string().optional(),
    created: z
      .union([Schemas$RadarValueListListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      contains: "contains",
      created: "created",
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
    alias: z.string().optional(),
    contains: z.string().optional(),
    created: z
      .union([Schemas$RadarValueListListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      contains: "contains",
      created: "created",
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
  valueList: string;
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
  value_list: string;
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
    value_list: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      value_list: "valueList",
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
    valueList: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      valueList: "value_list",
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
   * The name of the value list for use in rules.
   */
  alias: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Type of the items in the value list. One of `card_fingerprint`, `us_bank_account_fingerprint`, `sepa_debit_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, or `customer_id`. Use `string` if the item type is unknown or mixed.
   */
  itemType?:
    | (
        | "card_bin"
        | "card_fingerprint"
        | "case_sensitive_string"
        | "country"
        | "customer_id"
        | "email"
        | "ip_address"
        | "sepa_debit_fingerprint"
        | "string"
        | "us_bank_account_fingerprint"
      )
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: RadarValueListCreateBodyMetadata | undefined;
  /**
   * The human-readable name of the value list.
   */
  name: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  alias: string;
  expand?: string[] | undefined;
  item_type?:
    | (
        | "card_bin"
        | "card_fingerprint"
        | "case_sensitive_string"
        | "country"
        | "customer_id"
        | "email"
        | "ip_address"
        | "sepa_debit_fingerprint"
        | "string"
        | "us_bank_account_fingerprint"
      )
    | undefined;
  metadata?: External$RadarValueListCreateBodyMetadata | undefined;
  name: string;
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
    alias: z.string(),
    expand: z.array(z.string()).optional(),
    item_type: z
      .enum([
        "card_bin",
        "card_fingerprint",
        "case_sensitive_string",
        "country",
        "customer_id",
        "email",
        "ip_address",
        "sepa_debit_fingerprint",
        "string",
        "us_bank_account_fingerprint",
      ])
      .optional(),
    metadata: Schemas$RadarValueListCreateBodyMetadata.in.optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      expand: "expand",
      item_type: "itemType",
      metadata: "metadata",
      name: "name",
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
    alias: z.string(),
    expand: z.array(z.string()).optional(),
    itemType: z
      .enum([
        "card_bin",
        "card_fingerprint",
        "case_sensitive_string",
        "country",
        "customer_id",
        "email",
        "ip_address",
        "sepa_debit_fingerprint",
        "string",
        "us_bank_account_fingerprint",
      ])
      .optional(),
    metadata: Schemas$RadarValueListCreateBodyMetadata.out.optional(),
    name: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      expand: "expand",
      itemType: "item_type",
      metadata: "metadata",
      name: "name",
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
  data?: RadarValueListUpdateBody | undefined;
  valueList: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$RadarValueListUpdateBody | undefined;
  value_list: string;
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
    data: Schemas$RadarValueListUpdateBody.in.optional(),
    value_list: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      value_list: "valueList",
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
    data: Schemas$RadarValueListUpdateBody.out.optional(),
    valueList: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      valueList: "value_list",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
