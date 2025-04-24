import {
  External$PaymentLinkCreateBodyAfterCompletion,
  PaymentLinkCreateBodyAfterCompletion,
  Schemas$PaymentLinkCreateBodyAfterCompletion,
} from "./payment-link-create-body-after-completion";
import {
  External$PaymentLinkCreateBodyAutomaticTax,
  PaymentLinkCreateBodyAutomaticTax,
  Schemas$PaymentLinkCreateBodyAutomaticTax,
} from "./payment-link-create-body-automatic-tax";
import {
  External$PaymentLinkCreateBodyConsentCollection,
  PaymentLinkCreateBodyConsentCollection,
  Schemas$PaymentLinkCreateBodyConsentCollection,
} from "./payment-link-create-body-consent-collection";
import {
  External$PaymentLinkCreateBodyCustomFieldsItem,
  PaymentLinkCreateBodyCustomFieldsItem,
  Schemas$PaymentLinkCreateBodyCustomFieldsItem,
} from "./payment-link-create-body-custom-fields-item";
import {
  External$PaymentLinkCreateBodyCustomText,
  PaymentLinkCreateBodyCustomText,
  Schemas$PaymentLinkCreateBodyCustomText,
} from "./payment-link-create-body-custom-text";
import {
  External$PaymentLinkCreateBodyInvoiceCreation,
  PaymentLinkCreateBodyInvoiceCreation,
  Schemas$PaymentLinkCreateBodyInvoiceCreation,
} from "./payment-link-create-body-invoice-creation";
import {
  External$PaymentLinkCreateBodyLineItemsItem,
  PaymentLinkCreateBodyLineItemsItem,
  Schemas$PaymentLinkCreateBodyLineItemsItem,
} from "./payment-link-create-body-line-items-item";
import {
  External$PaymentLinkCreateBodyMetadata,
  PaymentLinkCreateBodyMetadata,
  Schemas$PaymentLinkCreateBodyMetadata,
} from "./payment-link-create-body-metadata";
import {
  External$PaymentLinkCreateBodyOptionalItemsItem,
  PaymentLinkCreateBodyOptionalItemsItem,
  Schemas$PaymentLinkCreateBodyOptionalItemsItem,
} from "./payment-link-create-body-optional-items-item";
import {
  External$PaymentLinkCreateBodyPaymentIntentData,
  PaymentLinkCreateBodyPaymentIntentData,
  Schemas$PaymentLinkCreateBodyPaymentIntentData,
} from "./payment-link-create-body-payment-intent-data";
import {
  External$PaymentLinkCreateBodyPhoneNumberCollection,
  PaymentLinkCreateBodyPhoneNumberCollection,
  Schemas$PaymentLinkCreateBodyPhoneNumberCollection,
} from "./payment-link-create-body-phone-number-collection";
import {
  External$PaymentLinkCreateBodyRestrictions,
  PaymentLinkCreateBodyRestrictions,
  Schemas$PaymentLinkCreateBodyRestrictions,
} from "./payment-link-create-body-restrictions";
import {
  External$PaymentLinkCreateBodyShippingAddressCollection,
  PaymentLinkCreateBodyShippingAddressCollection,
  Schemas$PaymentLinkCreateBodyShippingAddressCollection,
} from "./payment-link-create-body-shipping-address-collection";
import {
  External$PaymentLinkCreateBodyShippingOptionsItem,
  PaymentLinkCreateBodyShippingOptionsItem,
  Schemas$PaymentLinkCreateBodyShippingOptionsItem,
} from "./payment-link-create-body-shipping-options-item";
import {
  External$PaymentLinkCreateBodySubscriptionData,
  PaymentLinkCreateBodySubscriptionData,
  Schemas$PaymentLinkCreateBodySubscriptionData,
} from "./payment-link-create-body-subscription-data";
import {
  External$PaymentLinkCreateBodyTaxIdCollection,
  PaymentLinkCreateBodyTaxIdCollection,
  Schemas$PaymentLinkCreateBodyTaxIdCollection,
} from "./payment-link-create-body-tax-id-collection";
import {
  External$PaymentLinkCreateBodyTransferData,
  PaymentLinkCreateBodyTransferData,
  Schemas$PaymentLinkCreateBodyTransferData,
} from "./payment-link-create-body-transfer-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBody
 */
