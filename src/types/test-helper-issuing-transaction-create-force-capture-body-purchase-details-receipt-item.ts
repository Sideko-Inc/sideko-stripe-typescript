import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem
 */
export type TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem =
  {
    description?: string | undefined;
    quantity?: string | undefined;
    total?: number | undefined;
    unitCost?: number | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem =
  {
    description?: string | undefined;
    quantity?: string | undefined;
    total?: number | undefined;
    unit_cost?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    quantity: z.string().optional(),
    total: z.number().int().optional(),
    unit_cost: z.number().int().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    quantity: z.string().optional(),
    total: z.number().int().optional(),
    unitCost: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      quantity: "quantity",
      total: "total",
      unitCost: "unit_cost",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem,
    out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsReceiptItem,
  };
