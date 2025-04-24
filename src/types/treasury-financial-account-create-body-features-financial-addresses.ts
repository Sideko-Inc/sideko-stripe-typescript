import {
  External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba,
  Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba,
  TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba,
} from "./treasury-financial-account-create-body-features-financial-addresses-aba";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses
 */
export type TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses = {
  aba?:
    | TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba
    | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses =
  {
    aba?:
      | External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses
 */
const SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses: z.ZodType<
  TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses
 */
const SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses: z.ZodType<
  External$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses // the object to be transformed
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddressesAba.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
    });
  });

export const Schemas$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses =
  {
    in: SchemaIn$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses,
    out: SchemaOut$TreasuryFinancialAccountCreateBodyFeaturesFinancialAddresses,
  };
