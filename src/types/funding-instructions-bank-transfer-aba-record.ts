import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ABA Records contain U.S. bank account details per the ABA format.
 */
export type FundingInstructionsBankTransferAbaRecord = {
  accountHolderAddress: Address;
  /**
   * The account holder name
   */
  accountHolderName: string;
  /**
   * The ABA account number
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
   * The ABA routing number
   */
  routingNumber: string;
};

/**
 * @internal
 * FundingInstructionsBankTransferAbaRecord without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransferAbaRecord = {
  account_holder_address: External$Address;
  account_holder_name: string;
  account_number: string;
  account_type: string;
  bank_address: External$Address;
  bank_name: string;
  routing_number: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransferAbaRecord
 */
const SchemaIn$FundingInstructionsBankTransferAbaRecord: z.ZodType<
  FundingInstructionsBankTransferAbaRecord, // output type of this zod object
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
    routing_number: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_address: "accountHolderAddress",
      account_holder_name: "accountHolderName",
      account_number: "accountNumber",
      account_type: "accountType",
      bank_address: "bankAddress",
      bank_name: "bankName",
      routing_number: "routingNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransferAbaRecord
 */
const SchemaOut$FundingInstructionsBankTransferAbaRecord: z.ZodType<
  External$FundingInstructionsBankTransferAbaRecord, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransferAbaRecord // the object to be transformed
> = z
  .object({
    accountHolderAddress: Schemas$Address.out,
    accountHolderName: z.string(),
    accountNumber: z.string(),
    accountType: z.string(),
    bankAddress: Schemas$Address.out,
    bankName: z.string(),
    routingNumber: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderAddress: "account_holder_address",
      accountHolderName: "account_holder_name",
      accountNumber: "account_number",
      accountType: "account_type",
      bankAddress: "bank_address",
      bankName: "bank_name",
      routingNumber: "routing_number",
    });
  });

export const Schemas$FundingInstructionsBankTransferAbaRecord = {
  in: SchemaIn$FundingInstructionsBankTransferAbaRecord,
  out: SchemaOut$FundingInstructionsBankTransferAbaRecord,
};
