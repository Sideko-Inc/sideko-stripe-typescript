import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer =
  {
    /**
     * The BIC of the bank of the sender of the funding.
     */
    bic?: string | null | undefined;
    /**
     * The last 4 digits of the IBAN of the sender of the funding.
     */
    ibanLast4?: string | null | undefined;
    /**
     * The full name of the sender, as supplied by the sending bank.
     */
    senderName?: string | null | undefined;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer =
  {
    bic?: string | null | undefined;
    iban_last4?: string | null | undefined;
    sender_name?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bic: z.string().nullable().optional(),
    iban_last4: z.string().nullable().optional(),
    sender_name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bic: "bic",
      iban_last4: "ibanLast4",
      sender_name: "senderName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer // the object to be transformed
> = z
  .object({
    bic: z.string().nullable().optional(),
    ibanLast4: z.string().nullable().optional(),
    senderName: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bic: "bic",
      ibanLast4: "iban_last4",
      senderName: "sender_name",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer,
  };
