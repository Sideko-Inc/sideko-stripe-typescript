import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire
 */
export type TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersUsDomesticWire,
  };
