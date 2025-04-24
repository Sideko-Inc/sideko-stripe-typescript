import { External$Review, Review, Schemas$Review } from "./review";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ReviewListResponse = {
  data: Review[];
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
 * ReviewListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ReviewListResponse = {
  data: External$Review[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ReviewListResponse
 */
const SchemaIn$ReviewListResponse: z.ZodType<
  ReviewListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Review.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ReviewListResponse
 */
const SchemaOut$ReviewListResponse: z.ZodType<
  External$ReviewListResponse, // output type of this zod object
  z.ZodTypeDef,
  ReviewListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Review.out)),
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

export const Schemas$ReviewListResponse = {
  in: SchemaIn$ReviewListResponse,
  out: SchemaOut$ReviewListResponse,
};
