import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel
 */
export type TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel =
  {
    grossAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel =
  {
    gross_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel
 */
const SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel: z.ZodType<
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel
 */
const SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel: z.ZodType<
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel,
    out: SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel,
  };
