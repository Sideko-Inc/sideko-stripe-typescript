import {
  External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba,
  Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba,
  TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba,
} from "./treasury-financial-accounts-feature-create-body-financial-addresses-aba";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Contains Features that add FinancialAddresses to the FinancialAccount.
 */
export type TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses = {
  aba?:
    | TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses =
  {
    aba?:
      | External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses
 */
const SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses: z.ZodType<
  TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses
 */
const SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses: z.ZodType<
  External$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses // the object to be transformed
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddressesAba.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

export const Schemas$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses =
  {
    in: SchemaIn$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
    out: SchemaOut$TreasuryFinancialAccountsFeatureCreateBodyFinancialAddresses,
  };
