import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceCreateBodySourceOrderItemsItem
 */
export type SourceCreateBodySourceOrderItemsItem = {
  amount?: number | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  parent?: string | undefined;
  quantity?: number | undefined;
  type?: ("discount" | "shipping" | "sku" | "tax") | undefined;
};

/**
 * @internal
 * SourceCreateBodySourceOrderItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodySourceOrderItemsItem = {
  amount?: number | undefined;
  currency?: string | undefined;
  description?: string | undefined;
  parent?: string | undefined;
  quantity?: number | undefined;
  type?: ("discount" | "shipping" | "sku" | "tax") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodySourceOrderItemsItem
 */
const SchemaIn$SourceCreateBodySourceOrderItemsItem: z.ZodType<
  SourceCreateBodySourceOrderItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    description: z.string().optional(),
    parent: z.string().optional(),
    quantity: z.number().int().optional(),
    type: z.enum(["discount", "shipping", "sku", "tax"]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodySourceOrderItemsItem
 */
const SchemaOut$SourceCreateBodySourceOrderItemsItem: z.ZodType<
  External$SourceCreateBodySourceOrderItemsItem, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodySourceOrderItemsItem // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    currency: z.string().optional(),
    description: z.string().optional(),
    parent: z.string().optional(),
    quantity: z.number().int().optional(),
    type: z.enum(["discount", "shipping", "sku", "tax"]).optional(),
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

export const Schemas$SourceCreateBodySourceOrderItemsItem = {
  in: SchemaIn$SourceCreateBodySourceOrderItemsItem,
  out: SchemaOut$SourceCreateBodySourceOrderItemsItem,
};
