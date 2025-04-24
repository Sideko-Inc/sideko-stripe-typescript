import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundTransfersAch,
  };
