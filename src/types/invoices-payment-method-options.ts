import {
  External$InvoicePaymentMethodOptionsAcssDebit,
  InvoicePaymentMethodOptionsAcssDebit,
  Schemas$InvoicePaymentMethodOptionsAcssDebit,
} from "./invoice-payment-method-options-acss-debit";
import {
  External$InvoicePaymentMethodOptionsBancontact,
  InvoicePaymentMethodOptionsBancontact,
  Schemas$InvoicePaymentMethodOptionsBancontact,
} from "./invoice-payment-method-options-bancontact";
import {
  External$InvoicePaymentMethodOptionsCard,
  InvoicePaymentMethodOptionsCard,
  Schemas$InvoicePaymentMethodOptionsCard,
} from "./invoice-payment-method-options-card";
import {
  External$InvoicePaymentMethodOptionsCustomerBalance,
  InvoicePaymentMethodOptionsCustomerBalance,
  Schemas$InvoicePaymentMethodOptionsCustomerBalance,
} from "./invoice-payment-method-options-customer-balance";
import {
  External$InvoicePaymentMethodOptionsUsBankAccount,
  InvoicePaymentMethodOptionsUsBankAccount,
  Schemas$InvoicePaymentMethodOptionsUsBankAccount,
} from "./invoice-payment-method-options-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesPaymentMethodOptions = {
  acssDebit?: InvoicePaymentMethodOptionsAcssDebit | undefined;
  bancontact?: InvoicePaymentMethodOptionsBancontact | undefined;
  card?: InvoicePaymentMethodOptionsCard | undefined;
  customerBalance?: InvoicePaymentMethodOptionsCustomerBalance | undefined;
  konbini?: Record<string, any> | undefined;
  sepaDebit?: Record<string, any> | undefined;
  usBankAccount?: InvoicePaymentMethodOptionsUsBankAccount | undefined;
};

/**
 * @internal
 * InvoicesPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesPaymentMethodOptions = {
  acss_debit?: External$InvoicePaymentMethodOptionsAcssDebit | undefined;
  bancontact?: External$InvoicePaymentMethodOptionsBancontact | undefined;
  card?: External$InvoicePaymentMethodOptionsCard | undefined;
  customer_balance?:
    | External$InvoicePaymentMethodOptionsCustomerBalance
    | undefined;
  konbini?: Record<string, any> | undefined;
  sepa_debit?: Record<string, any> | undefined;
  us_bank_account?:
    | External$InvoicePaymentMethodOptionsUsBankAccount
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesPaymentMethodOptions
 */
const SchemaIn$InvoicesPaymentMethodOptions: z.ZodType<
  InvoicesPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: Schemas$InvoicePaymentMethodOptionsAcssDebit.in.optional(),
    bancontact: Schemas$InvoicePaymentMethodOptionsBancontact.in.optional(),
    card: Schemas$InvoicePaymentMethodOptionsCard.in.optional(),
    customer_balance:
      Schemas$InvoicePaymentMethodOptionsCustomerBalance.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    sepa_debit: z.record(z.string(), z.any()).optional(),
    us_bank_account:
      Schemas$InvoicePaymentMethodOptionsUsBankAccount.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      bancontact: "bancontact",
      card: "card",
      customer_balance: "customerBalance",
      konbini: "konbini",
      sepa_debit: "sepaDebit",
      us_bank_account: "usBankAccount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesPaymentMethodOptions
 */
const SchemaOut$InvoicesPaymentMethodOptions: z.ZodType<
  External$InvoicesPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoicesPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: Schemas$InvoicePaymentMethodOptionsAcssDebit.out.optional(),
    bancontact: Schemas$InvoicePaymentMethodOptionsBancontact.out.optional(),
    card: Schemas$InvoicePaymentMethodOptionsCard.out.optional(),
    customerBalance:
      Schemas$InvoicePaymentMethodOptionsCustomerBalance.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    sepaDebit: z.record(z.string(), z.any()).optional(),
    usBankAccount:
      Schemas$InvoicePaymentMethodOptionsUsBankAccount.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      bancontact: "bancontact",
      card: "card",
      customerBalance: "customer_balance",
      konbini: "konbini",
      sepaDebit: "sepa_debit",
      usBankAccount: "us_bank_account",
    });
  });

export const Schemas$InvoicesPaymentMethodOptions = {
  in: SchemaIn$InvoicesPaymentMethodOptions,
  out: SchemaOut$InvoicesPaymentMethodOptions,
};
