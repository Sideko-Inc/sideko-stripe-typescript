import {
  External$ForwardingRequestCreateBodyMetadata,
  ForwardingRequestCreateBodyMetadata,
  Schemas$ForwardingRequestCreateBodyMetadata,
} from "./forwarding-request-create-body-metadata";
import {
  External$ForwardingRequestCreateBodyRequest,
  ForwardingRequestCreateBodyRequest,
  Schemas$ForwardingRequestCreateBodyRequest,
} from "./forwarding-request-create-body-request";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ForwardingRequestCreateBody
 */
export type ForwardingRequestCreateBody = {
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

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (ForwardingRequestCreateBodyMetadata | undefined)
    | string
    | (
        | "card_cvc"
        | "card_expiry"
        | "card_number"
        | "cardholder_name"
        | "request_signature"
      )[]
    | (ForwardingRequestCreateBodyRequest | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ForwardingRequestCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardingRequestCreateBody = {
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

  [additionalProperty: string]:
    | (string[] | undefined)
    | (External$ForwardingRequestCreateBodyMetadata | undefined)
    | string
    | (
        | "card_cvc"
        | "card_expiry"
        | "card_number"
        | "cardholder_name"
        | "request_signature"
      )[]
    | (External$ForwardingRequestCreateBodyRequest | undefined)
    | string
    | External$ForwardingRequestCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardingRequestCreateBody
 */
const SchemaIn$ForwardingRequestCreateBody: z.ZodType<
  ForwardingRequestCreateBody, // output type of this zod object
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
  .catchall(zodRequiredAny)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardingRequestCreateBody
 */
const SchemaOut$ForwardingRequestCreateBody: z.ZodType<
  External$ForwardingRequestCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ForwardingRequestCreateBody // the object to be transformed
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
  .catchall(zodRequiredAny)
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

export const Schemas$ForwardingRequestCreateBody = {
  in: SchemaIn$ForwardingRequestCreateBody,
  out: SchemaOut$ForwardingRequestCreateBody,
};
