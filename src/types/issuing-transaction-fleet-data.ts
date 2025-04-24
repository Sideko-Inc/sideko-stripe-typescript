import {
  External$IssuingTransactionFleetCardholderPromptData,
  IssuingTransactionFleetCardholderPromptData,
  Schemas$IssuingTransactionFleetCardholderPromptData,
} from "./issuing-transaction-fleet-cardholder-prompt-data";
import {
  External$IssuingTransactionFleetReportedBreakdown,
  IssuingTransactionFleetReportedBreakdown,
  Schemas$IssuingTransactionFleetReportedBreakdown,
} from "./issuing-transaction-fleet-reported-breakdown";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingTransactionFleetData = {
  cardholderPromptData?:
    | IssuingTransactionFleetCardholderPromptData
    | undefined;
  /**
   * The type of purchase. One of `fuel_purchase`, `non_fuel_purchase`, or `fuel_and_non_fuel_purchase`.
   */
  purchaseType?: string | null | undefined;
  reportedBreakdown?: IssuingTransactionFleetReportedBreakdown | undefined;
  /**
   * The type of fuel service. One of `non_fuel_transaction`, `full_service`, or `self_service`.
   */
  serviceType?: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionFleetData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionFleetData = {
  cardholder_prompt_data?:
    | External$IssuingTransactionFleetCardholderPromptData
    | undefined;
  purchase_type?: string | null | undefined;
  reported_breakdown?:
    | External$IssuingTransactionFleetReportedBreakdown
    | undefined;
  service_type?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionFleetData
 */
const SchemaIn$IssuingTransactionFleetData: z.ZodType<
  IssuingTransactionFleetData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder_prompt_data:
      Schemas$IssuingTransactionFleetCardholderPromptData.in.optional(),
    purchase_type: z.string().nullable().optional(),
    reported_breakdown:
      Schemas$IssuingTransactionFleetReportedBreakdown.in.optional(),
    service_type: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionFleetData
 */
const SchemaOut$IssuingTransactionFleetData: z.ZodType<
  External$IssuingTransactionFleetData, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionFleetData // the object to be transformed
> = z
  .object({
    cardholderPromptData:
      Schemas$IssuingTransactionFleetCardholderPromptData.out.optional(),
    purchaseType: z.string().nullable().optional(),
    reportedBreakdown:
      Schemas$IssuingTransactionFleetReportedBreakdown.out.optional(),
    serviceType: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholderPromptData: "cardholder_prompt_data",
      purchaseType: "purchase_type",
      reportedBreakdown: "reported_breakdown",
      serviceType: "service_type",
    });
  });

export const Schemas$IssuingTransactionFleetData = {
  in: SchemaIn$IssuingTransactionFleetData,
  out: SchemaOut$IssuingTransactionFleetData,
};
