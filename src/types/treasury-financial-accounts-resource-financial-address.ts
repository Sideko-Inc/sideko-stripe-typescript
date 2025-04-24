import {
  External$TreasuryFinancialAccountsResourceAbaRecord,
  Schemas$TreasuryFinancialAccountsResourceAbaRecord,
  TreasuryFinancialAccountsResourceAbaRecord,
} from "./treasury-financial-accounts-resource-aba-record";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FinancialAddresses contain identifying information that resolves to a FinancialAccount.
 */
export type TreasuryFinancialAccountsResourceFinancialAddress = {
  /**
   * ABA Records contain U.S. bank account details per the ABA format.
   */
  aba?: TreasuryFinancialAccountsResourceAbaRecord | undefined;
  /**
   * The list of networks that the address supports
   */
  supportedNetworks?: ("ach" | "us_domestic_wire")[] | undefined;
  /**
   * The type of financial address
   */
  type: "aba";
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceFinancialAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceFinancialAddress = {
  aba?: External$TreasuryFinancialAccountsResourceAbaRecord | undefined;
  supported_networks?: ("ach" | "us_domestic_wire")[] | undefined;
  type: "aba";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceFinancialAddress
 */
const SchemaIn$TreasuryFinancialAccountsResourceFinancialAddress: z.ZodType<
  TreasuryFinancialAccountsResourceFinancialAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountsResourceAbaRecord.in.optional(),
    supported_networks: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
    type: z.enum(["aba"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
      supported_networks: "supportedNetworks",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceFinancialAddress
 */
const SchemaOut$TreasuryFinancialAccountsResourceFinancialAddress: z.ZodType<
  External$TreasuryFinancialAccountsResourceFinancialAddress, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceFinancialAddress // the object to be transformed
> = z
  .object({
    aba: Schemas$TreasuryFinancialAccountsResourceAbaRecord.out.optional(),
    supportedNetworks: z.array(z.enum(["ach", "us_domestic_wire"])).optional(),
    type: z.enum(["aba"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
      supportedNetworks: "supported_networks",
      type: "type",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceFinancialAddress = {
  in: SchemaIn$TreasuryFinancialAccountsResourceFinancialAddress,
  out: SchemaOut$TreasuryFinancialAccountsResourceFinancialAddress,
};
