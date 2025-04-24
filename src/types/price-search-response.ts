import { External$Price, Price, Schemas$Price } from "./price";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PriceSearchResponse = {
  data: Price[];
  hasMore: boolean;
  nextPage?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "search_result";
  /**
   * The total number of objects that match the query, only accurate up to 10,000.
   */
  totalCount?: number | undefined;
  url: string;
};

/**
 * @internal
 * PriceSearchResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceSearchResponse = {
  data: External$Price[];
  has_more: boolean;
  next_page?: string | null | undefined;
  object: "search_result";
  total_count?: number | undefined;
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceSearchResponse
 */
const SchemaIn$PriceSearchResponse: z.ZodType<
  PriceSearchResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Price.in)),
    has_more: z.boolean(),
    next_page: z.string().nullable().optional(),
    object: z.enum(["search_result"]),
    total_count: z.number().int().optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      next_page: "nextPage",
      object: "object",
      total_count: "totalCount",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceSearchResponse
 */
const SchemaOut$PriceSearchResponse: z.ZodType<
  External$PriceSearchResponse, // output type of this zod object
  z.ZodTypeDef,
  PriceSearchResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Price.out)),
    hasMore: z.boolean(),
    nextPage: z.string().nullable().optional(),
    object: z.enum(["search_result"]),
    totalCount: z.number().int().optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      nextPage: "next_page",
      object: "object",
      totalCount: "total_count",
      url: "url",
    });
  });

export const Schemas$PriceSearchResponse = {
  in: SchemaIn$PriceSearchResponse,
  out: SchemaOut$PriceSearchResponse,
};
