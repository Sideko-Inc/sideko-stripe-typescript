import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderSetReaderDisplayBodyCartLineItemsItem
 */
export type TerminalReaderSetReaderDisplayBodyCartLineItemsItem = {
  amount: number;
  description: string;
  quantity: number;
};

/**
 * @internal
 * TerminalReaderSetReaderDisplayBodyCartLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderSetReaderDisplayBodyCartLineItemsItem = {
  amount: number;
  description: string;
  quantity: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderSetReaderDisplayBodyCartLineItemsItem
 */
const SchemaIn$TerminalReaderSetReaderDisplayBodyCartLineItemsItem: z.ZodType<
  TerminalReaderSetReaderDisplayBodyCartLineItemsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderSetReaderDisplayBodyCartLineItemsItem
 */
const SchemaOut$TerminalReaderSetReaderDisplayBodyCartLineItemsItem: z.ZodType<
  External$TerminalReaderSetReaderDisplayBodyCartLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderSetReaderDisplayBodyCartLineItemsItem // the object to be transformed
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

export const Schemas$TerminalReaderSetReaderDisplayBodyCartLineItemsItem = {
  in: SchemaIn$TerminalReaderSetReaderDisplayBodyCartLineItemsItem,
  out: SchemaOut$TerminalReaderSetReaderDisplayBodyCartLineItemsItem,
};
