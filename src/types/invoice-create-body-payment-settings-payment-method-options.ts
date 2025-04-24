import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
} from "./invoice-create-body-payment-settings-payment-method-options-acss-debit-obj0";
import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
} from "./invoice-create-body-payment-settings-payment-method-options-bancontact-obj0";
import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
} from "./invoice-create-body-payment-settings-payment-method-options-card-obj0";
import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
} from "./invoice-create-body-payment-settings-payment-method-options-customer-balance-obj0";
import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
} from "./invoice-create-body-payment-settings-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptions
 */
export type InvoiceCreateBodyPaymentSettingsPaymentMethodOptions = {
  acssDebit?:
    | (
        | InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
        | string
      )
    | undefined;
  bancontact?:
    | (
        | InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
        | string
      )
    | undefined;
  card?:
    | (InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0 | string)
    | undefined;
  customerBalance?:
    | (
        | InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
        | string
      )
    | undefined;
  konbini?: (Record<string, any> | string) | undefined;
  sepaDebit?: (Record<string, any> | string) | undefined;
  usBankAccount?:
    | (
        | InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyPaymentSettingsPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions = {
  acss_debit?:
    | (
        | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
        | string
      )
    | undefined;
  bancontact?:
    | (
        | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
        | string
      )
    | undefined;
  card?:
    | (
        | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
        | string
      )
    | undefined;
  customer_balance?:
    | (
        | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
        | string
      )
    | undefined;
  konbini?: (Record<string, any> | string) | undefined;
  sepa_debit?: (Record<string, any> | string) | undefined;
  us_bank_account?:
    | (
        | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.in,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.in,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0.in,
        z.string(),
      ])
      .optional(),
    customer_balance: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.in,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepa_debit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    us_bank_account: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.in,
        z.string(),
      ])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.out,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.out,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0.out,
        z.string(),
      ])
      .optional(),
    customerBalance: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.out,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepaDebit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    usBankAccount: z
      .union([
        Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.out,
        z.string(),
      ])
      .optional(),
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

export const Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions = {
  in: SchemaIn$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions,
  out: SchemaOut$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions,
};
