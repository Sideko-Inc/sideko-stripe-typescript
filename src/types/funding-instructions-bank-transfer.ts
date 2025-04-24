import {
  External$FundingInstructionsBankTransferFinancialAddress,
  FundingInstructionsBankTransferFinancialAddress,
  Schemas$FundingInstructionsBankTransferFinancialAddress,
} from "./funding-instructions-bank-transfer-financial-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type FundingInstructionsBankTransfer = {
  /**
   * The country of the bank account to fund
   */
  country: string;
  /**
   * A list of financial addresses that can be used to fund a particular balance
   */
  financialAddresses: FundingInstructionsBankTransferFinancialAddress[];
  /**
   * The bank_transfer type
   */
  type: "eu_bank_transfer" | "jp_bank_transfer";
};

/**
 * @internal
 * FundingInstructionsBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransfer = {
  country: string;
  financial_addresses: External$FundingInstructionsBankTransferFinancialAddress[];
  type: "eu_bank_transfer" | "jp_bank_transfer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransfer
 */
const SchemaIn$FundingInstructionsBankTransfer: z.ZodType<
  FundingInstructionsBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    country: z.string(),
    financial_addresses: z.array(
      Schemas$FundingInstructionsBankTransferFinancialAddress.in,
    ),
    type: z.enum(["eu_bank_transfer", "jp_bank_transfer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      financial_addresses: "financialAddresses",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransfer
 */
const SchemaOut$FundingInstructionsBankTransfer: z.ZodType<
  External$FundingInstructionsBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransfer // the object to be transformed
> = z
  .object({
    country: z.string(),
    financialAddresses: z.array(
      Schemas$FundingInstructionsBankTransferFinancialAddress.out,
    ),
    type: z.enum(["eu_bank_transfer", "jp_bank_transfer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      country: "country",
      financialAddresses: "financial_addresses",
      type: "type",
    });
  });

export const Schemas$FundingInstructionsBankTransfer = {
  in: SchemaIn$FundingInstructionsBankTransfer,
  out: SchemaOut$FundingInstructionsBankTransfer,
};
