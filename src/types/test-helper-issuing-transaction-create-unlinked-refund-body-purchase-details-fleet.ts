import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetCardholderPromptData,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetCardholderPromptData,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetCardholderPromptData,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-fleet-cardholder-prompt-data";
import {
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown,
  Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown,
} from "./test-helper-issuing-transaction-create-unlinked-refund-body-purchase-details-fleet-reported-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet
 */
export type TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet =
  {
    cardholderPromptData?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetCardholderPromptData
      | undefined;
    purchaseType?:
      | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
      | undefined;
    reportedBreakdown?:
      | TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown
      | undefined;
    serviceType?:
      | ("full_service" | "non_fuel_transaction" | "self_service")
      | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet =
  {
    cardholder_prompt_data?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetCardholderPromptData
      | undefined;
    purchase_type?:
      | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
      | undefined;
    reported_breakdown?:
      | External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown
      | undefined;
    service_type?:
      | ("full_service" | "non_fuel_transaction" | "self_service")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet
 */
const SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet: z.ZodType<
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder_prompt_data:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetCardholderPromptData.in.optional(),
    purchase_type: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reported_breakdown:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown.in.optional(),
    service_type: z
      .enum(["full_service", "non_fuel_transaction", "self_service"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholder_prompt_data: "cardholderPromptData",
      purchase_type: "purchaseType",
      reported_breakdown: "reportedBreakdown",
      service_type: "serviceType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet
 */
const SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet: z.ZodType<
  External$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet // the object to be transformed
> = z
  .object({
    cardholderPromptData:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetCardholderPromptData.out.optional(),
    purchaseType: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reportedBreakdown:
      Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleetReportedBreakdown.out.optional(),
    serviceType: z
      .enum(["full_service", "non_fuel_transaction", "self_service"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholderPromptData: "cardholder_prompt_data",
      purchaseType: "purchase_type",
      reportedBreakdown: "reported_breakdown",
      serviceType: "service_type",
    });
  });

export const Schemas$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet,
    out: SchemaOut$TestHelperIssuingTransactionCreateUnlinkedRefundBodyPurchaseDetailsFleet,
  };
