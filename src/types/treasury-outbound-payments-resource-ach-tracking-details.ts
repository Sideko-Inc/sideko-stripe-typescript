import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundPaymentsResourceAchTrackingDetails = {
  /**
   * ACH trace ID of the OutboundPayment for payments sent over the `ach` network.
   */
  traceId: string;
};

/**
 * @internal
 * TreasuryOutboundPaymentsResourceAchTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentsResourceAchTrackingDetails = {
  trace_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentsResourceAchTrackingDetails
 */
const SchemaIn$TreasuryOutboundPaymentsResourceAchTrackingDetails: z.ZodType<
  TreasuryOutboundPaymentsResourceAchTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    trace_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      trace_id: "traceId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentsResourceAchTrackingDetails
 */
const SchemaOut$TreasuryOutboundPaymentsResourceAchTrackingDetails: z.ZodType<
  External$TreasuryOutboundPaymentsResourceAchTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentsResourceAchTrackingDetails // the object to be transformed
> = z
  .object({
    traceId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      traceId: "trace_id",
    });
  });

export const Schemas$TreasuryOutboundPaymentsResourceAchTrackingDetails = {
  in: SchemaIn$TreasuryOutboundPaymentsResourceAchTrackingDetails,
  out: SchemaOut$TreasuryOutboundPaymentsResourceAchTrackingDetails,
};
