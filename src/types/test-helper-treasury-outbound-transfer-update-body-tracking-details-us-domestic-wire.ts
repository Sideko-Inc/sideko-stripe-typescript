import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire
 */
export type TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire =
  {
    chips?: string | undefined;
    imad?: string | undefined;
    omad?: string | undefined;
  };

/**
 * @internal
 * TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire =
  {
    chips?: string | undefined;
    imad?: string | undefined;
    omad?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire
 */
const SchemaIn$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire: z.ZodType<
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    chips: z.string().optional(),
    imad: z.string().optional(),
    omad: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire
 */
const SchemaOut$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire: z.ZodType<
  External$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire // the object to be transformed
> = z
  .object({
    chips: z.string().optional(),
    imad: z.string().optional(),
    omad: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      chips: "chips",
      imad: "imad",
      omad: "omad",
    });
  });

export const Schemas$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire =
  {
    in: SchemaIn$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire,
    out: SchemaOut$TestHelperTreasuryOutboundTransferUpdateBodyTrackingDetailsUsDomesticWire,
  };
