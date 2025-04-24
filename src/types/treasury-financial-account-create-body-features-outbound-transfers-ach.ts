import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch
 */
export type TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundTransfersAch,
  };
