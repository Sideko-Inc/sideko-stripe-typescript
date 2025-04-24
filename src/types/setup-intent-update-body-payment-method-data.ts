import {
  External$SetupIntentUpdateBodyPaymentMethodDataAcssDebit,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataAcssDebit,
  SetupIntentUpdateBodyPaymentMethodDataAcssDebit,
} from "./setup-intent-update-body-payment-method-data-acss-debit";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit,
  SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit,
} from "./setup-intent-update-body-payment-method-data-au-becs-debit";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataBacsDebit,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataBacsDebit,
  SetupIntentUpdateBodyPaymentMethodDataBacsDebit,
} from "./setup-intent-update-body-payment-method-data-bacs-debit";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataBillingDetails,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataBillingDetails,
  SetupIntentUpdateBodyPaymentMethodDataBillingDetails,
} from "./setup-intent-update-body-payment-method-data-billing-details";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataBoleto,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataBoleto,
  SetupIntentUpdateBodyPaymentMethodDataBoleto,
} from "./setup-intent-update-body-payment-method-data-boleto";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataEps,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataEps,
  SetupIntentUpdateBodyPaymentMethodDataEps,
} from "./setup-intent-update-body-payment-method-data-eps";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataFpx,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataFpx,
  SetupIntentUpdateBodyPaymentMethodDataFpx,
} from "./setup-intent-update-body-payment-method-data-fpx";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataIdeal,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataIdeal,
  SetupIntentUpdateBodyPaymentMethodDataIdeal,
} from "./setup-intent-update-body-payment-method-data-ideal";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataKlarna,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarna,
  SetupIntentUpdateBodyPaymentMethodDataKlarna,
} from "./setup-intent-update-body-payment-method-data-klarna";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataMetadata,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataMetadata,
  SetupIntentUpdateBodyPaymentMethodDataMetadata,
} from "./setup-intent-update-body-payment-method-data-metadata";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataNaverPay,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataNaverPay,
  SetupIntentUpdateBodyPaymentMethodDataNaverPay,
} from "./setup-intent-update-body-payment-method-data-naver-pay";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataNzBankAccount,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataNzBankAccount,
  SetupIntentUpdateBodyPaymentMethodDataNzBankAccount,
} from "./setup-intent-update-body-payment-method-data-nz-bank-account";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataP24,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataP24,
  SetupIntentUpdateBodyPaymentMethodDataP24,
} from "./setup-intent-update-body-payment-method-data-p24";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataRadarOptions,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataRadarOptions,
  SetupIntentUpdateBodyPaymentMethodDataRadarOptions,
} from "./setup-intent-update-body-payment-method-data-radar-options";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataSepaDebit,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataSepaDebit,
  SetupIntentUpdateBodyPaymentMethodDataSepaDebit,
} from "./setup-intent-update-body-payment-method-data-sepa-debit";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataSofort,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataSofort,
  SetupIntentUpdateBodyPaymentMethodDataSofort,
} from "./setup-intent-update-body-payment-method-data-sofort";
import {
  External$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount,
  Schemas$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount,
  SetupIntentUpdateBodyPaymentMethodDataUsBankAccount,
} from "./setup-intent-update-body-payment-method-data-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
 * value in the SetupIntent.
 */
