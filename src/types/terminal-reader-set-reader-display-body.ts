import {
  External$TerminalReaderSetReaderDisplayBodyCart,
  Schemas$TerminalReaderSetReaderDisplayBodyCart,
  TerminalReaderSetReaderDisplayBodyCart,
} from "./terminal-reader-set-reader-display-body-cart";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalReaderSetReaderDisplayBody
 */
export type TerminalReaderSetReaderDisplayBody = {
  /**
   * Cart
   */
  cart?: TerminalReaderSetReaderDisplayBodyCart | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Type
   */
  type: "cart";

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (TerminalReaderSetReaderDisplayBodyCart | undefined)
    | (string[] | undefined)
    | "cart"
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TerminalReaderSetReaderDisplayBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalReaderSetReaderDisplayBody = {
  cart?: External$TerminalReaderSetReaderDisplayBodyCart | undefined;
  expand?: string[] | undefined;
  type: "cart";

  [additionalProperty: string]:
    | (External$TerminalReaderSetReaderDisplayBodyCart | undefined)
    | (string[] | undefined)
    | "cart"
    | External$TerminalReaderSetReaderDisplayBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalReaderSetReaderDisplayBody
 */
const SchemaIn$TerminalReaderSetReaderDisplayBody: z.ZodType<
  TerminalReaderSetReaderDisplayBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cart: Schemas$TerminalReaderSetReaderDisplayBodyCart.in.optional(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cart"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cart: "cart",
      expand: "expand",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalReaderSetReaderDisplayBody
 */
const SchemaOut$TerminalReaderSetReaderDisplayBody: z.ZodType<
  External$TerminalReaderSetReaderDisplayBody, // output type of this zod object
  z.ZodTypeDef,
  TerminalReaderSetReaderDisplayBody // the object to be transformed
> = z
  .object({
    cart: Schemas$TerminalReaderSetReaderDisplayBodyCart.out.optional(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cart"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cart: "cart",
      expand: "expand",
      type: "type",
    });
  });

export const Schemas$TerminalReaderSetReaderDisplayBody = {
  in: SchemaIn$TerminalReaderSetReaderDisplayBody,
  out: SchemaOut$TerminalReaderSetReaderDisplayBody,
};
