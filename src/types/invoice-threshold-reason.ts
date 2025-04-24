import {
  External$InvoiceItemThresholdReason,
  InvoiceItemThresholdReason,
  Schemas$InvoiceItemThresholdReason,
} from "./invoice-item-threshold-reason";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceThresholdReason = {
  /**
   * The total invoice amount threshold boundary if it triggered the threshold invoice.
   */
  amountGte?: number | null | undefined;
  /**
   * Indicates which line items triggered a threshold invoice.
   */
  itemReasons: InvoiceItemThresholdReason[];
};

/**
 * @internal
 * InvoiceThresholdReason without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceThresholdReason = {
  amount_gte?: number | null | undefined;
  item_reasons: External$InvoiceItemThresholdReason[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceThresholdReason
 */
const SchemaIn$InvoiceThresholdReason: z.ZodType<
  InvoiceThresholdReason, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_gte: z.number().int().nullable().optional(),
    item_reasons: z.array(Schemas$InvoiceItemThresholdReason.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_gte: "amountGte",
      item_reasons: "itemReasons",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceThresholdReason
 */
const SchemaOut$InvoiceThresholdReason: z.ZodType<
  External$InvoiceThresholdReason, // output type of this zod object
  z.ZodTypeDef,
  InvoiceThresholdReason // the object to be transformed
> = z
  .object({
    amountGte: z.number().int().nullable().optional(),
    itemReasons: z.array(Schemas$InvoiceItemThresholdReason.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountGte: "amount_gte",
      itemReasons: "item_reasons",
    });
  });

export const Schemas$InvoiceThresholdReason = {
  in: SchemaIn$InvoiceThresholdReason,
  out: SchemaOut$InvoiceThresholdReason,
};
