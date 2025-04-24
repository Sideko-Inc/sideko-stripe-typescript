import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-acss-debit-obj0";
import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-bancontact-obj0";
import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-card-obj0";
import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-customer-balance-obj0";
import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions
 */
export type CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions =
  {
    acssDebit?:
      | (
          | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
          | string
        )
      | undefined;
    bancontact?:
      | (
          | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
          | string
        )
      | undefined;
    card?:
      | (
          | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0
          | string
        )
      | undefined;
    customerBalance?:
      | (
          | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
          | string
        )
      | undefined;
    konbini?: (Record<string, any> | string) | undefined;
    sepaDebit?: (Record<string, any> | string) | undefined;
    usBankAccount?:
      | (
          | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions =
  {
    acss_debit?:
      | (
          | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
          | string
        )
      | undefined;
    bancontact?:
      | (
          | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
          | string
        )
      | undefined;
    card?:
      | (
          | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0
          | string
        )
      | undefined;
    customer_balance?:
      | (
          | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
          | string
        )
      | undefined;
    konbini?: (Record<string, any> | string) | undefined;
    sepa_debit?: (Record<string, any> | string) | undefined;
    us_bank_account?:
      | (
          | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.in,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.in,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0.in,
        z.string(),
      ])
      .optional(),
    customer_balance: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.in,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepa_debit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    us_bank_account: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.out,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.out,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCardObj0.out,
        z.string(),
      ])
      .optional(),
    customerBalance: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.out,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepaDebit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    usBankAccount: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.out,
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

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions,
    out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions,
  };
