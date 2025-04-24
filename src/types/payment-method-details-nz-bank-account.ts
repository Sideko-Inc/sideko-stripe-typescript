import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsNzBankAccount = {
  /**
   * The name on the bank account. Only present if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod’s billing details.
   */
  accountHolderName?: string | null | undefined;
  /**
   * The numeric code for the bank account's bank.
   */
  bankCode: string;
  /**
   * The name of the bank.
   */
  bankName: string;
  /**
   * The numeric code for the bank account's bank branch.
   */
  branchCode: string;
  /**
   * Last four digits of the bank account number.
   */
  last4: string;
  /**
   * The suffix of the bank account number.
   */
  suffix?: string | null | undefined;
};

/**
 * @internal
 * PaymentMethodDetailsNzBankAccount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsNzBankAccount = {
  account_holder_name?: string | null | undefined;
  bank_code: string;
  bank_name: string;
  branch_code: string;
  last4: string;
  suffix?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsNzBankAccount
 */
const SchemaIn$PaymentMethodDetailsNzBankAccount: z.ZodType<
  PaymentMethodDetailsNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_holder_name: z.string().nullable().optional(),
    bank_code: z.string(),
    bank_name: z.string(),
    branch_code: z.string(),
    last4: z.string(),
    suffix: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account_holder_name: "accountHolderName",
      bank_code: "bankCode",
      bank_name: "bankName",
      branch_code: "branchCode",
      last4: "last4",
      suffix: "suffix",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsNzBankAccount
 */
const SchemaOut$PaymentMethodDetailsNzBankAccount: z.ZodType<
  External$PaymentMethodDetailsNzBankAccount, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsNzBankAccount // the object to be transformed
> = z
  .object({
    accountHolderName: z.string().nullable().optional(),
    bankCode: z.string(),
    bankName: z.string(),
    branchCode: z.string(),
    last4: z.string(),
    suffix: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      accountHolderName: "account_holder_name",
      bankCode: "bank_code",
      bankName: "bank_name",
      branchCode: "branch_code",
      last4: "last4",
      suffix: "suffix",
    });
  });

export const Schemas$PaymentMethodDetailsNzBankAccount = {
  in: SchemaIn$PaymentMethodDetailsNzBankAccount,
  out: SchemaOut$PaymentMethodDetailsNzBankAccount,
};
