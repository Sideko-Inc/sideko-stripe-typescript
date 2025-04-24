import {
  BalanceTransaction,
  External$BalanceTransaction,
  Schemas$BalanceTransaction,
} from "./balance-transaction";
import {
  CustomerCashBalanceTransaction,
  External$CustomerCashBalanceTransaction,
  Schemas$CustomerCashBalanceTransaction,
} from "./customer-cash-balance-transaction";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft =
  {
    /**
     * The [Balance Transaction](https://stripe.com/docs/api/balance_transactions/object) that corresponds to funds taken out of your Stripe balance.
     */
    balanceTransaction: string | BalanceTransaction;
    /**
     * The [Cash Balance Transaction](https://stripe.com/docs/api/cash_balance_transactions/object) that brought the customer balance negative, triggering the clawback of funds.
     */
    linkedTransaction: string | CustomerCashBalanceTransaction;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft =
  {
    balance_transaction: string | External$BalanceTransaction;
    linked_transaction: string | External$CustomerCashBalanceTransaction;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    balance_transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$BalanceTransaction.in),
    ]),
    linked_transaction: z.union([
      z.string(),
      z.lazy(() => Schemas$CustomerCashBalanceTransaction.in),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balance_transaction: "balanceTransaction",
      linked_transaction: "linkedTransaction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft // the object to be transformed
> = z
  .object({
    balanceTransaction: z.union([
      z.string(),
      z.lazy(() => Schemas$BalanceTransaction.out),
    ]),
    linkedTransaction: z.union([
      z.string(),
      z.lazy(() => Schemas$CustomerCashBalanceTransaction.out),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      balanceTransaction: "balance_transaction",
      linkedTransaction: "linked_transaction",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft,
  };
