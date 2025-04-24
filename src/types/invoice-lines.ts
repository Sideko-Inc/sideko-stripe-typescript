import { External$LineItem, LineItem, Schemas$LineItem } from "./line-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The individual line items that make up the invoice. `lines` is sorted as follows: (1) pending invoice items (including prorations) in reverse chronological order, (2) subscription items in reverse chronological order, and (3) invoice items added after invoice creation in chronological order.
 */
export type InvoiceLines = {
  /**
   * Details about each object.
   */
  data: LineItem[];
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
 * InvoiceLines without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLines = {
  data: External$LineItem[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLines
 */
const SchemaIn$InvoiceLines: z.ZodType<
  InvoiceLines, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$LineItem.in)),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLines
 */
const SchemaOut$InvoiceLines: z.ZodType<
  External$InvoiceLines, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLines // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$LineItem.out)),
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

export const Schemas$InvoiceLines = {
  in: SchemaIn$InvoiceLines,
  out: SchemaOut$InvoiceLines,
};
