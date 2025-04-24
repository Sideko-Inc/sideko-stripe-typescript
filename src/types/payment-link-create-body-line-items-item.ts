import {
  External$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity,
  PaymentLinkCreateBodyLineItemsItemAdjustableQuantity,
  Schemas$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity,
} from "./payment-link-create-body-line-items-item-adjustable-quantity";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyLineItemsItem
 */
export type PaymentLinkCreateBodyLineItemsItem = {
  adjustableQuantity?:
    | PaymentLinkCreateBodyLineItemsItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * @internal
 * PaymentLinkCreateBodyLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyLineItemsItem = {
  adjustable_quantity?:
    | External$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyLineItemsItem
 */
const SchemaIn$PaymentLinkCreateBodyLineItemsItem: z.ZodType<
  PaymentLinkCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjustable_quantity:
      Schemas$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity.in.optional(),
    price: z.string(),
    quantity: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjustable_quantity: "adjustableQuantity",
      price: "price",
      quantity: "quantity",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyLineItemsItem
 */
const SchemaOut$PaymentLinkCreateBodyLineItemsItem: z.ZodType<
  External$PaymentLinkCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyLineItemsItem // the object to be transformed
> = z
  .object({
    adjustableQuantity:
      Schemas$PaymentLinkCreateBodyLineItemsItemAdjustableQuantity.out.optional(),
    price: z.string(),
    quantity: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjustableQuantity: "adjustable_quantity",
      price: "price",
      quantity: "quantity",
    });
  });

export const Schemas$PaymentLinkCreateBodyLineItemsItem = {
  in: SchemaIn$PaymentLinkCreateBodyLineItemsItem,
  out: SchemaOut$PaymentLinkCreateBodyLineItemsItem,
};
