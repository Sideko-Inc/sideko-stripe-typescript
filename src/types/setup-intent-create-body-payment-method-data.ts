import {
  External$SetupIntentCreateBodyPaymentMethodDataAcssDebit,
  Schemas$SetupIntentCreateBodyPaymentMethodDataAcssDebit,
  SetupIntentCreateBodyPaymentMethodDataAcssDebit,
} from "./setup-intent-create-body-payment-method-data-acss-debit";
import {
  External$SetupIntentCreateBodyPaymentMethodDataAuBecsDebit,
  Schemas$SetupIntentCreateBodyPaymentMethodDataAuBecsDebit,
  SetupIntentCreateBodyPaymentMethodDataAuBecsDebit,
} from "./setup-intent-create-body-payment-method-data-au-becs-debit";
import {
  External$SetupIntentCreateBodyPaymentMethodDataBacsDebit,
  Schemas$SetupIntentCreateBodyPaymentMethodDataBacsDebit,
  SetupIntentCreateBodyPaymentMethodDataBacsDebit,
} from "./setup-intent-create-body-payment-method-data-bacs-debit";
import {
  External$SetupIntentCreateBodyPaymentMethodDataBillingDetails,
  Schemas$SetupIntentCreateBodyPaymentMethodDataBillingDetails,
  SetupIntentCreateBodyPaymentMethodDataBillingDetails,
} from "./setup-intent-create-body-payment-method-data-billing-details";
import {
  External$SetupIntentCreateBodyPaymentMethodDataBoleto,
  Schemas$SetupIntentCreateBodyPaymentMethodDataBoleto,
  SetupIntentCreateBodyPaymentMethodDataBoleto,
} from "./setup-intent-create-body-payment-method-data-boleto";
import {
  External$SetupIntentCreateBodyPaymentMethodDataEps,
  Schemas$SetupIntentCreateBodyPaymentMethodDataEps,
  SetupIntentCreateBodyPaymentMethodDataEps,
} from "./setup-intent-create-body-payment-method-data-eps";
import {
  External$SetupIntentCreateBodyPaymentMethodDataFpx,
  Schemas$SetupIntentCreateBodyPaymentMethodDataFpx,
  SetupIntentCreateBodyPaymentMethodDataFpx,
} from "./setup-intent-create-body-payment-method-data-fpx";
import {
  External$SetupIntentCreateBodyPaymentMethodDataIdeal,
  Schemas$SetupIntentCreateBodyPaymentMethodDataIdeal,
  SetupIntentCreateBodyPaymentMethodDataIdeal,
} from "./setup-intent-create-body-payment-method-data-ideal";
import {
  External$SetupIntentCreateBodyPaymentMethodDataKlarna,
  Schemas$SetupIntentCreateBodyPaymentMethodDataKlarna,
  SetupIntentCreateBodyPaymentMethodDataKlarna,
} from "./setup-intent-create-body-payment-method-data-klarna";
import {
  External$SetupIntentCreateBodyPaymentMethodDataMetadata,
  Schemas$SetupIntentCreateBodyPaymentMethodDataMetadata,
  SetupIntentCreateBodyPaymentMethodDataMetadata,
} from "./setup-intent-create-body-payment-method-data-metadata";
import {
  External$SetupIntentCreateBodyPaymentMethodDataNaverPay,
  Schemas$SetupIntentCreateBodyPaymentMethodDataNaverPay,
  SetupIntentCreateBodyPaymentMethodDataNaverPay,
} from "./setup-intent-create-body-payment-method-data-naver-pay";
import {
  External$SetupIntentCreateBodyPaymentMethodDataNzBankAccount,
  Schemas$SetupIntentCreateBodyPaymentMethodDataNzBankAccount,
  SetupIntentCreateBodyPaymentMethodDataNzBankAccount,
} from "./setup-intent-create-body-payment-method-data-nz-bank-account";
import {
  External$SetupIntentCreateBodyPaymentMethodDataP24,
  Schemas$SetupIntentCreateBodyPaymentMethodDataP24,
  SetupIntentCreateBodyPaymentMethodDataP24,
} from "./setup-intent-create-body-payment-method-data-p24";
import {
  External$SetupIntentCreateBodyPaymentMethodDataRadarOptions,
  Schemas$SetupIntentCreateBodyPaymentMethodDataRadarOptions,
  SetupIntentCreateBodyPaymentMethodDataRadarOptions,
} from "./setup-intent-create-body-payment-method-data-radar-options";
import {
  External$SetupIntentCreateBodyPaymentMethodDataSepaDebit,
  Schemas$SetupIntentCreateBodyPaymentMethodDataSepaDebit,
  SetupIntentCreateBodyPaymentMethodDataSepaDebit,
} from "./setup-intent-create-body-payment-method-data-sepa-debit";
import {
  External$SetupIntentCreateBodyPaymentMethodDataSofort,
  Schemas$SetupIntentCreateBodyPaymentMethodDataSofort,
  SetupIntentCreateBodyPaymentMethodDataSofort,
} from "./setup-intent-create-body-payment-method-data-sofort";
import {
  External$SetupIntentCreateBodyPaymentMethodDataUsBankAccount,
  Schemas$SetupIntentCreateBodyPaymentMethodDataUsBankAccount,
  SetupIntentCreateBodyPaymentMethodDataUsBankAccount,
} from "./setup-intent-create-body-payment-method-data-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
 * value in the SetupIntent.
 */
