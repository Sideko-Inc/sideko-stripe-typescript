import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0,
} from "./subscription-create-body-payment-settings-payment-method-options-acss-debit-obj0";
import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0,
} from "./subscription-create-body-payment-settings-payment-method-options-bancontact-obj0";
import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0,
} from "./subscription-create-body-payment-settings-payment-method-options-card-obj0";
import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0,
} from "./subscription-create-body-payment-settings-payment-method-options-customer-balance-obj0";
import {
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0,
} from "./subscription-create-body-payment-settings-payment-method-options-us-bank-account-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions
 */
export type SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions = {
  acssDebit?:
    | (
        | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
        | string
      )
    | undefined;
  bancontact?:
    | (
        | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
        | string
      )
    | undefined;
  card?:
    | (
        | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
        | string
      )
    | undefined;
  customerBalance?:
    | (
        | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
        | string
      )
    | undefined;
  konbini?: (Record<string, any> | string) | undefined;
  sepaDebit?: (Record<string, any> | string) | undefined;
  usBankAccount?:
    | (
        | SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
        | string
      )
    | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions =
  {
    acss_debit?:
      | (
          | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0
          | string
        )
      | undefined;
    bancontact?:
      | (
          | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0
          | string
        )
      | undefined;
    card?:
      | (
          | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0
          | string
        )
      | undefined;
    customer_balance?:
      | (
          | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0
          | string
        )
      | undefined;
    konbini?: (Record<string, any> | string) | undefined;
    sepa_debit?: (Record<string, any> | string) | undefined;
    us_bank_account?:
      | (
          | External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0
          | string
        )
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.in,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.in,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0.in,
        z.string(),
      ])
      .optional(),
    customer_balance: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.in,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepa_debit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    us_bank_account: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions
 */
const SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions: z.ZodType<
  External$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions // the object to be transformed
> = z
  .object({
    acssDebit: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsAcssDebitObj0.out,
        z.string(),
      ])
      .optional(),
    bancontact: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsBancontactObj0.out,
        z.string(),
      ])
      .optional(),
    card: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCardObj0.out,
        z.string(),
      ])
      .optional(),
    customerBalance: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsCustomerBalanceObj0.out,
        z.string(),
      ])
      .optional(),
    konbini: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    sepaDebit: z.union([z.record(z.string(), z.any()), z.string()]).optional(),
    usBankAccount: z
      .union([
        Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptionsUsBankAccountObj0.out,
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

export const Schemas$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions =
  {
    in: SchemaIn$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions,
    out: SchemaOut$SubscriptionCreateBodyPaymentSettingsPaymentMethodOptions,
  };
