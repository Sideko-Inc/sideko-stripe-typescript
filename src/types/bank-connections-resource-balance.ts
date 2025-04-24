import {
  BankConnectionsResourceBalanceApiResourceCashBalance,
  External$BankConnectionsResourceBalanceApiResourceCashBalance,
  Schemas$BankConnectionsResourceBalanceApiResourceCashBalance,
} from "./bank-connections-resource-balance-api-resource-cash-balance";
import {
  BankConnectionsResourceBalanceApiResourceCreditBalance,
  External$BankConnectionsResourceBalanceApiResourceCreditBalance,
  Schemas$BankConnectionsResourceBalanceApiResourceCreditBalance,
} from "./bank-connections-resource-balance-api-resource-credit-balance";
import {
  BankConnectionsResourceBalanceCurrent,
  External$BankConnectionsResourceBalanceCurrent,
  Schemas$BankConnectionsResourceBalanceCurrent,
} from "./bank-connections-resource-balance-current";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceBalance = {
  /**
   * The time that the external institution calculated this balance. Measured in seconds since the Unix epoch.
   */
  asOf: number;
  cash?: BankConnectionsResourceBalanceApiResourceCashBalance | undefined;
  credit?: BankConnectionsResourceBalanceApiResourceCreditBalance | undefined;
  /**
   * The balances owed to (or by) the account holder, before subtracting any outbound pending transactions or adding any inbound pending transactions.
   *
   * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
   *
   * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
   */
  current: BankConnectionsResourceBalanceCurrent;
  /**
   * The `type` of the balance. An additional hash is included on the balance with a name matching this value.
   */
  type: "cash" | "credit";
};

/**
 * @internal
 * BankConnectionsResourceBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceBalance = {
  as_of: number;
  cash?:
    | External$BankConnectionsResourceBalanceApiResourceCashBalance
    | undefined;
  credit?:
    | External$BankConnectionsResourceBalanceApiResourceCreditBalance
    | undefined;
  current: External$BankConnectionsResourceBalanceCurrent;
  type: "cash" | "credit";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceBalance
 */
const SchemaIn$BankConnectionsResourceBalance: z.ZodType<
  BankConnectionsResourceBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    as_of: z.number().int(),
    cash: Schemas$BankConnectionsResourceBalanceApiResourceCashBalance.in.optional(),
    credit:
      Schemas$BankConnectionsResourceBalanceApiResourceCreditBalance.in.optional(),
    current: Schemas$BankConnectionsResourceBalanceCurrent.in,
    type: z.enum(["cash", "credit"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      as_of: "asOf",
      cash: "cash",
      credit: "credit",
      current: "current",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceBalance
 */
const SchemaOut$BankConnectionsResourceBalance: z.ZodType<
  External$BankConnectionsResourceBalance, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceBalance // the object to be transformed
> = z
  .object({
    asOf: z.number().int(),
    cash: Schemas$BankConnectionsResourceBalanceApiResourceCashBalance.out.optional(),
    credit:
      Schemas$BankConnectionsResourceBalanceApiResourceCreditBalance.out.optional(),
    current: Schemas$BankConnectionsResourceBalanceCurrent.out,
    type: z.enum(["cash", "credit"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      asOf: "as_of",
      cash: "cash",
      credit: "credit",
      current: "current",
      type: "type",
    });
  });

export const Schemas$BankConnectionsResourceBalance = {
  in: SchemaIn$BankConnectionsResourceBalance,
  out: SchemaOut$BankConnectionsResourceBalance,
};
