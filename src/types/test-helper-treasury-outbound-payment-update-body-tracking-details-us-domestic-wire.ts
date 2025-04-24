import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire
 */
export type TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire =
  {
    chips?: string | undefined;
    imad?: string | undefined;
    omad?: string | undefined;
  };

/**
 * @internal
 * TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire =
  {
    chips?: string | undefined;
    imad?: string | undefined;
    omad?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire
 */
const SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire: z.ZodType<
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire
 */
const SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire: z.ZodType<
  External$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire // the object to be transformed
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

export const Schemas$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire =
  {
    in: SchemaIn$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire,
    out: SchemaOut$TestHelperTreasuryOutboundPaymentUpdateBodyTrackingDetailsUsDomesticWire,
  };
