import {
  External$TerminalReaderReaderResourceLineItem,
  Schemas$TerminalReaderReaderResourceLineItem,
  TerminalReaderReaderResourceLineItem,
} from "./terminal-reader-reader-resource-line-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a cart to be displayed on the reader
 */
export type TerminalReaderReaderResourceCart = {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * List of line items in the cart.
   */
  lineItems: TerminalReaderReaderResourceLineItem[];
  /**
   * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  tax?: number | null | undefined;
  /**
   * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  total: number;
};

/**
 * @internal
 * TerminalReaderReaderResourceCart without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceCart = {
  currency: string;
  line_items: External$TerminalReaderReaderResourceLineItem[];
  tax?: number | null | undefined;
  total: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceCart
 */
const SchemaIn$TerminalReaderReaderResourceCart: z.ZodType<
  TerminalReaderReaderResourceCart, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    line_items: z.array(Schemas$TerminalReaderReaderResourceLineItem.in),
    tax: z.number().int().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceCart
 */
const SchemaOut$TerminalReaderReaderResourceCart: z.ZodType<
  External$TerminalReaderReaderResourceCart, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceCart // the object to be transformed
> = z
  .object({
    currency: z.string(),
    lineItems: z.array(Schemas$TerminalReaderReaderResourceLineItem.out),
    tax: z.number().int().nullable().optional(),
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

export const Schemas$TerminalReaderReaderResourceCart = {
  in: SchemaIn$TerminalReaderReaderResourceCart,
  out: SchemaOut$TerminalReaderReaderResourceCart,
};
