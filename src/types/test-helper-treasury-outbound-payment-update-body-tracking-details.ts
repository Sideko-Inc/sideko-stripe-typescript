import {
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch,
  Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch,
} from "./test-helper-treasury-outbound-payment-update-body-tracking-details-ach";
import {
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire,
  Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire,
} from "./test-helper-treasury-outbound-payment-update-body-tracking-details-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about network-specific tracking information.
 */
export type TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails = {
  ach?:
    | TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch
    | undefined;
  type: "ach" | "us_domestic_wire";
  usDomesticWire?:
    | TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails =
  {
    ach?:
      | External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch
      | undefined;
    type: "ach" | "us_domestic_wire";
    us_domestic_wire?:
      | External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails
 */
const SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails: z.ZodType<
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch.in.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    us_domestic_wire:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails
 */
const SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails: z.ZodType<
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails // the object to be transformed
> = z
  .object({
    ach: Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsAch.out.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    usDomesticWire:
      Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      type: "type",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails =
  {
    in: SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
    out: SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetails,
  };
