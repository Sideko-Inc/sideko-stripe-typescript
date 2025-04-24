import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-fleet-reported-breakdown-fuel";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-fleet-reported-breakdown-non-fuel";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownTax,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-fleet-reported-breakdown-tax";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown
 */
export type TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown =
  {
    fuel?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel
      | undefined;
    nonFuel?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownTax
      | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown =
  {
    fuel?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel
      | undefined;
    non_fuel?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownTax
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fuel: Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel.in.optional(),
    non_fuel:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel.in.optional(),
    tax: Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownTax.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown // the object to be transformed
> = z
  .object({
    fuel: Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownFuel.out.optional(),
    nonFuel:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownNonFuel.out.optional(),
    tax: Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdownTax.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      nonFuel: "non_fuel",
      tax: "tax",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown,
    out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown,
  };
