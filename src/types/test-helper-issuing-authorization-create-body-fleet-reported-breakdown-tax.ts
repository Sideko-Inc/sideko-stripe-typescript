import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax
 */
export type TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax =
  {
    localAmountDecimal?: string | undefined;
    nationalAmountDecimal?: string | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax =
  {
    local_amount_decimal?: string | undefined;
    national_amount_decimal?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax // the object to be transformed
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

export const Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax,
    out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax,
  };
