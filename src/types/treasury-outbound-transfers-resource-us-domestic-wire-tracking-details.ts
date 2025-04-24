import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails = {
  /**
   * CHIPS System Sequence Number (SSN) of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
   */
  chips?: string | null | undefined;
  /**
   * IMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
   */
  imad?: string | null | undefined;
  /**
   * OMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
   */
  omad?: string | null | undefined;
};

/**
 * @internal
 * TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails =
  {
    chips?: string | null | undefined;
    imad?: string | null | undefined;
    omad?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails
 */
const SchemaIn$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails: z.ZodType<
  TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    chips: z.string().nullable().optional(),
    imad: z.string().nullable().optional(),
    omad: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      chips: "chips",
      imad: "imad",
      omad: "omad",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails
 */
const SchemaOut$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails: z.ZodType<
  External$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails // the object to be transformed
> = z
  .object({
    chips: z.string().nullable().optional(),
    imad: z.string().nullable().optional(),
    omad: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      chips: "chips",
      imad: "imad",
      omad: "omad",
    });
  });

export const Schemas$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails =
  {
    in: SchemaIn$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails,
    out: SchemaOut$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails,
  };
