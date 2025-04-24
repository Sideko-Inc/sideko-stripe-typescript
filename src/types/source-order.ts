import { External$Shipping, Schemas$Shipping, Shipping } from "./shipping";
import {
  External$SourceOrderItem,
  Schemas$SourceOrderItem,
  SourceOrderItem,
} from "./source-order-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceOrder = {
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The email address of the customer placing the order.
   */
  email?: string | undefined;
  /**
   * List of items constituting the order.
   */
  items?: SourceOrderItem[] | null | undefined;
  shipping?: Shipping | undefined;
};

/**
 * @internal
 * SourceOrder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceOrder = {
  amount: number;
  currency: string;
  email?: string | undefined;
  items?: External$SourceOrderItem[] | null | undefined;
  shipping?: External$Shipping | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceOrder
 */
const SchemaIn$SourceOrder: z.ZodType<
  SourceOrder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    email: z.string().optional(),
    items: z.array(Schemas$SourceOrderItem.in).nullable().optional(),
    shipping: Schemas$Shipping.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      email: "email",
      items: "items",
      shipping: "shipping",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceOrder
 */
const SchemaOut$SourceOrder: z.ZodType<
  External$SourceOrder, // output type of this zod object
  z.ZodTypeDef,
  SourceOrder // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    email: z.string().optional(),
    items: z.array(Schemas$SourceOrderItem.out).nullable().optional(),
    shipping: Schemas$Shipping.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      email: "email",
      items: "items",
      shipping: "shipping",
    });
  });

export const Schemas$SourceOrder = {
  in: SchemaIn$SourceOrder,
  out: SchemaOut$SourceOrder,
};
