import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire
 */
export type TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersUsDomesticWire,
  };
