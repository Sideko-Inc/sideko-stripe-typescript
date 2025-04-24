import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging
 */
export type TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging =
  {
    checkInAt?: number | undefined;
    nights?: number | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging =
  {
    check_in_at?: number | undefined;
    nights?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging
 */
const SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging: z.ZodType<
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    check_in_at: z.number().int().optional(),
    nights: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      check_in_at: "checkInAt",
      nights: "nights",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging
 */
const SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging: z.ZodType<
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging // the object to be transformed
> = z
  .object({
    checkInAt: z.number().int().optional(),
    nights: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      checkInAt: "check_in_at",
      nights: "nights",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging,
    out: SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsLodging,
  };
