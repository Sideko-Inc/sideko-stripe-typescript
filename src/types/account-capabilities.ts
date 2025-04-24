import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountCapabilities = {
  /**
   * The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges.
   */
  acssDebitPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Affirm capability of the account, or whether the account can directly process Affirm charges.
   */
  affirmPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges.
   */
  afterpayClearpayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Alma capability of the account, or whether the account can directly process Alma payments.
   */
  almaPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the AmazonPay capability of the account, or whether the account can directly process AmazonPay payments.
   */
  amazonPayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
   */
  auBecsDebitPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
   */
  bacsDebitPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
   */
  bancontactPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges.
   */
  bankTransferPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Billie capability of the account, or whether the account can directly process Billie payments.
   */
  billiePayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the blik payments capability of the account, or whether the account can directly process blik charges.
   */
  blikPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the boleto payments capability of the account, or whether the account can directly process boleto charges.
   */
  boletoPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
   */
  cardIssuing?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
   */
  cardPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
   */
  cartesBancairesPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Cash App Pay capability of the account, or whether the account can directly process Cash App Pay payments.
   */
  cashappPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
   */
  epsPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
   */
  fpxPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the GB customer_balance payments (GBP currency) capability of the account, or whether the account can directly process GB customer_balance charges.
   */
  gbBankTransferPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
   */
  giropayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
   */
  grabpayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
   */
  idealPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the india_international_payments capability of the account, or whether the account can process international charges (non INR) in India.
   */
  indiaInternationalPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
   */
  jcbPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Japanese customer_balance payments (JPY currency) capability of the account, or whether the account can directly process Japanese customer_balance charges.
   */
  jpBankTransferPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the KakaoPay capability of the account, or whether the account can directly process KakaoPay payments.
   */
  kakaoPayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges.
   */
  klarnaPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the konbini payments capability of the account, or whether the account can directly process konbini charges.
   */
  konbiniPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the KrCard capability of the account, or whether the account can directly process KrCard payments.
   */
  krCardPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the legacy payments capability of the account.
   */
  legacyPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the link_payments capability of the account, or whether the account can directly process Link charges.
   */
  linkPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the MobilePay capability of the account, or whether the account can directly process MobilePay charges.
   */
  mobilepayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Multibanco payments capability of the account, or whether the account can directly process Multibanco charges.
   */
  multibancoPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Mexican customer_balance payments (MXN currency) capability of the account, or whether the account can directly process Mexican customer_balance charges.
   */
  mxBankTransferPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the NaverPay capability of the account, or whether the account can directly process NaverPay payments.
   */
  naverPayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
   */
  oxxoPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
   */
  p24Payments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the pay_by_bank payments capability of the account, or whether the account can directly process pay_by_bank charges.
   */
  payByBankPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Payco capability of the account, or whether the account can directly process Payco payments.
   */
  paycoPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the paynow payments capability of the account, or whether the account can directly process paynow charges.
   */
  paynowPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the promptpay payments capability of the account, or whether the account can directly process promptpay charges.
   */
  promptpayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the RevolutPay capability of the account, or whether the account can directly process RevolutPay payments.
   */
  revolutPayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the SamsungPay capability of the account, or whether the account can directly process SamsungPay payments.
   */
  samsungPayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Satispay capability of the account, or whether the account can directly process Satispay payments.
   */
  satispayPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the SEPA customer_balance payments (EUR currency) capability of the account, or whether the account can directly process SEPA customer_balance charges.
   */
  sepaBankTransferPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
   */
  sepaDebitPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
   */
  sofortPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Swish capability of the account, or whether the account can directly process Swish payments.
   */
  swishPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the tax reporting 1099-K (US) capability of the account.
   */
  taxReportingUs1099K?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the tax reporting 1099-MISC (US) capability of the account.
   */
  taxReportingUs1099Misc?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
   */
  transfers?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the banking capability, or whether the account can have bank accounts.
   */
  treasury?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the TWINT capability of the account, or whether the account can directly process TWINT charges.
   */
  twintPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges.
   */
  usBankAccountAchPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the US customer_balance payments (USD currency) capability of the account, or whether the account can directly process US customer_balance charges.
   */
  usBankTransferPayments?: ("active" | "inactive" | "pending") | undefined;
  /**
   * The status of the Zip capability of the account, or whether the account can directly process Zip charges.
   */
  zipPayments?: ("active" | "inactive" | "pending") | undefined;
};

