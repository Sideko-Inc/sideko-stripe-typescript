import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing = {
  requested: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing = {
  in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing,
  out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesCardIssuing,
};
