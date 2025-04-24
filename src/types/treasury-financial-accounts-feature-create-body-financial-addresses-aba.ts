import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba
 */
export type TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba = {
  requested: boolean;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba =
  {
    requested: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba // the object to be transformed
> = z
  .object({
    requested: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba,
  };
