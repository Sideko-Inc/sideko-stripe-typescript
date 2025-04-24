import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Change to a FinancialAccount's balance
 */
export type TreasuryTransactionsResourceBalanceImpact = {
  /**
   * The change made to funds the user can spend right now.
   */
  cash: number;
  /**
   * The change made to funds that are not spendable yet, but will become available at a later time.
   */
  inboundPending: number;
  /**
   * The change made to funds in the account, but not spendable because they are being held for pending outbound flows.
   */
  outboundPending: number;
};

/**
 * @internal
 * TreasuryTransactionsResourceBalanceImpact without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionsResourceBalanceImpact = {
  cash: number;
  inbound_pending: number;
  outbound_pending: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionsResourceBalanceImpact
 */
const SchemaIn$TreasuryTransactionsResourceBalanceImpact: z.ZodType<
  TreasuryTransactionsResourceBalanceImpact, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cash: z.number().int(),
    inbound_pending: z.number().int(),
    outbound_pending: z.number().int(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionsResourceBalanceImpact
 */
const SchemaOut$TreasuryTransactionsResourceBalanceImpact: z.ZodType<
  External$TreasuryTransactionsResourceBalanceImpact, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionsResourceBalanceImpact // the object to be transformed
> = z
  .object({
    cash: z.number().int(),
    inboundPending: z.number().int(),
    outboundPending: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cash: "cash",
      inboundPending: "inbound_pending",
      outboundPending: "outbound_pending",
    });
  });

export const Schemas$TreasuryTransactionsResourceBalanceImpact = {
  in: SchemaIn$TreasuryTransactionsResourceBalanceImpact,
  out: SchemaOut$TreasuryTransactionsResourceBalanceImpact,
};
