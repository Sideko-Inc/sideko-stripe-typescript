import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SPEI Records contain Mexico bank account details per the SPEI format.
 */
export type FundingInstructionsBankTransferSpeiRecord = {
  accountHolderAddress: Address;
  /**
   * The account holder name
   */
  accountHolderName: string;
  bankAddress: Address;
  /**
   * The three-digit bank code
   */
  bankCode: string;
  /**
   * The short banking institution name
   */
  bankName: string;
  /**
   * The CLABE number
   */
  clabe: string;
};

/**
 * @internal
 * FundingInstructionsBankTransferSpeiRecord without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransferSpeiRecord = {
  account_holder_address: External$Address;
  account_holder_name: string;
  bank_address: External$Address;
  bank_code: string;
  bank_name: string;
  clabe: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransferSpeiRecord
 */
const SchemaIn$FundingInstructionsBankTransferSpeiRecord: z.ZodType<
  FundingInstructionsBankTransferSpeiRecord, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_address: Schemas$Address.in,
    account_holder_name: z.string(),
    bank_address: Schemas$Address.in,
    bank_code: z.string(),
    bank_name: z.string(),
    clabe: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_address: "accountHolderAddress",
      account_holder_name: "accountHolderName",
      bank_address: "bankAddress",
      bank_code: "bankCode",
      bank_name: "bankName",
      clabe: "clabe",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransferSpeiRecord
 */
const SchemaOut$FundingInstructionsBankTransferSpeiRecord: z.ZodType<
  External$FundingInstructionsBankTransferSpeiRecord, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransferSpeiRecord // the object to be transformed
> = z
  .object({
    accountHolderAddress: Schemas$Address.out,
    accountHolderName: z.string(),
    bankAddress: Schemas$Address.out,
    bankCode: z.string(),
    bankName: z.string(),
    clabe: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderAddress: "account_holder_address",
      accountHolderName: "account_holder_name",
      bankAddress: "bank_address",
      bankCode: "bank_code",
      bankName: "bank_name",
      clabe: "clabe",
    });
  });

export const Schemas$FundingInstructionsBankTransferSpeiRecord = {
  in: SchemaIn$FundingInstructionsBankTransferSpeiRecord,
  out: SchemaOut$FundingInstructionsBankTransferSpeiRecord,
};
