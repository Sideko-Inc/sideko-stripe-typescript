import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Zengin Records contain Japan bank account details per the Zengin format.
 */
export type FundingInstructionsBankTransferZenginRecord = {
  accountHolderAddress: Address;
  /**
   * The account holder name
   */
  accountHolderName?: string | null | undefined;
  /**
   * The account number
   */
  accountNumber?: string | null | undefined;
  /**
   * The bank account type. In Japan, this can only be `futsu` or `toza`.
   */
  accountType?: string | null | undefined;
  bankAddress: Address;
  /**
   * The bank code of the account
   */
  bankCode?: string | null | undefined;
  /**
   * The bank name of the account
   */
  bankName?: string | null | undefined;
  /**
   * The branch code of the account
   */
  branchCode?: string | null | undefined;
  /**
   * The branch name of the account
   */
  branchName?: string | null | undefined;
};

/**
 * @internal
 * FundingInstructionsBankTransferZenginRecord without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransferZenginRecord = {
  account_holder_address: External$Address;
  account_holder_name?: string | null | undefined;
  account_number?: string | null | undefined;
  account_type?: string | null | undefined;
  bank_address: External$Address;
  bank_code?: string | null | undefined;
  bank_name?: string | null | undefined;
  branch_code?: string | null | undefined;
  branch_name?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransferZenginRecord
 */
const SchemaIn$FundingInstructionsBankTransferZenginRecord: z.ZodType<
  FundingInstructionsBankTransferZenginRecord, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_address: Schemas$Address.in,
    account_holder_name: z.string().nullable().optional(),
    account_number: z.string().nullable().optional(),
    account_type: z.string().nullable().optional(),
    bank_address: Schemas$Address.in,
    bank_code: z.string().nullable().optional(),
    bank_name: z.string().nullable().optional(),
    branch_code: z.string().nullable().optional(),
    branch_name: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_address: "accountHolderAddress",
      account_holder_name: "accountHolderName",
      account_number: "accountNumber",
      account_type: "accountType",
      bank_address: "bankAddress",
      bank_code: "bankCode",
      bank_name: "bankName",
      branch_code: "branchCode",
      branch_name: "branchName",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransferZenginRecord
 */
const SchemaOut$FundingInstructionsBankTransferZenginRecord: z.ZodType<
  External$FundingInstructionsBankTransferZenginRecord, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransferZenginRecord // the object to be transformed
> = z
  .object({
    accountHolderAddress: Schemas$Address.out,
    accountHolderName: z.string().nullable().optional(),
    accountNumber: z.string().nullable().optional(),
    accountType: z.string().nullable().optional(),
    bankAddress: Schemas$Address.out,
    bankCode: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    branchCode: z.string().nullable().optional(),
    branchName: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderAddress: "account_holder_address",
      accountHolderName: "account_holder_name",
      accountNumber: "account_number",
      accountType: "account_type",
      bankAddress: "bank_address",
      bankCode: "bank_code",
      bankName: "bank_name",
      branchCode: "branch_code",
      branchName: "branch_name",
    });
  });

export const Schemas$FundingInstructionsBankTransferZenginRecord = {
  in: SchemaIn$FundingInstructionsBankTransferZenginRecord,
  out: SchemaOut$FundingInstructionsBankTransferZenginRecord,
};
