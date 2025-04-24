import {
  External$IssuingDispute,
  IssuingDispute,
  Schemas$IssuingDispute,
} from "./issuing-dispute";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingDisputeListResponse = {
  data: IssuingDispute[];
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
 * IssuingDisputeListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeListResponse = {
  data: External$IssuingDispute[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeListResponse
 */
const SchemaIn$IssuingDisputeListResponse: z.ZodType<
  IssuingDisputeListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$IssuingDispute.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeListResponse
 */
const SchemaOut$IssuingDisputeListResponse: z.ZodType<
  External$IssuingDisputeListResponse, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$IssuingDispute.out)),
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

export const Schemas$IssuingDisputeListResponse = {
  in: SchemaIn$IssuingDisputeListResponse,
  out: SchemaOut$IssuingDisputeListResponse,
};
