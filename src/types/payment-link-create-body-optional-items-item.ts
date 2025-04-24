import {
  External$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity,
  PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity,
  Schemas$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity,
} from "./payment-link-create-body-optional-items-item-adjustable-quantity";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyOptionalItemsItem
 */
export type PaymentLinkCreateBodyOptionalItemsItem = {
  adjustableQuantity?:
    | PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * @internal
 * PaymentLinkCreateBodyOptionalItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyOptionalItemsItem = {
  adjustable_quantity?:
    | External$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyOptionalItemsItem
 */
const SchemaIn$PaymentLinkCreateBodyOptionalItemsItem: z.ZodType<
  PaymentLinkCreateBodyOptionalItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjustable_quantity:
      Schemas$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyOptionalItemsItem
 */
const SchemaOut$PaymentLinkCreateBodyOptionalItemsItem: z.ZodType<
  External$PaymentLinkCreateBodyOptionalItemsItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyOptionalItemsItem // the object to be transformed
> = z
  .object({
    adjustableQuantity:
      Schemas$PaymentLinkCreateBodyOptionalItemsItemAdjustableQuantity.out.optional(),
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

export const Schemas$PaymentLinkCreateBodyOptionalItemsItem = {
  in: SchemaIn$PaymentLinkCreateBodyOptionalItemsItem,
  out: SchemaOut$PaymentLinkCreateBodyOptionalItemsItem,
};
