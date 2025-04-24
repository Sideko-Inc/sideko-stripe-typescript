import {
  External$FundingInstructionsBankTransferAbaRecord,
  FundingInstructionsBankTransferAbaRecord,
  Schemas$FundingInstructionsBankTransferAbaRecord,
} from "./funding-instructions-bank-transfer-aba-record";
import {
  External$FundingInstructionsBankTransferIbanRecord,
  FundingInstructionsBankTransferIbanRecord,
  Schemas$FundingInstructionsBankTransferIbanRecord,
} from "./funding-instructions-bank-transfer-iban-record";
import {
  External$FundingInstructionsBankTransferSortCodeRecord,
  FundingInstructionsBankTransferSortCodeRecord,
  Schemas$FundingInstructionsBankTransferSortCodeRecord,
} from "./funding-instructions-bank-transfer-sort-code-record";
import {
  External$FundingInstructionsBankTransferSpeiRecord,
  FundingInstructionsBankTransferSpeiRecord,
  Schemas$FundingInstructionsBankTransferSpeiRecord,
} from "./funding-instructions-bank-transfer-spei-record";
import {
  External$FundingInstructionsBankTransferSwiftRecord,
  FundingInstructionsBankTransferSwiftRecord,
  Schemas$FundingInstructionsBankTransferSwiftRecord,
} from "./funding-instructions-bank-transfer-swift-record";
import {
  External$FundingInstructionsBankTransferZenginRecord,
  FundingInstructionsBankTransferZenginRecord,
  Schemas$FundingInstructionsBankTransferZenginRecord,
} from "./funding-instructions-bank-transfer-zengin-record";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FinancialAddresses contain identifying information that resolves to a FinancialAccount.
 */
export type FundingInstructionsBankTransferFinancialAddress = {
  /**
   * ABA Records contain U.S. bank account details per the ABA format.
   */
  aba?: FundingInstructionsBankTransferAbaRecord | undefined;
  /**
   * Iban Records contain E.U. bank account details per the SEPA format.
   */
  iban?: FundingInstructionsBankTransferIbanRecord | undefined;
  /**
   * Sort Code Records contain U.K. bank account details per the sort code format.
   */
  sortCode?: FundingInstructionsBankTransferSortCodeRecord | undefined;
  /**
   * SPEI Records contain Mexico bank account details per the SPEI format.
   */
  spei?: FundingInstructionsBankTransferSpeiRecord | undefined;
  /**
   * The payment networks supported by this FinancialAddress
   */
  supportedNetworks?:
    | (
        | "ach"
        | "bacs"
        | "domestic_wire_us"
        | "fps"
        | "sepa"
        | "spei"
        | "swift"
        | "zengin"
      )[]
    | undefined;
  /**
   * SWIFT Records contain U.S. bank account details per the SWIFT format.
   */
  swift?: FundingInstructionsBankTransferSwiftRecord | undefined;
  /**
   * The type of financial address
   */
  type: "aba" | "iban" | "sort_code" | "spei" | "swift" | "zengin";
  /**
   * Zengin Records contain Japan bank account details per the Zengin format.
   */
  zengin?: FundingInstructionsBankTransferZenginRecord | undefined;
};

/**
 * @internal
 * FundingInstructionsBankTransferFinancialAddress without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FundingInstructionsBankTransferFinancialAddress = {
  aba?: External$FundingInstructionsBankTransferAbaRecord | undefined;
  iban?: External$FundingInstructionsBankTransferIbanRecord | undefined;
  sort_code?:
    | External$FundingInstructionsBankTransferSortCodeRecord
    | undefined;
  spei?: External$FundingInstructionsBankTransferSpeiRecord | undefined;
  supported_networks?:
    | (
        | "ach"
        | "bacs"
        | "domestic_wire_us"
        | "fps"
        | "sepa"
        | "spei"
        | "swift"
        | "zengin"
      )[]
    | undefined;
  swift?: External$FundingInstructionsBankTransferSwiftRecord | undefined;
  type: "aba" | "iban" | "sort_code" | "spei" | "swift" | "zengin";
  zengin?: External$FundingInstructionsBankTransferZenginRecord | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FundingInstructionsBankTransferFinancialAddress
 */
const SchemaIn$FundingInstructionsBankTransferFinancialAddress: z.ZodType<
  FundingInstructionsBankTransferFinancialAddress, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aba: Schemas$FundingInstructionsBankTransferAbaRecord.in.optional(),
    iban: Schemas$FundingInstructionsBankTransferIbanRecord.in.optional(),
    sort_code:
      Schemas$FundingInstructionsBankTransferSortCodeRecord.in.optional(),
    spei: Schemas$FundingInstructionsBankTransferSpeiRecord.in.optional(),
    supported_networks: z
      .array(
        z.enum([
          "ach",
          "bacs",
          "domestic_wire_us",
          "fps",
          "sepa",
          "spei",
          "swift",
          "zengin",
        ]),
      )
      .optional(),
    swift: Schemas$FundingInstructionsBankTransferSwiftRecord.in.optional(),
    type: z.enum(["aba", "iban", "sort_code", "spei", "swift", "zengin"]),
    zengin: Schemas$FundingInstructionsBankTransferZenginRecord.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
      iban: "iban",
      sort_code: "sortCode",
      spei: "spei",
      supported_networks: "supportedNetworks",
      swift: "swift",
      type: "type",
      zengin: "zengin",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FundingInstructionsBankTransferFinancialAddress
 */
const SchemaOut$FundingInstructionsBankTransferFinancialAddress: z.ZodType<
  External$FundingInstructionsBankTransferFinancialAddress, // output type of this zod object
  z.ZodTypeDef,
  FundingInstructionsBankTransferFinancialAddress // the object to be transformed
> = z
  .object({
    aba: Schemas$FundingInstructionsBankTransferAbaRecord.out.optional(),
    iban: Schemas$FundingInstructionsBankTransferIbanRecord.out.optional(),
    sortCode:
      Schemas$FundingInstructionsBankTransferSortCodeRecord.out.optional(),
    spei: Schemas$FundingInstructionsBankTransferSpeiRecord.out.optional(),
    supportedNetworks: z
      .array(
        z.enum([
          "ach",
          "bacs",
          "domestic_wire_us",
          "fps",
          "sepa",
          "spei",
          "swift",
          "zengin",
        ]),
      )
      .optional(),
    swift: Schemas$FundingInstructionsBankTransferSwiftRecord.out.optional(),
    type: z.enum(["aba", "iban", "sort_code", "spei", "swift", "zengin"]),
    zengin: Schemas$FundingInstructionsBankTransferZenginRecord.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aba: "aba",
      iban: "iban",
      sortCode: "sort_code",
      spei: "spei",
      supportedNetworks: "supported_networks",
      swift: "swift",
      type: "type",
      zengin: "zengin",
    });
  });

export const Schemas$FundingInstructionsBankTransferFinancialAddress = {
  in: SchemaIn$FundingInstructionsBankTransferFinancialAddress,
  out: SchemaOut$FundingInstructionsBankTransferFinancialAddress,
};
