import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-acss-debit-obj0";
import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-bancontact-obj0";
import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-card-obj0";
import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-customer-balance-obj0";
import {
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
} from "./customer-subscription-create-body-payment-settings-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions
 */
export type CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions =
  {
    acssDebit?:
      | (
          | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
          | string
        )
      | undefined;
    bancontact?:
      | (
          | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
          | string
        )
      | undefined;
    card?:
      | (
          | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
          | string
        )
      | undefined;
    customerBalance?:
      | (
          | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
          | string
        )
      | undefined;
    konbini?: (Record<string, any> | string) | undefined;
    sepaDebit?: (Record<string, any> | string) | undefined;
    usBankAccount?:
      | (
          | CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * @internal
 * CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions =
  {
    acss_debit?:
      | (
          | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
          | string
        )
      | undefined;
    bancontact?:
      | (
          | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
          | string
        )
      | undefined;
    card?:
      | (
          | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
          | string
        )
      | undefined;
    customer_balance?:
      | (
          | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
          | string
        )
      | undefined;
    konbini?: (Record<string, any> | string) | undefined;
    sepa_debit?: (Record<string, any> | string) | undefined;
    us_bank_account?:
      | (
          | External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.in,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.in,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0.in,
        z.string(),
      ])
      .optional(),
    customer_balance: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.in,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepa_debit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    us_bank_account: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  External$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.out,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.out,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0.out,
        z.string(),
      ])
      .optional(),
    customerBalance: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.out,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepaDebit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    usBankAccount: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.out,
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

export const Schemas$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions,
    out: SchemaOut$CustomerSubscriptionCreateBodyPaymentSettingsPaymentMethodOptions,
  };
