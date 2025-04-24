import {
  External$QuotesResourceTotalDetailsResourceBreakdown,
  QuotesResourceTotalDetailsResourceBreakdown,
  Schemas$QuotesResourceTotalDetailsResourceBreakdown,
} from "./quotes-resource-total-details-resource-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceTotalDetails = {
  /**
   * This is the sum of all the discounts.
   */
  amountDiscount: number;
  /**
   * This is the sum of all the shipping amounts.
   */
  amountShipping?: number | null | undefined;
  /**
   * This is the sum of all the tax amounts.
   */
  amountTax: number;
  breakdown?: QuotesResourceTotalDetailsResourceBreakdown | undefined;
};

/**
 * @internal
 * QuotesResourceTotalDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceTotalDetails = {
  amount_discount: number;
  amount_shipping?: number | null | undefined;
  amount_tax: number;
  breakdown?: External$QuotesResourceTotalDetailsResourceBreakdown | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceTotalDetails
 */
const SchemaIn$QuotesResourceTotalDetails: z.ZodType<
  QuotesResourceTotalDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_discount: z.number().int(),
    amount_shipping: z.number().int().nullable().optional(),
    amount_tax: z.number().int(),
    breakdown: z.lazy(() =>
      Schemas$QuotesResourceTotalDetailsResourceBreakdown.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_discount: "amountDiscount",
      amount_shipping: "amountShipping",
      amount_tax: "amountTax",
      breakdown: "breakdown",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceTotalDetails
 */
const SchemaOut$QuotesResourceTotalDetails: z.ZodType<
  External$QuotesResourceTotalDetails, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceTotalDetails // the object to be transformed
> = z
  .object({
    amountDiscount: z.number().int(),
    amountShipping: z.number().int().nullable().optional(),
    amountTax: z.number().int(),
    breakdown: z.lazy(() =>
      Schemas$QuotesResourceTotalDetailsResourceBreakdown.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountDiscount: "amount_discount",
      amountShipping: "amount_shipping",
      amountTax: "amount_tax",
      breakdown: "breakdown",
    });
  });

export const Schemas$QuotesResourceTotalDetails = {
  in: SchemaIn$QuotesResourceTotalDetails,
  out: SchemaOut$QuotesResourceTotalDetails,
};
