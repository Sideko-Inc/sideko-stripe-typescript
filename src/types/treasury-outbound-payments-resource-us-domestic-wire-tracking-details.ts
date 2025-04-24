import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails = {
  /**
   * CHIPS System Sequence Number (SSN) of the OutboundPayment for payments sent over the `us_domestic_wire` network.
   */
  chips?: string | null | undefined;
  /**
   * IMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
   */
  imad?: string | null | undefined;
  /**
   * OMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
   */
  omad?: string | null | undefined;
};

/**
 * @internal
 * TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails =
  {
    chips?: string | null | undefined;
    imad?: string | null | undefined;
    omad?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails
 */
const SchemaIn$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails: z.ZodType<
  TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails
 */
const SchemaOut$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails: z.ZodType<
  External$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails // the object to be transformed
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

export const Schemas$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails =
  {
    in: SchemaIn$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails,
    out: SchemaOut$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails,
  };
