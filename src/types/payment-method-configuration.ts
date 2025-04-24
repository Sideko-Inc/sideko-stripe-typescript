import {
  External$PaymentMethodConfigResourcePaymentMethodProperties,
  PaymentMethodConfigResourcePaymentMethodProperties,
  Schemas$PaymentMethodConfigResourcePaymentMethodProperties,
} from "./payment-method-config-resource-payment-method-properties";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodConfigurations control which payment methods are displayed to your customers when you don't explicitly specify payment method types. You can have multiple configurations with different sets of payment methods for different scenarios.
 *
 * There are two types of PaymentMethodConfigurations. Which is used depends on the [charge type](https://stripe.com/docs/connect/charges):
 *
 * **Direct** configurations apply to payments created on your account, including Connect destination charges, Connect separate charges and transfers, and payments not involving Connect.
 *
 * **Child** configurations apply to payments created on your connected accounts using direct charges, and charges with the on_behalf_of parameter.
 *
 * Child configurations have a `parent` that sets default values and controls which settings connected accounts may override. You can specify a parent ID at payment time, and Stripe will automatically resolve the connected account’s associated child configuration. Parent configurations are [managed in the dashboard](https://dashboard.stripe.com/settings/payment_methods/connected_accounts) and are not available in this API.
 *
 * Related guides:
 * - [Payment Method Configurations API](https://stripe.com/docs/connect/payment-method-configurations)
 * - [Multiple configurations on dynamic payment methods](https://stripe.com/docs/payments/multiple-payment-method-configs)
 * - [Multiple configurations for your Connect accounts](https://stripe.com/docs/connect/multiple-payment-method-configurations)
 */
export type PaymentMethodConfiguration = {
  acssDebit?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  /**
   * Whether the configuration can be used for new payments.
   */
  active: boolean;
  affirm?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  afterpayClearpay?:
    | PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  alipay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  alma?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  amazonPay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  applePay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  /**
   * For child configs, the Connect application associated with the configuration.
   */
  application?: string | null | undefined;
  auBecsDebit?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  bacsDebit?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  bancontact?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  billie?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  blik?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  boleto?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  card?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  cartesBancaires?:
    | PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  cashapp?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  customerBalance?:
    | PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  eps?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  fpx?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  giropay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  googlePay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  grabpay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  ideal?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  /**
   * The default configuration is used whenever a payment method configuration is not specified.
   */
  isDefault: boolean;
  jcb?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  klarna?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  konbini?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  link?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  mobilepay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  multibanco?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  /**
   * The configuration's name.
   */
  name: string;
  nzBankAccount?:
    | PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "payment_method_configuration";
  oxxo?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  p24?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  /**
   * For child configs, the configuration's parent configuration.
   */
  parent?: string | null | undefined;
  payByBank?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  paynow?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  paypal?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  promptpay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  revolutPay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  satispay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  sepaDebit?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  sofort?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  swish?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  twint?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  usBankAccount?:
    | PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  wechatPay?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  zip?: PaymentMethodConfigResourcePaymentMethodProperties | undefined;
};

/**
 * @internal
 * PaymentMethodConfiguration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodConfiguration = {
  acss_debit?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  active: boolean;
  affirm?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  afterpay_clearpay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  alipay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  alma?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  amazon_pay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  apple_pay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  application?: string | null | undefined;
  au_becs_debit?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  bacs_debit?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  bancontact?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  billie?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  blik?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  boleto?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  card?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  cartes_bancaires?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  cashapp?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  customer_balance?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  eps?: External$PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  fpx?: External$PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  giropay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  google_pay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  grabpay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  id: string;
  ideal?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  is_default: boolean;
  jcb?: External$PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  klarna?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  konbini?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  link?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  livemode: boolean;
  mobilepay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  multibanco?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  name: string;
  nz_bank_account?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  object: "payment_method_configuration";
  oxxo?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  p24?: External$PaymentMethodConfigResourcePaymentMethodProperties | undefined;
  parent?: string | null | undefined;
  pay_by_bank?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  paynow?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  paypal?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  promptpay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  revolut_pay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  satispay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  sepa_debit?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  sofort?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  swish?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  twint?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  us_bank_account?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  wechat_pay?:
    | External$PaymentMethodConfigResourcePaymentMethodProperties
    | undefined;
  zip?: External$PaymentMethodConfigResourcePaymentMethodProperties | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodConfiguration
 */
const SchemaIn$PaymentMethodConfiguration: z.ZodType<
  PaymentMethodConfiguration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    acss_debit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    active: z.boolean(),
    affirm:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    afterpay_clearpay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    alipay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    alma: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    amazon_pay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    apple_pay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    application: z.string().nullable().optional(),
    au_becs_debit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    bacs_debit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    bancontact:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    billie:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    blik: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    boleto:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    card: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    cartes_bancaires:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    cashapp:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    customer_balance:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    eps: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    fpx: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    giropay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    google_pay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    grabpay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    id: z.string(),
    ideal:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    is_default: z.boolean(),
    jcb: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    klarna:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    konbini:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    link: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    livemode: z.boolean(),
    mobilepay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    multibanco:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    name: z.string(),
    nz_bank_account:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    object: z.enum(["payment_method_configuration"]),
    oxxo: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    p24: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    parent: z.string().nullable().optional(),
    pay_by_bank:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    paynow:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    paypal:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    promptpay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    revolut_pay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    satispay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    sepa_debit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    sofort:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    swish:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    twint:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    us_bank_account:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    wechat_pay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
    zip: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acss_debit: "acssDebit",
      active: "active",
      affirm: "affirm",
      afterpay_clearpay: "afterpayClearpay",
      alipay: "alipay",
      alma: "alma",
      amazon_pay: "amazonPay",
      apple_pay: "applePay",
      application: "application",
      au_becs_debit: "auBecsDebit",
      bacs_debit: "bacsDebit",
      bancontact: "bancontact",
      billie: "billie",
      blik: "blik",
      boleto: "boleto",
      card: "card",
      cartes_bancaires: "cartesBancaires",
      cashapp: "cashapp",
      customer_balance: "customerBalance",
      eps: "eps",
      fpx: "fpx",
      giropay: "giropay",
      google_pay: "googlePay",
      grabpay: "grabpay",
      id: "id",
      ideal: "ideal",
      is_default: "isDefault",
      jcb: "jcb",
      klarna: "klarna",
      konbini: "konbini",
      link: "link",
      livemode: "livemode",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      name: "name",
      nz_bank_account: "nzBankAccount",
      object: "object",
      oxxo: "oxxo",
      p24: "p24",
      parent: "parent",
      pay_by_bank: "payByBank",
      paynow: "paynow",
      paypal: "paypal",
      promptpay: "promptpay",
      revolut_pay: "revolutPay",
      satispay: "satispay",
      sepa_debit: "sepaDebit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      us_bank_account: "usBankAccount",
      wechat_pay: "wechatPay",
      zip: "zip",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodConfiguration
 */
const SchemaOut$PaymentMethodConfiguration: z.ZodType<
  External$PaymentMethodConfiguration, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodConfiguration // the object to be transformed
> = z
  .object({
    acssDebit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    active: z.boolean(),
    affirm:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    afterpayClearpay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    alipay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    alma: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    amazonPay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    applePay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    application: z.string().nullable().optional(),
    auBecsDebit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    bacsDebit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    bancontact:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    billie:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    blik: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    boleto:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    card: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    cartesBancaires:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    cashapp:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    customerBalance:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    eps: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    fpx: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    giropay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    googlePay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    grabpay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    id: z.string(),
    ideal:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    isDefault: z.boolean(),
    jcb: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    klarna:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    konbini:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    link: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    livemode: z.boolean(),
    mobilepay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    multibanco:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    name: z.string(),
    nzBankAccount:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    object: z.enum(["payment_method_configuration"]),
    oxxo: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    p24: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    parent: z.string().nullable().optional(),
    payByBank:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    paynow:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    paypal:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    promptpay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    revolutPay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    satispay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    sepaDebit:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    sofort:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    swish:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    twint:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    usBankAccount:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    wechatPay:
      Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
    zip: Schemas$PaymentMethodConfigResourcePaymentMethodProperties.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      acssDebit: "acss_debit",
      active: "active",
      affirm: "affirm",
      afterpayClearpay: "afterpay_clearpay",
      alipay: "alipay",
      alma: "alma",
      amazonPay: "amazon_pay",
      applePay: "apple_pay",
      application: "application",
      auBecsDebit: "au_becs_debit",
      bacsDebit: "bacs_debit",
      bancontact: "bancontact",
      billie: "billie",
      blik: "blik",
      boleto: "boleto",
      card: "card",
      cartesBancaires: "cartes_bancaires",
      cashapp: "cashapp",
      customerBalance: "customer_balance",
      eps: "eps",
      fpx: "fpx",
      giropay: "giropay",
      googlePay: "google_pay",
      grabpay: "grabpay",
      id: "id",
      ideal: "ideal",
      isDefault: "is_default",
      jcb: "jcb",
      klarna: "klarna",
      konbini: "konbini",
      link: "link",
      livemode: "livemode",
      mobilepay: "mobilepay",
      multibanco: "multibanco",
      name: "name",
      nzBankAccount: "nz_bank_account",
      object: "object",
      oxxo: "oxxo",
      p24: "p24",
      parent: "parent",
      payByBank: "pay_by_bank",
      paynow: "paynow",
      paypal: "paypal",
      promptpay: "promptpay",
      revolutPay: "revolut_pay",
      satispay: "satispay",
      sepaDebit: "sepa_debit",
      sofort: "sofort",
      swish: "swish",
      twint: "twint",
      usBankAccount: "us_bank_account",
      wechatPay: "wechat_pay",
      zip: "zip",
    });
  });

export const Schemas$PaymentMethodConfiguration = {
  in: SchemaIn$PaymentMethodConfiguration,
  out: SchemaOut$PaymentMethodConfiguration,
};
