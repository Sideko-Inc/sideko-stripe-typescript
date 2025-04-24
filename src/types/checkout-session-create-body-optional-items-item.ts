import {
  CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity,
  External$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity,
  Schemas$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity,
} from "./checkout-session-create-body-optional-items-item-adjustable-quantity";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyOptionalItemsItem
 */
export type CheckoutSessionCreateBodyOptionalItemsItem = {
  adjustableQuantity?:
    | CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * @internal
 * CheckoutSessionCreateBodyOptionalItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyOptionalItemsItem = {
  adjustable_quantity?:
    | External$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyOptionalItemsItem
 */
const SchemaIn$CheckoutSessionCreateBodyOptionalItemsItem: z.ZodType<
  CheckoutSessionCreateBodyOptionalItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjustable_quantity:
      Schemas$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyOptionalItemsItem
 */
const SchemaOut$CheckoutSessionCreateBodyOptionalItemsItem: z.ZodType<
  External$CheckoutSessionCreateBodyOptionalItemsItem, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyOptionalItemsItem // the object to be transformed
> = z
  .object({
    adjustableQuantity:
      Schemas$CheckoutSessionCreateBodyOptionalItemsItemAdjustableQuantity.out.optional(),
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

export const Schemas$CheckoutSessionCreateBodyOptionalItemsItem = {
  in: SchemaIn$CheckoutSessionCreateBodyOptionalItemsItem,
  out: SchemaOut$CheckoutSessionCreateBodyOptionalItemsItem,
};
