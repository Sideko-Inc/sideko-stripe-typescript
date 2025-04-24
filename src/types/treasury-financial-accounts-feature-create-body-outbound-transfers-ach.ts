import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch
 */
export type TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundTransfersAch,
  };
