import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Funds not spendable yet, but will become available at a later time.
 */
export type TreasuryFinancialAccountsResourceBalanceInboundPending = {
  [additionalProperty: string]: number | null | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceBalanceInboundPending without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceBalanceInboundPending = {
  [additionalProperty: string]:
    | External$TreasuryFinancialAccountsResourceBalanceInboundPending
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceBalanceInboundPending
 */
const SchemaIn$TreasuryFinancialAccountsResourceBalanceInboundPending: z.ZodType<
  TreasuryFinancialAccountsResourceBalanceInboundPending, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceBalanceInboundPending
 */
const SchemaOut$TreasuryFinancialAccountsResourceBalanceInboundPending: z.ZodType<
  External$TreasuryFinancialAccountsResourceBalanceInboundPending, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceBalanceInboundPending // the object to be transformed
> = z
  .object({})
  .catchall(z.number().int())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TreasuryFinancialAccountsResourceBalanceInboundPending = {
  in: SchemaIn$TreasuryFinancialAccountsResourceBalanceInboundPending,
  out: SchemaOut$TreasuryFinancialAccountsResourceBalanceInboundPending,
};
