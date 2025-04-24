import {
  CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions,
  External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions,
} from "./customer-subscription-modify-body-payment-settings-payment-method-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Payment settings to pass to invoices created by the subscription.
 */
export type CustomerSubscriptionModifyBodyPaymentSettings = {
  paymentMethodOptions?:
    | CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions
    | undefined;
  paymentMethodTypes?:
    | (
        | (
            | "ach_credit_transfer"
            | "ach_debit"
            | "acss_debit"
            | "amazon_pay"
            | "au_becs_debit"
            | "bacs_debit"
            | "bancontact"
            | "boleto"
            | "card"
            | "cashapp"
            | "customer_balance"
            | "eps"
            | "fpx"
            | "giropay"
            | "grabpay"
            | "ideal"
            | "jp_credit_transfer"
            | "kakao_pay"
            | "klarna"
            | "konbini"
            | "kr_card"
            | "link"
            | "multibanco"
            | "naver_pay"
            | "nz_bank_account"
            | "p24"
            | "payco"
            | "paynow"
            | "paypal"
            | "promptpay"
            | "revolut_pay"
            | "sepa_credit_transfer"
            | "sepa_debit"
            | "sofort"
            | "swish"
            | "us_bank_account"
            | "wechat_pay"
          )[]
        | string
      )
    | undefined;
  saveDefaultPaymentMethod?: ("off" | "on_subscription") | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyPaymentSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPaymentSettings = {
  payment_method_options?:
    | External$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions
    | undefined;
  payment_method_types?:
    | (
        | (
            | "ach_credit_transfer"
            | "ach_debit"
            | "acss_debit"
            | "amazon_pay"
            | "au_becs_debit"
            | "bacs_debit"
            | "bancontact"
            | "boleto"
            | "card"
            | "cashapp"
            | "customer_balance"
            | "eps"
            | "fpx"
            | "giropay"
            | "grabpay"
            | "ideal"
            | "jp_credit_transfer"
            | "kakao_pay"
            | "klarna"
            | "konbini"
            | "kr_card"
            | "link"
            | "multibanco"
            | "naver_pay"
            | "nz_bank_account"
            | "p24"
            | "payco"
            | "paynow"
            | "paypal"
            | "promptpay"
            | "revolut_pay"
            | "sepa_credit_transfer"
            | "sepa_debit"
            | "sofort"
            | "swish"
            | "us_bank_account"
            | "wechat_pay"
          )[]
        | string
      )
    | undefined;
  save_default_payment_method?: ("off" | "on_subscription") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPaymentSettings
 */
const SchemaIn$CustomerSubscriptionModifyBodyPaymentSettings: z.ZodType<
  CustomerSubscriptionModifyBodyPaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_options:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions.in.optional(),
    payment_method_types: z
      .union([
        z.array(
          z.enum([
            "ach_credit_transfer",
            "ach_debit",
            "acss_debit",
            "amazon_pay",
            "au_becs_debit",
            "bacs_debit",
            "bancontact",
            "boleto",
            "card",
            "cashapp",
            "customer_balance",
            "eps",
            "fpx",
            "giropay",
            "grabpay",
            "ideal",
            "jp_credit_transfer",
            "kakao_pay",
            "klarna",
            "konbini",
            "kr_card",
            "link",
            "multibanco",
            "naver_pay",
            "nz_bank_account",
            "p24",
            "payco",
            "paynow",
            "paypal",
            "promptpay",
            "revolut_pay",
            "sepa_credit_transfer",
            "sepa_debit",
            "sofort",
            "swish",
            "us_bank_account",
            "wechat_pay",
          ]),
        ),
        z.string(),
      ])
      .optional(),
    save_default_payment_method: z.enum(["off", "on_subscription"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      save_default_payment_method: "saveDefaultPaymentMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPaymentSettings
 */
const SchemaOut$CustomerSubscriptionModifyBodyPaymentSettings: z.ZodType<
  External$CustomerSubscriptionModifyBodyPaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPaymentSettings // the object to be transformed
> = z
  .object({
    paymentMethodOptions:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettingsPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z
      .union([
        z.array(
          z.enum([
            "ach_credit_transfer",
            "ach_debit",
            "acss_debit",
            "amazon_pay",
            "au_becs_debit",
            "bacs_debit",
            "bancontact",
            "boleto",
            "card",
            "cashapp",
            "customer_balance",
            "eps",
            "fpx",
            "giropay",
            "grabpay",
            "ideal",
            "jp_credit_transfer",
            "kakao_pay",
            "klarna",
            "konbini",
            "kr_card",
            "link",
            "multibanco",
            "naver_pay",
            "nz_bank_account",
            "p24",
            "payco",
            "paynow",
            "paypal",
            "promptpay",
            "revolut_pay",
            "sepa_credit_transfer",
            "sepa_debit",
            "sofort",
            "swish",
            "us_bank_account",
            "wechat_pay",
          ]),
        ),
        z.string(),
      ])
      .optional(),
    saveDefaultPaymentMethod: z.enum(["off", "on_subscription"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      saveDefaultPaymentMethod: "save_default_payment_method",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyPaymentSettings = {
  in: SchemaIn$CustomerSubscriptionModifyBodyPaymentSettings,
  out: SchemaOut$CustomerSubscriptionModifyBodyPaymentSettings,
};