export type PaymentLinkCreateBody = {
  /**
   * Behavior after the purchase is complete.
   */
  afterCompletion?: PaymentLinkCreateBodyAfterCompletion | undefined;
  /**
   * Enables user redeemable promotion codes.
   */
  allowPromotionCodes?: boolean | undefined;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Can only be applied when there are no line items with recurring prices.
   */
  applicationFeeAmount?: number | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  applicationFeePercent?: number | undefined;
  /**
   * Configuration for automatic tax collection.
   */
  automaticTax?: PaymentLinkCreateBodyAutomaticTax | undefined;
  /**
   * Configuration for collecting the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection?: ("auto" | "required") | undefined;
  /**
   * Configure fields to gather active consent from customers.
   */
  consentCollection?: PaymentLinkCreateBodyConsentCollection | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies) and supported by each line item's price.
   */
  currency?: string | undefined;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields?: PaymentLinkCreateBodyCustomFieldsItem[] | undefined;
  /**
   * Display additional text for your customers using custom text.
   */
  customText?: PaymentLinkCreateBodyCustomText | undefined;
  /**
   * Configures whether [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link create a [Customer](https://stripe.com/docs/api/customers).
   */
  customerCreation?: ("always" | "if_required") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The custom message to be displayed to a customer when a payment link is no longer active.
   */
  inactiveMessage?: string | undefined;
  /**
   * Generate a post-purchase Invoice for one-time payments.
   */
  invoiceCreation?: PaymentLinkCreateBodyInvoiceCreation | undefined;
  /**
   * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
   */
  lineItems: PaymentLinkCreateBodyLineItemsItem[];
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
   */
  metadata?: PaymentLinkCreateBodyMetadata | undefined;
  /**
   * The account on behalf of which to charge.
   */
  onBehalfOf?: string | undefined;
  /**
   * A list of optional items the customer can add to their order at checkout. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
   * There is a maximum of 10 optional items allowed on a payment link, and the existing limits on the number of line items allowed on a payment link apply to the combined number of line items and optional items.
   * There is a maximum of 20 combined line items and optional items.
   */
  optionalItems?: PaymentLinkCreateBodyOptionalItemsItem[] | undefined;
  /**
   * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
   */
  paymentIntentData?: PaymentLinkCreateBodyPaymentIntentData | undefined;
  /**
   * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.
   *
   * Can only be set in `subscription` mode. Defaults to `always`.
   *
   * If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
   */
  paymentMethodCollection?: ("always" | "if_required") | undefined;
  /**
   * The list of payment method types that customers can use. If no value is passed, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods) (20+ payment methods [supported](https://stripe.com/docs/payments/payment-methods/integration-options#payment-method-product-support)).
   */
  paymentMethodTypes?:
    | (
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "billie"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "klarna"
        | "konbini"
        | "link"
        | "mobilepay"
        | "multibanco"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "paynow"
        | "paypal"
        | "pix"
        | "promptpay"
        | "satispay"
        | "sepa_debit"
        | "sofort"
        | "swish"
        | "twint"
        | "us_bank_account"
        | "wechat_pay"
        | "zip"
      )[]
    | undefined;
  /**
   * Controls phone number collection settings during checkout.
   *
   * We recommend that you review your privacy policy and check with your legal contacts.
   */
  phoneNumberCollection?:
    | PaymentLinkCreateBodyPhoneNumberCollection
    | undefined;
  /**
   * Settings that restrict the usage of a payment link.
   */
  restrictions?: PaymentLinkCreateBodyRestrictions | undefined;
  /**
   * Configuration for collecting the customer's shipping address.
   */
  shippingAddressCollection?:
    | PaymentLinkCreateBodyShippingAddressCollection
    | undefined;
  /**
   * The shipping rate options to apply to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
   */
  shippingOptions?: PaymentLinkCreateBodyShippingOptionsItem[] | undefined;
  /**
   * Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button. Changing this value will also affect the hostname in the [url](https://stripe.com/docs/api/payment_links/payment_links/object#url) property (example: `donate.stripe.com`).
   */
  submitType?: ("auto" | "book" | "donate" | "pay" | "subscribe") | undefined;
  /**
   * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
   */
  subscriptionData?: PaymentLinkCreateBodySubscriptionData | undefined;
  /**
   * Controls tax ID collection during checkout.
   */
  taxIdCollection?: PaymentLinkCreateBodyTaxIdCollection | undefined;
  /**
   * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
   */
  transferData?: PaymentLinkCreateBodyTransferData | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (PaymentLinkCreateBodyAfterCompletion | undefined)
    | (boolean | undefined)
    | (number | undefined)
    | (number | undefined)
    | (PaymentLinkCreateBodyAutomaticTax | undefined)
    | (("auto" | "required") | undefined)
    | (PaymentLinkCreateBodyConsentCollection | undefined)
    | (string | undefined)
    | (PaymentLinkCreateBodyCustomFieldsItem[] | undefined)
    | (PaymentLinkCreateBodyCustomText | undefined)
    | (("always" | "if_required") | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (PaymentLinkCreateBodyInvoiceCreation | undefined)
    | PaymentLinkCreateBodyLineItemsItem[]
    | (PaymentLinkCreateBodyMetadata | undefined)
    | (string | undefined)
    | (PaymentLinkCreateBodyOptionalItemsItem[] | undefined)
    | (PaymentLinkCreateBodyPaymentIntentData | undefined)
    | (("always" | "if_required") | undefined)
    | (
        | (
            | "affirm"
            | "afterpay_clearpay"
            | "alipay"
            | "alma"
            | "au_becs_debit"
            | "bacs_debit"
            | "bancontact"
            | "billie"
            | "blik"
            | "boleto"
            | "card"
            | "cashapp"
            | "eps"
            | "fpx"
            | "giropay"
            | "grabpay"
            | "ideal"
            | "klarna"
            | "konbini"
            | "link"
            | "mobilepay"
            | "multibanco"
            | "oxxo"
            | "p24"
            | "pay_by_bank"
            | "paynow"
            | "paypal"
            | "pix"
            | "promptpay"
            | "satispay"
            | "sepa_debit"
            | "sofort"
            | "swish"
            | "twint"
            | "us_bank_account"
            | "wechat_pay"
            | "zip"
          )[]
        | undefined
      )
    | (PaymentLinkCreateBodyPhoneNumberCollection | undefined)
    | (PaymentLinkCreateBodyRestrictions | undefined)
    | (PaymentLinkCreateBodyShippingAddressCollection | undefined)
    | (PaymentLinkCreateBodyShippingOptionsItem[] | undefined)
    | (("auto" | "book" | "donate" | "pay" | "subscribe") | undefined)
    | (PaymentLinkCreateBodySubscriptionData | undefined)
    | (PaymentLinkCreateBodyTaxIdCollection | undefined)
    | (PaymentLinkCreateBodyTransferData | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBody = {
  after_completion?: External$PaymentLinkCreateBodyAfterCompletion | undefined;
  allow_promotion_codes?: boolean | undefined;
  application_fee_amount?: number | undefined;
  application_fee_percent?: number | undefined;
  automatic_tax?: External$PaymentLinkCreateBodyAutomaticTax | undefined;
  billing_address_collection?: ("auto" | "required") | undefined;
  consent_collection?:
    | External$PaymentLinkCreateBodyConsentCollection
    | undefined;
  currency?: string | undefined;
  custom_fields?: External$PaymentLinkCreateBodyCustomFieldsItem[] | undefined;
  custom_text?: External$PaymentLinkCreateBodyCustomText | undefined;
  customer_creation?: ("always" | "if_required") | undefined;
  expand?: string[] | undefined;
  inactive_message?: string | undefined;
  invoice_creation?: External$PaymentLinkCreateBodyInvoiceCreation | undefined;
  line_items: External$PaymentLinkCreateBodyLineItemsItem[];
  metadata?: External$PaymentLinkCreateBodyMetadata | undefined;
  on_behalf_of?: string | undefined;
  optional_items?:
    | External$PaymentLinkCreateBodyOptionalItemsItem[]
    | undefined;
  payment_intent_data?:
    | External$PaymentLinkCreateBodyPaymentIntentData
    | undefined;
  payment_method_collection?: ("always" | "if_required") | undefined;
  payment_method_types?:
    | (
        | "affirm"
        | "afterpay_clearpay"
        | "alipay"
        | "alma"
        | "au_becs_debit"
        | "bacs_debit"
        | "bancontact"
        | "billie"
        | "blik"
        | "boleto"
        | "card"
        | "cashapp"
        | "eps"
        | "fpx"
        | "giropay"
        | "grabpay"
        | "ideal"
        | "klarna"
        | "konbini"
        | "link"
        | "mobilepay"
        | "multibanco"
        | "oxxo"
        | "p24"
        | "pay_by_bank"
        | "paynow"
        | "paypal"
        | "pix"
        | "promptpay"
        | "satispay"
        | "sepa_debit"
        | "sofort"
        | "swish"
        | "twint"
        | "us_bank_account"
        | "wechat_pay"
        | "zip"
      )[]
    | undefined;
  phone_number_collection?:
    | External$PaymentLinkCreateBodyPhoneNumberCollection
    | undefined;
  restrictions?: External$PaymentLinkCreateBodyRestrictions | undefined;
  shipping_address_collection?:
    | External$PaymentLinkCreateBodyShippingAddressCollection
    | undefined;
  shipping_options?:
    | External$PaymentLinkCreateBodyShippingOptionsItem[]
    | undefined;
  submit_type?: ("auto" | "book" | "donate" | "pay" | "subscribe") | undefined;
  subscription_data?:
    | External$PaymentLinkCreateBodySubscriptionData
    | undefined;
  tax_id_collection?: External$PaymentLinkCreateBodyTaxIdCollection | undefined;
  transfer_data?: External$PaymentLinkCreateBodyTransferData | undefined;

  [additionalProperty: string]:
    | (External$PaymentLinkCreateBodyAfterCompletion | undefined)
    | (boolean | undefined)
    | (number | undefined)
    | (number | undefined)
    | (External$PaymentLinkCreateBodyAutomaticTax | undefined)
    | (("auto" | "required") | undefined)
    | (External$PaymentLinkCreateBodyConsentCollection | undefined)
    | (string | undefined)
    | (External$PaymentLinkCreateBodyCustomFieldsItem[] | undefined)
    | (External$PaymentLinkCreateBodyCustomText | undefined)
    | (("always" | "if_required") | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$PaymentLinkCreateBodyInvoiceCreation | undefined)
    | External$PaymentLinkCreateBodyLineItemsItem[]
    | (External$PaymentLinkCreateBodyMetadata | undefined)
    | (string | undefined)
    | (External$PaymentLinkCreateBodyOptionalItemsItem[] | undefined)
    | (External$PaymentLinkCreateBodyPaymentIntentData | undefined)
    | (("always" | "if_required") | undefined)
    | (
        | (
            | "affirm"
            | "afterpay_clearpay"
            | "alipay"
            | "alma"
            | "au_becs_debit"
            | "bacs_debit"
            | "bancontact"
            | "billie"
            | "blik"
            | "boleto"
            | "card"
            | "cashapp"
            | "eps"
            | "fpx"
            | "giropay"
            | "grabpay"
            | "ideal"
            | "klarna"
            | "konbini"
            | "link"
            | "mobilepay"
            | "multibanco"
            | "oxxo"
            | "p24"
            | "pay_by_bank"
            | "paynow"
            | "paypal"
            | "pix"
            | "promptpay"
            | "satispay"
            | "sepa_debit"
            | "sofort"
            | "swish"
            | "twint"
            | "us_bank_account"
            | "wechat_pay"
            | "zip"
          )[]
        | undefined
      )
    | (External$PaymentLinkCreateBodyPhoneNumberCollection | undefined)
    | (External$PaymentLinkCreateBodyRestrictions | undefined)
    | (External$PaymentLinkCreateBodyShippingAddressCollection | undefined)
    | (External$PaymentLinkCreateBodyShippingOptionsItem[] | undefined)
    | (("auto" | "book" | "donate" | "pay" | "subscribe") | undefined)
    | (External$PaymentLinkCreateBodySubscriptionData | undefined)
    | (External$PaymentLinkCreateBodyTaxIdCollection | undefined)
    | (External$PaymentLinkCreateBodyTransferData | undefined)
    | External$PaymentLinkCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBody
 */
const SchemaIn$PaymentLinkCreateBody: z.ZodType<
  PaymentLinkCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    after_completion:
      Schemas$PaymentLinkCreateBodyAfterCompletion.in.optional(),
    allow_promotion_codes: z.boolean().optional(),
    application_fee_amount: z.number().int().optional(),
    application_fee_percent: z.number().optional(),
    automatic_tax: Schemas$PaymentLinkCreateBodyAutomaticTax.in.optional(),
    billing_address_collection: z.enum(["auto", "required"]).optional(),
    consent_collection:
      Schemas$PaymentLinkCreateBodyConsentCollection.in.optional(),
    currency: z.string().optional(),
    custom_fields: z
      .array(Schemas$PaymentLinkCreateBodyCustomFieldsItem.in)
      .optional(),
    custom_text: Schemas$PaymentLinkCreateBodyCustomText.in.optional(),
    customer_creation: z.enum(["always", "if_required"]).optional(),
    expand: z.array(z.string()).optional(),
    inactive_message: z.string().optional(),
    invoice_creation:
      Schemas$PaymentLinkCreateBodyInvoiceCreation.in.optional(),
    line_items: z.array(Schemas$PaymentLinkCreateBodyLineItemsItem.in),
    metadata: Schemas$PaymentLinkCreateBodyMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    optional_items: z
      .array(Schemas$PaymentLinkCreateBodyOptionalItemsItem.in)
      .optional(),
    payment_intent_data:
      Schemas$PaymentLinkCreateBodyPaymentIntentData.in.optional(),
    payment_method_collection: z.enum(["always", "if_required"]).optional(),
    payment_method_types: z
      .array(
        z.enum([
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "blik",
          "boleto",
          "card",
          "cashapp",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "klarna",
          "konbini",
          "link",
          "mobilepay",
          "multibanco",
          "oxxo",
          "p24",
          "pay_by_bank",
          "paynow",
          "paypal",
          "pix",
          "promptpay",
          "satispay",
          "sepa_debit",
          "sofort",
          "swish",
          "twint",
          "us_bank_account",
          "wechat_pay",
          "zip",
        ]),
      )
      .optional(),
    phone_number_collection:
      Schemas$PaymentLinkCreateBodyPhoneNumberCollection.in.optional(),
    restrictions: Schemas$PaymentLinkCreateBodyRestrictions.in.optional(),
    shipping_address_collection:
      Schemas$PaymentLinkCreateBodyShippingAddressCollection.in.optional(),
    shipping_options: z
      .array(Schemas$PaymentLinkCreateBodyShippingOptionsItem.in)
      .optional(),
    submit_type: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .optional(),
    subscription_data:
      Schemas$PaymentLinkCreateBodySubscriptionData.in.optional(),
    tax_id_collection:
      Schemas$PaymentLinkCreateBodyTaxIdCollection.in.optional(),
    transfer_data: Schemas$PaymentLinkCreateBodyTransferData.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      after_completion: "afterCompletion",
      allow_promotion_codes: "allowPromotionCodes",
      application_fee_amount: "applicationFeeAmount",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      billing_address_collection: "billingAddressCollection",
      consent_collection: "consentCollection",
      currency: "currency",
      custom_fields: "customFields",
      custom_text: "customText",
      customer_creation: "customerCreation",
      expand: "expand",
      inactive_message: "inactiveMessage",
      invoice_creation: "invoiceCreation",
      line_items: "lineItems",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      optional_items: "optionalItems",
      payment_intent_data: "paymentIntentData",
      payment_method_collection: "paymentMethodCollection",
      payment_method_types: "paymentMethodTypes",
      phone_number_collection: "phoneNumberCollection",
      restrictions: "restrictions",
      shipping_address_collection: "shippingAddressCollection",
      shipping_options: "shippingOptions",
      submit_type: "submitType",
      subscription_data: "subscriptionData",
      tax_id_collection: "taxIdCollection",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBody
 */
const SchemaOut$PaymentLinkCreateBody: z.ZodType<
  External$PaymentLinkCreateBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBody // the object to be transformed
> = z
  .object({
    afterCompletion:
      Schemas$PaymentLinkCreateBodyAfterCompletion.out.optional(),
    allowPromotionCodes: z.boolean().optional(),
    applicationFeeAmount: z.number().int().optional(),
    applicationFeePercent: z.number().optional(),
    automaticTax: Schemas$PaymentLinkCreateBodyAutomaticTax.out.optional(),
    billingAddressCollection: z.enum(["auto", "required"]).optional(),
    consentCollection:
      Schemas$PaymentLinkCreateBodyConsentCollection.out.optional(),
    currency: z.string().optional(),
    customFields: z
      .array(Schemas$PaymentLinkCreateBodyCustomFieldsItem.out)
      .optional(),
    customText: Schemas$PaymentLinkCreateBodyCustomText.out.optional(),
    customerCreation: z.enum(["always", "if_required"]).optional(),
    expand: z.array(z.string()).optional(),
    inactiveMessage: z.string().optional(),
    invoiceCreation:
      Schemas$PaymentLinkCreateBodyInvoiceCreation.out.optional(),
    lineItems: z.array(Schemas$PaymentLinkCreateBodyLineItemsItem.out),
    metadata: Schemas$PaymentLinkCreateBodyMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    optionalItems: z
      .array(Schemas$PaymentLinkCreateBodyOptionalItemsItem.out)
      .optional(),
    paymentIntentData:
      Schemas$PaymentLinkCreateBodyPaymentIntentData.out.optional(),
    paymentMethodCollection: z.enum(["always", "if_required"]).optional(),
    paymentMethodTypes: z
      .array(
        z.enum([
          "affirm",
          "afterpay_clearpay",
          "alipay",
          "alma",
          "au_becs_debit",
          "bacs_debit",
          "bancontact",
          "billie",
          "blik",
          "boleto",
          "card",
          "cashapp",
          "eps",
          "fpx",
          "giropay",
          "grabpay",
          "ideal",
          "klarna",
          "konbini",
          "link",
          "mobilepay",
          "multibanco",
          "oxxo",
          "p24",
          "pay_by_bank",
          "paynow",
          "paypal",
          "pix",
          "promptpay",
          "satispay",
          "sepa_debit",
          "sofort",
          "swish",
          "twint",
          "us_bank_account",
          "wechat_pay",
          "zip",
        ]),
      )
      .optional(),
    phoneNumberCollection:
      Schemas$PaymentLinkCreateBodyPhoneNumberCollection.out.optional(),
    restrictions: Schemas$PaymentLinkCreateBodyRestrictions.out.optional(),
    shippingAddressCollection:
      Schemas$PaymentLinkCreateBodyShippingAddressCollection.out.optional(),
    shippingOptions: z
      .array(Schemas$PaymentLinkCreateBodyShippingOptionsItem.out)
      .optional(),
    submitType: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .optional(),
    subscriptionData:
      Schemas$PaymentLinkCreateBodySubscriptionData.out.optional(),
    taxIdCollection:
      Schemas$PaymentLinkCreateBodyTaxIdCollection.out.optional(),
    transferData: Schemas$PaymentLinkCreateBodyTransferData.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      afterCompletion: "after_completion",
      allowPromotionCodes: "allow_promotion_codes",
      applicationFeeAmount: "application_fee_amount",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      billingAddressCollection: "billing_address_collection",
      consentCollection: "consent_collection",
      currency: "currency",
      customFields: "custom_fields",
      customText: "custom_text",
      customerCreation: "customer_creation",
      expand: "expand",
      inactiveMessage: "inactive_message",
      invoiceCreation: "invoice_creation",
      lineItems: "line_items",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      optionalItems: "optional_items",
      paymentIntentData: "payment_intent_data",
      paymentMethodCollection: "payment_method_collection",
      paymentMethodTypes: "payment_method_types",
      phoneNumberCollection: "phone_number_collection",
      restrictions: "restrictions",
      shippingAddressCollection: "shipping_address_collection",
      shippingOptions: "shipping_options",
      submitType: "submit_type",
      subscriptionData: "subscription_data",
      taxIdCollection: "tax_id_collection",
      transferData: "transfer_data",
    });
  });

export const Schemas$PaymentLinkCreateBody = {
  in: SchemaIn$PaymentLinkCreateBody,
  out: SchemaOut$PaymentLinkCreateBody,
};
