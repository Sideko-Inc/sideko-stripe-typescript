import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel =
  {
    grossAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel =
  {
    gross_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gross_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gross_amount_decimal: "grossAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
  };
