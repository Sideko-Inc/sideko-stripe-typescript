import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundTransfersResourceAchTrackingDetails = {
  /**
   * ACH trace ID of the OutboundTransfer for transfers sent over the `ach` network.
   */
  traceId: string;
};

/**
 * @internal
 * TreasuryOutboundTransfersResourceAchTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransfersResourceAchTrackingDetails = {
  trace_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransfersResourceAchTrackingDetails
 */
const SchemaIn$TreasuryOutboundTransfersResourceAchTrackingDetails: z.ZodType<
  TreasuryOutboundTransfersResourceAchTrackingDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransfersResourceAchTrackingDetails
 */
const SchemaOut$TreasuryOutboundTransfersResourceAchTrackingDetails: z.ZodType<
  External$TreasuryOutboundTransfersResourceAchTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransfersResourceAchTrackingDetails // the object to be transformed
> = z
  .object({
    traceId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      traceId: "trace_id",
    });
  });

export const Schemas$TreasuryOutboundTransfersResourceAchTrackingDetails = {
  in: SchemaIn$TreasuryOutboundTransfersResourceAchTrackingDetails,
  out: SchemaOut$TreasuryOutboundTransfersResourceAchTrackingDetails,
};
