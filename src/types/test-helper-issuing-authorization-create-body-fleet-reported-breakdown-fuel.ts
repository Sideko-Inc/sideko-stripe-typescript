import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel
 */
export type TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel =
  {
    grossAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel =
  {
    gross_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel // the object to be transformed
> = z
  .object({
    grossAmountDecimal: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      grossAmountDecimal: "gross_amount_decimal",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel,
    out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel,
  };