export type SetupIntentUpdateBodyPaymentMethodData = {
  acssDebit?: SetupIntentUpdateBodyPaymentMethodDataAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit | undefined;
  bacsDebit?: SetupIntentUpdateBodyPaymentMethodDataBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billingDetails?:
    | SetupIntentUpdateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: SetupIntentUpdateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customerBalance?: Record<string, any> | undefined;
  eps?: SetupIntentUpdateBodyPaymentMethodDataEps | undefined;
  fpx?: SetupIntentUpdateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: SetupIntentUpdateBodyPaymentMethodDataIdeal | undefined;
  interacPresent?: Record<string, any> | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: SetupIntentUpdateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  krCard?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?: SetupIntentUpdateBodyPaymentMethodDataMetadata | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naverPay?: SetupIntentUpdateBodyPaymentMethodDataNaverPay | undefined;
  nzBankAccount?:
    | SetupIntentUpdateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: SetupIntentUpdateBodyPaymentMethodDataP24 | undefined;
  payByBank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radarOptions?: SetupIntentUpdateBodyPaymentMethodDataRadarOptions | undefined;
  revolutPay?: Record<string, any> | undefined;
  samsungPay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepaDebit?: SetupIntentUpdateBodyPaymentMethodDataSepaDebit | undefined;
  sofort?: SetupIntentUpdateBodyPaymentMethodDataSofort | undefined;
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
    | SetupIntentUpdateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * SetupIntentUpdateBodyPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentUpdateBodyPaymentMethodData = {
  acss_debit?:
    | External$SetupIntentUpdateBodyPaymentMethodDataAcssDebit
    | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?:
    | External$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit
    | undefined;
  bacs_debit?:
    | External$SetupIntentUpdateBodyPaymentMethodDataBacsDebit
    | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details?:
    | External$SetupIntentUpdateBodyPaymentMethodDataBillingDetails
    | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: External$SetupIntentUpdateBodyPaymentMethodDataBoleto | undefined;
  cashapp?: Record<string, any> | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$SetupIntentUpdateBodyPaymentMethodDataEps | undefined;
  fpx?: External$SetupIntentUpdateBodyPaymentMethodDataFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$SetupIntentUpdateBodyPaymentMethodDataIdeal | undefined;
  interac_present?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$SetupIntentUpdateBodyPaymentMethodDataKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?:
    | External$SetupIntentUpdateBodyPaymentMethodDataMetadata
    | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?:
    | External$SetupIntentUpdateBodyPaymentMethodDataNaverPay
    | undefined;
  nz_bank_account?:
    | External$SetupIntentUpdateBodyPaymentMethodDataNzBankAccount
    | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$SetupIntentUpdateBodyPaymentMethodDataP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radar_options?:
    | External$SetupIntentUpdateBodyPaymentMethodDataRadarOptions
    | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?:
    | External$SetupIntentUpdateBodyPaymentMethodDataSepaDebit
    | undefined;
  sofort?: External$SetupIntentUpdateBodyPaymentMethodDataSofort | undefined;
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
    | External$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount
    | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentUpdateBodyPaymentMethodData
 */
const SchemaIn$SetupIntentUpdateBodyPaymentMethodData: z.ZodType<
  SetupIntentUpdateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit.in.optional(),
    bacs_debit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataBillingDetails.in.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$SetupIntentUpdateBodyPaymentMethodDataBoleto.in.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$SetupIntentUpdateBodyPaymentMethodDataEps.in.optional(),
    fpx: Schemas$SetupIntentUpdateBodyPaymentMethodDataFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$SetupIntentUpdateBodyPaymentMethodDataIdeal.in.optional(),
    interac_present: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataMetadata.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataNaverPay.in.optional(),
    nz_bank_account:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$SetupIntentUpdateBodyPaymentMethodDataP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radar_options:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataRadarOptions.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataSepaDebit.in.optional(),
    sofort: Schemas$SetupIntentUpdateBodyPaymentMethodDataSofort.in.optional(),
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
      Schemas$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentUpdateBodyPaymentMethodData
 */
const SchemaOut$SetupIntentUpdateBodyPaymentMethodData: z.ZodType<
  External$SetupIntentUpdateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentUpdateBodyPaymentMethodData // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataAuBecsDebit.out.optional(),
    bacsDebit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataBillingDetails.out.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$SetupIntentUpdateBodyPaymentMethodDataBoleto.out.optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$SetupIntentUpdateBodyPaymentMethodDataEps.out.optional(),
    fpx: Schemas$SetupIntentUpdateBodyPaymentMethodDataFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$SetupIntentUpdateBodyPaymentMethodDataIdeal.out.optional(),
    interacPresent: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$SetupIntentUpdateBodyPaymentMethodDataKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataMetadata.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataNaverPay.out.optional(),
    nzBankAccount:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$SetupIntentUpdateBodyPaymentMethodDataP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radarOptions:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataRadarOptions.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit:
      Schemas$SetupIntentUpdateBodyPaymentMethodDataSepaDebit.out.optional(),
    sofort: Schemas$SetupIntentUpdateBodyPaymentMethodDataSofort.out.optional(),
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
      Schemas$SetupIntentUpdateBodyPaymentMethodDataUsBankAccount.out.optional(),
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

export const Schemas$SetupIntentUpdateBodyPaymentMethodData = {
  in: SchemaIn$SetupIntentUpdateBodyPaymentMethodData,
  out: SchemaOut$SetupIntentUpdateBodyPaymentMethodData,
};
