import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SourceOrderItem = {
  /**
   * The amount (price) for this order item.
   */
  amount?: number | null | undefined;
  /**
   * This currency of this order item. Required when `amount` is present.
   */
  currency?: string | null | undefined;
  /**
   * Human-readable description for this order item.
   */
  description?: string | null | undefined;
  /**
   * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
   */
  parent?: string | null | undefined;
  /**
   * The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
   */
  quantity?: number | undefined;
  /**
   * The type of this order item. Must be `sku`, `tax`, or `shipping`.
   */
  type?: string | null | undefined;
};

/**
 * @internal
 * SourceOrderItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceOrderItem = {
  amount?: number | null | undefined;
  currency?: string | null | undefined;
  description?: string | null | undefined;
  parent?: string | null | undefined;
  quantity?: number | undefined;
  type?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceOrderItem
 */
const SchemaIn$SourceOrderItem: z.ZodType<
  SourceOrderItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    currency: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    parent: z.string().nullable().optional(),
    quantity: z.number().int().optional(),
    type: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      parent: "parent",
      quantity: "quantity",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceOrderItem
 */
const SchemaOut$SourceOrderItem: z.ZodType<
  External$SourceOrderItem, // output type of this zod object
  z.ZodTypeDef,
  SourceOrderItem // the object to be transformed
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    currency: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    parent: z.string().nullable().optional(),
    quantity: z.number().int().optional(),
    type: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      description: "description",
      parent: "parent",
      quantity: "quantity",
      type: "type",
    });
  });

export const Schemas$SourceOrderItem = {
  in: SchemaIn$SourceOrderItem,
  out: SchemaOut$SourceOrderItem,
};
