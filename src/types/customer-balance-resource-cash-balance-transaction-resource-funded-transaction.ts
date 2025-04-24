import {
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer,
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer,
} from "./customer-balance-resource-cash-balance-transaction-resource-funded-transaction-resource-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction =
  {
    bankTransfer: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction =
  {
    bank_transfer: External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_transfer: "bankTransfer",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction,
  };
