import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem
 */
export type TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem =
  {
    description?: string | undefined;
    quantity?: string | undefined;
    total?: number | undefined;
    unitCost?: number | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem =
  {
    description?: string | undefined;
    quantity?: string | undefined;
    total?: number | undefined;
    unit_cost?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem
 */
const SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem: z.ZodType<
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem
 */
const SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem: z.ZodType<
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem // the object to be transformed
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

export const Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem,
    out: SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsReceiptItem,
  };
