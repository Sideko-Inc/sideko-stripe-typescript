import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SWIFT Records contain U.S. bank account details per the SWIFT format.
 */
export type FundingInstructionsBankTransferSwiftRecord = {
  accountHolderAddress: Address;
  /**
   * The account holder name
   */
  accountHolderName: string;
  /**
   * The account number
   */
  accountNumber: string;
  /**
   * The account type
   */
  accountType: string;
  bankAddress: Address;
  /**
   * The bank name
   */
  bankName: string;
  /**
   * The SWIFT code
   */
  swiftCode: string;
};

/**
 * @internal
 * FundingInstructionsBankTransferSwiftRecord without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransferSwiftRecord = {
  account_holder_address: External$Address;
  account_holder_name: string;
  account_number: string;
  account_type: string;
  bank_address: External$Address;
  bank_name: string;
  swift_code: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransferSwiftRecord
 */
const SchemaIn$FundingInstructionsBankTransferSwiftRecord: z.ZodType<
  FundingInstructionsBankTransferSwiftRecord, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_address: Schemas$Address.in,
    account_holder_name: z.string(),
    account_number: z.string(),
    account_type: z.string(),
    bank_address: Schemas$Address.in,
    bank_name: z.string(),
    swift_code: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_address: "accountHolderAddress",
      account_holder_name: "accountHolderName",
      account_number: "accountNumber",
      account_type: "accountType",
      bank_address: "bankAddress",
      bank_name: "bankName",
      swift_code: "swiftCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransferSwiftRecord
 */
const SchemaOut$FundingInstructionsBankTransferSwiftRecord: z.ZodType<
  External$FundingInstructionsBankTransferSwiftRecord, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransferSwiftRecord // the object to be transformed
> = z
  .object({
    accountHolderAddress: Schemas$Address.out,
    accountHolderName: z.string(),
    accountNumber: z.string(),
    accountType: z.string(),
    bankAddress: Schemas$Address.out,
    bankName: z.string(),
    swiftCode: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderAddress: "account_holder_address",
      accountHolderName: "account_holder_name",
      accountNumber: "account_number",
      accountType: "account_type",
      bankAddress: "bank_address",
      bankName: "bank_name",
      swiftCode: "swift_code",
    });
  });

export const Schemas$FundingInstructionsBankTransferSwiftRecord = {
  in: SchemaIn$FundingInstructionsBankTransferSwiftRecord,
  out: SchemaOut$FundingInstructionsBankTransferSwiftRecord,
};
