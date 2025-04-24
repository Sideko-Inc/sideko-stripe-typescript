import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax =
  {
    localAmountDecimal?: string | undefined;
    nationalAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax =
  {
    local_amount_decimal?: string | undefined;
    national_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    local_amount_decimal: z.string().optional(),
    national_amount_decimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      local_amount_decimal: "localAmountDecimal",
      national_amount_decimal: "nationalAmountDecimal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax // the object to be transformed
> = z
  .object({
    localAmountDecimal: z.string().optional(),
    nationalAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      localAmountDecimal: "local_amount_decimal",
      nationalAmountDecimal: "national_amount_decimal",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
  };
