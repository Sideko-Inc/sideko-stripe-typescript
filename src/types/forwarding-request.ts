import {
  External$ForwardedRequestContext,
  ForwardedRequestContext,
  Schemas$ForwardedRequestContext,
} from "./forwarded-request-context";
import {
  External$ForwardedRequestDetails,
  ForwardedRequestDetails,
  Schemas$ForwardedRequestDetails,
} from "./forwarded-request-details";
import {
  External$ForwardedResponseDetails,
  ForwardedResponseDetails,
  Schemas$ForwardedResponseDetails,
} from "./forwarded-response-details";
import {
  External$ForwardingRequestMetadata,
  ForwardingRequestMetadata,
  Schemas$ForwardingRequestMetadata,
} from "./forwarding-request-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Instructs Stripe to make a request on your behalf using the destination URL. The destination URL
 * is activated by Stripe at the time of onboarding. Stripe verifies requests with your credentials
 * provided during onboarding, and injects card details from the payment_method into the request.
 *
 * Stripe redacts all sensitive fields and headers, including authentication credentials and card numbers,
 * before storing the request and response data in the forwarding Request object, which are subject to a
 * 30-day retention period.
 *
 * You can provide a Stripe idempotency key to make sure that requests with the same key result in only one
 * outbound request. The Stripe idempotency key provided should be unique and different from any idempotency
 * keys provided on the underlying third-party request.
 *
 * Forwarding Requests are synchronous requests that return a response or time out according to
 * Stripe’s limits.
 *
 * Related guide: [Forward card details to third-party API endpoints](https://docs.stripe.com/payments/forwarding).
 */
export type ForwardingRequest = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: ForwardingRequestMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "forwarding.request";
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
   * Metadata about the forwarded request.
   */
  requestContext?: ForwardedRequestContext | undefined;
  /**
   * Details about the request forwarded to the destination endpoint.
   */
  requestDetails?: ForwardedRequestDetails | undefined;
  /**
   * Details about the response from the destination endpoint.
   */
  responseDetails?: ForwardedResponseDetails | undefined;
  /**
   * The destination URL for the forwarded request. Must be supported by the config.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * ForwardingRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardingRequest = {
  created: number;
  id: string;
  livemode: boolean;
  metadata?: External$ForwardingRequestMetadata | null | undefined;
  object: "forwarding.request";
  payment_method: string;
  replacements: (
    | "card_cvc"
    | "card_expiry"
    | "card_number"
    | "cardholder_name"
    | "request_signature"
  )[];
  request_context?: External$ForwardedRequestContext | undefined;
  request_details?: External$ForwardedRequestDetails | undefined;
  response_details?: External$ForwardedResponseDetails | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardingRequest
 */
const SchemaIn$ForwardingRequest: z.ZodType<
  ForwardingRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ForwardingRequestMetadata.in.nullable().optional(),
    object: z.enum(["forwarding.request"]),
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
    request_context: Schemas$ForwardedRequestContext.in.optional(),
    request_details: Schemas$ForwardedRequestDetails.in.optional(),
    response_details: Schemas$ForwardedResponseDetails.in.optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      payment_method: "paymentMethod",
      replacements: "replacements",
      request_context: "requestContext",
      request_details: "requestDetails",
      response_details: "responseDetails",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardingRequest
 */
const SchemaOut$ForwardingRequest: z.ZodType<
  External$ForwardingRequest, // output type of this zod object
  z.ZodTypeDef,
  ForwardingRequest // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    metadata: Schemas$ForwardingRequestMetadata.out.nullable().optional(),
    object: z.enum(["forwarding.request"]),
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
    requestContext: Schemas$ForwardedRequestContext.out.optional(),
    requestDetails: Schemas$ForwardedRequestDetails.out.optional(),
    responseDetails: Schemas$ForwardedResponseDetails.out.optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      id: "id",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
      paymentMethod: "payment_method",
      replacements: "replacements",
      requestContext: "request_context",
      requestDetails: "request_details",
      responseDetails: "response_details",
      url: "url",
    });
  });

export const Schemas$ForwardingRequest = {
  in: SchemaIn$ForwardingRequest,
  out: SchemaOut$ForwardingRequest,
};
