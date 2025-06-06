import {
  External$TaxCalculationLineItem,
  Schemas$TaxCalculationLineItem,
  TaxCalculationLineItem,
} from "./tax-calculation-line-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The list of items the customer is purchasing.
 */
export type TaxCalculationLineItems = {
  /**
   * Details about each object.
   */
  data: TaxCalculationLineItem[];
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
 * TaxCalculationLineItems without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculationLineItems = {
  data: External$TaxCalculationLineItem[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculationLineItems
 */
const SchemaIn$TaxCalculationLineItems: z.ZodType<
  TaxCalculationLineItems, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$TaxCalculationLineItem.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculationLineItems
 */
const SchemaOut$TaxCalculationLineItems: z.ZodType<
  External$TaxCalculationLineItems, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculationLineItems // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$TaxCalculationLineItem.out),
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

export const Schemas$TaxCalculationLineItems = {
  in: SchemaIn$TaxCalculationLineItems,
  out: SchemaOut$TaxCalculationLineItems,
};
