import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesIntraStripeFlows,
  };
