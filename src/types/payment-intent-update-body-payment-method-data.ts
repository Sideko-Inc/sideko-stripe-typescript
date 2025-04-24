import {
  External$PaymentIntentUpdateBodyPaymentMethodDataAcssDebit,
  PaymentIntentUpdateBodyPaymentMethodDataAcssDebit,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataAcssDebit,
} from "./payment-intent-update-body-payment-method-data-acss-debit";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataAuBecsDebit,
  PaymentIntentUpdateBodyPaymentMethodDataAuBecsDebit,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataAuBecsDebit,
} from "./payment-intent-update-body-payment-method-data-au-becs-debit";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit,
  PaymentIntentUpdateBodyPaymentMethodDataBacsDebit,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit,
} from "./payment-intent-update-body-payment-method-data-bacs-debit";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails,
  PaymentIntentUpdateBodyPaymentMethodDataBillingDetails,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails,
} from "./payment-intent-update-body-payment-method-data-billing-details";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataBoleto,
  PaymentIntentUpdateBodyPaymentMethodDataBoleto,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataBoleto,
} from "./payment-intent-update-body-payment-method-data-boleto";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataEps,
  PaymentIntentUpdateBodyPaymentMethodDataEps,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataEps,
} from "./payment-intent-update-body-payment-method-data-eps";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataFpx,
  PaymentIntentUpdateBodyPaymentMethodDataFpx,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataFpx,
} from "./payment-intent-update-body-payment-method-data-fpx";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataIdeal,
  PaymentIntentUpdateBodyPaymentMethodDataIdeal,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataIdeal,
} from "./payment-intent-update-body-payment-method-data-ideal";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataKlarna,
  PaymentIntentUpdateBodyPaymentMethodDataKlarna,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarna,
} from "./payment-intent-update-body-payment-method-data-klarna";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataMetadata,
  PaymentIntentUpdateBodyPaymentMethodDataMetadata,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataMetadata,
} from "./payment-intent-update-body-payment-method-data-metadata";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataNaverPay,
  PaymentIntentUpdateBodyPaymentMethodDataNaverPay,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataNaverPay,
} from "./payment-intent-update-body-payment-method-data-naver-pay";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataNzBankAccount,
  PaymentIntentUpdateBodyPaymentMethodDataNzBankAccount,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataNzBankAccount,
} from "./payment-intent-update-body-payment-method-data-nz-bank-account";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataP24,
  PaymentIntentUpdateBodyPaymentMethodDataP24,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataP24,
} from "./payment-intent-update-body-payment-method-data-p24";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions,
  PaymentIntentUpdateBodyPaymentMethodDataRadarOptions,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions,
} from "./payment-intent-update-body-payment-method-data-radar-options";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit,
  PaymentIntentUpdateBodyPaymentMethodDataSepaDebit,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit,
} from "./payment-intent-update-body-payment-method-data-sepa-debit";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataSofort,
  PaymentIntentUpdateBodyPaymentMethodDataSofort,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataSofort,
} from "./payment-intent-update-body-payment-method-data-sofort";
import {
  External$PaymentIntentUpdateBodyPaymentMethodDataUsBankAccount,
  PaymentIntentUpdateBodyPaymentMethodDataUsBankAccount,
  Schemas$PaymentIntentUpdateBodyPaymentMethodDataUsBankAccount,
} from "./payment-intent-update-body-payment-method-data-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
 * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
 * property on the PaymentIntent.
 */
export type PaymentIntentUpdateBodyPaymentMethodData = {
  acssDebit?: PaymentIntentUpdateBodyPaymentMethodDataAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: PaymentIntentUpdateBodyPaymentMethodDataAuBecsDebit | undefined;
  bacsDebit?: PaymentIntentUpdateBodyPaymentMethodDataBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billingDetails?:
    | PaymentIntentUpdateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: PaymentIntentUpdateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customerBalance?: Record<string, any> | undefined;
  eps?: PaymentIntentUpdateBodyPaymentMethodDataEps | undefined;
  fpx?: PaymentIntentUpdateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: PaymentIntentUpdateBodyPaymentMethodDataIdeal | undefined;
  interacPresent?: Record<string, any> | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: PaymentIntentUpdateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?: PaymentIntentUpdateBodyPaymentMethodDataMetadata | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naverPay?: PaymentIntentUpdateBodyPaymentMethodDataNaverPay | undefined;
  nzBankAccount?:
    | PaymentIntentUpdateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: PaymentIntentUpdateBodyPaymentMethodDataP24 | undefined;
  payByBank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radarOptions?:
    | PaymentIntentUpdateBodyPaymentMethodDataRadarOptions
    | undefined;
  revolutPay?: Record<string, any> | undefined;
  samsungPay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepaDebit?: PaymentIntentUpdateBodyPaymentMethodDataSepaDebit | undefined;
  sofort?: PaymentIntentUpdateBodyPaymentMethodDataSofort | undefined;
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
    | PaymentIntentUpdateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodData = {
  acss_debit?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataAcssDebit
    | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit
    | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: External$PaymentIntentUpdateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$PaymentIntentUpdateBodyPaymentMethodDataEps | undefined;
  fpx?: External$PaymentIntentUpdateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$PaymentIntentUpdateBodyPaymentMethodDataIdeal | undefined;
  interac_present?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$PaymentIntentUpdateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataMetadata
    | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataNaverPay
    | undefined;
  nz_bank_account?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$PaymentIntentUpdateBodyPaymentMethodDataP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radar_options?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions
    | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?:
    | External$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit
    | undefined;
  sofort?: External$PaymentIntentUpdateBodyPaymentMethodDataSofort | undefined;
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
    | External$PaymentIntentUpdateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodData
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodData: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails.in.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataBoleto.in.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentIntentUpdateBodyPaymentMethodDataEps.in.optional(),
    fpx: Schemas$PaymentIntentUpdateBodyPaymentMethodDataFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentIntentUpdateBodyPaymentMethodDataIdeal.in.optional(),
    interac_present: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataMetadata.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataNaverPay.in.optional(),
    nz_bank_account:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentIntentUpdateBodyPaymentMethodDataP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radar_options:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit.in.optional(),
    sofort:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataSofort.in.optional(),
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
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodData
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodData: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodData // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataBillingDetails.out.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataBoleto.out.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentIntentUpdateBodyPaymentMethodDataEps.out.optional(),
    fpx: Schemas$PaymentIntentUpdateBodyPaymentMethodDataFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentIntentUpdateBodyPaymentMethodDataIdeal.out.optional(),
    interacPresent: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataMetadata.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataNaverPay.out.optional(),
    nzBankAccount:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentIntentUpdateBodyPaymentMethodDataP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radarOptions:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataRadarOptions.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataSepaDebit.out.optional(),
    sofort:
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataSofort.out.optional(),
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
      Schemas$PaymentIntentUpdateBodyPaymentMethodDataUsBankAccount.out.optional(),
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodData = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodData,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodData,
};
