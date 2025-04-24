import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesCardIssuing
 */
export type TreasuryFinancialAccountCreateBodyFeaturesCardIssuing = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing = {
  requested: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesCardIssuing
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesCardIssuing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesCardIssuing // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing = {
  in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing,
  out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesCardIssuing,
};
