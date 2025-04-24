import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
} from "./subscription-update-body-payment-settings-payment-method-options-acss-debit-obj0";
import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
} from "./subscription-update-body-payment-settings-payment-method-options-bancontact-obj0";
import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
} from "./subscription-update-body-payment-settings-payment-method-options-card-obj0";
import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
} from "./subscription-update-body-payment-settings-payment-method-options-customer-balance-obj0";
import {
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
} from "./subscription-update-body-payment-settings-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions
 */
export type SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions = {
  acssDebit?:
    | (
        | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
        | string
      )
    | undefined;
  bancontact?:
    | (
        | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
        | string
      )
    | undefined;
  card?:
    | (
        | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
        | string
      )
    | undefined;
  customerBalance?:
    | (
        | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
        | string
      )
    | undefined;
  konbini?: (Record<string, any> | string) | undefined;
  sepaDebit?: (Record<string, any> | string) | undefined;
  usBankAccount?:
    | (
        | SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions =
  {
    acss_debit?:
      | (
          | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
          | string
        )
      | undefined;
    bancontact?:
      | (
          | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
          | string
        )
      | undefined;
    card?:
      | (
          | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0
          | string
        )
      | undefined;
    customer_balance?:
      | (
          | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
          | string
        )
      | undefined;
    konbini?: (Record<string, any> | string) | undefined;
    sepa_debit?: (Record<string, any> | string) | undefined;
    us_bank_account?:
      | (
          | External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.in,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.in,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0.in,
        z.string(),
      ])
      .optional(),
    customer_balance: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.in,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepa_debit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    us_bank_account: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  External$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.out,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.out,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCardObj0.out,
        z.string(),
      ])
      .optional(),
    customerBalance: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.out,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepaDebit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    usBankAccount: z
      .union([
        Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.out,
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

export const Schemas$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions =
  {
    in: SchemaIn$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions,
    out: SchemaOut$SubscriptionUpdateBodyPaymentSettingsPaymentMethodOptions,
  };
