import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch
 */
export type TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesInboundTransfersAch,
  };
