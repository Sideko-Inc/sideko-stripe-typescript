import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-fleet-cardholder-prompt-data";
import {
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown,
  Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown,
} from "./test-helper-issuing-transaction-create-force-capture-body-purchase-details-fleet-reported-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet
 */
export type TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet =
  {
    cardholderPromptData?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData
      | undefined;
    purchaseType?:
      | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
      | undefined;
    reportedBreakdown?:
      | TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown
      | undefined;
    serviceType?:
      | ("full_service" | "non_fuel_transaction" | "self_service")
      | undefined;
  };

/**
 * @internal
 * TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet =
  {
    cardholder_prompt_data?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData
      | undefined;
    purchase_type?:
      | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
      | undefined;
    reported_breakdown?:
      | External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown
      | undefined;
    service_type?:
      | ("full_service" | "non_fuel_transaction" | "self_service")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet
 */
const SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet: z.ZodType<
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder_prompt_data:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData.in.optional(),
    purchase_type: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reported_breakdown:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet
 */
const SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet: z.ZodType<
  External$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet // the object to be transformed
> = z
  .object({
    cardholderPromptData:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetCardholderPromptData.out.optional(),
    purchaseType: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reportedBreakdown:
      Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleetReportedBreakdown.out.optional(),
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

export const Schemas$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet =
  {
    in: SchemaIn$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet,
    out: SchemaOut$TestHelperIssuingTransactionCreateForceCaptureBodyPurchaseDetailsFleet,
  };
