import { External$Price, Price, Schemas$Price } from "./price";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PriceListResponse = {
  /**
   * Details about each object.
   */
  data: Price[];
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
 * PriceListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceListResponse = {
  data: External$Price[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceListResponse
 */
const SchemaIn$PriceListResponse: z.ZodType<
  PriceListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Price.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceListResponse
 */
const SchemaOut$PriceListResponse: z.ZodType<
  External$PriceListResponse, // output type of this zod object
  z.ZodTypeDef,
  PriceListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Price.out)),
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

export const Schemas$PriceListResponse = {
  in: SchemaIn$PriceListResponse,
  out: SchemaOut$PriceListResponse,
};
