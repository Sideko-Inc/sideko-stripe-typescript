import {
  BillingDetails,
  External$BillingDetails,
  Schemas$BillingDetails,
} from "./billing-details";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  External$PaymentMethodAcssDebit,
  PaymentMethodAcssDebit,
  Schemas$PaymentMethodAcssDebit,
} from "./payment-method-acss-debit";
import {
  External$PaymentMethodAuBecsDebit,
  PaymentMethodAuBecsDebit,
  Schemas$PaymentMethodAuBecsDebit,
} from "./payment-method-au-becs-debit";
import {
  External$PaymentMethodBacsDebit,
  PaymentMethodBacsDebit,
  Schemas$PaymentMethodBacsDebit,
} from "./payment-method-bacs-debit";
import {
  External$PaymentMethodBoleto,
  PaymentMethodBoleto,
  Schemas$PaymentMethodBoleto,
} from "./payment-method-boleto";
import {
  External$PaymentMethodCard,
  PaymentMethodCard,
  Schemas$PaymentMethodCard,
} from "./payment-method-card";
import {
  External$PaymentMethodCardPresent,
  PaymentMethodCardPresent,
  Schemas$PaymentMethodCardPresent,
} from "./payment-method-card-present";
import {
  External$PaymentMethodCashapp,
  PaymentMethodCashapp,
  Schemas$PaymentMethodCashapp,
} from "./payment-method-cashapp";
import {
  External$PaymentMethodEps,
  PaymentMethodEps,
  Schemas$PaymentMethodEps,
} from "./payment-method-eps";
import {
  External$PaymentMethodFpx,
  PaymentMethodFpx,
  Schemas$PaymentMethodFpx,
} from "./payment-method-fpx";
import {
  External$PaymentMethodIdeal,
  PaymentMethodIdeal,
  Schemas$PaymentMethodIdeal,
} from "./payment-method-ideal";
import {
  External$PaymentMethodInteracPresent,
  PaymentMethodInteracPresent,
  Schemas$PaymentMethodInteracPresent,
} from "./payment-method-interac-present";
import {
  External$PaymentMethodKlarna,
  PaymentMethodKlarna,
  Schemas$PaymentMethodKlarna,
} from "./payment-method-klarna";
import {
  External$PaymentMethodKrCard,
  PaymentMethodKrCard,
  Schemas$PaymentMethodKrCard,
} from "./payment-method-kr-card";
import {
  External$PaymentMethodLink,
  PaymentMethodLink,
  Schemas$PaymentMethodLink,
} from "./payment-method-link";
import {
  External$PaymentMethodNaverPay,
  PaymentMethodNaverPay,
  Schemas$PaymentMethodNaverPay,
} from "./payment-method-naver-pay";
import {
  External$PaymentMethodNzBankAccount,
  PaymentMethodNzBankAccount,
  Schemas$PaymentMethodNzBankAccount,
} from "./payment-method-nz-bank-account";
import {
  External$PaymentMethodP24,
  PaymentMethodP24,
  Schemas$PaymentMethodP24,
} from "./payment-method-p24";
import {
  External$PaymentMethodPaypal,
  PaymentMethodPaypal,
  Schemas$PaymentMethodPaypal,
} from "./payment-method-paypal";
import {
  External$PaymentMethodSepaDebit,
  PaymentMethodSepaDebit,
  Schemas$PaymentMethodSepaDebit,
} from "./payment-method-sepa-debit";
import {
  External$PaymentMethodSofort,
  PaymentMethodSofort,
  Schemas$PaymentMethodSofort,
} from "./payment-method-sofort";
import {
  External$PaymentMethodUsBankAccount,
  PaymentMethodUsBankAccount,
  Schemas$PaymentMethodUsBankAccount,
} from "./payment-method-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details of the PaymentMethod collected by Payment Element
 */
