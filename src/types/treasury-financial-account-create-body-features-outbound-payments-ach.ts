import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch
 */
export type TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesOutboundPaymentsAch,
  };
