import {
  External$IssuingCardholder,
  IssuingCardholder,
  Schemas$IssuingCardholder,
} from "./issuing-cardholder";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderListResponse = {
  data: IssuingCardholder[];
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
 * IssuingCardholderListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderListResponse = {
  data: External$IssuingCardholder[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderListResponse
 */
const SchemaIn$IssuingCardholderListResponse: z.ZodType<
  IssuingCardholderListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$IssuingCardholder.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderListResponse
 */
const SchemaOut$IssuingCardholderListResponse: z.ZodType<
  External$IssuingCardholderListResponse, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$IssuingCardholder.out)),
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

export const Schemas$IssuingCardholderListResponse = {
  in: SchemaIn$IssuingCardholderListResponse,
  out: SchemaOut$IssuingCardholderListResponse,
};
