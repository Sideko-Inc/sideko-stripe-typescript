import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetCardholderPromptData,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetCardholderPromptData,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetCardholderPromptData,
} from "./test-helper-issuing-authorization-finalize-amount-body-fleet-cardholder-prompt-data";
import {
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown,
  Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown,
} from "./test-helper-issuing-authorization-finalize-amount-body-fleet-reported-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Fleet-specific information for authorizations using Fleet cards.
 */
export type TestHelperIssuingAuthorizationFinalizeAmountBodyFleet = {
  cardholderPromptData?:
    | TestHelperIssuingAuthorizationFinalizeAmountBodyFleetCardholderPromptData
    | undefined;
  purchaseType?:
    | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
    | undefined;
  reportedBreakdown?:
    | TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown
    | undefined;
  serviceType?:
    | ("full_service" | "non_fuel_transaction" | "self_service")
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationFinalizeAmountBodyFleet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet = {
  cardholder_prompt_data?:
    | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetCardholderPromptData
    | undefined;
  purchase_type?:
    | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
    | undefined;
  reported_breakdown?:
    | External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown
    | undefined;
  service_type?:
    | ("full_service" | "non_fuel_transaction" | "self_service")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationFinalizeAmountBodyFleet
 */
const SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet: z.ZodType<
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder_prompt_data:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetCardholderPromptData.in.optional(),
    purchase_type: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reported_breakdown:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet
 */
const SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet: z.ZodType<
  External$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationFinalizeAmountBodyFleet // the object to be transformed
> = z
  .object({
    cardholderPromptData:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetCardholderPromptData.out.optional(),
    purchaseType: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reportedBreakdown:
      Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleetReportedBreakdown.out.optional(),
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

export const Schemas$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet = {
  in: SchemaIn$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
  out: SchemaOut$TestHelperIssuingAuthorizationFinalizeAmountBodyFleet,
};
