import {
  External$LineItemsDiscountAmount,
  LineItemsDiscountAmount,
  Schemas$LineItemsDiscountAmount,
} from "./line-items-discount-amount";
import {
  External$LineItemsTaxAmount,
  LineItemsTaxAmount,
  Schemas$LineItemsTaxAmount,
} from "./line-items-tax-amount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceTotalDetailsResourceBreakdown = {
  /**
   * The aggregated discounts.
   */
  discounts: LineItemsDiscountAmount[];
  /**
   * The aggregated tax amounts by rate.
   */
  taxes: LineItemsTaxAmount[];
};

/**
 * @internal
 * QuotesResourceTotalDetailsResourceBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceTotalDetailsResourceBreakdown = {
  discounts: External$LineItemsDiscountAmount[];
  taxes: External$LineItemsTaxAmount[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceTotalDetailsResourceBreakdown
 */
const SchemaIn$QuotesResourceTotalDetailsResourceBreakdown: z.ZodType<
  QuotesResourceTotalDetailsResourceBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z.array(z.lazy(() => Schemas$LineItemsDiscountAmount.in)),
    taxes: z.array(Schemas$LineItemsTaxAmount.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      taxes: "taxes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceTotalDetailsResourceBreakdown
 */
const SchemaOut$QuotesResourceTotalDetailsResourceBreakdown: z.ZodType<
  External$QuotesResourceTotalDetailsResourceBreakdown, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceTotalDetailsResourceBreakdown // the object to be transformed
> = z
  .object({
    discounts: z.array(z.lazy(() => Schemas$LineItemsDiscountAmount.out)),
    taxes: z.array(Schemas$LineItemsTaxAmount.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      taxes: "taxes",
    });
  });

export const Schemas$QuotesResourceTotalDetailsResourceBreakdown = {
  in: SchemaIn$QuotesResourceTotalDetailsResourceBreakdown,
  out: SchemaOut$QuotesResourceTotalDetailsResourceBreakdown,
};
