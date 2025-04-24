import {
  External$QuotesResourceTotalDetails,
  QuotesResourceTotalDetails,
  Schemas$QuotesResourceTotalDetails,
} from "./quotes-resource-total-details";
import {
  External$QuotesResourceUpfrontLineItems,
  QuotesResourceUpfrontLineItems,
  Schemas$QuotesResourceUpfrontLineItems,
} from "./quotes-resource-upfront-line-items";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceUpfront = {
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
   */
  lineItems?: QuotesResourceUpfrontLineItems | undefined;
  totalDetails: QuotesResourceTotalDetails;
};

/**
 * @internal
 * QuotesResourceUpfront without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceUpfront = {
  amount_subtotal: number;
  amount_total: number;
  line_items?: External$QuotesResourceUpfrontLineItems | undefined;
  total_details: External$QuotesResourceTotalDetails;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceUpfront
 */
const SchemaIn$QuotesResourceUpfront: z.ZodType<
  QuotesResourceUpfront, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_subtotal: z.number().int(),
    amount_total: z.number().int(),
    line_items: z.lazy(() =>
      Schemas$QuotesResourceUpfrontLineItems.in.optional(),
    ),
    total_details: z.lazy(() => Schemas$QuotesResourceTotalDetails.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_subtotal: "amountSubtotal",
      amount_total: "amountTotal",
      line_items: "lineItems",
      total_details: "totalDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceUpfront
 */
const SchemaOut$QuotesResourceUpfront: z.ZodType<
  External$QuotesResourceUpfront, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceUpfront // the object to be transformed
> = z
  .object({
    amountSubtotal: z.number().int(),
    amountTotal: z.number().int(),
    lineItems: z.lazy(() =>
      Schemas$QuotesResourceUpfrontLineItems.out.optional(),
    ),
    totalDetails: z.lazy(() => Schemas$QuotesResourceTotalDetails.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountSubtotal: "amount_subtotal",
      amountTotal: "amount_total",
      lineItems: "line_items",
      totalDetails: "total_details",
    });
  });

export const Schemas$QuotesResourceUpfront = {
  in: SchemaIn$QuotesResourceUpfront,
  out: SchemaOut$QuotesResourceUpfront,
};
