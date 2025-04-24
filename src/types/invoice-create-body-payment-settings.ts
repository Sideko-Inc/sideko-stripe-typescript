import {
  External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions,
  InvoiceCreateBodyPaymentSettingsPaymentMethodOptions,
  Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions,
} from "./invoice-create-body-payment-settings-payment-method-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
 */
export type InvoiceCreateBodyPaymentSettings = {
  defaultMandate?: (string | string) | undefined;
  paymentMethodOptions?:
    | InvoiceCreateBodyPaymentSettingsPaymentMethodOptions
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
};

/**
 * @internal
 * InvoiceCreateBodyPaymentSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyPaymentSettings = {
  default_mandate?: (string | string) | undefined;
  payment_method_options?:
    | External$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyPaymentSettings
 */
const SchemaIn$InvoiceCreateBodyPaymentSettings: z.ZodType<
  InvoiceCreateBodyPaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_mandate: z.union([z.string(), z.string()]).optional(),
    payment_method_options:
      Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyPaymentSettings
 */
const SchemaOut$InvoiceCreateBodyPaymentSettings: z.ZodType<
  External$InvoiceCreateBodyPaymentSettings, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyPaymentSettings // the object to be transformed
> = z
  .object({
    defaultMandate: z.union([z.string(), z.string()]).optional(),
    paymentMethodOptions:
      Schemas$InvoiceCreateBodyPaymentSettingsPaymentMethodOptions.out.optional(),
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
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultMandate: "default_mandate",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
    });
  });

export const Schemas$InvoiceCreateBodyPaymentSettings = {
  in: SchemaIn$InvoiceCreateBodyPaymentSettings,
  out: SchemaOut$InvoiceCreateBodyPaymentSettings,
};
