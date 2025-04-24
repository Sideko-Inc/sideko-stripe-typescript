import {
  BankConnectionsResourceBalanceApiResourceCashBalanceAvailable,
  External$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable,
  Schemas$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable,
} from "./bank-connections-resource-balance-api-resource-cash-balance-available";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BankConnectionsResourceBalanceApiResourceCashBalance = {
  /**
   * The funds available to the account holder. Typically this is the current balance after subtracting any outbound pending transactions and adding any inbound pending transactions.
   *
   * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
   *
   * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
   */
  available?:
    | BankConnectionsResourceBalanceApiResourceCashBalanceAvailable
    | null
    | undefined;
};

/**
 * @internal
 * BankConnectionsResourceBalanceApiResourceCashBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BankConnectionsResourceBalanceApiResourceCashBalance = {
  available?:
    | External$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BankConnectionsResourceBalanceApiResourceCashBalance
 */
const SchemaIn$BankConnectionsResourceBalanceApiResourceCashBalance: z.ZodType<
  BankConnectionsResourceBalanceApiResourceCashBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    available:
      Schemas$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable.in
        .nullable()
        .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BankConnectionsResourceBalanceApiResourceCashBalance
 */
const SchemaOut$BankConnectionsResourceBalanceApiResourceCashBalance: z.ZodType<
  External$BankConnectionsResourceBalanceApiResourceCashBalance, // output type of this zod object
  z.ZodTypeDef,
  BankConnectionsResourceBalanceApiResourceCashBalance // the object to be transformed
> = z
  .object({
    available:
      Schemas$BankConnectionsResourceBalanceApiResourceCashBalanceAvailable.out
        .nullable()
        .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      available: "available",
    });
  });

export const Schemas$BankConnectionsResourceBalanceApiResourceCashBalance = {
  in: SchemaIn$BankConnectionsResourceBalanceApiResourceCashBalance,
  out: SchemaOut$BankConnectionsResourceBalanceApiResourceCashBalance,
};
