import {
  External$TestHelperIssuingAuthorizationCreateBodyFleetCardholderPromptData,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFleetCardholderPromptData,
  TestHelperIssuingAuthorizationCreateBodyFleetCardholderPromptData,
} from "./test-helper-issuing-authorization-create-body-fleet-cardholder-prompt-data";
import {
  External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown,
  Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown,
  TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown,
} from "./test-helper-issuing-authorization-create-body-fleet-reported-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Fleet-specific information for authorizations using Fleet cards.
 */
export type TestHelperIssuingAuthorizationCreateBodyFleet = {
  cardholderPromptData?:
    | TestHelperIssuingAuthorizationCreateBodyFleetCardholderPromptData
    | undefined;
  purchaseType?:
    | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
    | undefined;
  reportedBreakdown?:
    | TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown
    | undefined;
  serviceType?:
    | ("full_service" | "non_fuel_transaction" | "self_service")
    | undefined;
};

/**
 * @internal
 * TestHelperIssuingAuthorizationCreateBodyFleet without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperIssuingAuthorizationCreateBodyFleet = {
  cardholder_prompt_data?:
    | External$TestHelperIssuingAuthorizationCreateBodyFleetCardholderPromptData
    | undefined;
  purchase_type?:
    | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
    | undefined;
  reported_breakdown?:
    | External$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown
    | undefined;
  service_type?:
    | ("full_service" | "non_fuel_transaction" | "self_service")
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperIssuingAuthorizationCreateBodyFleet
 */
const SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleet: z.ZodType<
  TestHelperIssuingAuthorizationCreateBodyFleet, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder_prompt_data:
      Schemas$TestHelperIssuingAuthorizationCreateBodyFleetCardholderPromptData.in.optional(),
    purchase_type: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reported_breakdown:
      Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperIssuingAuthorizationCreateBodyFleet
 */
const SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleet: z.ZodType<
  External$TestHelperIssuingAuthorizationCreateBodyFleet, // output type of this zod object
  z.ZodTypeDef,
  TestHelperIssuingAuthorizationCreateBodyFleet // the object to be transformed
> = z
  .object({
    cardholderPromptData:
      Schemas$TestHelperIssuingAuthorizationCreateBodyFleetCardholderPromptData.out.optional(),
    purchaseType: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .optional(),
    reportedBreakdown:
      Schemas$TestHelperIssuingAuthorizationCreateBodyFleetReportedBreakdown.out.optional(),
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

export const Schemas$TestHelperIssuingAuthorizationCreateBodyFleet = {
  in: SchemaIn$TestHelperIssuingAuthorizationCreateBodyFleet,
  out: SchemaOut$TestHelperIssuingAuthorizationCreateBodyFleet,
};
