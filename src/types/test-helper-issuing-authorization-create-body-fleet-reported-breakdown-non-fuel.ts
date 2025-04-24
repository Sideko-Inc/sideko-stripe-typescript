import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel
 */
export type TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel =
  {
    grossAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel =
  {
    gross_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel,
    out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel,
  };
