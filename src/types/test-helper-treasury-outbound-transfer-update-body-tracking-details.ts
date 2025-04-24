import {
  External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch,
  Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch,
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch,
} from "./test-helper-treasury-outbound-transfer-update-body-tracking-details-ach";
import {
  External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire,
  Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire,
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire,
} from "./test-helper-treasury-outbound-transfer-update-body-tracking-details-us-domestic-wire";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about network-specific tracking information.
 */
export type TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails = {
  ach?:
    | TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch
    | undefined;
  type: "ach" | "us_domestic_wire";
  usDomesticWire?:
    | TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire
    | undefined;
};

/**
 * @internal
 * TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails =
  {
    ach?:
      | External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch
      | undefined;
    type: "ach" | "us_domestic_wire";
    us_domestic_wire?:
      | External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails
 */
const SchemaIn$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails: z.ZodType<
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ach: Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch.in.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    us_domestic_wire:
      Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails
 */
const SchemaOut$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails: z.ZodType<
  External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails // the object to be transformed
> = z
  .object({
    ach: Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsAch.out.optional(),
    type: z.enum(["ach", "us_domestic_wire"]),
    usDomesticWire:
      Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ach: "ach",
      type: "type",
      usDomesticWire: "us_domestic_wire",
    });
  });

export const Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails =
  {
    in: SchemaIn$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
    out: SchemaOut$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetails,
  };
