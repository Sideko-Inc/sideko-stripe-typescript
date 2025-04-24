import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel =
  {
    grossAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel =
  {
    gross_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
  };
