import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch
 */
export type TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyOutboundPaymentsAch,
  };
