import {
  External$TreasuryFinancialAccountsResourceBalanceCash,
  Schemas$TreasuryFinancialAccountsResourceBalanceCash,
  TreasuryFinancialAccountsResourceBalanceCash,
} from "./treasury-financial-accounts-resource-balance-cash";
import {
  External$TreasuryFinancialAccountsResourceBalanceInboundPending,
  Schemas$TreasuryFinancialAccountsResourceBalanceInboundPending,
  TreasuryFinancialAccountsResourceBalanceInboundPending,
} from "./treasury-financial-accounts-resource-balance-inbound-pending";
import {
  External$TreasuryFinancialAccountsResourceBalanceOutboundPending,
  Schemas$TreasuryFinancialAccountsResourceBalanceOutboundPending,
  TreasuryFinancialAccountsResourceBalanceOutboundPending,
} from "./treasury-financial-accounts-resource-balance-outbound-pending";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Balance information for the FinancialAccount
 */
export type TreasuryFinancialAccountsResourceBalance = {
  /**
   * Funds the user can spend right now.
   */
  cash: TreasuryFinancialAccountsResourceBalanceCash;
  /**
   * Funds not spendable yet, but will become available at a later time.
   */
  inboundPending: TreasuryFinancialAccountsResourceBalanceInboundPending;
  /**
   * Funds in the account, but not spendable because they are being held for pending outbound flows.
   */
  outboundPending: TreasuryFinancialAccountsResourceBalanceOutboundPending;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceBalance = {
  cash: External$TreasuryFinancialAccountsResourceBalanceCash;
  inbound_pending: External$TreasuryFinancialAccountsResourceBalanceInboundPending;
  outbound_pending: External$TreasuryFinancialAccountsResourceBalanceOutboundPending;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceBalance
 */
const SchemaIn$TreasuryFinancialAccountsResourceBalance: z.ZodType<
  TreasuryFinancialAccountsResourceBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cash: Schemas$TreasuryFinancialAccountsResourceBalanceCash.in,
    inbound_pending:
      Schemas$TreasuryFinancialAccountsResourceBalanceInboundPending.in,
    outbound_pending:
      Schemas$TreasuryFinancialAccountsResourceBalanceOutboundPending.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cash: "cash",
      inbound_pending: "inboundPending",
      outbound_pending: "outboundPending",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceBalance
 */
const SchemaOut$TreasuryFinancialAccountsResourceBalance: z.ZodType<
  External$TreasuryFinancialAccountsResourceBalance, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceBalance // the object to be transformed
> = z
  .object({
    cash: Schemas$TreasuryFinancialAccountsResourceBalanceCash.out,
    inboundPending:
      Schemas$TreasuryFinancialAccountsResourceBalanceInboundPending.out,
    outboundPending:
      Schemas$TreasuryFinancialAccountsResourceBalanceOutboundPending.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cash: "cash",
      inboundPending: "inbound_pending",
      outboundPending: "outbound_pending",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceBalance = {
  in: SchemaIn$TreasuryFinancialAccountsResourceBalance,
  out: SchemaOut$TreasuryFinancialAccountsResourceBalance,
};
