import {
  External$LineItemsTaxAmount,
  LineItemsTaxAmount,
  Schemas$LineItemsTaxAmount,
} from "./line-items-tax-amount";
import {
  External$ShippingRate,
  Schemas$ShippingRate,
  ShippingRate,
} from "./shipping-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionShippingCost = {
  /**
   * Total shipping cost before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
   */
  amountTax: number;
  /**
   * Total shipping cost after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * The ID of the ShippingRate for this order.
   */
  shippingRate?: (string | ShippingRate) | undefined;
  /**
   * The taxes applied to the shipping rate.
   */
  taxes?: LineItemsTaxAmount[] | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionShippingCost = {
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  shipping_rate?: (string | External$ShippingRate) | undefined;
  taxes?: External$LineItemsTaxAmount[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionShippingCost
 */
const SchemaIn$PaymentPagesCheckoutSessionShippingCost: z.ZodType<
  PaymentPagesCheckoutSessionShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_subtotal: z.number().int(),
    amount_tax: z.number().int(),
    amount_total: z.number().int(),
    shipping_rate: z.union([z.string(), Schemas$ShippingRate.in]).optional(),
    taxes: z.array(Schemas$LineItemsTaxAmount.in).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_subtotal: "amountSubtotal",
      amount_tax: "amountTax",
      amount_total: "amountTotal",
      shipping_rate: "shippingRate",
      taxes: "taxes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionShippingCost
 */
const SchemaOut$PaymentPagesCheckoutSessionShippingCost: z.ZodType<
  External$PaymentPagesCheckoutSessionShippingCost, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionShippingCost // the object to be transformed
> = z
  .object({
    amountSubtotal: z.number().int(),
    amountTax: z.number().int(),
    amountTotal: z.number().int(),
    shippingRate: z.union([z.string(), Schemas$ShippingRate.out]).optional(),
    taxes: z.array(Schemas$LineItemsTaxAmount.out).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountSubtotal: "amount_subtotal",
      amountTax: "amount_tax",
      amountTotal: "amount_total",
      shippingRate: "shipping_rate",
      taxes: "taxes",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionShippingCost = {
  in: SchemaIn$PaymentPagesCheckoutSessionShippingCost,
  out: SchemaOut$PaymentPagesCheckoutSessionShippingCost,
};
