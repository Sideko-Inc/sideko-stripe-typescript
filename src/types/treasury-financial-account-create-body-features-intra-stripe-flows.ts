import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows
 */
export type TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesIntraStripeFlows,
  };
