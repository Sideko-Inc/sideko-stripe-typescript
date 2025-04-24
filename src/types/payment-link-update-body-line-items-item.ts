import {
  External$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity,
  PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity,
  Schemas$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity,
} from "./payment-link-update-body-line-items-item-adjustable-quantity";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyLineItemsItem
 */
export type PaymentLinkUpdateBodyLineItemsItem = {
  adjustableQuantity?:
    | PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity
    | undefined;
  id: string;
  quantity?: number | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyLineItemsItem = {
  adjustable_quantity?:
    | External$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity
    | undefined;
  id: string;
  quantity?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyLineItemsItem
 */
const SchemaIn$PaymentLinkUpdateBodyLineItemsItem: z.ZodType<
  PaymentLinkUpdateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjustable_quantity:
      Schemas$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity.in.optional(),
    id: z.string(),
    quantity: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjustable_quantity: "adjustableQuantity",
      id: "id",
      quantity: "quantity",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyLineItemsItem
 */
const SchemaOut$PaymentLinkUpdateBodyLineItemsItem: z.ZodType<
  External$PaymentLinkUpdateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyLineItemsItem // the object to be transformed
> = z
  .object({
    adjustableQuantity:
      Schemas$PaymentLinkUpdateBodyLineItemsItemAdjustableQuantity.out.optional(),
    id: z.string(),
    quantity: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjustableQuantity: "adjustable_quantity",
      id: "id",
      quantity: "quantity",
    });
  });

export const Schemas$PaymentLinkUpdateBodyLineItemsItem = {
  in: SchemaIn$PaymentLinkUpdateBodyLineItemsItem,
  out: SchemaOut$PaymentLinkUpdateBodyLineItemsItem,
};
