import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesDepositInsurance,
  };
