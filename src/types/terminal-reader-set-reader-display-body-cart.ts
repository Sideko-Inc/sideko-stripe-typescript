import {
  External$TerminalReaderSetReaderDisplayBodyCartLineItemsItem,
  Schemas$TerminalReaderSetReaderDisplayBodyCartLineItemsItem,
  TerminalReaderSetReaderDisplayBodyCartLineItemsItem,
} from "./terminal-reader-set-reader-display-body-cart-line-items-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Cart
 */
export type TerminalReaderSetReaderDisplayBodyCart = {
  currency: string;
  lineItems: TerminalReaderSetReaderDisplayBodyCartLineItemsItem[];
  tax?: number | undefined;
  total: number;
};

/**
 * @internal
 * TerminalReaderSetReaderDisplayBodyCart without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderSetReaderDisplayBodyCart = {
  currency: string;
  line_items: External$TerminalReaderSetReaderDisplayBodyCartLineItemsItem[];
  tax?: number | undefined;
  total: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderSetReaderDisplayBodyCart
 */
const SchemaIn$TerminalReaderSetReaderDisplayBodyCart: z.ZodType<
  TerminalReaderSetReaderDisplayBodyCart, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    line_items: z.array(
      Schemas$TerminalReaderSetReaderDisplayBodyCartLineItemsItem.in,
    ),
    tax: z.number().int().optional(),
    total: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      line_items: "lineItems",
      tax: "tax",
      total: "total",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderSetReaderDisplayBodyCart
 */
const SchemaOut$TerminalReaderSetReaderDisplayBodyCart: z.ZodType<
  External$TerminalReaderSetReaderDisplayBodyCart, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderSetReaderDisplayBodyCart // the object to be transformed
> = z
  .object({
    currency: z.string(),
    lineItems: z.array(
      Schemas$TerminalReaderSetReaderDisplayBodyCartLineItemsItem.out,
    ),
    tax: z.number().int().optional(),
    total: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      lineItems: "line_items",
      tax: "tax",
      total: "total",
    });
  });

export const Schemas$TerminalReaderSetReaderDisplayBodyCart = {
  in: SchemaIn$TerminalReaderSetReaderDisplayBodyCart,
  out: SchemaOut$TerminalReaderSetReaderDisplayBodyCart,
};
