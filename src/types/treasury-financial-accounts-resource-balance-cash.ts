import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Funds the user can spend right now.
 */
export type TreasuryFinancialAccountsResourceBalanceCash = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceBalanceCash without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceBalanceCash = {
  [additionalProperty: string]:
    | External$TreasuryFinancialAccountsResourceBalanceCash
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceBalanceCash
 */
const SchemaIn$TreasuryFinancialAccountsResourceBalanceCash: z.ZodType<
  TreasuryFinancialAccountsResourceBalanceCash, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceBalanceCash
 */
const SchemaOut$TreasuryFinancialAccountsResourceBalanceCash: z.ZodType<
  External$TreasuryFinancialAccountsResourceBalanceCash, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceBalanceCash // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TreasuryFinancialAccountsResourceBalanceCash = {
  in: SchemaIn$TreasuryFinancialAccountsResourceBalanceCash,
  out: SchemaOut$TreasuryFinancialAccountsResourceBalanceCash,
};
