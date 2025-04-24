import {
  External$PaymentLinksResourceOptionalItemAdjustableQuantity,
  PaymentLinksResourceOptionalItemAdjustableQuantity,
  Schemas$PaymentLinksResourceOptionalItemAdjustableQuantity,
} from "./payment-links-resource-optional-item-adjustable-quantity";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceOptionalItem = {
  adjustableQuantity?:
    | PaymentLinksResourceOptionalItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * @internal
 * PaymentLinksResourceOptionalItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceOptionalItem = {
  adjustable_quantity?:
    | External$PaymentLinksResourceOptionalItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceOptionalItem
 */
const SchemaIn$PaymentLinksResourceOptionalItem: z.ZodType<
  PaymentLinksResourceOptionalItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjustable_quantity:
      Schemas$PaymentLinksResourceOptionalItemAdjustableQuantity.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceOptionalItem
 */
const SchemaOut$PaymentLinksResourceOptionalItem: z.ZodType<
  External$PaymentLinksResourceOptionalItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceOptionalItem // the object to be transformed
> = z
  .object({
    adjustableQuantity:
      Schemas$PaymentLinksResourceOptionalItemAdjustableQuantity.out.optional(),
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

export const Schemas$PaymentLinksResourceOptionalItem = {
  in: SchemaIn$PaymentLinksResourceOptionalItem,
  out: SchemaOut$PaymentLinksResourceOptionalItem,
};
