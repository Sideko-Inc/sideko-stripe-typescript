import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Iban Records contain E.U. bank account details per the SEPA format.
 */
export type FundingInstructionsBankTransferIbanRecord = {
  accountHolderAddress: Address;
  /**
   * The name of the person or business that owns the bank account
   */
  accountHolderName: string;
  bankAddress: Address;
  /**
   * The BIC/SWIFT code of the account.
   */
  bic: string;
  /**
   * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
   */
  country: string;
  /**
   * The IBAN of the account.
   */
  iban: string;
};

/**
 * @internal
 * FundingInstructionsBankTransferIbanRecord without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransferIbanRecord = {
  account_holder_address: External$Address;
  account_holder_name: string;
  bank_address: External$Address;
  bic: string;
  country: string;
  iban: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransferIbanRecord
 */
const SchemaIn$FundingInstructionsBankTransferIbanRecord: z.ZodType<
  FundingInstructionsBankTransferIbanRecord, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_address: Schemas$Address.in,
    account_holder_name: z.string(),
    bank_address: Schemas$Address.in,
    bic: z.string(),
    country: z.string(),
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_address: "accountHolderAddress",
      account_holder_name: "accountHolderName",
      bank_address: "bankAddress",
      bic: "bic",
      country: "country",
      iban: "iban",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransferIbanRecord
 */
const SchemaOut$FundingInstructionsBankTransferIbanRecord: z.ZodType<
  External$FundingInstructionsBankTransferIbanRecord, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransferIbanRecord // the object to be transformed
> = z
  .object({
    accountHolderAddress: Schemas$Address.out,
    accountHolderName: z.string(),
    bankAddress: Schemas$Address.out,
    bic: z.string(),
    country: z.string(),
    iban: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderAddress: "account_holder_address",
      accountHolderName: "account_holder_name",
      bankAddress: "bank_address",
      bic: "bic",
      country: "country",
      iban: "iban",
    });
  });

export const Schemas$FundingInstructionsBankTransferIbanRecord = {
  in: SchemaIn$FundingInstructionsBankTransferIbanRecord,
  out: SchemaOut$FundingInstructionsBankTransferIbanRecord,
};
