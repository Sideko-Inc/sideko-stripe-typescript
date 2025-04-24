import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceItemThresholdReason = {
  /**
   * The IDs of the line items that triggered the threshold invoice.
   */
  lineItemIds: string[];
  /**
   * The quantity threshold boundary that applied to the given line item.
   */
  usageGte: number;
};

/**
 * @internal
 * InvoiceItemThresholdReason without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceItemThresholdReason = {
  line_item_ids: string[];
  usage_gte: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceItemThresholdReason
 */
const SchemaIn$InvoiceItemThresholdReason: z.ZodType<
  InvoiceItemThresholdReason, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    line_item_ids: z.array(z.string()),
    usage_gte: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      line_item_ids: "lineItemIds",
      usage_gte: "usageGte",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceItemThresholdReason
 */
const SchemaOut$InvoiceItemThresholdReason: z.ZodType<
  External$InvoiceItemThresholdReason, // output type of this zod object
  z.ZodTypeDef,
  InvoiceItemThresholdReason // the object to be transformed
> = z
  .object({
    lineItemIds: z.array(z.string()),
    usageGte: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      lineItemIds: "line_item_ids",
      usageGte: "usage_gte",
    });
  });

export const Schemas$InvoiceItemThresholdReason = {
  in: SchemaIn$InvoiceItemThresholdReason,
  out: SchemaOut$InvoiceItemThresholdReason,
};
