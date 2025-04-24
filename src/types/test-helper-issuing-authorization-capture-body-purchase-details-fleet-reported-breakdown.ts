import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-fleet-reported-breakdown-fuel";
import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-fleet-reported-breakdown-non-fuel";
import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-fleet-reported-breakdown-tax";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown =
  {
    fuel?:
      | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel
      | undefined;
    nonFuel?:
      | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax
      | undefined;
  };

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown =
  {
    fuel?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel
      | undefined;
    non_fuel?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fuel: Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel.in.optional(),
    non_fuel:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel.in.optional(),
    tax: Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown // the object to be transformed
> = z
  .object({
    fuel: Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel.out.optional(),
    nonFuel:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel.out.optional(),
    tax: Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdownTax.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      nonFuel: "non_fuel",
      tax: "tax",
    });
  });

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown,
  };
