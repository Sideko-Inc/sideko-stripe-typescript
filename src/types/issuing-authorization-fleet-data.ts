import {
  External$IssuingAuthorizationFleetCardholderPromptData,
  IssuingAuthorizationFleetCardholderPromptData,
  Schemas$IssuingAuthorizationFleetCardholderPromptData,
} from "./issuing-authorization-fleet-cardholder-prompt-data";
import {
  External$IssuingAuthorizationFleetReportedBreakdown,
  IssuingAuthorizationFleetReportedBreakdown,
  Schemas$IssuingAuthorizationFleetReportedBreakdown,
} from "./issuing-authorization-fleet-reported-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingAuthorizationFleetData = {
  cardholderPromptData?:
    | IssuingAuthorizationFleetCardholderPromptData
    | undefined;
  /**
   * The type of purchase.
   */
  purchaseType?:
    | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
    | null
    | undefined;
  reportedBreakdown?: IssuingAuthorizationFleetReportedBreakdown | undefined;
  /**
   * The type of fuel service.
   */
  serviceType?:
    | ("full_service" | "non_fuel_transaction" | "self_service")
    | null
    | undefined;
};

/**
 * @internal
 * IssuingAuthorizationFleetData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationFleetData = {
  cardholder_prompt_data?:
    | External$IssuingAuthorizationFleetCardholderPromptData
    | undefined;
  purchase_type?:
    | ("fuel_and_non_fuel_purchase" | "fuel_purchase" | "non_fuel_purchase")
    | null
    | undefined;
  reported_breakdown?:
    | External$IssuingAuthorizationFleetReportedBreakdown
    | undefined;
  service_type?:
    | ("full_service" | "non_fuel_transaction" | "self_service")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationFleetData
 */
const SchemaIn$IssuingAuthorizationFleetData: z.ZodType<
  IssuingAuthorizationFleetData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder_prompt_data:
      Schemas$IssuingAuthorizationFleetCardholderPromptData.in.optional(),
    purchase_type: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .nullable()
      .optional(),
    reported_breakdown:
      Schemas$IssuingAuthorizationFleetReportedBreakdown.in.optional(),
    service_type: z
      .enum(["full_service", "non_fuel_transaction", "self_service"])
      .nullable()
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationFleetData
 */
const SchemaOut$IssuingAuthorizationFleetData: z.ZodType<
  External$IssuingAuthorizationFleetData, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationFleetData // the object to be transformed
> = z
  .object({
    cardholderPromptData:
      Schemas$IssuingAuthorizationFleetCardholderPromptData.out.optional(),
    purchaseType: z
      .enum([
        "fuel_and_non_fuel_purchase",
        "fuel_purchase",
        "non_fuel_purchase",
      ])
      .nullable()
      .optional(),
    reportedBreakdown:
      Schemas$IssuingAuthorizationFleetReportedBreakdown.out.optional(),
    serviceType: z
      .enum(["full_service", "non_fuel_transaction", "self_service"])
      .nullable()
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

export const Schemas$IssuingAuthorizationFleetData = {
  in: SchemaIn$IssuingAuthorizationFleetData,
  out: SchemaOut$IssuingAuthorizationFleetData,
};
