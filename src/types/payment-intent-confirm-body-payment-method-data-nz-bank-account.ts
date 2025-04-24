import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount
 */
export type PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount = {
  accountHolderName?: string | undefined;
  accountNumber: string;
  bankCode: string;
  branchCode: string;
  reference?: string | undefined;
  suffix: string;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount = {
  account_holder_name?: string | undefined;
  account_number: string;
  bank_code: string;
  branch_code: string;
  reference?: string | undefined;
  suffix: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string().optional(),
    account_number: z.string(),
    bank_code: z.string(),
    branch_code: z.string(),
    reference: z.string().optional(),
    suffix: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      account_number: "accountNumber",
      bank_code: "bankCode",
      branch_code: "branchCode",
      reference: "reference",
      suffix: "suffix",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().optional(),
    accountNumber: z.string(),
    bankCode: z.string(),
    branchCode: z.string(),
    reference: z.string().optional(),
    suffix: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      accountNumber: "account_number",
      bankCode: "bank_code",
      branchCode: "branch_code",
      reference: "reference",
      suffix: "suffix",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount,
};
