import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents the ability for the FinancialAccount to send money to, or receive money from other FinancialAccounts (for example, via OutboundPayment).
 */
export type TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyIntraStripeFlows,
  };
