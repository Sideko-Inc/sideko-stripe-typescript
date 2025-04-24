import {
  External$TreasuryOutboundTransfersResourceAchTrackingDetails,
  Schemas$TreasuryOutboundTransfersResourceAchTrackingDetails,
  TreasuryOutboundTransfersResourceAchTrackingDetails,
} from "./treasury-outbound-transfers-resource-ach-tracking-details";
import {
  External$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails,
  Schemas$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails,
  TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails,
} from "./treasury-outbound-transfers-resource-us-domestic-wire-tracking-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails =
  {
    ach?: TreasuryOutboundTransfersResourceAchTrackingDetails | undefined;
    /**
     * The US bank account network used to send funds.
     */
    type: "ach" | "us_domestic_wire";
    usDomesticWire?:
      | TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails
      | undefined;
  };

/**
 * @internal
 * TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails =
  {
    ach?:
      | External$TreasuryOutboundTransfersResourceAchTrackingDetails
      | undefined;
    type: "ach" | "us_domestic_wire";
    us_domestic_wire?:
      | External$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails
 */
const SchemaIn$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails: z.ZodType<
  TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryOutboundTransfersResourceAchTrackingDetails.in.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    us_domestic_wire:
      Schemas$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      type: "type",
      us_domestic_wire: "usDomesticWire",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails
 */
const SchemaOut$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails: z.ZodType<
  External$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryOutboundTransfersResourceAchTrackingDetails.out.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    usDomesticWire:
      Schemas$TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      type: "type",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails =
  {
    in: SchemaIn$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails,
    out: SchemaOut$TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails,
  };
