import {
  External$ForwardingRequest,
  ForwardingRequest,
  Schemas$ForwardingRequest,
} from "./forwarding-request";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * List of ForwardingRequest data.
 */
export type ForwardingRequestListResponse = {
  data: ForwardingRequest[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * ForwardingRequestListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ForwardingRequestListResponse = {
  data: External$ForwardingRequest[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ForwardingRequestListResponse
 */
const SchemaIn$ForwardingRequestListResponse: z.ZodType<
  ForwardingRequestListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$ForwardingRequest.in),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ForwardingRequestListResponse
 */
const SchemaOut$ForwardingRequestListResponse: z.ZodType<
  External$ForwardingRequestListResponse, // output type of this zod object
  z.ZodTypeDef,
  ForwardingRequestListResponse // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$ForwardingRequest.out),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$ForwardingRequestListResponse = {
  in: SchemaIn$ForwardingRequestListResponse,
  out: SchemaOut$ForwardingRequestListResponse,
};
