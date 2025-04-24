import {
  External$TreasuryOutboundPaymentsResourceAchTrackingDetails,
  Schemas$TreasuryOutboundPaymentsResourceAchTrackingDetails,
  TreasuryOutboundPaymentsResourceAchTrackingDetails,
} from "./treasury-outbound-payments-resource-ach-tracking-details";
import {
  External$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails,
  Schemas$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails,
  TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails,
} from "./treasury-outbound-payments-resource-us-domestic-wire-tracking-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails =
  {
    ach?: TreasuryOutboundPaymentsResourceAchTrackingDetails | undefined;
    /**
     * The US bank account network used to send funds.
     */
    type: "ach" | "us_domestic_wire";
    usDomesticWire?:
      | TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails
      | undefined;
  };

/**
 * @internal
 * TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails =
  {
    ach?:
      | External$TreasuryOutboundPaymentsResourceAchTrackingDetails
      | undefined;
    type: "ach" | "us_domestic_wire";
    us_domestic_wire?:
      | External$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails
 */
const SchemaIn$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails: z.ZodType<
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TreasuryOutboundPaymentsResourceAchTrackingDetails.in.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    us_domestic_wire:
      Schemas$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails
 */
const SchemaOut$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails: z.ZodType<
  External$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails // the object to be transformed
> = z
  .object({
    ach: Schemas$TreasuryOutboundPaymentsResourceAchTrackingDetails.out.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    usDomesticWire:
      Schemas$TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      type: "type",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails =
  {
    in: SchemaIn$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails,
    out: SchemaOut$TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails,
  };
