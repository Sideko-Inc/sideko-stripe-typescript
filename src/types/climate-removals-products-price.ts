import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ClimateRemovalsProductsPrice = {
  /**
   * Fees for one metric ton of carbon removal in the currency's smallest unit.
   */
  amountFees: number;
  /**
   * Subtotal for one metric ton of carbon removal (excluding fees) in the currency's smallest unit.
   */
  amountSubtotal: number;
  /**
   * Total for one metric ton of carbon removal (including fees) in the currency's smallest unit.
   */
  amountTotal: number;
};

/**
 * @internal
 * ClimateRemovalsProductsPrice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateRemovalsProductsPrice = {
  amount_fees: number;
  amount_subtotal: number;
  amount_total: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateRemovalsProductsPrice
 */
const SchemaIn$ClimateRemovalsProductsPrice: z.ZodType<
  ClimateRemovalsProductsPrice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_fees: z.number().int(),
    amount_subtotal: z.number().int(),
    amount_total: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_fees: "amountFees",
      amount_subtotal: "amountSubtotal",
      amount_total: "amountTotal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateRemovalsProductsPrice
 */
const SchemaOut$ClimateRemovalsProductsPrice: z.ZodType<
  External$ClimateRemovalsProductsPrice, // output type of this zod object
  z.ZodTypeDef,
  ClimateRemovalsProductsPrice // the object to be transformed
> = z
  .object({
    amountFees: z.number().int(),
    amountSubtotal: z.number().int(),
    amountTotal: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountFees: "amount_fees",
      amountSubtotal: "amount_subtotal",
      amountTotal: "amount_total",
    });
  });

export const Schemas$ClimateRemovalsProductsPrice = {
  in: SchemaIn$ClimateRemovalsProductsPrice,
  out: SchemaOut$ClimateRemovalsProductsPrice,
};
