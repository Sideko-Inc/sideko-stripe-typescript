import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Funds in the account, but not spendable because they are being held for pending outbound flows.
 */
export type TreasuryFinancialAccountsResourceBalanceOutboundPending = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceBalanceOutboundPending without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceBalanceOutboundPending = {
  [additionalProperty: string]:
    | External$TreasuryFinancialAccountsResourceBalanceOutboundPending
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceBalanceOutboundPending
 */
const SchemaIn$TreasuryFinancialAccountsResourceBalanceOutboundPending: z.ZodType<
  TreasuryFinancialAccountsResourceBalanceOutboundPending, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceBalanceOutboundPending
 */
const SchemaOut$TreasuryFinancialAccountsResourceBalanceOutboundPending: z.ZodType<
  External$TreasuryFinancialAccountsResourceBalanceOutboundPending, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceBalanceOutboundPending // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TreasuryFinancialAccountsResourceBalanceOutboundPending = {
  in: SchemaIn$TreasuryFinancialAccountsResourceBalanceOutboundPending,
  out: SchemaOut$TreasuryFinancialAccountsResourceBalanceOutboundPending,
};
