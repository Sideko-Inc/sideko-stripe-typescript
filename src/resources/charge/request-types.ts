import { zodTransform } from "@sideko-inc/stripe/core";
import {
  ChargeCaptureBody,
  External$ChargeCaptureBody,
  Schemas$ChargeCaptureBody,
} from "@sideko-inc/stripe/types/charge-capture-body";
import {
  ChargeCreateBody,
  External$ChargeCreateBody,
  Schemas$ChargeCreateBody,
} from "@sideko-inc/stripe/types/charge-create-body";
import {
  ChargeListCreatedObj0,
  External$ChargeListCreatedObj0,
  Schemas$ChargeListCreatedObj0,
} from "@sideko-inc/stripe/types/charge-list-created-obj0";
import {
  ChargeUpdateBody,
  External$ChargeUpdateBody,
  Schemas$ChargeUpdateBody,
} from "@sideko-inc/stripe/types/charge-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return charges that were created during the given date interval.
   */
  created?: (ChargeListCreatedObj0 | number) | undefined;
  /**
   * Only return charges for the customer specified by this customer ID.
   */
  customer?: string | undefined;
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
   * Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
   */
  paymentIntent?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return charges for this transfer group, limited to 100.
   */
  transferGroup?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$ChargeListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  payment_intent?: string | undefined;
  starting_after?: string | undefined;
  transfer_group?: string | undefined;
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
    created: z
      .union([Schemas$ChargeListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    payment_intent: z.string().optional(),
    starting_after: z.string().optional(),
    transfer_group: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      payment_intent: "paymentIntent",
      starting_after: "startingAfter",
      transfer_group: "transferGroup",
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
    created: z
      .union([Schemas$ChargeListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    paymentIntent: z.string().optional(),
    startingAfter: z.string().optional(),
    transferGroup: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      paymentIntent: "payment_intent",
      startingAfter: "starting_after",
      transferGroup: "transfer_group",
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
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for charges](https://stripe.com/docs/search#query-fields-for-charges).
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
  charge: string;
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
  charge: string;
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
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
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
    charge: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      charge: "charge",
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
  data?: ChargeCreateBody | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  data?: External$ChargeCreateBody | undefined;
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
    data: Schemas$ChargeCreateBody.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
    data: Schemas$ChargeCreateBody.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
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
  data?: ChargeUpdateBody | undefined;
  charge: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$ChargeUpdateBody | undefined;
  charge: string;
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
    data: Schemas$ChargeUpdateBody.in.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
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
    data: Schemas$ChargeUpdateBody.out.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * CaptureRequest
 */
export type CaptureRequest = {
  data?: ChargeCaptureBody | undefined;
  charge: string;
};

/**
 * @internal
 * CaptureRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CaptureRequest = {
  data?: External$ChargeCaptureBody | undefined;
  charge: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CaptureRequest
 */
const SchemaIn$CaptureRequest: z.ZodType<
  CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$ChargeCaptureBody.in.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CaptureRequest
 */
const SchemaOut$CaptureRequest: z.ZodType<
  External$CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  CaptureRequest // the object to be transformed
> = z
  .object({
    data: Schemas$ChargeCaptureBody.out.optional(),
    charge: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      charge: "charge",
    });
  });

export const Schemas$CaptureRequest = {
  in: SchemaIn$CaptureRequest,
  out: SchemaOut$CaptureRequest,
};