/**
 * @internal
 * AccountCapabilities without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCapabilities = {
  acss_debit_payments?: ("active" | "inactive" | "pending") | undefined;
  affirm_payments?: ("active" | "inactive" | "pending") | undefined;
  afterpay_clearpay_payments?: ("active" | "inactive" | "pending") | undefined;
  alma_payments?: ("active" | "inactive" | "pending") | undefined;
  amazon_pay_payments?: ("active" | "inactive" | "pending") | undefined;
  au_becs_debit_payments?: ("active" | "inactive" | "pending") | undefined;
  bacs_debit_payments?: ("active" | "inactive" | "pending") | undefined;
  bancontact_payments?: ("active" | "inactive" | "pending") | undefined;
  bank_transfer_payments?: ("active" | "inactive" | "pending") | undefined;
  billie_payments?: ("active" | "inactive" | "pending") | undefined;
  blik_payments?: ("active" | "inactive" | "pending") | undefined;
  boleto_payments?: ("active" | "inactive" | "pending") | undefined;
  card_issuing?: ("active" | "inactive" | "pending") | undefined;
  card_payments?: ("active" | "inactive" | "pending") | undefined;
  cartes_bancaires_payments?: ("active" | "inactive" | "pending") | undefined;
  cashapp_payments?: ("active" | "inactive" | "pending") | undefined;
  eps_payments?: ("active" | "inactive" | "pending") | undefined;
  fpx_payments?: ("active" | "inactive" | "pending") | undefined;
  gb_bank_transfer_payments?: ("active" | "inactive" | "pending") | undefined;
  giropay_payments?: ("active" | "inactive" | "pending") | undefined;
  grabpay_payments?: ("active" | "inactive" | "pending") | undefined;
  ideal_payments?: ("active" | "inactive" | "pending") | undefined;
  india_international_payments?:
    | ("active" | "inactive" | "pending")
    | undefined;
  jcb_payments?: ("active" | "inactive" | "pending") | undefined;
  jp_bank_transfer_payments?: ("active" | "inactive" | "pending") | undefined;
  kakao_pay_payments?: ("active" | "inactive" | "pending") | undefined;
  klarna_payments?: ("active" | "inactive" | "pending") | undefined;
  konbini_payments?: ("active" | "inactive" | "pending") | undefined;
  kr_card_payments?: ("active" | "inactive" | "pending") | undefined;
  legacy_payments?: ("active" | "inactive" | "pending") | undefined;
  link_payments?: ("active" | "inactive" | "pending") | undefined;
  mobilepay_payments?: ("active" | "inactive" | "pending") | undefined;
  multibanco_payments?: ("active" | "inactive" | "pending") | undefined;
  mx_bank_transfer_payments?: ("active" | "inactive" | "pending") | undefined;
  naver_pay_payments?: ("active" | "inactive" | "pending") | undefined;
  oxxo_payments?: ("active" | "inactive" | "pending") | undefined;
  p24_payments?: ("active" | "inactive" | "pending") | undefined;
  pay_by_bank_payments?: ("active" | "inactive" | "pending") | undefined;
  payco_payments?: ("active" | "inactive" | "pending") | undefined;
  paynow_payments?: ("active" | "inactive" | "pending") | undefined;
  promptpay_payments?: ("active" | "inactive" | "pending") | undefined;
  revolut_pay_payments?: ("active" | "inactive" | "pending") | undefined;
  samsung_pay_payments?: ("active" | "inactive" | "pending") | undefined;
  satispay_payments?: ("active" | "inactive" | "pending") | undefined;
  sepa_bank_transfer_payments?: ("active" | "inactive" | "pending") | undefined;
  sepa_debit_payments?: ("active" | "inactive" | "pending") | undefined;
  sofort_payments?: ("active" | "inactive" | "pending") | undefined;
  swish_payments?: ("active" | "inactive" | "pending") | undefined;
  tax_reporting_us_1099_k?: ("active" | "inactive" | "pending") | undefined;
  tax_reporting_us_1099_misc?: ("active" | "inactive" | "pending") | undefined;
  transfers?: ("active" | "inactive" | "pending") | undefined;
  treasury?: ("active" | "inactive" | "pending") | undefined;
  twint_payments?: ("active" | "inactive" | "pending") | undefined;
  us_bank_account_ach_payments?:
    | ("active" | "inactive" | "pending")
    | undefined;
  us_bank_transfer_payments?: ("active" | "inactive" | "pending") | undefined;
  zip_payments?: ("active" | "inactive" | "pending") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCapabilities
 */
