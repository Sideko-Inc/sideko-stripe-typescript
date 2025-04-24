import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionRefundBody
 */
export type TestHelperIssuingTransactionRefundBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The total amount to attempt to refund. This amount is in the provided currency, or defaults to the cards currency, and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  refundAmount?: number | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingTransactionRefundBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionRefundBody = {
  expand?: string[] | undefined;
  refund_amount?: number | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (number | undefined)
    | External$TestHelperIssuingTransactionRefundBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionRefundBody
 */
const SchemaIn$TestHelperIssuingTransactionRefundBody: z.ZodType<
  TestHelperIssuingTransactionRefundBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    refund_amount: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      refund_amount: "refundAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionRefundBody
 */
const SchemaOut$TestHelperIssuingTransactionRefundBody: z.ZodType<
  External$TestHelperIssuingTransactionRefundBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionRefundBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    refundAmount: z.number().int().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      refundAmount: "refund_amount",
    });
  });

export const Schemas$TestHelperIssuingTransactionRefundBody = {
  in: SchemaIn$TestHelperIssuingTransactionRefundBody,
  out: SchemaOut$TestHelperIssuingTransactionRefundBody,
};
