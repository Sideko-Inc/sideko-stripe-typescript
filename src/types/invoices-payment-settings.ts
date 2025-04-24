import {
  External$InvoicesPaymentMethodOptions,
  InvoicesPaymentMethodOptions,
  Schemas$InvoicesPaymentMethodOptions,
} from "./invoices-payment-method-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoicesPaymentSettings = {
  /**
   * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
   */
  defaultMandate?: string | null | undefined;
  paymentMethodOptions?: InvoicesPaymentMethodOptions | undefined;
  /**
   * The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
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
};

/**
 * @internal
 * InvoicesPaymentSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicesPaymentSettings = {
  default_mandate?: string | null | undefined;
  payment_method_options?: External$InvoicesPaymentMethodOptions | undefined;
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicesPaymentSettings
 */
const SchemaIn$InvoicesPaymentSettings: z.ZodType<
  InvoicesPaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_mandate: z.string().nullable().optional(),
    payment_method_options: Schemas$InvoicesPaymentMethodOptions.in.optional(),
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_mandate: "defaultMandate",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicesPaymentSettings
 */
const SchemaOut$InvoicesPaymentSettings: z.ZodType<
  External$InvoicesPaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  InvoicesPaymentSettings // the object to be transformed
> = z
  .object({
    defaultMandate: z.string().nullable().optional(),
    paymentMethodOptions: Schemas$InvoicesPaymentMethodOptions.out.optional(),
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultMandate: "default_mandate",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
    });
  });

export const Schemas$InvoicesPaymentSettings = {
  in: SchemaIn$InvoicesPaymentSettings,
  out: SchemaOut$InvoicesPaymentSettings,
};
