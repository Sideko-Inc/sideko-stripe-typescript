import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersUsDomesticWire,
  };
