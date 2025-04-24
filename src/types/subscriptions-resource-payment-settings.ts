import {
  External$SubscriptionsResourcePaymentMethodOptions,
  Schemas$SubscriptionsResourcePaymentMethodOptions,
  SubscriptionsResourcePaymentMethodOptions,
} from "./subscriptions-resource-payment-method-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionsResourcePaymentSettings = {
  paymentMethodOptions?: SubscriptionsResourcePaymentMethodOptions | undefined;
  /**
   * The list of payment method types to provide to every invoice created by the subscription. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
   */
  paymentMethodTypes?:
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
    | null
    | undefined;
  /**
   * Configure whether Stripe updates `subscription.default_payment_method` when payment succeeds. Defaults to `off`.
   */
  saveDefaultPaymentMethod?: ("off" | "on_subscription") | null | undefined;
};

/**
 * @internal
 * SubscriptionsResourcePaymentSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionsResourcePaymentSettings = {
  payment_method_options?:
    | External$SubscriptionsResourcePaymentMethodOptions
    | undefined;
  payment_method_types?:
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
    | null
    | undefined;
  save_default_payment_method?: ("off" | "on_subscription") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionsResourcePaymentSettings
 */
const SchemaIn$SubscriptionsResourcePaymentSettings: z.ZodType<
  SubscriptionsResourcePaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_options:
      Schemas$SubscriptionsResourcePaymentMethodOptions.in.optional(),
    payment_method_types: z
      .array(
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
      )
      .nullable()
      .optional(),
    save_default_payment_method: z
      .enum(["off", "on_subscription"])
      .nullable()
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionsResourcePaymentSettings
 */
const SchemaOut$SubscriptionsResourcePaymentSettings: z.ZodType<
  External$SubscriptionsResourcePaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionsResourcePaymentSettings // the object to be transformed
> = z
  .object({
    paymentMethodOptions:
      Schemas$SubscriptionsResourcePaymentMethodOptions.out.optional(),
    paymentMethodTypes: z
      .array(
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
      )
      .nullable()
      .optional(),
    saveDefaultPaymentMethod: z
      .enum(["off", "on_subscription"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      saveDefaultPaymentMethod: "save_default_payment_method",
    });
  });

export const Schemas$SubscriptionsResourcePaymentSettings = {
  in: SchemaIn$SubscriptionsResourcePaymentSettings,
  out: SchemaOut$SubscriptionsResourcePaymentSettings,
};
