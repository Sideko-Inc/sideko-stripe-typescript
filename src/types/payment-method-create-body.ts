import {
  External$PaymentMethodCreateBodyAcssDebit,
  PaymentMethodCreateBodyAcssDebit,
  Schemas$PaymentMethodCreateBodyAcssDebit,
} from "./payment-method-create-body-acss-debit";
import {
  External$PaymentMethodCreateBodyAuBecsDebit,
  PaymentMethodCreateBodyAuBecsDebit,
  Schemas$PaymentMethodCreateBodyAuBecsDebit,
} from "./payment-method-create-body-au-becs-debit";
import {
  External$PaymentMethodCreateBodyBacsDebit,
  PaymentMethodCreateBodyBacsDebit,
  Schemas$PaymentMethodCreateBodyBacsDebit,
} from "./payment-method-create-body-bacs-debit";
import {
  External$PaymentMethodCreateBodyBillingDetails,
  PaymentMethodCreateBodyBillingDetails,
  Schemas$PaymentMethodCreateBodyBillingDetails,
} from "./payment-method-create-body-billing-details";
import {
  External$PaymentMethodCreateBodyBoleto,
  PaymentMethodCreateBodyBoleto,
  Schemas$PaymentMethodCreateBodyBoleto,
} from "./payment-method-create-body-boleto";
import {
  External$PaymentMethodCreateBodyCardObj0,
  PaymentMethodCreateBodyCardObj0,
  Schemas$PaymentMethodCreateBodyCardObj0,
} from "./payment-method-create-body-card-obj0";
import {
  External$PaymentMethodCreateBodyCardObj1,
  PaymentMethodCreateBodyCardObj1,
  Schemas$PaymentMethodCreateBodyCardObj1,
} from "./payment-method-create-body-card-obj1";
import {
  External$PaymentMethodCreateBodyEps,
  PaymentMethodCreateBodyEps,
  Schemas$PaymentMethodCreateBodyEps,
} from "./payment-method-create-body-eps";
import {
  External$PaymentMethodCreateBodyFpx,
  PaymentMethodCreateBodyFpx,
  Schemas$PaymentMethodCreateBodyFpx,
} from "./payment-method-create-body-fpx";
import {
  External$PaymentMethodCreateBodyIdeal,
  PaymentMethodCreateBodyIdeal,
  Schemas$PaymentMethodCreateBodyIdeal,
} from "./payment-method-create-body-ideal";
import {
  External$PaymentMethodCreateBodyKlarna,
  PaymentMethodCreateBodyKlarna,
  Schemas$PaymentMethodCreateBodyKlarna,
} from "./payment-method-create-body-klarna";
import {
  External$PaymentMethodCreateBodyMetadata,
  PaymentMethodCreateBodyMetadata,
  Schemas$PaymentMethodCreateBodyMetadata,
} from "./payment-method-create-body-metadata";
import {
  External$PaymentMethodCreateBodyNaverPay,
  PaymentMethodCreateBodyNaverPay,
  Schemas$PaymentMethodCreateBodyNaverPay,
} from "./payment-method-create-body-naver-pay";
import {
  External$PaymentMethodCreateBodyNzBankAccount,
  PaymentMethodCreateBodyNzBankAccount,
  Schemas$PaymentMethodCreateBodyNzBankAccount,
} from "./payment-method-create-body-nz-bank-account";
import {
  External$PaymentMethodCreateBodyP24,
  PaymentMethodCreateBodyP24,
  Schemas$PaymentMethodCreateBodyP24,
} from "./payment-method-create-body-p24";
import {
  External$PaymentMethodCreateBodyRadarOptions,
  PaymentMethodCreateBodyRadarOptions,
  Schemas$PaymentMethodCreateBodyRadarOptions,
} from "./payment-method-create-body-radar-options";
import {
  External$PaymentMethodCreateBodySepaDebit,
  PaymentMethodCreateBodySepaDebit,
  Schemas$PaymentMethodCreateBodySepaDebit,
} from "./payment-method-create-body-sepa-debit";
import {
  External$PaymentMethodCreateBodySofort,
  PaymentMethodCreateBodySofort,
  Schemas$PaymentMethodCreateBodySofort,
} from "./payment-method-create-body-sofort";
import {
  External$PaymentMethodCreateBodyUsBankAccount,
  PaymentMethodCreateBodyUsBankAccount,
  Schemas$PaymentMethodCreateBodyUsBankAccount,
} from "./payment-method-create-body-us-bank-account";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodCreateBody
 */
