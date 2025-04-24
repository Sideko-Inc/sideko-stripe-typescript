import { External$Item, Item, Schemas$Item } from "./item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
 */
export type QuotesResourceUpfrontLineItems = {
  /**
   * Details about each object.
   */
  data: Item[];
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
 * QuotesResourceUpfrontLineItems without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceUpfrontLineItems = {
  data: External$Item[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceUpfrontLineItems
 */
const SchemaIn$QuotesResourceUpfrontLineItems: z.ZodType<
  QuotesResourceUpfrontLineItems, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Item.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceUpfrontLineItems
 */
const SchemaOut$QuotesResourceUpfrontLineItems: z.ZodType<
  External$QuotesResourceUpfrontLineItems, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceUpfrontLineItems // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$Item.out)),
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

export const Schemas$QuotesResourceUpfrontLineItems = {
  in: SchemaIn$QuotesResourceUpfrontLineItems,
  out: SchemaOut$QuotesResourceUpfrontLineItems,
};
