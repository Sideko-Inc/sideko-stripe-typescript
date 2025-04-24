import { External$Product, Product, Schemas$Product } from "./product";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ProductListResponse = {
  /**
   * Details about each object.
   */
  data: Product[];
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
 * ProductListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductListResponse = {
  data: External$Product[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductListResponse
 */
const SchemaIn$ProductListResponse: z.ZodType<
  ProductListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Product.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductListResponse
 */
const SchemaOut$ProductListResponse: z.ZodType<
  External$ProductListResponse, // output type of this zod object
  z.ZodTypeDef,
  ProductListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Product.out)),
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

export const Schemas$ProductListResponse = {
  in: SchemaIn$ProductListResponse,
  out: SchemaOut$ProductListResponse,
};
