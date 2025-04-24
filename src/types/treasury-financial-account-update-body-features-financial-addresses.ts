import {
  External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba,
  Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba,
  TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba,
} from "./treasury-financial-account-update-body-features-financial-addresses-aba";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses
 */
export type TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses = {
  aba?:
    | TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses =
  {
    aba?:
      | External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses: z.ZodType<
  TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses // the object to be transformed
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddressesAba.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses =
  {
    in: SchemaIn$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses,
    out: SchemaOut$TreasuryFinancialAccountUpdateBodyFeaturesFinancialAddresses,
  };
