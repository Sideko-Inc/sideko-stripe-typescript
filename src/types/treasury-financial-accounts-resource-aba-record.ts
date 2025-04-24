import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ABA Records contain U.S. bank account details per the ABA format.
 */
export type TreasuryFinancialAccountsResourceAbaRecord = {
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName: string;
  /**
   * The account number.
   */
  accountNumber?: string | null | undefined;
  /**
   * The last four characters of the account number.
   */
  accountNumberLast4: string;
  /**
   * Name of the bank.
   */
  bankName: string;
  /**
   * Routing number for the account.
   */
  routingNumber: string;
};

/**
 * @internal
 * TreasuryFinancialAccountsResourceAbaRecord without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountsResourceAbaRecord = {
  account_holder_name: string;
  account_number?: string | null | undefined;
  account_number_last4: string;
  bank_name: string;
  routing_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountsResourceAbaRecord
 */
const SchemaIn$TreasuryFinancialAccountsResourceAbaRecord: z.ZodType<
  TreasuryFinancialAccountsResourceAbaRecord, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string(),
    account_number: z.string().nullable().optional(),
    account_number_last4: z.string(),
    bank_name: z.string(),
    routing_number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_number: "accountNumber",
      account_number_last4: "accountNumberLast4",
      bank_name: "bankName",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountsResourceAbaRecord
 */
const SchemaOut$TreasuryFinancialAccountsResourceAbaRecord: z.ZodType<
  External$TreasuryFinancialAccountsResourceAbaRecord, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountsResourceAbaRecord // the object to be transformed
> = z
  .object({
    accountHolderName: z.string(),
    accountNumber: z.string().nullable().optional(),
    accountNumberLast4: z.string(),
    bankName: z.string(),
    routingNumber: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountNumber: "account_number",
      accountNumberLast4: "account_number_last4",
      bankName: "bank_name",
      routingNumber: "routing_number",
    });
  });

export const Schemas$TreasuryFinancialAccountsResourceAbaRecord = {
  in: SchemaIn$TreasuryFinancialAccountsResourceAbaRecord,
  out: SchemaOut$TreasuryFinancialAccountsResourceAbaRecord,
};
