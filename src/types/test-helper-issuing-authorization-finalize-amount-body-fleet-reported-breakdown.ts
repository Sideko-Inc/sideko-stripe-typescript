import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel,
} from "./test-helper-issuing-authorization-finalize-amount-body-fleet-reported-breakdown-fuel";
import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel,
} from "./test-helper-issuing-authorization-finalize-amount-body-fleet-reported-breakdown-non-fuel";
import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownTax,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownTax,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownTax,
} from "./test-helper-issuing-authorization-finalize-amount-body-fleet-reported-breakdown-tax";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown
 */
export type TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown =
  {
    fuel?:
      | TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel
      | undefined;
    nonFuel?:
      | TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownTax
      | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown =
  {
    fuel?:
      | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel
      | undefined;
    non_fuel?:
      | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownTax
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown
 */
const SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown: z.ZodType<
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fuel: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel.in.optional(),
    non_fuel:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel.in.optional(),
    tax: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownTax.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      non_fuel: "nonFuel",
      tax: "tax",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown
 */
const SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown: z.ZodType<
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown // the object to be transformed
> = z
  .object({
    fuel: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownFuel.out.optional(),
    nonFuel:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownNonFuel.out.optional(),
    tax: Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdownTax.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      nonFuel: "non_fuel",
      tax: "tax",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown,
    out: SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown,
  };
