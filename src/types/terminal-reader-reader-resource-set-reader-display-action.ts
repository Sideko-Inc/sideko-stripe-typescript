import {
  External$TerminalReaderReaderResourceCart,
  Schemas$TerminalReaderReaderResourceCart,
  TerminalReaderReaderResourceCart,
} from "./terminal-reader-reader-resource-cart";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents a reader action to set the reader display
 */
export type TerminalReaderReaderResourceSetReaderDisplayAction = {
  /**
   * Represents a cart to be displayed on the reader
   */
  cart?: TerminalReaderReaderResourceCart | undefined;
  /**
   * Type of information to be displayed by the reader.
   */
  type: "cart";
};

/**
 * @internal
 * TerminalReaderReaderResourceSetReaderDisplayAction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderReaderResourceSetReaderDisplayAction = {
  cart?: External$TerminalReaderReaderResourceCart | undefined;
  type: "cart";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderReaderResourceSetReaderDisplayAction
 */
const SchemaIn$TerminalReaderReaderResourceSetReaderDisplayAction: z.ZodType<
  TerminalReaderReaderResourceSetReaderDisplayAction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cart: Schemas$TerminalReaderReaderResourceCart.in.optional(),
    type: z.enum(["cart"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cart: "cart",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderReaderResourceSetReaderDisplayAction
 */
const SchemaOut$TerminalReaderReaderResourceSetReaderDisplayAction: z.ZodType<
  External$TerminalReaderReaderResourceSetReaderDisplayAction, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderReaderResourceSetReaderDisplayAction // the object to be transformed
> = z
  .object({
    cart: Schemas$TerminalReaderReaderResourceCart.out.optional(),
    type: z.enum(["cart"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cart: "cart",
      type: "type",
    });
  });

export const Schemas$TerminalReaderReaderResourceSetReaderDisplayAction = {
  in: SchemaIn$TerminalReaderReaderResourceSetReaderDisplayAction,
  out: SchemaOut$TerminalReaderReaderResourceSetReaderDisplayAction,
};
