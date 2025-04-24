import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetCardholderPromptData,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetCardholderPromptData,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetCardholderPromptData,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-fleet-cardholder-prompt-data";
import {
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown,
  Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown,
} from "./test-helper-issuing-authorization-capture-body-purchase-details-fleet-reported-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet
 */
export type TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet = {
  cardholderPromptData?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetCardholderPromptData
    | undefined;
  purchaseType?:
    | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
    | undefined;
  reportedBreakdown?:
    | TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown
    | undefined;
  serviceType?:
    | ("full_service" | "non_fuel_transaction" | "self_service")
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet =
  {
    cardholder_prompt_data?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetCardholderPromptData
      | undefined;
    purchase_type?:
      | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
      | undefined;
    reported_breakdown?:
      | External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown
      | undefined;
    service_type?:
      | ("full_service" | "non_fuel_transaction" | "self_service")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet
 */
const SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet: z.ZodType<
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder_prompt_data:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetCardholderPromptData.in.optional(),
    purchase_type: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reported_breakdown:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet
 */
const SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet: z.ZodType<
  External$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet // the object to be transformed
> = z
  .object({
    cardholderPromptData:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetCardholderPromptData.out.optional(),
    purchaseType: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reportedBreakdown:
      Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleetReportedBreakdown.out.optional(),
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

export const Schemas$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet =
  {
    in: SchemaIn$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet,
    out: SchemaOut$TestHelperIssuingAuthorizationCaptureBodyPurchaseDetailsFleet,
  };
