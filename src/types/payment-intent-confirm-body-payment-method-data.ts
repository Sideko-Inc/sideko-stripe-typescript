import {
  External$PaymentIntentConfirmBodyPaymentMethodDataAcssDebit,
  PaymentIntentConfirmBodyPaymentMethodDataAcssDebit,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataAcssDebit,
} from "./payment-intent-confirm-body-payment-method-data-acss-debit";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit,
  PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit,
} from "./payment-intent-confirm-body-payment-method-data-au-becs-debit";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataBacsDebit,
  PaymentIntentConfirmBodyPaymentMethodDataBacsDebit,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataBacsDebit,
} from "./payment-intent-confirm-body-payment-method-data-bacs-debit";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails,
  PaymentIntentConfirmBodyPaymentMethodDataBillingDetails,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails,
} from "./payment-intent-confirm-body-payment-method-data-billing-details";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataBoleto,
  PaymentIntentConfirmBodyPaymentMethodDataBoleto,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataBoleto,
} from "./payment-intent-confirm-body-payment-method-data-boleto";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataEps,
  PaymentIntentConfirmBodyPaymentMethodDataEps,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataEps,
} from "./payment-intent-confirm-body-payment-method-data-eps";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataFpx,
  PaymentIntentConfirmBodyPaymentMethodDataFpx,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataFpx,
} from "./payment-intent-confirm-body-payment-method-data-fpx";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataIdeal,
  PaymentIntentConfirmBodyPaymentMethodDataIdeal,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataIdeal,
} from "./payment-intent-confirm-body-payment-method-data-ideal";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataKlarna,
  PaymentIntentConfirmBodyPaymentMethodDataKlarna,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataKlarna,
} from "./payment-intent-confirm-body-payment-method-data-klarna";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataMetadata,
  PaymentIntentConfirmBodyPaymentMethodDataMetadata,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataMetadata,
} from "./payment-intent-confirm-body-payment-method-data-metadata";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataNaverPay,
  PaymentIntentConfirmBodyPaymentMethodDataNaverPay,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataNaverPay,
} from "./payment-intent-confirm-body-payment-method-data-naver-pay";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount,
  PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount,
} from "./payment-intent-confirm-body-payment-method-data-nz-bank-account";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataP24,
  PaymentIntentConfirmBodyPaymentMethodDataP24,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataP24,
} from "./payment-intent-confirm-body-payment-method-data-p24";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions,
  PaymentIntentConfirmBodyPaymentMethodDataRadarOptions,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions,
} from "./payment-intent-confirm-body-payment-method-data-radar-options";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit,
  PaymentIntentConfirmBodyPaymentMethodDataSepaDebit,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit,
} from "./payment-intent-confirm-body-payment-method-data-sepa-debit";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataSofort,
  PaymentIntentConfirmBodyPaymentMethodDataSofort,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataSofort,
} from "./payment-intent-confirm-body-payment-method-data-sofort";
import {
  External$PaymentIntentConfirmBodyPaymentMethodDataUsBankAccount,
  PaymentIntentConfirmBodyPaymentMethodDataUsBankAccount,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataUsBankAccount,
} from "./payment-intent-confirm-body-payment-method-data-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
 * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
 * property on the PaymentIntent.
 */
