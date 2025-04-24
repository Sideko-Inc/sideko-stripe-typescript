import {
  CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer,
  External$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer,
  Schemas$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer,
} from "./customer-funding-instruction-create-body-bank-transfer-eu-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional parameters for `bank_transfer` funding types
 */
export type CustomerFundingInstructionCreateBodyBankTransfer = {
  euBankTransfer?:
    | CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer
    | undefined;
  requestedAddressTypes?:
    | ("iban" | "sort_code" | "spei" | "zengin")[]
    | undefined;
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer"
    | "us_bank_transfer";
};

/**
 * @internal
 * CustomerFundingInstructionCreateBodyBankTransfer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerFundingInstructionCreateBodyBankTransfer = {
  eu_bank_transfer?:
    | External$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer
    | undefined;
  requested_address_types?:
    | ("iban" | "sort_code" | "spei" | "zengin")[]
    | undefined;
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer"
    | "us_bank_transfer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerFundingInstructionCreateBodyBankTransfer
 */
const SchemaIn$CustomerFundingInstructionCreateBodyBankTransfer: z.ZodType<
  CustomerFundingInstructionCreateBodyBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eu_bank_transfer:
      Schemas$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer.in.optional(),
    requested_address_types: z
      .array(z.enum(["iban", "sort_code", "spei", "zengin"]))
      .optional(),
    type: z.enum([
      "eu_bank_transfer",
      "gb_bank_transfer",
      "jp_bank_transfer",
      "mx_bank_transfer",
      "us_bank_transfer",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eu_bank_transfer: "euBankTransfer",
      requested_address_types: "requestedAddressTypes",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerFundingInstructionCreateBodyBankTransfer
 */
const SchemaOut$CustomerFundingInstructionCreateBodyBankTransfer: z.ZodType<
  External$CustomerFundingInstructionCreateBodyBankTransfer, // output type of this zod object
  z.ZodTypeDef,
  CustomerFundingInstructionCreateBodyBankTransfer // the object to be transformed
> = z
  .object({
    euBankTransfer:
      Schemas$CustomerFundingInstructionCreateBodyBankTransferEuBankTransfer.out.optional(),
    requestedAddressTypes: z
      .array(z.enum(["iban", "sort_code", "spei", "zengin"]))
      .optional(),
    type: z.enum([
      "eu_bank_transfer",
      "gb_bank_transfer",
      "jp_bank_transfer",
      "mx_bank_transfer",
      "us_bank_transfer",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      euBankTransfer: "eu_bank_transfer",
      requestedAddressTypes: "requested_address_types",
      type: "type",
    });
  });

export const Schemas$CustomerFundingInstructionCreateBodyBankTransfer = {
  in: SchemaIn$CustomerFundingInstructionCreateBodyBankTransfer,
  out: SchemaOut$CustomerFundingInstructionCreateBodyBankTransfer,
};
