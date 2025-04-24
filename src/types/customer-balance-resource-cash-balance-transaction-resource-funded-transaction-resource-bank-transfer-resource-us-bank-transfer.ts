import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer =
  {
    /**
     * The banking network used for this funding.
     */
    network?: ("ach" | "domestic_wire_us" | "swift") | undefined;
    /**
     * The full name of the sender, as supplied by the sending bank.
     */
    senderName?: string | null | undefined;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer =
  {
    network?: ("ach" | "domestic_wire_us" | "swift") | undefined;
    sender_name?: string | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    network: z.enum(["ach", "domestic_wire_us", "swift"]).optional(),
    sender_name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network: "network",
      sender_name: "senderName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer // the object to be transformed
> = z
  .object({
    network: z.enum(["ach", "domestic_wire_us", "swift"]).optional(),
    senderName: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      network: "network",
      senderName: "sender_name",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer,
  };
