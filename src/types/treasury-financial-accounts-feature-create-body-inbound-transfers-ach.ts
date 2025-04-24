import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch
 */
export type TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyInboundTransfersAch,
  };
