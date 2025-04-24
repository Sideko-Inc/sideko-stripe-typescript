import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Sort Code Records contain U.K. bank account details per the sort code format.
 */
export type FundingInstructionsBankTransferSortCodeRecord = {
  accountHolderAddress: Address;
  /**
   * The name of the person or business that owns the bank account
   */
  accountHolderName: string;
  /**
   * The account number
   */
  accountNumber: string;
  bankAddress: Address;
  /**
   * The six-digit sort code
   */
  sortCode: string;
};

/**
 * @internal
 * FundingInstructionsBankTransferSortCodeRecord without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransferSortCodeRecord = {
  account_holder_address: External$Address;
  account_holder_name: string;
  account_number: string;
  bank_address: External$Address;
  sort_code: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransferSortCodeRecord
 */
const SchemaIn$FundingInstructionsBankTransferSortCodeRecord: z.ZodType<
  FundingInstructionsBankTransferSortCodeRecord, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_address: Schemas$Address.in,
    account_holder_name: z.string(),
    account_number: z.string(),
    bank_address: Schemas$Address.in,
    sort_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_address: "accountHolderAddress",
      account_holder_name: "accountHolderName",
      account_number: "accountNumber",
      bank_address: "bankAddress",
      sort_code: "sortCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransferSortCodeRecord
 */
const SchemaOut$FundingInstructionsBankTransferSortCodeRecord: z.ZodType<
  External$FundingInstructionsBankTransferSortCodeRecord, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransferSortCodeRecord // the object to be transformed
> = z
  .object({
    accountHolderAddress: Schemas$Address.out,
    accountHolderName: z.string(),
    accountNumber: z.string(),
    bankAddress: Schemas$Address.out,
    sortCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderAddress: "account_holder_address",
      accountHolderName: "account_holder_name",
      accountNumber: "account_number",
      bankAddress: "bank_address",
      sortCode: "sort_code",
    });
  });

export const Schemas$FundingInstructionsBankTransferSortCodeRecord = {
  in: SchemaIn$FundingInstructionsBankTransferSortCodeRecord,
  out: SchemaOut$FundingInstructionsBankTransferSortCodeRecord,
};
