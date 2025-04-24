import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownFuel,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownFuel,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownFuel,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-fleet-reported-breakdown-fuel";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownNonFuel,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-fleet-reported-breakdown-non-fuel";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownTax,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownTax,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownTax,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-fleet-reported-breakdown-tax";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown
 */
export type TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown =
  {
    fuel?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownFuel
      | undefined;
    nonFuel?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownTax
      | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown =
  {
    fuel?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownFuel
      | undefined;
    non_fuel?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownNonFuel
      | undefined;
    tax?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownTax
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown
 */
const SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown: z.ZodType<
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    fuel: Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownFuel.in.optional(),
    non_fuel:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownNonFuel.in.optional(),
    tax: Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownTax.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown
 */
const SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown: z.ZodType<
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown // the object to be transformed
> = z
  .object({
    fuel: Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownFuel.out.optional(),
    nonFuel:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownNonFuel.out.optional(),
    tax: Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdownTax.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      fuel: "fuel",
      nonFuel: "non_fuel",
      tax: "tax",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown,
    out: SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown,
  };
