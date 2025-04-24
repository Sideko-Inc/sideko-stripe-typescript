import {
  External$ForwardedRequestHeader,
  ForwardedRequestHeader,
  Schemas$ForwardedRequestHeader,
} from "./forwarded-request-header";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about the request forwarded to the destination endpoint.
 */
export type ForwardedRequestDetails = {
  /**
   * The body payload to send to the destination endpoint.
   */
  body: string;
  /**
   * The headers to include in the forwarded request. Can be omitted if no additional headers (excluding Stripe-generated ones such as the Content-Type header) should be included.
   */
  headers: ForwardedRequestHeader[];
  /**
   * The HTTP method used to call the destination endpoint.
   */
  httpMethod: "POST";
};

/**
 * @internal
 * ForwardedRequestDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardedRequestDetails = {
  body: string;
  headers: External$ForwardedRequestHeader[];
  http_method: "POST";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardedRequestDetails
 */
const SchemaIn$ForwardedRequestDetails: z.ZodType<
  ForwardedRequestDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    body: z.string(),
    headers: z.array(Schemas$ForwardedRequestHeader.in),
    http_method: z.enum(["POST"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      body: "body",
      headers: "headers",
      http_method: "httpMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardedRequestDetails
 */
const SchemaOut$ForwardedRequestDetails: z.ZodType<
  External$ForwardedRequestDetails, // output type of this zod object
  z.ZodTypeDef,
  ForwardedRequestDetails // the object to be transformed
> = z
  .object({
    body: z.string(),
    headers: z.array(Schemas$ForwardedRequestHeader.out),
    httpMethod: z.enum(["POST"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      body: "body",
      headers: "headers",
      httpMethod: "http_method",
    });
  });

export const Schemas$ForwardedRequestDetails = {
  in: SchemaIn$ForwardedRequestDetails,
  out: SchemaOut$ForwardedRequestDetails,
};
