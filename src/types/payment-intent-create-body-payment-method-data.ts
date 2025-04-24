import {
  External$PaymentIntentCreateBodyPaymentMethodDataAcssDebit,
  PaymentIntentCreateBodyPaymentMethodDataAcssDebit,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataAcssDebit,
} from "./payment-intent-create-body-payment-method-data-acss-debit";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit,
  PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit,
} from "./payment-intent-create-body-payment-method-data-au-becs-debit";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataBacsDebit,
  PaymentIntentCreateBodyPaymentMethodDataBacsDebit,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataBacsDebit,
} from "./payment-intent-create-body-payment-method-data-bacs-debit";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataBillingDetails,
  PaymentIntentCreateBodyPaymentMethodDataBillingDetails,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataBillingDetails,
} from "./payment-intent-create-body-payment-method-data-billing-details";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataBoleto,
  PaymentIntentCreateBodyPaymentMethodDataBoleto,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataBoleto,
} from "./payment-intent-create-body-payment-method-data-boleto";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataEps,
  PaymentIntentCreateBodyPaymentMethodDataEps,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataEps,
} from "./payment-intent-create-body-payment-method-data-eps";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataFpx,
  PaymentIntentCreateBodyPaymentMethodDataFpx,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataFpx,
} from "./payment-intent-create-body-payment-method-data-fpx";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataIdeal,
  PaymentIntentCreateBodyPaymentMethodDataIdeal,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataIdeal,
} from "./payment-intent-create-body-payment-method-data-ideal";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataKlarna,
  PaymentIntentCreateBodyPaymentMethodDataKlarna,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarna,
} from "./payment-intent-create-body-payment-method-data-klarna";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataMetadata,
  PaymentIntentCreateBodyPaymentMethodDataMetadata,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataMetadata,
} from "./payment-intent-create-body-payment-method-data-metadata";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataNaverPay,
  PaymentIntentCreateBodyPaymentMethodDataNaverPay,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataNaverPay,
} from "./payment-intent-create-body-payment-method-data-naver-pay";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataNzBankAccount,
  PaymentIntentCreateBodyPaymentMethodDataNzBankAccount,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataNzBankAccount,
} from "./payment-intent-create-body-payment-method-data-nz-bank-account";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataP24,
  PaymentIntentCreateBodyPaymentMethodDataP24,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataP24,
} from "./payment-intent-create-body-payment-method-data-p24";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataRadarOptions,
  PaymentIntentCreateBodyPaymentMethodDataRadarOptions,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataRadarOptions,
} from "./payment-intent-create-body-payment-method-data-radar-options";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataSepaDebit,
  PaymentIntentCreateBodyPaymentMethodDataSepaDebit,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataSepaDebit,
} from "./payment-intent-create-body-payment-method-data-sepa-debit";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataSofort,
  PaymentIntentCreateBodyPaymentMethodDataSofort,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataSofort,
} from "./payment-intent-create-body-payment-method-data-sofort";
import {
  External$PaymentIntentCreateBodyPaymentMethodDataUsBankAccount,
  PaymentIntentCreateBodyPaymentMethodDataUsBankAccount,
  Schemas$PaymentIntentCreateBodyPaymentMethodDataUsBankAccount,
} from "./payment-intent-create-body-payment-method-data-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
 * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
 * property on the PaymentIntent.
 */
export type PaymentIntentCreateBodyPaymentMethodData = {
  acssDebit?: PaymentIntentCreateBodyPaymentMethodDataAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit | undefined;
  bacsDebit?: PaymentIntentCreateBodyPaymentMethodDataBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billingDetails?:
    | PaymentIntentCreateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: PaymentIntentCreateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customerBalance?: Record<string, any> | undefined;
  eps?: PaymentIntentCreateBodyPaymentMethodDataEps | undefined;
  fpx?: PaymentIntentCreateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: PaymentIntentCreateBodyPaymentMethodDataIdeal | undefined;
  interacPresent?: Record<string, any> | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: PaymentIntentCreateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?: PaymentIntentCreateBodyPaymentMethodDataMetadata | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naverPay?: PaymentIntentCreateBodyPaymentMethodDataNaverPay | undefined;
  nzBankAccount?:
    | PaymentIntentCreateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: PaymentIntentCreateBodyPaymentMethodDataP24 | undefined;
  payByBank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radarOptions?:
    | PaymentIntentCreateBodyPaymentMethodDataRadarOptions
    | undefined;
  revolutPay?: Record<string, any> | undefined;
  samsungPay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepaDebit?: PaymentIntentCreateBodyPaymentMethodDataSepaDebit | undefined;
  sofort?: PaymentIntentCreateBodyPaymentMethodDataSofort | undefined;
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
    | PaymentIntentCreateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodData = {
  acss_debit?:
    | External$PaymentIntentCreateBodyPaymentMethodDataAcssDebit
    | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?:
    | External$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$PaymentIntentCreateBodyPaymentMethodDataBacsDebit
    | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details?:
    | External$PaymentIntentCreateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: External$PaymentIntentCreateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$PaymentIntentCreateBodyPaymentMethodDataEps | undefined;
  fpx?: External$PaymentIntentCreateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$PaymentIntentCreateBodyPaymentMethodDataIdeal | undefined;
  interac_present?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$PaymentIntentCreateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?:
    | External$PaymentIntentCreateBodyPaymentMethodDataMetadata
    | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?:
    | External$PaymentIntentCreateBodyPaymentMethodDataNaverPay
    | undefined;
  nz_bank_account?:
    | External$PaymentIntentCreateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$PaymentIntentCreateBodyPaymentMethodDataP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radar_options?:
    | External$PaymentIntentCreateBodyPaymentMethodDataRadarOptions
    | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?:
    | External$PaymentIntentCreateBodyPaymentMethodDataSepaDebit
    | undefined;
  sofort?: External$PaymentIntentCreateBodyPaymentMethodDataSofort | undefined;
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
    | External$PaymentIntentCreateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodData
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodData: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataBillingDetails.in.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataBoleto.in.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentIntentCreateBodyPaymentMethodDataEps.in.optional(),
    fpx: Schemas$PaymentIntentCreateBodyPaymentMethodDataFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentIntentCreateBodyPaymentMethodDataIdeal.in.optional(),
    interac_present: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataMetadata.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataNaverPay.in.optional(),
    nz_bank_account:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentIntentCreateBodyPaymentMethodDataP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radar_options:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataRadarOptions.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataSepaDebit.in.optional(),
    sofort:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataSofort.in.optional(),
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
      Schemas$PaymentIntentCreateBodyPaymentMethodDataUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodData
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodData: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodData // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataBillingDetails.out.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataBoleto.out.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentIntentCreateBodyPaymentMethodDataEps.out.optional(),
    fpx: Schemas$PaymentIntentCreateBodyPaymentMethodDataFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentIntentCreateBodyPaymentMethodDataIdeal.out.optional(),
    interacPresent: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataMetadata.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataNaverPay.out.optional(),
    nzBankAccount:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentIntentCreateBodyPaymentMethodDataP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radarOptions:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataRadarOptions.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataSepaDebit.out.optional(),
    sofort:
      Schemas$PaymentIntentCreateBodyPaymentMethodDataSofort.out.optional(),
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
      Schemas$PaymentIntentCreateBodyPaymentMethodDataUsBankAccount.out.optional(),
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodData = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodData,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodData,
};
