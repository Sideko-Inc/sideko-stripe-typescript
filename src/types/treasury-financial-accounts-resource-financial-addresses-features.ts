import {
  External$TreasuryFinancialAccountsResourceAbaToggleSettings,
  Schemas$TreasuryFinancialAccountsResourceAbaToggleSettings,
  TreasuryFinancialAccountsResourceAbaToggleSettings,
} from "./treasury-financial-accounts-resource-aba-toggle-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings related to Financial Addresses features on a Financial Account
 */
export type TreasuryFinancialAccountsResourceFinancialAddressesFeatures = {
  /**
   * Toggle settings for enabling/disabling the ABA address feature
   */
  aba?: TreasuryFinancialAccountsResourceAbaToggleSettings | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceFinancialAddressesFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceFinancialAddressesFeatures =
  {
    aba?:
      | External$TreasuryFinancialAccountsResourceAbaToggleSettings
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceFinancialAddressesFeatures
 */
const SchemaIn$TreasuryFinancialAccountsResourceFinancialAddressesFeatures: z.ZodType<
  TreasuryFinancialAccountsResourceFinancialAddressesFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountsResourceAbaToggleSettings.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceFinancialAddressesFeatures
 */
const SchemaOut$TreasuryFinancialAccountsResourceFinancialAddressesFeatures: z.ZodType<
  External$TreasuryFinancialAccountsResourceFinancialAddressesFeatures, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceFinancialAddressesFeatures // the object to be transformed
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountsResourceAbaToggleSettings.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceFinancialAddressesFeatures =
  {
    in: SchemaIn$TreasuryFinancialAccountsResourceFinancialAddressesFeatures,
    out: SchemaOut$TreasuryFinancialAccountsResourceFinancialAddressesFeatures,
  };
