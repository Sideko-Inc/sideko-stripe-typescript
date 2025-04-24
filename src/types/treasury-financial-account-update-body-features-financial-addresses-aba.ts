import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba,
  };