export type ConfirmationTokensResourcePaymentMethodPreview = {
  acssDebit?: PaymentMethodAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpayClearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to “unspecified”.
   */
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazonPay?: Record<string, any> | undefined;
  auBecsDebit?: PaymentMethodAuBecsDebit | undefined;
  bacsDebit?: PaymentMethodBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billingDetails: BillingDetails;
  blik?: Record<string, any> | undefined;
  boleto?: PaymentMethodBoleto | undefined;
  card?: PaymentMethodCard | undefined;
  cardPresent?: PaymentMethodCardPresent | undefined;
  cashapp?: PaymentMethodCashapp | undefined;
  /**
   * The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
   */
  customer?: (string | Customer) | undefined;
  customerBalance?: Record<string, any> | undefined;
  eps?: PaymentMethodEps | undefined;
  fpx?: PaymentMethodFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: PaymentMethodIdeal | undefined;
  interacPresent?: PaymentMethodInteracPresent | undefined;
  kakaoPay?: Record<string, any> | undefined;
  klarna?: PaymentMethodKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  krCard?: PaymentMethodKrCard | undefined;
  link?: PaymentMethodLink | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naverPay?: PaymentMethodNaverPay | undefined;
  nzBankAccount?: PaymentMethodNzBankAccount | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: PaymentMethodP24 | undefined;
  payByBank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: PaymentMethodPaypal | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  revolutPay?: Record<string, any> | undefined;
  samsungPay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepaDebit?: PaymentMethodSepaDebit | undefined;
  sofort?: PaymentMethodSofort | undefined;
  swish?: Record<string, any> | undefined;
  twint?: Record<string, any> | undefined;
  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
   */
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
    | "card"
    | "card_present"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "interac_present"
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
  usBankAccount?: PaymentMethodUsBankAccount | undefined;
  wechatPay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * @internal
 * ConfirmationTokensResourcePaymentMethodPreview without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmationTokensResourcePaymentMethodPreview = {
  acss_debit?: External$PaymentMethodAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?: External$PaymentMethodAuBecsDebit | undefined;
  bacs_debit?: External$PaymentMethodBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details: External$BillingDetails;
  blik?: Record<string, any> | undefined;
  boleto?: External$PaymentMethodBoleto | undefined;
  card?: External$PaymentMethodCard | undefined;
  card_present?: External$PaymentMethodCardPresent | undefined;
  cashapp?: External$PaymentMethodCashapp | undefined;
  customer?: (string | External$Customer) | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$PaymentMethodEps | undefined;
  fpx?: External$PaymentMethodFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$PaymentMethodIdeal | undefined;
  interac_present?: External$PaymentMethodInteracPresent | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$PaymentMethodKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: External$PaymentMethodKrCard | undefined;
  link?: External$PaymentMethodLink | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?: External$PaymentMethodNaverPay | undefined;
  nz_bank_account?: External$PaymentMethodNzBankAccount | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$PaymentMethodP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: External$PaymentMethodPaypal | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?: External$PaymentMethodSepaDebit | undefined;
  sofort?: External$PaymentMethodSofort | undefined;
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
    | "card"
    | "card_present"
    | "cashapp"
    | "customer_balance"
    | "eps"
    | "fpx"
    | "giropay"
    | "grabpay"
    | "ideal"
    | "interac_present"
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
  us_bank_account?: External$PaymentMethodUsBankAccount | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmationTokensResourcePaymentMethodPreview
 */
const SchemaIn$ConfirmationTokensResourcePaymentMethodPreview: z.ZodType<
  ConfirmationTokensResourcePaymentMethodPreview, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: Schemas$PaymentMethodAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit: Schemas$PaymentMethodAuBecsDebit.in.optional(),
    bacs_debit: Schemas$PaymentMethodBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details: Schemas$BillingDetails.in,
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$PaymentMethodBoleto.in.optional(),
    card: z.lazy(() => Schemas$PaymentMethodCard.in.optional()),
    card_present: Schemas$PaymentMethodCardPresent.in.optional(),
    cashapp: Schemas$PaymentMethodCashapp.in.optional(),
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.in)])
      .optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentMethodEps.in.optional(),
    fpx: Schemas$PaymentMethodFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentMethodIdeal.in.optional(),
    interac_present: Schemas$PaymentMethodInteracPresent.in.optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$PaymentMethodKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: Schemas$PaymentMethodKrCard.in.optional(),
    link: Schemas$PaymentMethodLink.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay: Schemas$PaymentMethodNaverPay.in.optional(),
    nz_bank_account: Schemas$PaymentMethodNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentMethodP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: Schemas$PaymentMethodPaypal.in.optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit: z.lazy(() => Schemas$PaymentMethodSepaDebit.in.optional()),
    sofort: Schemas$PaymentMethodSofort.in.optional(),
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
      "card",
      "card_present",
      "cashapp",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "grabpay",
      "ideal",
      "interac_present",
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
    us_bank_account: Schemas$PaymentMethodUsBankAccount.in.optional(),
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
      card: "card",
      card_present: "cardPresent",
      cashapp: "cashapp",
      customer: "customer",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmationTokensResourcePaymentMethodPreview
 */
const SchemaOut$ConfirmationTokensResourcePaymentMethodPreview: z.ZodType<
  External$ConfirmationTokensResourcePaymentMethodPreview, // output type of this zod object
  z.ZodTypeDef,
  ConfirmationTokensResourcePaymentMethodPreview // the object to be transformed
> = z
  .object({
    acssDebit: Schemas$PaymentMethodAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit: Schemas$PaymentMethodAuBecsDebit.out.optional(),
    bacsDebit: Schemas$PaymentMethodBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails: Schemas$BillingDetails.out,
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$PaymentMethodBoleto.out.optional(),
    card: z.lazy(() => Schemas$PaymentMethodCard.out.optional()),
    cardPresent: Schemas$PaymentMethodCardPresent.out.optional(),
    cashapp: Schemas$PaymentMethodCashapp.out.optional(),
    customer: z
      .union([z.string(), z.lazy(() => Schemas$Customer.out)])
      .optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentMethodEps.out.optional(),
    fpx: Schemas$PaymentMethodFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentMethodIdeal.out.optional(),
    interacPresent: Schemas$PaymentMethodInteracPresent.out.optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$PaymentMethodKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: Schemas$PaymentMethodKrCard.out.optional(),
    link: Schemas$PaymentMethodLink.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay: Schemas$PaymentMethodNaverPay.out.optional(),
    nzBankAccount: Schemas$PaymentMethodNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentMethodP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: Schemas$PaymentMethodPaypal.out.optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit: z.lazy(() => Schemas$PaymentMethodSepaDebit.out.optional()),
    sofort: Schemas$PaymentMethodSofort.out.optional(),
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
      "card",
      "card_present",
      "cashapp",
      "customer_balance",
      "eps",
      "fpx",
      "giropay",
      "grabpay",
      "ideal",
      "interac_present",
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
    usBankAccount: Schemas$PaymentMethodUsBankAccount.out.optional(),
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
      card: "card",
      cardPresent: "card_present",
      cashapp: "cashapp",
      customer: "customer",
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

export const Schemas$ConfirmationTokensResourcePaymentMethodPreview = {
  in: SchemaIn$ConfirmationTokensResourcePaymentMethodPreview,
  out: SchemaOut$ConfirmationTokensResourcePaymentMethodPreview,
};
