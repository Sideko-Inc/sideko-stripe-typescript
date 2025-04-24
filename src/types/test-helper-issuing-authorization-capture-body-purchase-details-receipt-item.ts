import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem =
  {
    description?: string | undefined;
    quantity?: string | undefined;
    total?: number | undefined;
    unitCost?: number | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem =
  {
    description?: string | undefined;
    quantity?: string | undefined;
    total?: number | undefined;
    unit_cost?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem // the object to be transformed
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

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsReceiptItem,
  };