export type PaymentMethodCreateBody = {
  /**
   * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
   */
  acssDebit?: PaymentMethodCreateBodyAcssDebit | undefined;
  /**
   * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
   */
  affirm?: Record<string, any> | undefined;
  /**
   * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
   */
  afterpayClearpay?: Record<string, any> | undefined;
  /**
   * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
   */
  alipay?: Record<string, any> | undefined;
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
   */
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
  /**
   * If this is a Alma PaymentMethod, this hash contains details about the Alma payment method.
   */
  alma?: Record<string, any> | undefined;
  /**
   * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
   */
  amazonPay?: Record<string, any> | undefined;
  /**
   * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
   */
  auBecsDebit?: PaymentMethodCreateBodyAuBecsDebit | undefined;
  /**
   * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
   */
  bacsDebit?: PaymentMethodCreateBodyBacsDebit | undefined;
  /**
   * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
   */
  bancontact?: Record<string, any> | undefined;
  /**
   * If this is a `billie` PaymentMethod, this hash contains details about the billie payment method.
   */
  billie?: Record<string, any> | undefined;
  /**
   * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
   */
  billingDetails?: PaymentMethodCreateBodyBillingDetails | undefined;
  /**
   * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
   */
  blik?: Record<string, any> | undefined;
  /**
   * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
   */
  boleto?: PaymentMethodCreateBodyBoleto | undefined;
  /**
   * If this is a `card` PaymentMethod, this hash contains the user's card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay, Amex Express Checkout, or legacy Checkout) into the card hash with format `card: {token: "tok_visa"}`. When providing a card number, you must meet the requirements for [PCI compliance](https://stripe.com/docs/security#validating-pci-compliance). We strongly recommend using Stripe.js instead of interacting with this API directly.
   */
  card?:
    | (PaymentMethodCreateBodyCardObj0 | PaymentMethodCreateBodyCardObj1)
    | undefined;
  /**
   * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
   */
  cashapp?: Record<string, any> | undefined;
  /**
   * The `Customer` to whom the original PaymentMethod is attached.
   */
  customer?: string | undefined;
  /**
   * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
   */
  customerBalance?: Record<string, any> | undefined;
  /**
   * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
   */
  eps?: PaymentMethodCreateBodyEps | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
   */
  fpx?: PaymentMethodCreateBodyFpx | undefined;
  /**
   * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
   */
  giropay?: Record<string, any> | undefined;
  /**
   * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
   */
  grabpay?: Record<string, any> | undefined;
  /**
   * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
   */
  ideal?: PaymentMethodCreateBodyIdeal | undefined;
  /**
   * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
   */
  interacPresent?: Record<string, any> | undefined;
  /**
   * If this is a `kakao_pay` PaymentMethod, this hash contains details about the Kakao Pay payment method.
   */
  kakaoPay?: Record<string, any> | undefined;
  /**
   * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
   */
  klarna?: PaymentMethodCreateBodyKlarna | undefined;
  /**
   * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
   */
  konbini?: Record<string, any> | undefined;
  /**
   * If this is a `kr_card` PaymentMethod, this hash contains details about the Korean Card payment method.
   */
  krCard?: Record<string, any> | undefined;
  /**
   * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
   */
  link?: Record<string, any> | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PaymentMethodCreateBodyMetadata | undefined;
  /**
   * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
   */
  mobilepay?: Record<string, any> | undefined;
  /**
   * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
   */
  multibanco?: Record<string, any> | undefined;
  /**
   * If this is a `naver_pay` PaymentMethod, this hash contains details about the Naver Pay payment method.
   */
  naverPay?: PaymentMethodCreateBodyNaverPay | undefined;
  /**
   * If this is an nz_bank_account PaymentMethod, this hash contains details about the nz_bank_account payment method.
   */
  nzBankAccount?: PaymentMethodCreateBodyNzBankAccount | undefined;
  /**
   * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
   */
  oxxo?: Record<string, any> | undefined;
  /**
   * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
   */
  p24?: PaymentMethodCreateBodyP24 | undefined;
  /**
   * If this is a `pay_by_bank` PaymentMethod, this hash contains details about the PayByBank payment method.
   */
  payByBank?: Record<string, any> | undefined;
  /**
   * If this is a `payco` PaymentMethod, this hash contains details about the PAYCO payment method.
   */
  payco?: Record<string, any> | undefined;
  /**
   * The PaymentMethod to share.
   */
  paymentMethod?: string | undefined;
  /**
   * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
   */
  paynow?: Record<string, any> | undefined;
  /**
   * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
   */
  paypal?: Record<string, any> | undefined;
  /**
   * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
   */
  pix?: Record<string, any> | undefined;
  /**
   * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
   */
  promptpay?: Record<string, any> | undefined;
  /**
   * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
   */
  radarOptions?: PaymentMethodCreateBodyRadarOptions | undefined;
  /**
   * If this is a `Revolut Pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
   */
  revolutPay?: Record<string, any> | undefined;
  /**
   * If this is a `samsung_pay` PaymentMethod, this hash contains details about the SamsungPay payment method.
   */
  samsungPay?: Record<string, any> | undefined;
  /**
   * If this is a `satispay` PaymentMethod, this hash contains details about the satispay payment method.
   */
  satispay?: Record<string, any> | undefined;
  /**
   * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
   */
  sepaDebit?: PaymentMethodCreateBodySepaDebit | undefined;
  /**
   * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
   */
  sofort?: PaymentMethodCreateBodySofort | undefined;
  /**
   * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
   */
  swish?: Record<string, any> | undefined;
  /**
   * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
   */
  twint?: Record<string, any> | undefined;
  /**
   * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
   */
  type?:
    | (
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
        | "zip"
      )
    | undefined;
  /**
   * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
   */
  usBankAccount?: PaymentMethodCreateBodyUsBankAccount | undefined;
  /**
   * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
   */
  wechatPay?: Record<string, any> | undefined;
  /**
   * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
   */
  zip?: Record<string, any> | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (PaymentMethodCreateBodyAcssDebit | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (("always" | "limited" | "unspecified") | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyAuBecsDebit | undefined)
    | (PaymentMethodCreateBodyBacsDebit | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyBillingDetails | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyBoleto | undefined)
    | (
        | (PaymentMethodCreateBodyCardObj0 | PaymentMethodCreateBodyCardObj1)
        | undefined
      )
    | (Record<string, any> | undefined)
    | (string | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyEps | undefined)
    | (string[] | undefined)
    | (PaymentMethodCreateBodyFpx | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyIdeal | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyKlarna | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyMetadata | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyNaverPay | undefined)
    | (PaymentMethodCreateBodyNzBankAccount | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyP24 | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (string | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodyRadarOptions | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (PaymentMethodCreateBodySepaDebit | undefined)
    | (PaymentMethodCreateBodySofort | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (
        | (
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
            | "zip"
          )
        | undefined
      )
    | (PaymentMethodCreateBodyUsBankAccount | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodCreateBody = {
  acss_debit?: External$PaymentMethodCreateBodyAcssDebit | undefined;
  affirm?: Record<string, any> | undefined;
  afterpay_clearpay?: Record<string, any> | undefined;
  alipay?: Record<string, any> | undefined;
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
  alma?: Record<string, any> | undefined;
  amazon_pay?: Record<string, any> | undefined;
  au_becs_debit?: External$PaymentMethodCreateBodyAuBecsDebit | undefined;
  bacs_debit?: External$PaymentMethodCreateBodyBacsDebit | undefined;
  bancontact?: Record<string, any> | undefined;
  billie?: Record<string, any> | undefined;
  billing_details?: External$PaymentMethodCreateBodyBillingDetails | undefined;
  blik?: Record<string, any> | undefined;
  boleto?: External$PaymentMethodCreateBodyBoleto | undefined;
  card?:
    | (
        | External$PaymentMethodCreateBodyCardObj0
        | External$PaymentMethodCreateBodyCardObj1
      )
    | undefined;
  cashapp?: Record<string, any> | undefined;
  customer?: string | undefined;
  customer_balance?: Record<string, any> | undefined;
  eps?: External$PaymentMethodCreateBodyEps | undefined;
  expand?: string[] | undefined;
  fpx?: External$PaymentMethodCreateBodyFpx | undefined;
  giropay?: Record<string, any> | undefined;
  grabpay?: Record<string, any> | undefined;
  ideal?: External$PaymentMethodCreateBodyIdeal | undefined;
  interac_present?: Record<string, any> | undefined;
  kakao_pay?: Record<string, any> | undefined;
  klarna?: External$PaymentMethodCreateBodyKlarna | undefined;
  konbini?: Record<string, any> | undefined;
  kr_card?: Record<string, any> | undefined;
  link?: Record<string, any> | undefined;
  metadata?: External$PaymentMethodCreateBodyMetadata | undefined;
  mobilepay?: Record<string, any> | undefined;
  multibanco?: Record<string, any> | undefined;
  naver_pay?: External$PaymentMethodCreateBodyNaverPay | undefined;
  nz_bank_account?: External$PaymentMethodCreateBodyNzBankAccount | undefined;
  oxxo?: Record<string, any> | undefined;
  p24?: External$PaymentMethodCreateBodyP24 | undefined;
  pay_by_bank?: Record<string, any> | undefined;
  payco?: Record<string, any> | undefined;
  payment_method?: string | undefined;
  paynow?: Record<string, any> | undefined;
  paypal?: Record<string, any> | undefined;
  pix?: Record<string, any> | undefined;
  promptpay?: Record<string, any> | undefined;
  radar_options?: External$PaymentMethodCreateBodyRadarOptions | undefined;
  revolut_pay?: Record<string, any> | undefined;
  samsung_pay?: Record<string, any> | undefined;
  satispay?: Record<string, any> | undefined;
  sepa_debit?: External$PaymentMethodCreateBodySepaDebit | undefined;
  sofort?: External$PaymentMethodCreateBodySofort | undefined;
  swish?: Record<string, any> | undefined;
  twint?: Record<string, any> | undefined;
  type?:
    | (
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
        | "zip"
      )
    | undefined;
  us_bank_account?: External$PaymentMethodCreateBodyUsBankAccount | undefined;
  wechat_pay?: Record<string, any> | undefined;
  zip?: Record<string, any> | undefined;

  [additionalProperty: string]:
    | (External$PaymentMethodCreateBodyAcssDebit | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (("always" | "limited" | "unspecified") | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyAuBecsDebit | undefined)
    | (External$PaymentMethodCreateBodyBacsDebit | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyBillingDetails | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyBoleto | undefined)
    | (
        | (
            | External$PaymentMethodCreateBodyCardObj0
            | External$PaymentMethodCreateBodyCardObj1
          )
        | undefined
      )
    | (Record<string, any> | undefined)
    | (string | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyEps | undefined)
    | (string[] | undefined)
    | (External$PaymentMethodCreateBodyFpx | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyIdeal | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyKlarna | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyMetadata | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyNaverPay | undefined)
    | (External$PaymentMethodCreateBodyNzBankAccount | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyP24 | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (string | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodyRadarOptions | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (External$PaymentMethodCreateBodySepaDebit | undefined)
    | (External$PaymentMethodCreateBodySofort | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | (
        | (
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
            | "zip"
          )
        | undefined
      )
    | (External$PaymentMethodCreateBodyUsBankAccount | undefined)
    | (Record<string, any> | undefined)
    | (Record<string, any> | undefined)
    | External$PaymentMethodCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodCreateBody
 */
const SchemaIn$PaymentMethodCreateBody: z.ZodType<
  PaymentMethodCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit: Schemas$PaymentMethodCreateBodyAcssDebit.in.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpay_clearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazon_pay: z.record(z.string(), z.any()).optional(),
    au_becs_debit: Schemas$PaymentMethodCreateBodyAuBecsDebit.in.optional(),
    bacs_debit: Schemas$PaymentMethodCreateBodyBacsDebit.in.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billing_details:
      Schemas$PaymentMethodCreateBodyBillingDetails.in.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$PaymentMethodCreateBodyBoleto.in.optional(),
    card: z
      .union([
        Schemas$PaymentMethodCreateBodyCardObj0.in,
        Schemas$PaymentMethodCreateBodyCardObj1.in,
      ])
      .optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer: z.string().optional(),
    customer_balance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentMethodCreateBodyEps.in.optional(),
    expand: z.array(z.string()).optional(),
    fpx: Schemas$PaymentMethodCreateBodyFpx.in.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentMethodCreateBodyIdeal.in.optional(),
    interac_present: z.record(z.string(), z.any()).optional(),
    kakao_pay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$PaymentMethodCreateBodyKlarna.in.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    kr_card: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata: Schemas$PaymentMethodCreateBodyMetadata.in.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naver_pay: Schemas$PaymentMethodCreateBodyNaverPay.in.optional(),
    nz_bank_account: Schemas$PaymentMethodCreateBodyNzBankAccount.in.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentMethodCreateBodyP24.in.optional(),
    pay_by_bank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    payment_method: z.string().optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radar_options: Schemas$PaymentMethodCreateBodyRadarOptions.in.optional(),
    revolut_pay: z.record(z.string(), z.any()).optional(),
    samsung_pay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepa_debit: Schemas$PaymentMethodCreateBodySepaDebit.in.optional(),
    sofort: Schemas$PaymentMethodCreateBodySofort.in.optional(),
    swish: z.record(z.string(), z.any()).optional(),
    twint: z.record(z.string(), z.any()).optional(),
    type: z
      .enum([
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
      ])
      .optional(),
    us_bank_account: Schemas$PaymentMethodCreateBodyUsBankAccount.in.optional(),
    wechat_pay: z.record(z.string(), z.any()).optional(),
    zip: z.record(z.string(), z.any()).optional(),
  })
  .catchall(zodRequiredAny)
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
      cashapp: "cashapp",
      customer: "customer",
      customer_balance: "customerBalance",
      eps: "eps",
      expand: "expand",
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
      payment_method: "paymentMethod",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodCreateBody
 */
const SchemaOut$PaymentMethodCreateBody: z.ZodType<
  External$PaymentMethodCreateBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodCreateBody // the object to be transformed
> = z
  .object({
    acssDebit: Schemas$PaymentMethodCreateBodyAcssDebit.out.optional(),
    affirm: z.record(z.string(), z.any()).optional(),
    afterpayClearpay: z.record(z.string(), z.any()).optional(),
    alipay: z.record(z.string(), z.any()).optional(),
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
    alma: z.record(z.string(), z.any()).optional(),
    amazonPay: z.record(z.string(), z.any()).optional(),
    auBecsDebit: Schemas$PaymentMethodCreateBodyAuBecsDebit.out.optional(),
    bacsDebit: Schemas$PaymentMethodCreateBodyBacsDebit.out.optional(),
    bancontact: z.record(z.string(), z.any()).optional(),
    billie: z.record(z.string(), z.any()).optional(),
    billingDetails:
      Schemas$PaymentMethodCreateBodyBillingDetails.out.optional(),
    blik: z.record(z.string(), z.any()).optional(),
    boleto: Schemas$PaymentMethodCreateBodyBoleto.out.optional(),
    card: z
      .union([
        Schemas$PaymentMethodCreateBodyCardObj0.out,
        Schemas$PaymentMethodCreateBodyCardObj1.out,
      ])
      .optional(),
    cashapp: z.record(z.string(), z.any()).optional(),
    customer: z.string().optional(),
    customerBalance: z.record(z.string(), z.any()).optional(),
    eps: Schemas$PaymentMethodCreateBodyEps.out.optional(),
    expand: z.array(z.string()).optional(),
    fpx: Schemas$PaymentMethodCreateBodyFpx.out.optional(),
    giropay: z.record(z.string(), z.any()).optional(),
    grabpay: z.record(z.string(), z.any()).optional(),
    ideal: Schemas$PaymentMethodCreateBodyIdeal.out.optional(),
    interacPresent: z.record(z.string(), z.any()).optional(),
    kakaoPay: z.record(z.string(), z.any()).optional(),
    klarna: Schemas$PaymentMethodCreateBodyKlarna.out.optional(),
    konbini: z.record(z.string(), z.any()).optional(),
    krCard: z.record(z.string(), z.any()).optional(),
    link: z.record(z.string(), z.any()).optional(),
    metadata: Schemas$PaymentMethodCreateBodyMetadata.out.optional(),
    mobilepay: z.record(z.string(), z.any()).optional(),
    multibanco: z.record(z.string(), z.any()).optional(),
    naverPay: Schemas$PaymentMethodCreateBodyNaverPay.out.optional(),
    nzBankAccount: Schemas$PaymentMethodCreateBodyNzBankAccount.out.optional(),
    oxxo: z.record(z.string(), z.any()).optional(),
    p24: Schemas$PaymentMethodCreateBodyP24.out.optional(),
    payByBank: z.record(z.string(), z.any()).optional(),
    payco: z.record(z.string(), z.any()).optional(),
    paymentMethod: z.string().optional(),
    paynow: z.record(z.string(), z.any()).optional(),
    paypal: z.record(z.string(), z.any()).optional(),
    pix: z.record(z.string(), z.any()).optional(),
    promptpay: z.record(z.string(), z.any()).optional(),
    radarOptions: Schemas$PaymentMethodCreateBodyRadarOptions.out.optional(),
    revolutPay: z.record(z.string(), z.any()).optional(),
    samsungPay: z.record(z.string(), z.any()).optional(),
    satispay: z.record(z.string(), z.any()).optional(),
    sepaDebit: Schemas$PaymentMethodCreateBodySepaDebit.out.optional(),
    sofort: Schemas$PaymentMethodCreateBodySofort.out.optional(),
    swish: z.record(z.string(), z.any()).optional(),
    twint: z.record(z.string(), z.any()).optional(),
    type: z
      .enum([
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
      ])
      .optional(),
    usBankAccount: Schemas$PaymentMethodCreateBodyUsBankAccount.out.optional(),
    wechatPay: z.record(z.string(), z.any()).optional(),
    zip: z.record(z.string(), z.any()).optional(),
  })
  .catchall(zodRequiredAny)
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
      cashapp: "cashapp",
      customer: "customer",
      customerBalance: "customer_balance",
      eps: "eps",
      expand: "expand",
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
      paymentMethod: "payment_method",
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

export const Schemas$PaymentMethodCreateBody = {
  in: SchemaIn$PaymentMethodCreateBody,
  out: SchemaOut$PaymentMethodCreateBody,
};
