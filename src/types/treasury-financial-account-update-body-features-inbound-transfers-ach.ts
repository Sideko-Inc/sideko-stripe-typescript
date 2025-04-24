import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesInboundTransfersAch,
  };
