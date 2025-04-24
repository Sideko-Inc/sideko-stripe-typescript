import {
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel,
} from "./test-helper-issuing-authorization-create-body-fleet-reported-breakdown-fuel";
import {
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel,
} from "./test-helper-issuing-authorization-create-body-fleet-reported-breakdown-non-fuel";
import {
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax,
} from "./test-helper-issuing-authorization-create-body-fleet-reported-breakdown-tax";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown
 */
export type TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown = {
  fuel?:
    | TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel
    | undefined;
  nonFuel?:
    | TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel
    | undefined;
  tax?:
    | TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown =
  {
    fuel?:
      | External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel
      | undefined;
    non_fuel?:
      | External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fuel: Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel.in.optional(),
    non_fuel:
      Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel.in.optional(),
    tax: Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown // the object to be transformed
> = z
  .object({
    fuel: Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownFuel.out.optional(),
    nonFuel:
      Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownNonFuel.out.optional(),
    tax: Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdownTax.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      nonFuel: "non_fuel",
      tax: "tax",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown,
    out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown,
  };