export type PaymentIntentConfirmBodyPaymentMethodData = {
  acssDebit?: PaymentIntentConfirmBodyPaymentMethodDataAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?:
    | PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit
    | undefined;
  bacsDebit?: PaymentIntentConfirmBodyPaymentMethodDataBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billingDetails?:
    | PaymentIntentConfirmBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: PaymentIntentConfirmBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customerBalance?: Record<string, any> | undefined;
  eps?: PaymentIntentConfirmBodyPaymentMethodDataEps | undefined;
  fpx?: PaymentIntentConfirmBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: PaymentIntentConfirmBodyPaymentMethodDataIdeal | undefined;
  interacPresent?: Record<string, any> | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: PaymentIntentConfirmBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?: PaymentIntentConfirmBodyPaymentMethodDataMetadata | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naverPay?: PaymentIntentConfirmBodyPaymentMethodDataNaverPay | undefined;
  nzBankAccount?:
    | PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: PaymentIntentConfirmBodyPaymentMethodDataP24 | undefined;
  payByBank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radarOptions?:
    | PaymentIntentConfirmBodyPaymentMethodDataRadarOptions
    | undefined;
  revolutPay?: Record<string, any> | undefined;
  samsungPay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepaDebit?: PaymentIntentConfirmBodyPaymentMethodDataSepaDebit | undefined;
  sofort?: PaymentIntentConfirmBodyPaymentMethodDataSofort | undefined;
  swish?: Record<string, any> | undefined;
  twint?: Record<string, any> | undefined;
  type:
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "alma"
    | "amazon_pay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "billie"
    | "blik"
    | "boleto"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "kakao_pay"
    | "klarna"
    | "konbini"
    | "kr_card"
    | "link"
    | "mobilepay"
    | "multibanco"
    | "naver_pay"
    | "nz_bank_account"
    | "oxxo"
    | "p24"
    | "pay_by_bank"
    | "payco"
    | "paynow"
    | "paypal"
    | "pix"
    | "promptpay"
    | "revolut_pay"
    | "samsung_pay"
    | "satispay"
    | "sepa_debit"
    | "sofort"
    | "swish"
    | "twint"
    | "us_bank_account"
    | "wechat_pay"
    | "zip";
  usBankAccount?:
    | PaymentIntentConfirmBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodData = {
  acss_debit?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataAcssDebit
    | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataBacsDebit
    | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: External$PaymentIntentConfirmBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$PaymentIntentConfirmBodyPaymentMethodDataEps | undefined;
  fpx?: External$PaymentIntentConfirmBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$PaymentIntentConfirmBodyPaymentMethodDataIdeal | undefined;
  interac_present?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$PaymentIntentConfirmBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataMetadata
    | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataNaverPay
    | undefined;
  nz_bank_account?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$PaymentIntentConfirmBodyPaymentMethodDataP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radar_options?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions
    | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit
    | undefined;
  sofort?: External$PaymentIntentConfirmBodyPaymentMethodDataSofort | undefined;
  swish?: Record<string, any> | undefined;
  twint?: Record<string, any> | undefined;
  type:
    | "acss_debit"
    | "affirm"
    | "afterpay_clearpay"
    | "alipay"
    | "alma"
    | "amazon_pay"
    | "au_becs_debit"
    | "bacs_debit"
    | "bancontact"
    | "billie"
    | "blik"
    | "boleto"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "kakao_pay"
    | "klarna"
    | "konbini"
    | "kr_card"
    | "link"
    | "mobilepay"
    | "multibanco"
    | "naver_pay"
    | "nz_bank_account"
    | "oxxo"
    | "p24"
    | "pay_by_bank"
    | "payco"
    | "paynow"
    | "paypal"
    | "pix"
    | "promptpay"
    | "revolut_pay"
    | "samsung_pay"
    | "satispay"
    | "sepa_debit"
    | "sofort"
    | "swish"
    | "twint"
    | "us_bank_account"
    | "wechat_pay"
    | "zip";
  us_bank_account?:
    | External$PaymentIntentConfirmBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodData
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodData: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails.in.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataBoleto.in.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentIntentConfirmBodyPaymentMethodDataEps.in.optional(),
    fpx: Schemas$PaymentIntentConfirmBodyPaymentMethodDataFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentIntentConfirmBodyPaymentMethodDataIdeal.in.optional(),
    interac_present: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataMetadata.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataNaverPay.in.optional(),
    nz_bank_account:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentIntentConfirmBodyPaymentMethodDataP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radar_options:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit.in.optional(),
    sofort:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataSofort.in.optional(),
    swish: z.record(z.string(), z.any()).optional(),
    twint: z.record(z.string(), z.any()).optional(),
    type: z.enum([
      "acss_debit",
      "affirm",
      "afterpay_clearpay",
      "alipay",
      "alma",
      "amazon_pay",
      "au_becs_debit",
      "bacs_debit",
      "bancontact",
      "billie",
      "blik",
      "boleto",
      "cashapp",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "grabpay",
      "ideal",
      "kakao_pay",
      "klarna",
      "konbini",
      "kr_card",
      "link",
      "mobilepay",
      "multibanco",
      "naver_pay",
      "nz_bank_account",
      "oxxo",
      "p24",
      "pay_by_bank",
      "payco",
      "paynow",
      "paypal",
      "pix",
      "promptpay",
      "revolut_pay",
      "samsung_pay",
      "satispay",
      "sepa_debit",
      "sofort",
      "swish",
      "twint",
      "us_bank_account",
      "wechat_pay",
      "zip",
    ]),
    us_bank_account:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataUsBankAccount.in.optional(),
    wechat_pay: z.record(z.string(), z.any()).optional(),
    zip: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      affirm: "affirm",
      afterpay_clearpay: "afterpayClearpay",
      alipay: "alipay",
      allow_redisplay: "allowRedisplay",
      alma: "alma",
      amazon_pay: "amazonPay",
      au_becs_debit: "auBecsDebit",
      bacs_debit: "bacsDebit",
      bancontact: "bancontact",
      billie: "billie",
      billing_details: "billingDetails",
      blik: "blik",
      boleto: "boleto",
      cashapp: "cashapp",
      customer_balance: "customerBalance",
      eps: "eps",
      fpx: "fpx",
      giropay: "giropay",
      grabpay: "grabpay",
      ideal: "ideal",
      interac_present: "interacPresent",
      kakao_pay: "kakaoPay",
      klarna: "klarna",
      konbini: "konbini",
      kr_card: "krCard",
      link: "link",
      metadata: "metadata",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      naver_pay: "naverPay",
      nz_bank_account: "nzBankAccount",
      oxxo: "oxxo",
      p24: "p24",
      pay_by_bank: "payByBank",
      payco: "payco",
      paynow: "paynow",
      paypal: "paypal",
      pix: "pix",
      promptpay: "promptpay",
      radar_options: "radarOptions",
      revolut_pay: "revolutPay",
      samsung_pay: "samsungPay",
      satispay: "satispay",
      sepa_debit: "sepaDebit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      type: "type",
      us_bank_account: "usBankAccount",
      wechat_pay: "wechatPay",
      zip: "zip",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodData
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodData: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodData // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails.out.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataBoleto.out.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentIntentConfirmBodyPaymentMethodDataEps.out.optional(),
    fpx: Schemas$PaymentIntentConfirmBodyPaymentMethodDataFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataIdeal.out.optional(),
    interacPresent: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataMetadata.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataNaverPay.out.optional(),
    nzBankAccount:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentIntentConfirmBodyPaymentMethodDataP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radarOptions:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataRadarOptions.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataSepaDebit.out.optional(),
    sofort:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataSofort.out.optional(),
    swish: z.record(z.string(), z.any()).optional(),
    twint: z.record(z.string(), z.any()).optional(),
    type: z.enum([
      "acss_debit",
      "affirm",
      "afterpay_clearpay",
      "alipay",
      "alma",
      "amazon_pay",
      "au_becs_debit",
      "bacs_debit",
      "bancontact",
      "billie",
      "blik",
      "boleto",
      "cashapp",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "grabpay",
      "ideal",
      "kakao_pay",
      "klarna",
      "konbini",
      "kr_card",
      "link",
      "mobilepay",
      "multibanco",
      "naver_pay",
      "nz_bank_account",
      "oxxo",
      "p24",
      "pay_by_bank",
      "payco",
      "paynow",
      "paypal",
      "pix",
      "promptpay",
      "revolut_pay",
      "samsung_pay",
      "satispay",
      "sepa_debit",
      "sofort",
      "swish",
      "twint",
      "us_bank_account",
      "wechat_pay",
      "zip",
    ]),
    usBankAccount:
      Schemas$PaymentIntentConfirmBodyPaymentMethodDataUsBankAccount.out.optional(),
    wechatPay: z.record(z.string(), z.any()).optional(),
    zip: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      affirm: "affirm",
      afterpayClearpay: "afterpay_clearpay",
      alipay: "alipay",
      allowRedisplay: "allow_redisplay",
      alma: "alma",
      amazonPay: "amazon_pay",
      auBecsDebit: "au_becs_debit",
      bacsDebit: "bacs_debit",
      bancontact: "bancontact",
      billie: "billie",
      billingDetails: "billing_details",
      blik: "blik",
      boleto: "boleto",
      cashapp: "cashapp",
      customerBalance: "customer_balance",
      eps: "eps",
      fpx: "fpx",
      giropay: "giropay",
      grabpay: "grabpay",
      ideal: "ideal",
      interacPresent: "interac_present",
      kakaoPay: "kakao_pay",
      klarna: "klarna",
      konbini: "konbini",
      krCard: "kr_card",
      link: "link",
      metadata: "metadata",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      naverPay: "naver_pay",
      nzBankAccount: "nz_bank_account",
      oxxo: "oxxo",
      p24: "p24",
      payByBank: "pay_by_bank",
      payco: "payco",
      paynow: "paynow",
      paypal: "paypal",
      pix: "pix",
      promptpay: "promptpay",
      radarOptions: "radar_options",
      revolutPay: "revolut_pay",
      samsungPay: "samsung_pay",
      satispay: "satispay",
      sepaDebit: "sepa_debit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      type: "type",
      usBankAccount: "us_bank_account",
      wechatPay: "wechat_pay",
      zip: "zip",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodData = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodData,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodData,
};
