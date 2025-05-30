import {
  External$SetupIntentConfirmBodyPaymentMethodDataAcssDebit,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataAcssDebit,
  SetupIntentConfirmBodyPaymentMethodDataAcssDebit,
} from "./setup-intent-confirm-body-payment-method-data-acss-debit";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit,
  SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit,
} from "./setup-intent-confirm-body-payment-method-data-au-becs-debit";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataBacsDebit,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataBacsDebit,
  SetupIntentConfirmBodyPaymentMethodDataBacsDebit,
} from "./setup-intent-confirm-body-payment-method-data-bacs-debit";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataBillingDetails,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataBillingDetails,
  SetupIntentConfirmBodyPaymentMethodDataBillingDetails,
} from "./setup-intent-confirm-body-payment-method-data-billing-details";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataBoleto,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataBoleto,
  SetupIntentConfirmBodyPaymentMethodDataBoleto,
} from "./setup-intent-confirm-body-payment-method-data-boleto";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataEps,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataEps,
  SetupIntentConfirmBodyPaymentMethodDataEps,
} from "./setup-intent-confirm-body-payment-method-data-eps";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataFpx,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataFpx,
  SetupIntentConfirmBodyPaymentMethodDataFpx,
} from "./setup-intent-confirm-body-payment-method-data-fpx";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataIdeal,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataIdeal,
  SetupIntentConfirmBodyPaymentMethodDataIdeal,
} from "./setup-intent-confirm-body-payment-method-data-ideal";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataKlarna,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarna,
  SetupIntentConfirmBodyPaymentMethodDataKlarna,
} from "./setup-intent-confirm-body-payment-method-data-klarna";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataMetadata,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataMetadata,
  SetupIntentConfirmBodyPaymentMethodDataMetadata,
} from "./setup-intent-confirm-body-payment-method-data-metadata";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataNaverPay,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataNaverPay,
  SetupIntentConfirmBodyPaymentMethodDataNaverPay,
} from "./setup-intent-confirm-body-payment-method-data-naver-pay";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataNzBankAccount,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataNzBankAccount,
  SetupIntentConfirmBodyPaymentMethodDataNzBankAccount,
} from "./setup-intent-confirm-body-payment-method-data-nz-bank-account";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataP24,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataP24,
  SetupIntentConfirmBodyPaymentMethodDataP24,
} from "./setup-intent-confirm-body-payment-method-data-p24";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataRadarOptions,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataRadarOptions,
  SetupIntentConfirmBodyPaymentMethodDataRadarOptions,
} from "./setup-intent-confirm-body-payment-method-data-radar-options";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataSepaDebit,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataSepaDebit,
  SetupIntentConfirmBodyPaymentMethodDataSepaDebit,
} from "./setup-intent-confirm-body-payment-method-data-sepa-debit";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataSofort,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataSofort,
  SetupIntentConfirmBodyPaymentMethodDataSofort,
} from "./setup-intent-confirm-body-payment-method-data-sofort";
import {
  External$SetupIntentConfirmBodyPaymentMethodDataUsBankAccount,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataUsBankAccount,
  SetupIntentConfirmBodyPaymentMethodDataUsBankAccount,
} from "./setup-intent-confirm-body-payment-method-data-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
 * value in the SetupIntent.
 */
export type SetupIntentConfirmBodyPaymentMethodData = {
  acssDebit?: SetupIntentConfirmBodyPaymentMethodDataAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit | undefined;
  bacsDebit?: SetupIntentConfirmBodyPaymentMethodDataBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billingDetails?:
    | SetupIntentConfirmBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: SetupIntentConfirmBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customerBalance?: Record<string, any> | undefined;
  eps?: SetupIntentConfirmBodyPaymentMethodDataEps | undefined;
  fpx?: SetupIntentConfirmBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: SetupIntentConfirmBodyPaymentMethodDataIdeal | undefined;
  interacPresent?: Record<string, any> | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: SetupIntentConfirmBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?: SetupIntentConfirmBodyPaymentMethodDataMetadata | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naverPay?: SetupIntentConfirmBodyPaymentMethodDataNaverPay | undefined;
  nzBankAccount?:
    | SetupIntentConfirmBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: SetupIntentConfirmBodyPaymentMethodDataP24 | undefined;
  payByBank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radarOptions?:
    | SetupIntentConfirmBodyPaymentMethodDataRadarOptions
    | undefined;
  revolutPay?: Record<string, any> | undefined;
  samsungPay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepaDebit?: SetupIntentConfirmBodyPaymentMethodDataSepaDebit | undefined;
  sofort?: SetupIntentConfirmBodyPaymentMethodDataSofort | undefined;
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
    | SetupIntentConfirmBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodData = {
  acss_debit?:
    | External$SetupIntentConfirmBodyPaymentMethodDataAcssDebit
    | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?:
    | External$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$SetupIntentConfirmBodyPaymentMethodDataBacsDebit
    | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details?:
    | External$SetupIntentConfirmBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: External$SetupIntentConfirmBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$SetupIntentConfirmBodyPaymentMethodDataEps | undefined;
  fpx?: External$SetupIntentConfirmBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$SetupIntentConfirmBodyPaymentMethodDataIdeal | undefined;
  interac_present?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$SetupIntentConfirmBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?:
    | External$SetupIntentConfirmBodyPaymentMethodDataMetadata
    | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?:
    | External$SetupIntentConfirmBodyPaymentMethodDataNaverPay
    | undefined;
  nz_bank_account?:
    | External$SetupIntentConfirmBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$SetupIntentConfirmBodyPaymentMethodDataP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radar_options?:
    | External$SetupIntentConfirmBodyPaymentMethodDataRadarOptions
    | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?:
    | External$SetupIntentConfirmBodyPaymentMethodDataSepaDebit
    | undefined;
  sofort?: External$SetupIntentConfirmBodyPaymentMethodDataSofort | undefined;
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
    | External$SetupIntentConfirmBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodData
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodData: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataBillingDetails.in.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$SetupIntentConfirmBodyPaymentMethodDataBoleto.in.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$SetupIntentConfirmBodyPaymentMethodDataEps.in.optional(),
    fpx: Schemas$SetupIntentConfirmBodyPaymentMethodDataFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$SetupIntentConfirmBodyPaymentMethodDataIdeal.in.optional(),
    interac_present: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataMetadata.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataNaverPay.in.optional(),
    nz_bank_account:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$SetupIntentConfirmBodyPaymentMethodDataP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radar_options:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataRadarOptions.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataSepaDebit.in.optional(),
    sofort: Schemas$SetupIntentConfirmBodyPaymentMethodDataSofort.in.optional(),
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
      Schemas$SetupIntentConfirmBodyPaymentMethodDataUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodData
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodData: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodData // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataBillingDetails.out.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataBoleto.out.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$SetupIntentConfirmBodyPaymentMethodDataEps.out.optional(),
    fpx: Schemas$SetupIntentConfirmBodyPaymentMethodDataFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$SetupIntentConfirmBodyPaymentMethodDataIdeal.out.optional(),
    interacPresent: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataMetadata.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataNaverPay.out.optional(),
    nzBankAccount:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$SetupIntentConfirmBodyPaymentMethodDataP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radarOptions:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataRadarOptions.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataSepaDebit.out.optional(),
    sofort:
      Schemas$SetupIntentConfirmBodyPaymentMethodDataSofort.out.optional(),
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
      Schemas$SetupIntentConfirmBodyPaymentMethodDataUsBankAccount.out.optional(),
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodData = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodData,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodData,
};
