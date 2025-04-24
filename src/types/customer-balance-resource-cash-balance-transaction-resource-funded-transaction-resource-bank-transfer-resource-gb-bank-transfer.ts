import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer =
  {
    /**
     * The last 4 digits of the account number of the sender of the funding.
     */
    accountNumberLast4?: string | null | undefined;
    /**
     * The full name of the sender, as supplied by the sending bank.
     */
    senderName?: string | null | undefined;
    /**
     * The sort code of the bank of the sender of the funding
     */
    sortCode?: string | null | undefined;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer =
  {
    account_number_last4?: string | null | undefined;
    sender_name?: string | null | undefined;
    sort_code?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_number_last4: z.string().nullable().optional(),
    sender_name: z.string().nullable().optional(),
    sort_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_number_last4: "accountNumberLast4",
      sender_name: "senderName",
      sort_code: "sortCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer // the object to be transformed
> = z
  .object({
    accountNumberLast4: z.string().nullable().optional(),
    senderName: z.string().nullable().optional(),
    sortCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountNumberLast4: "account_number_last4",
      senderName: "sender_name",
      sortCode: "sort_code",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer,
  };
