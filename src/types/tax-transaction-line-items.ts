import {
  External$TaxTransactionLineItem,
  Schemas$TaxTransactionLineItem,
  TaxTransactionLineItem,
} from "./tax-transaction-line-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The tax collected or refunded, by line item.
 */
export type TaxTransactionLineItems = {
  /**
   * Details about each object.
   */
  data: TaxTransactionLineItem[];
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
 * TaxTransactionLineItems without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxTransactionLineItems = {
  data: External$TaxTransactionLineItem[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxTransactionLineItems
 */
const SchemaIn$TaxTransactionLineItems: z.ZodType<
  TaxTransactionLineItems, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$TaxTransactionLineItem.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxTransactionLineItems
 */
const SchemaOut$TaxTransactionLineItems: z.ZodType<
  External$TaxTransactionLineItems, // output type of this zod object
  z.ZodTypeDef,
  TaxTransactionLineItems // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$TaxTransactionLineItem.out),
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

export const Schemas$TaxTransactionLineItems = {
  in: SchemaIn$TaxTransactionLineItems,
  out: SchemaOut$TaxTransactionLineItems,
};
