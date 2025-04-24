import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Encodes the FinancialAccount's ability to be used with the Issuing product, including attaching cards to and drawing funds from the FinancialAccount.
 */
export type TreasuryFinancialAccountsFeatureCreateBodyCardIssuing = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing = {
  requested: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyCardIssuing
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyCardIssuing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyCardIssuing // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing = {
  in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
  out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyCardIssuing,
};
