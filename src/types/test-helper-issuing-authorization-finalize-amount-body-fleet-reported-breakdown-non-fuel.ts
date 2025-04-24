import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel
 */
export type TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel =
  {
    grossAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel =
  {
    gross_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel
 */
const SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel: z.ZodType<
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel
 */
const SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel: z.ZodType<
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel,
    out: SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel,
  };
