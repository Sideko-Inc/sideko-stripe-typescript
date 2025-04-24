import {
  External$ForwardingRequestCreateBodyRequestHeadersItem,
  ForwardingRequestCreateBodyRequestHeadersItem,
  Schemas$ForwardingRequestCreateBodyRequestHeadersItem,
} from "./forwarding-request-create-body-request-headers-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The request body and headers to be sent to the destination endpoint.
 */
export type ForwardingRequestCreateBodyRequest = {
  body?: string | undefined;
  headers?: ForwardingRequestCreateBodyRequestHeadersItem[] | undefined;
};

/**
 * @internal
 * ForwardingRequestCreateBodyRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardingRequestCreateBodyRequest = {
  body?: string | undefined;
  headers?:
    | External$ForwardingRequestCreateBodyRequestHeadersItem[]
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardingRequestCreateBodyRequest
 */
const SchemaIn$ForwardingRequestCreateBodyRequest: z.ZodType<
  ForwardingRequestCreateBodyRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    body: z.string().optional(),
    headers: z
      .array(Schemas$ForwardingRequestCreateBodyRequestHeadersItem.in)
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      body: "body",
      headers: "headers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardingRequestCreateBodyRequest
 */
const SchemaOut$ForwardingRequestCreateBodyRequest: z.ZodType<
  External$ForwardingRequestCreateBodyRequest, // output type of this zod object
  z.ZodTypeDef,
  ForwardingRequestCreateBodyRequest // the object to be transformed
> = z
  .object({
    body: z.string().optional(),
    headers: z
      .array(Schemas$ForwardingRequestCreateBodyRequestHeadersItem.out)
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      body: "body",
      headers: "headers",
    });
  });

export const Schemas$ForwardingRequestCreateBodyRequest = {
  in: SchemaIn$ForwardingRequestCreateBodyRequest,
  out: SchemaOut$ForwardingRequestCreateBodyRequest,
};
