import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance
 */
export type TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesDepositInsurance,
  };
