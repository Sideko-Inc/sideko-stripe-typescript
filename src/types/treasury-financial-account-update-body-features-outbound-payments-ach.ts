import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesOutboundPaymentsAch,
  };
