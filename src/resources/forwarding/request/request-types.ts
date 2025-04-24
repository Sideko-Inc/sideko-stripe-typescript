import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$ForwardingRequestCreateBodyMetadata,
  ForwardingRequestCreateBodyMetadata,
  Schemas$ForwardingRequestCreateBodyMetadata,
} from "@sideko-inc/stripe/types/forwarding-request-create-body-metadata";
import {
  External$ForwardingRequestCreateBodyRequest,
  ForwardingRequestCreateBodyRequest,
  Schemas$ForwardingRequestCreateBodyRequest,
} from "@sideko-inc/stripe/types/forwarding-request-create-body-request";
import {
  External$ForwardingRequestListCreated,
  ForwardingRequestListCreated,
  Schemas$ForwardingRequestListCreated,
} from "@sideko-inc/stripe/types/forwarding-request-list-created";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.
   */
  created?: ForwardingRequestListCreated | undefined;
  /**
   * A pagination cursor to fetch the previous page of the list. The value must be a ForwardingRequest ID.
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
   * A pagination cursor to fetch the next page of the list. The value must be a ForwardingRequest ID.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: External$ForwardingRequestListCreated | undefined;
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
    created: Schemas$ForwardingRequestListCreated.in.optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
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
    created: Schemas$ForwardingRequestListCreated.out.optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ForwardingRequestCreateBodyMetadata | undefined;
  /**
   * The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.
   */
  paymentMethod: string;
  /**
   * The field kinds to be replaced in the forwarded request.
   */
  replacements: (
    | "card_cvc"
    | "card_expiry"
    | "card_number"
    | "cardholder_name"
    | "request_signature"
  )[];
  /**
   * The request body and headers to be sent to the destination endpoint.
   */
  request?: ForwardingRequestCreateBodyRequest | undefined;
  /**
   * The destination URL for the forwarded request. Must be supported by the config.
   */
  url: string;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  expand?: string[] | undefined;
  metadata?: External$ForwardingRequestCreateBodyMetadata | undefined;
  payment_method: string;
  replacements: (
    | "card_cvc"
    | "card_expiry"
    | "card_number"
    | "cardholder_name"
    | "request_signature"
  )[];
  request?: External$ForwardingRequestCreateBodyRequest | undefined;
  url: string;
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
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ForwardingRequestCreateBodyMetadata.in.optional(),
    payment_method: z.string(),
    replacements: z.array(
      z.enum([
        "card_cvc",
        "card_expiry",
        "card_number",
        "cardholder_name",
        "request_signature",
      ]),
    ),
    request: Schemas$ForwardingRequestCreateBodyRequest.in.optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      payment_method: "paymentMethod",
      replacements: "replacements",
      request: "request",
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
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ForwardingRequestCreateBodyMetadata.out.optional(),
    paymentMethod: z.string(),
    replacements: z.array(
      z.enum([
        "card_cvc",
        "card_expiry",
        "card_number",
        "cardholder_name",
        "request_signature",
      ]),
    ),
    request: Schemas$ForwardingRequestCreateBodyRequest.out.optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
      paymentMethod: "payment_method",
      replacements: "replacements",
      request: "request",
      url: "url",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