const SchemaIn$AccountCapabilities: z.ZodType<
  AccountCapabilities, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit_payments: z.enum(["active", "inactive", "pending"]).optional(),
    affirm_payments: z.enum(["active", "inactive", "pending"]).optional(),
    afterpay_clearpay_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    alma_payments: z.enum(["active", "inactive", "pending"]).optional(),
    amazon_pay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    au_becs_debit_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    bacs_debit_payments: z.enum(["active", "inactive", "pending"]).optional(),
    bancontact_payments: z.enum(["active", "inactive", "pending"]).optional(),
    bank_transfer_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    billie_payments: z.enum(["active", "inactive", "pending"]).optional(),
    blik_payments: z.enum(["active", "inactive", "pending"]).optional(),
    boleto_payments: z.enum(["active", "inactive", "pending"]).optional(),
    card_issuing: z.enum(["active", "inactive", "pending"]).optional(),
    card_payments: z.enum(["active", "inactive", "pending"]).optional(),
    cartes_bancaires_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    cashapp_payments: z.enum(["active", "inactive", "pending"]).optional(),
    eps_payments: z.enum(["active", "inactive", "pending"]).optional(),
    fpx_payments: z.enum(["active", "inactive", "pending"]).optional(),
    gb_bank_transfer_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    giropay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    grabpay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    ideal_payments: z.enum(["active", "inactive", "pending"]).optional(),
    india_international_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    jcb_payments: z.enum(["active", "inactive", "pending"]).optional(),
    jp_bank_transfer_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    kakao_pay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    klarna_payments: z.enum(["active", "inactive", "pending"]).optional(),
    konbini_payments: z.enum(["active", "inactive", "pending"]).optional(),
    kr_card_payments: z.enum(["active", "inactive", "pending"]).optional(),
    legacy_payments: z.enum(["active", "inactive", "pending"]).optional(),
    link_payments: z.enum(["active", "inactive", "pending"]).optional(),
    mobilepay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    multibanco_payments: z.enum(["active", "inactive", "pending"]).optional(),
    mx_bank_transfer_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    naver_pay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    oxxo_payments: z.enum(["active", "inactive", "pending"]).optional(),
    p24_payments: z.enum(["active", "inactive", "pending"]).optional(),
    pay_by_bank_payments: z.enum(["active", "inactive", "pending"]).optional(),
    payco_payments: z.enum(["active", "inactive", "pending"]).optional(),
    paynow_payments: z.enum(["active", "inactive", "pending"]).optional(),
    promptpay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    revolut_pay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    samsung_pay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    satispay_payments: z.enum(["active", "inactive", "pending"]).optional(),
    sepa_bank_transfer_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    sepa_debit_payments: z.enum(["active", "inactive", "pending"]).optional(),
    sofort_payments: z.enum(["active", "inactive", "pending"]).optional(),
    swish_payments: z.enum(["active", "inactive", "pending"]).optional(),
    tax_reporting_us_1099_k: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    tax_reporting_us_1099_misc: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    transfers: z.enum(["active", "inactive", "pending"]).optional(),
    treasury: z.enum(["active", "inactive", "pending"]).optional(),
    twint_payments: z.enum(["active", "inactive", "pending"]).optional(),
    us_bank_account_ach_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    us_bank_transfer_payments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    zip_payments: z.enum(["active", "inactive", "pending"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit_payments: "acssDebitPayments",
      affirm_payments: "affirmPayments",
      afterpay_clearpay_payments: "afterpayClearpayPayments",
      alma_payments: "almaPayments",
      amazon_pay_payments: "amazonPayPayments",
      au_becs_debit_payments: "auBecsDebitPayments",
      bacs_debit_payments: "bacsDebitPayments",
      bancontact_payments: "bancontactPayments",
      bank_transfer_payments: "bankTransferPayments",
      billie_payments: "billiePayments",
      blik_payments: "blikPayments",
      boleto_payments: "boletoPayments",
      card_issuing: "cardIssuing",
      card_payments: "cardPayments",
      cartes_bancaires_payments: "cartesBancairesPayments",
      cashapp_payments: "cashappPayments",
      eps_payments: "epsPayments",
      fpx_payments: "fpxPayments",
      gb_bank_transfer_payments: "gbBankTransferPayments",
      giropay_payments: "giropayPayments",
      grabpay_payments: "grabpayPayments",
      ideal_payments: "idealPayments",
      india_international_payments: "indiaInternationalPayments",
      jcb_payments: "jcbPayments",
      jp_bank_transfer_payments: "jpBankTransferPayments",
      kakao_pay_payments: "kakaoPayPayments",
      klarna_payments: "klarnaPayments",
      konbini_payments: "konbiniPayments",
      kr_card_payments: "krCardPayments",
      legacy_payments: "legacyPayments",
      link_payments: "linkPayments",
      mobilepay_payments: "mobilepayPayments",
      multibanco_payments: "multibancoPayments",
      mx_bank_transfer_payments: "mxBankTransferPayments",
      naver_pay_payments: "naverPayPayments",
      oxxo_payments: "oxxoPayments",
      p24_payments: "p24Payments",
      pay_by_bank_payments: "payByBankPayments",
      payco_payments: "paycoPayments",
      paynow_payments: "paynowPayments",
      promptpay_payments: "promptpayPayments",
      revolut_pay_payments: "revolutPayPayments",
      samsung_pay_payments: "samsungPayPayments",
      satispay_payments: "satispayPayments",
      sepa_bank_transfer_payments: "sepaBankTransferPayments",
      sepa_debit_payments: "sepaDebitPayments",
      sofort_payments: "sofortPayments",
      swish_payments: "swishPayments",
      tax_reporting_us_1099_k: "taxReportingUs1099K",
      tax_reporting_us_1099_misc: "taxReportingUs1099Misc",
      transfers: "transfers",
      treasury: "treasury",
      twint_payments: "twintPayments",
      us_bank_account_ach_payments: "usBankAccountAchPayments",
      us_bank_transfer_payments: "usBankTransferPayments",
      zip_payments: "zipPayments",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCapabilities
 */
const SchemaOut$AccountCapabilities: z.ZodType<
  External$AccountCapabilities, // output type of this zod object
  z.ZodTypeDef,
  AccountCapabilities // the object to be transformed
> = z
  .object({
    acssDebitPayments: z.enum(["active", "inactive", "pending"]).optional(),
    affirmPayments: z.enum(["active", "inactive", "pending"]).optional(),
    afterpayClearpayPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    almaPayments: z.enum(["active", "inactive", "pending"]).optional(),
    amazonPayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    auBecsDebitPayments: z.enum(["active", "inactive", "pending"]).optional(),
    bacsDebitPayments: z.enum(["active", "inactive", "pending"]).optional(),
    bancontactPayments: z.enum(["active", "inactive", "pending"]).optional(),
    bankTransferPayments: z.enum(["active", "inactive", "pending"]).optional(),
    billiePayments: z.enum(["active", "inactive", "pending"]).optional(),
    blikPayments: z.enum(["active", "inactive", "pending"]).optional(),
    boletoPayments: z.enum(["active", "inactive", "pending"]).optional(),
    cardIssuing: z.enum(["active", "inactive", "pending"]).optional(),
    cardPayments: z.enum(["active", "inactive", "pending"]).optional(),
    cartesBancairesPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    cashappPayments: z.enum(["active", "inactive", "pending"]).optional(),
    epsPayments: z.enum(["active", "inactive", "pending"]).optional(),
    fpxPayments: z.enum(["active", "inactive", "pending"]).optional(),
    gbBankTransferPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    giropayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    grabpayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    idealPayments: z.enum(["active", "inactive", "pending"]).optional(),
    indiaInternationalPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    jcbPayments: z.enum(["active", "inactive", "pending"]).optional(),
    jpBankTransferPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    kakaoPayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    klarnaPayments: z.enum(["active", "inactive", "pending"]).optional(),
    konbiniPayments: z.enum(["active", "inactive", "pending"]).optional(),
    krCardPayments: z.enum(["active", "inactive", "pending"]).optional(),
    legacyPayments: z.enum(["active", "inactive", "pending"]).optional(),
    linkPayments: z.enum(["active", "inactive", "pending"]).optional(),
    mobilepayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    multibancoPayments: z.enum(["active", "inactive", "pending"]).optional(),
    mxBankTransferPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    naverPayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    oxxoPayments: z.enum(["active", "inactive", "pending"]).optional(),
    p24Payments: z.enum(["active", "inactive", "pending"]).optional(),
    payByBankPayments: z.enum(["active", "inactive", "pending"]).optional(),
    paycoPayments: z.enum(["active", "inactive", "pending"]).optional(),
    paynowPayments: z.enum(["active", "inactive", "pending"]).optional(),
    promptpayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    revolutPayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    samsungPayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    satispayPayments: z.enum(["active", "inactive", "pending"]).optional(),
    sepaBankTransferPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    sepaDebitPayments: z.enum(["active", "inactive", "pending"]).optional(),
    sofortPayments: z.enum(["active", "inactive", "pending"]).optional(),
    swishPayments: z.enum(["active", "inactive", "pending"]).optional(),
    taxReportingUs1099K: z.enum(["active", "inactive", "pending"]).optional(),
    taxReportingUs1099Misc: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    transfers: z.enum(["active", "inactive", "pending"]).optional(),
    treasury: z.enum(["active", "inactive", "pending"]).optional(),
    twintPayments: z.enum(["active", "inactive", "pending"]).optional(),
    usBankAccountAchPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    usBankTransferPayments: z
      .enum(["active", "inactive", "pending"])
      .optional(),
    zipPayments: z.enum(["active", "inactive", "pending"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebitPayments: "acss_debit_payments",
      affirmPayments: "affirm_payments",
      afterpayClearpayPayments: "afterpay_clearpay_payments",
      almaPayments: "alma_payments",
      amazonPayPayments: "amazon_pay_payments",
      auBecsDebitPayments: "au_becs_debit_payments",
      bacsDebitPayments: "bacs_debit_payments",
      bancontactPayments: "bancontact_payments",
      bankTransferPayments: "bank_transfer_payments",
      billiePayments: "billie_payments",
      blikPayments: "blik_payments",
      boletoPayments: "boleto_payments",
      cardIssuing: "card_issuing",
      cardPayments: "card_payments",
      cartesBancairesPayments: "cartes_bancaires_payments",
      cashappPayments: "cashapp_payments",
      epsPayments: "eps_payments",
      fpxPayments: "fpx_payments",
      gbBankTransferPayments: "gb_bank_transfer_payments",
      giropayPayments: "giropay_payments",
      grabpayPayments: "grabpay_payments",
      idealPayments: "ideal_payments",
      indiaInternationalPayments: "india_international_payments",
      jcbPayments: "jcb_payments",
      jpBankTransferPayments: "jp_bank_transfer_payments",
      kakaoPayPayments: "kakao_pay_payments",
      klarnaPayments: "klarna_payments",
      konbiniPayments: "konbini_payments",
      krCardPayments: "kr_card_payments",
      legacyPayments: "legacy_payments",
      linkPayments: "link_payments",
      mobilepayPayments: "mobilepay_payments",
      multibancoPayments: "multibanco_payments",
      mxBankTransferPayments: "mx_bank_transfer_payments",
      naverPayPayments: "naver_pay_payments",
      oxxoPayments: "oxxo_payments",
      p24Payments: "p24_payments",
      payByBankPayments: "pay_by_bank_payments",
      paycoPayments: "payco_payments",
      paynowPayments: "paynow_payments",
      promptpayPayments: "promptpay_payments",
      revolutPayPayments: "revolut_pay_payments",
      samsungPayPayments: "samsung_pay_payments",
      satispayPayments: "satispay_payments",
      sepaBankTransferPayments: "sepa_bank_transfer_payments",
      sepaDebitPayments: "sepa_debit_payments",
      sofortPayments: "sofort_payments",
      swishPayments: "swish_payments",
      taxReportingUs1099K: "tax_reporting_us_1099_k",
      taxReportingUs1099Misc: "tax_reporting_us_1099_misc",
      transfers: "transfers",
      treasury: "treasury",
      twintPayments: "twint_payments",
      usBankAccountAchPayments: "us_bank_account_ach_payments",
      usBankTransferPayments: "us_bank_transfer_payments",
      zipPayments: "zip_payments",
    });
  });

export const Schemas$AccountCapabilities = {
  in: SchemaIn$AccountCapabilities,
  out: SchemaOut$AccountCapabilities,
};