export type SetupIntentCreateBodyPaymentMethodData = {
  acssDebit?: SetupIntentCreateBodyPaymentMethodDataAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: SetupIntentCreateBodyPaymentMethodDataAuBecsDebit | undefined;
  bacsDebit?: SetupIntentCreateBodyPaymentMethodDataBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billingDetails?:
    | SetupIntentCreateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: SetupIntentCreateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customerBalance?: Record<string, any> | undefined;
  eps?: SetupIntentCreateBodyPaymentMethodDataEps | undefined;
  fpx?: SetupIntentCreateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: SetupIntentCreateBodyPaymentMethodDataIdeal | undefined;
  interacPresent?: Record<string, any> | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: SetupIntentCreateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?: SetupIntentCreateBodyPaymentMethodDataMetadata | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naverPay?: SetupIntentCreateBodyPaymentMethodDataNaverPay | undefined;
  nzBankAccount?:
    | SetupIntentCreateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: SetupIntentCreateBodyPaymentMethodDataP24 | undefined;
  payByBank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radarOptions?: SetupIntentCreateBodyPaymentMethodDataRadarOptions | undefined;
  revolutPay?: Record<string, any> | undefined;
  samsungPay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepaDebit?: SetupIntentCreateBodyPaymentMethodDataSepaDebit | undefined;
  sofort?: SetupIntentCreateBodyPaymentMethodDataSofort | undefined;
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
    | SetupIntentCreateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodData = {
  acss_debit?:
    | External$SetupIntentCreateBodyPaymentMethodDataAcssDebit
    | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?:
    | External$SetupIntentCreateBodyPaymentMethodDataAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$SetupIntentCreateBodyPaymentMethodDataBacsDebit
    | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details?:
    | External$SetupIntentCreateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: External$SetupIntentCreateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$SetupIntentCreateBodyPaymentMethodDataEps | undefined;
  fpx?: External$SetupIntentCreateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$SetupIntentCreateBodyPaymentMethodDataIdeal | undefined;
  interac_present?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$SetupIntentCreateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?:
    | External$SetupIntentCreateBodyPaymentMethodDataMetadata
    | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?:
    | External$SetupIntentCreateBodyPaymentMethodDataNaverPay
    | undefined;
  nz_bank_account?:
    | External$SetupIntentCreateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$SetupIntentCreateBodyPaymentMethodDataP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radar_options?:
    | External$SetupIntentCreateBodyPaymentMethodDataRadarOptions
    | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?:
    | External$SetupIntentCreateBodyPaymentMethodDataSepaDebit
    | undefined;
  sofort?: External$SetupIntentCreateBodyPaymentMethodDataSofort | undefined;
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
    | External$SetupIntentCreateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodData
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodData: z.ZodType<
  SetupIntentCreateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details:
      Schemas$SetupIntentCreateBodyPaymentMethodDataBillingDetails.in.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$SetupIntentCreateBodyPaymentMethodDataBoleto.in.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$SetupIntentCreateBodyPaymentMethodDataEps.in.optional(),
    fpx: Schemas$SetupIntentCreateBodyPaymentMethodDataFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$SetupIntentCreateBodyPaymentMethodDataIdeal.in.optional(),
    interac_present: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$SetupIntentCreateBodyPaymentMethodDataKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$SetupIntentCreateBodyPaymentMethodDataMetadata.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay:
      Schemas$SetupIntentCreateBodyPaymentMethodDataNaverPay.in.optional(),
    nz_bank_account:
      Schemas$SetupIntentCreateBodyPaymentMethodDataNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$SetupIntentCreateBodyPaymentMethodDataP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radar_options:
      Schemas$SetupIntentCreateBodyPaymentMethodDataRadarOptions.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataSepaDebit.in.optional(),
    sofort: Schemas$SetupIntentCreateBodyPaymentMethodDataSofort.in.optional(),
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
      Schemas$SetupIntentCreateBodyPaymentMethodDataUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodData
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodData: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodData // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails:
      Schemas$SetupIntentCreateBodyPaymentMethodDataBillingDetails.out.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$SetupIntentCreateBodyPaymentMethodDataBoleto.out.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$SetupIntentCreateBodyPaymentMethodDataEps.out.optional(),
    fpx: Schemas$SetupIntentCreateBodyPaymentMethodDataFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$SetupIntentCreateBodyPaymentMethodDataIdeal.out.optional(),
    interacPresent: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$SetupIntentCreateBodyPaymentMethodDataKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$SetupIntentCreateBodyPaymentMethodDataMetadata.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay:
      Schemas$SetupIntentCreateBodyPaymentMethodDataNaverPay.out.optional(),
    nzBankAccount:
      Schemas$SetupIntentCreateBodyPaymentMethodDataNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$SetupIntentCreateBodyPaymentMethodDataP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radarOptions:
      Schemas$SetupIntentCreateBodyPaymentMethodDataRadarOptions.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit:
      Schemas$SetupIntentCreateBodyPaymentMethodDataSepaDebit.out.optional(),
    sofort: Schemas$SetupIntentCreateBodyPaymentMethodDataSofort.out.optional(),
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
      Schemas$SetupIntentCreateBodyPaymentMethodDataUsBankAccount.out.optional(),
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

export const Schemas$SetupIntentCreateBodyPaymentMethodData = {
  in: SchemaIn$SetupIntentCreateBodyPaymentMethodData,
  out: SchemaOut$SetupIntentCreateBodyPaymentMethodData,
};
