import {
  External$ForwardedRequestHeader,
  ForwardedRequestHeader,
  Schemas$ForwardedRequestHeader,
} from "./forwarded-request-header";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about the response from the destination endpoint.
 */
export type ForwardedResponseDetails = {
  /**
   * The response body from the destination endpoint to Stripe.
   */
  body: string;
  /**
   * HTTP headers that the destination endpoint returned.
   */
  headers: ForwardedRequestHeader[];
  /**
   * The HTTP status code that the destination endpoint returned.
   */
  status: number;
};

/**
 * @internal
 * ForwardedResponseDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardedResponseDetails = {
  body: string;
  headers: External$ForwardedRequestHeader[];
  status: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardedResponseDetails
 */
const SchemaIn$ForwardedResponseDetails: z.ZodType<
  ForwardedResponseDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    body: z.string(),
    headers: z.array(Schemas$ForwardedRequestHeader.in),
    status: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      body: "body",
      headers: "headers",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardedResponseDetails
 */
const SchemaOut$ForwardedResponseDetails: z.ZodType<
  External$ForwardedResponseDetails, // output type of this zod object
  z.ZodTypeDef,
  ForwardedResponseDetails // the object to be transformed
> = z
  .object({
    body: z.string(),
    headers: z.array(Schemas$ForwardedRequestHeader.out),
    status: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      body: "body",
      headers: "headers",
      status: "status",
    });
  });

export const Schemas$ForwardedResponseDetails = {
  in: SchemaIn$ForwardedResponseDetails,
  out: SchemaOut$ForwardedResponseDetails,
};
