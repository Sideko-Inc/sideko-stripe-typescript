import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer =
  {
    /**
     * The name of the bank of the sender of the funding.
     */
    senderBank?: string | null | undefined;
    /**
     * The name of the bank branch of the sender of the funding.
     */
    senderBranch?: string | null | undefined;
    /**
     * The full name of the sender, as supplied by the sending bank.
     */
    senderName?: string | null | undefined;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer =
  {
    sender_bank?: string | null | undefined;
    sender_branch?: string | null | undefined;
    sender_name?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    sender_bank: z.string().nullable().optional(),
    sender_branch: z.string().nullable().optional(),
    sender_name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      sender_bank: "senderBank",
      sender_branch: "senderBranch",
      sender_name: "senderName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer // the object to be transformed
> = z
  .object({
    senderBank: z.string().nullable().optional(),
    senderBranch: z.string().nullable().optional(),
    senderName: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      senderBank: "sender_bank",
      senderBranch: "sender_branch",
      senderName: "sender_name",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer,
  };
