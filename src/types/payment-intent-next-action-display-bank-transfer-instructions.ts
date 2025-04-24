import {
  External$FundingInstructionsBankTransferFinancialAddress,
  FundingInstructionsBankTransferFinancialAddress,
  Schemas$FundingInstructionsBankTransferFinancialAddress,
} from "./funding-instructions-bank-transfer-financial-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionDisplayBankTransferInstructions = {
  /**
   * The remaining amount that needs to be transferred to complete the payment.
   */
  amountRemaining?: number | null | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | null | undefined;
  /**
   * A list of financial addresses that can be used to fund the customer balance
   */
  financialAddresses?:
    | FundingInstructionsBankTransferFinancialAddress[]
    | undefined;
  /**
   * A link to a hosted page that guides your customer through completing the transfer.
   */
  hostedInstructionsUrl?: string | null | undefined;
  /**
   * A string identifying this payment. Instruct your customer to include this code in the reference or memo field of their bank transfer.
   */
  reference?: string | null | undefined;
  /**
   * Type of bank transfer
   */
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer"
    | "us_bank_transfer";
};

/**
 * @internal
 * PaymentIntentNextActionDisplayBankTransferInstructions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionDisplayBankTransferInstructions = {
  amount_remaining?: number | null | undefined;
  currency?: string | null | undefined;
  financial_addresses?:
    | External$FundingInstructionsBankTransferFinancialAddress[]
    | undefined;
  hosted_instructions_url?: string | null | undefined;
  reference?: string | null | undefined;
  type:
    | "eu_bank_transfer"
    | "gb_bank_transfer"
    | "jp_bank_transfer"
    | "mx_bank_transfer"
    | "us_bank_transfer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionDisplayBankTransferInstructions
 */
const SchemaIn$PaymentIntentNextActionDisplayBankTransferInstructions: z.ZodType<
  PaymentIntentNextActionDisplayBankTransferInstructions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_remaining: z.number().int().nullable().optional(),
    currency: z.string().nullable().optional(),
    financial_addresses: z
      .array(Schemas$FundingInstructionsBankTransferFinancialAddress.in)
      .optional(),
    hosted_instructions_url: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
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
      amount_remaining: "amountRemaining",
      currency: "currency",
      financial_addresses: "financialAddresses",
      hosted_instructions_url: "hostedInstructionsUrl",
      reference: "reference",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionDisplayBankTransferInstructions
 */
const SchemaOut$PaymentIntentNextActionDisplayBankTransferInstructions: z.ZodType<
  External$PaymentIntentNextActionDisplayBankTransferInstructions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionDisplayBankTransferInstructions // the object to be transformed
> = z
  .object({
    amountRemaining: z.number().int().nullable().optional(),
    currency: z.string().nullable().optional(),
    financialAddresses: z
      .array(Schemas$FundingInstructionsBankTransferFinancialAddress.out)
      .optional(),
    hostedInstructionsUrl: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
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
      amountRemaining: "amount_remaining",
      currency: "currency",
      financialAddresses: "financial_addresses",
      hostedInstructionsUrl: "hosted_instructions_url",
      reference: "reference",
      type: "type",
    });
  });

export const Schemas$PaymentIntentNextActionDisplayBankTransferInstructions = {
  in: SchemaIn$PaymentIntentNextActionDisplayBankTransferInstructions,
  out: SchemaOut$PaymentIntentNextActionDisplayBankTransferInstructions,
};
