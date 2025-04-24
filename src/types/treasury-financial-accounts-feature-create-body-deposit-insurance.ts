import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Represents whether this FinancialAccount is eligible for deposit insurance. Various factors determine the insurance amount.
 */
export type TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyDepositInsurance,
  };
