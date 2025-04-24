import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionReceiptData = {
  /**
   * The description of the item. The maximum length of this field is 26 characters.
   */
  description?: string | null | undefined;
  /**
   * The quantity of the item.
   */
  quantity?: number | null | undefined;
  /**
   * The total for this line item in cents.
   */
  total?: number | null | undefined;
  /**
   * The unit cost of the item in cents.
   */
  unitCost?: number | null | undefined;
};

/**
 * @internal
 * IssuingTransactionReceiptData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionReceiptData = {
  description?: string | null | undefined;
  quantity?: number | null | undefined;
  total?: number | null | undefined;
  unit_cost?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionReceiptData
 */
const SchemaIn$IssuingTransactionReceiptData: z.ZodType<
  IssuingTransactionReceiptData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().nullable().optional(),
    quantity: z.number().nullable().optional(),
    total: z.number().int().nullable().optional(),
    unit_cost: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      quantity: "quantity",
      total: "total",
      unit_cost: "unitCost",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionReceiptData
 */
const SchemaOut$IssuingTransactionReceiptData: z.ZodType<
  External$IssuingTransactionReceiptData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionReceiptData // the object to be transformed
> = z
  .object({
    description: z.string().nullable().optional(),
    quantity: z.number().nullable().optional(),
    total: z.number().int().nullable().optional(),
    unitCost: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      quantity: "quantity",
      total: "total",
      unitCost: "unit_cost",
    });
  });

export const Schemas$IssuingTransactionReceiptData = {
  in: SchemaIn$IssuingTransactionReceiptData,
  out: SchemaOut$IssuingTransactionReceiptData,
};
