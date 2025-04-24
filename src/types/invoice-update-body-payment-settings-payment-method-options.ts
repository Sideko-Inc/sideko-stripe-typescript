import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
} from "./invoice-update-body-payment-settings-payment-method-options-acss-debit-obj0";
import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
} from "./invoice-update-body-payment-settings-payment-method-options-bancontact-obj0";
import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
} from "./invoice-update-body-payment-settings-payment-method-options-card-obj0";
import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
} from "./invoice-update-body-payment-settings-payment-method-options-customer-balance-obj0";
import {
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
} from "./invoice-update-body-payment-settings-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions
 */
export type InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions = {
  acssDebit?:
    | (
        | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
        | string
      )
    | undefined;
  bancontact?:
    | (
        | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
        | string
      )
    | undefined;
  card?:
    | (InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0 | string)
    | undefined;
  customerBalance?:
    | (
        | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
        | string
      )
    | undefined;
  konbini?: (Record<string, any> | string) | undefined;
  sepaDebit?: (Record<string, any> | string) | undefined;
  usBankAccount?:
    | (
        | InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions = {
  acss_debit?:
    | (
        | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
        | string
      )
    | undefined;
  bancontact?:
    | (
        | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
        | string
      )
    | undefined;
  card?:
    | (
        | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
        | string
      )
    | undefined;
  customer_balance?:
    | (
        | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
        | string
      )
    | undefined;
  konbini?: (Record<string, any> | string) | undefined;
  sepa_debit?: (Record<string, any> | string) | undefined;
  us_bank_account?:
    | (
        | External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.in,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.in,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0.in,
        z.string(),
      ])
      .optional(),
    customer_balance: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.in,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepa_debit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    us_bank_account: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  External$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.out,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.out,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0.out,
        z.string(),
      ])
      .optional(),
    customerBalance: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.out,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepaDebit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    usBankAccount: z
      .union([
        Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.out,
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

export const Schemas$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions = {
  in: SchemaIn$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions,
  out: SchemaOut$InvoiceUpdateBodyPaymentSettingsPaymentMethodOptions,
};
