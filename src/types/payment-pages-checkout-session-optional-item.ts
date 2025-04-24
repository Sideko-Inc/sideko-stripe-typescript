import {
  External$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity,
  PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity,
  Schemas$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity,
} from "./payment-pages-checkout-session-optional-item-adjustable-quantity";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionOptionalItem = {
  adjustableQuantity?:
    | PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionOptionalItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionOptionalItem = {
  adjustable_quantity?:
    | External$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity
    | undefined;
  price: string;
  quantity: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionOptionalItem
 */
const SchemaIn$PaymentPagesCheckoutSessionOptionalItem: z.ZodType<
  PaymentPagesCheckoutSessionOptionalItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjustable_quantity:
      Schemas$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionOptionalItem
 */
const SchemaOut$PaymentPagesCheckoutSessionOptionalItem: z.ZodType<
  External$PaymentPagesCheckoutSessionOptionalItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionOptionalItem // the object to be transformed
> = z
  .object({
    adjustableQuantity:
      Schemas$PaymentPagesCheckoutSessionOptionalItemAdjustableQuantity.out.optional(),
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

export const Schemas$PaymentPagesCheckoutSessionOptionalItem = {
  in: SchemaIn$PaymentPagesCheckoutSessionOptionalItem,
  out: SchemaOut$PaymentPagesCheckoutSessionOptionalItem,
};
