import {
  CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity,
  External$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity,
  Schemas$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity,
} from "./checkout-session-create-body-line-items-item-adjustable-quantity";
import {
  CheckoutSessionCreateBodyLineItemsItemPriceData,
  External$CheckoutSessionCreateBodyLineItemsItemPriceData,
  Schemas$CheckoutSessionCreateBodyLineItemsItemPriceData,
} from "./checkout-session-create-body-line-items-item-price-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyLineItemsItem
 */
export type CheckoutSessionCreateBodyLineItemsItem = {
  adjustableQuantity?:
    | CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity
    | undefined;
  dynamicTaxRates?: string[] | undefined;
  price?: string | undefined;
  priceData?: CheckoutSessionCreateBodyLineItemsItemPriceData | undefined;
  quantity?: number | undefined;
  taxRates?: string[] | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyLineItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyLineItemsItem = {
  adjustable_quantity?:
    | External$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity
    | undefined;
  dynamic_tax_rates?: string[] | undefined;
  price?: string | undefined;
  price_data?:
    | External$CheckoutSessionCreateBodyLineItemsItemPriceData
    | undefined;
  quantity?: number | undefined;
  tax_rates?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyLineItemsItem
 */
const SchemaIn$CheckoutSessionCreateBodyLineItemsItem: z.ZodType<
  CheckoutSessionCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjustable_quantity:
      Schemas$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity.in.optional(),
    dynamic_tax_rates: z.array(z.string()).optional(),
    price: z.string().optional(),
    price_data:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceData.in.optional(),
    quantity: z.number().int().optional(),
    tax_rates: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjustable_quantity: "adjustableQuantity",
      dynamic_tax_rates: "dynamicTaxRates",
      price: "price",
      price_data: "priceData",
      quantity: "quantity",
      tax_rates: "taxRates",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyLineItemsItem
 */
const SchemaOut$CheckoutSessionCreateBodyLineItemsItem: z.ZodType<
  External$CheckoutSessionCreateBodyLineItemsItem, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyLineItemsItem // the object to be transformed
> = z
  .object({
    adjustableQuantity:
      Schemas$CheckoutSessionCreateBodyLineItemsItemAdjustableQuantity.out.optional(),
    dynamicTaxRates: z.array(z.string()).optional(),
    price: z.string().optional(),
    priceData:
      Schemas$CheckoutSessionCreateBodyLineItemsItemPriceData.out.optional(),
    quantity: z.number().int().optional(),
    taxRates: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjustableQuantity: "adjustable_quantity",
      dynamicTaxRates: "dynamic_tax_rates",
      price: "price",
      priceData: "price_data",
      quantity: "quantity",
      taxRates: "tax_rates",
    });
  });

export const Schemas$CheckoutSessionCreateBodyLineItemsItem = {
  in: SchemaIn$CheckoutSessionCreateBodyLineItemsItem,
  out: SchemaOut$CheckoutSessionCreateBodyLineItemsItem,
};
