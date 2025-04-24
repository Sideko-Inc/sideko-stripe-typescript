import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba
 */
export type TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba,
  };
