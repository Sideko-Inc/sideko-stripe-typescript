import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance =
  {
    /**
     * The [Balance Transaction](https://stripe.com/docs/api/balance_transactions/object) that corresponds to funds transferred to your Stripe balance.
     */
    balanceTransaction: string | BalanceTransaction;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance =
  {
    balance_transaction: string | External$BalanceTransaction;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    balance_transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$BalanceTransaction.in),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balance_transaction: "balanceTransaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance // the object to be transformed
> = z
  .object({
    balanceTransaction: z.union([
      z.string(),
      z.lazy(() => Schemas$BalanceTransaction.out),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balanceTransaction: "balance_transaction",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance,
  };
