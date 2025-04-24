import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a line item to be displayed on the reader
 */
export type TerminalReaderReaderResourceLineItem = {
  /**
   * The amount of the line item. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Description of the line item.
   */
  description: string;
  /**
   * The quantity of the line item.
   */
  quantity: number;
};

/**
 * @internal
 * TerminalReaderReaderResourceLineItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceLineItem = {
  amount: number;
  description: string;
  quantity: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceLineItem
 */
const SchemaIn$TerminalReaderReaderResourceLineItem: z.ZodType<
  TerminalReaderReaderResourceLineItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    description: z.string(),
    quantity: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      quantity: "quantity",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceLineItem
 */
const SchemaOut$TerminalReaderReaderResourceLineItem: z.ZodType<
  External$TerminalReaderReaderResourceLineItem, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceLineItem // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    description: z.string(),
    quantity: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      quantity: "quantity",
    });
  });

export const Schemas$TerminalReaderReaderResourceLineItem = {
  in: SchemaIn$TerminalReaderReaderResourceLineItem,
  out: SchemaOut$TerminalReaderReaderResourceLineItem,
};
