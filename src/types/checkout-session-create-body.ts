import {
  CheckoutSessionCreateBodyAdaptivePricing,
  External$CheckoutSessionCreateBodyAdaptivePricing,
  Schemas$CheckoutSessionCreateBodyAdaptivePricing,
} from "./checkout-session-create-body-adaptive-pricing";
import {
  CheckoutSessionCreateBodyAfterExpiration,
  External$CheckoutSessionCreateBodyAfterExpiration,
  Schemas$CheckoutSessionCreateBodyAfterExpiration,
} from "./checkout-session-create-body-after-expiration";
import {
  CheckoutSessionCreateBodyAutomaticTax,
  External$CheckoutSessionCreateBodyAutomaticTax,
  Schemas$CheckoutSessionCreateBodyAutomaticTax,
} from "./checkout-session-create-body-automatic-tax";
import {
  CheckoutSessionCreateBodyConsentCollection,
  External$CheckoutSessionCreateBodyConsentCollection,
  Schemas$CheckoutSessionCreateBodyConsentCollection,
} from "./checkout-session-create-body-consent-collection";
import {
  CheckoutSessionCreateBodyCustomFieldsItem,
  External$CheckoutSessionCreateBodyCustomFieldsItem,
  Schemas$CheckoutSessionCreateBodyCustomFieldsItem,
} from "./checkout-session-create-body-custom-fields-item";
import {
  CheckoutSessionCreateBodyCustomText,
  External$CheckoutSessionCreateBodyCustomText,
  Schemas$CheckoutSessionCreateBodyCustomText,
} from "./checkout-session-create-body-custom-text";
import {
  CheckoutSessionCreateBodyCustomerUpdate,
  External$CheckoutSessionCreateBodyCustomerUpdate,
  Schemas$CheckoutSessionCreateBodyCustomerUpdate,
} from "./checkout-session-create-body-customer-update";
import {
  CheckoutSessionCreateBodyDiscountsItem,
  External$CheckoutSessionCreateBodyDiscountsItem,
  Schemas$CheckoutSessionCreateBodyDiscountsItem,
} from "./checkout-session-create-body-discounts-item";
import {
  CheckoutSessionCreateBodyInvoiceCreation,
  External$CheckoutSessionCreateBodyInvoiceCreation,
  Schemas$CheckoutSessionCreateBodyInvoiceCreation,
} from "./checkout-session-create-body-invoice-creation";
import {
  CheckoutSessionCreateBodyLineItemsItem,
  External$CheckoutSessionCreateBodyLineItemsItem,
  Schemas$CheckoutSessionCreateBodyLineItemsItem,
} from "./checkout-session-create-body-line-items-item";
import {
  CheckoutSessionCreateBodyMetadata,
  External$CheckoutSessionCreateBodyMetadata,
  Schemas$CheckoutSessionCreateBodyMetadata,
} from "./checkout-session-create-body-metadata";
import {
  CheckoutSessionCreateBodyOptionalItemsItem,
  External$CheckoutSessionCreateBodyOptionalItemsItem,
  Schemas$CheckoutSessionCreateBodyOptionalItemsItem,
} from "./checkout-session-create-body-optional-items-item";
import {
  CheckoutSessionCreateBodyPaymentIntentData,
  External$CheckoutSessionCreateBodyPaymentIntentData,
  Schemas$CheckoutSessionCreateBodyPaymentIntentData,
} from "./checkout-session-create-body-payment-intent-data";
import {
  CheckoutSessionCreateBodyPaymentMethodData,
  External$CheckoutSessionCreateBodyPaymentMethodData,
  Schemas$CheckoutSessionCreateBodyPaymentMethodData,
} from "./checkout-session-create-body-payment-method-data";
import {
  CheckoutSessionCreateBodyPaymentMethodOptions,
  External$CheckoutSessionCreateBodyPaymentMethodOptions,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptions,
} from "./checkout-session-create-body-payment-method-options";
import {
  CheckoutSessionCreateBodyPermissions,
  External$CheckoutSessionCreateBodyPermissions,
  Schemas$CheckoutSessionCreateBodyPermissions,
} from "./checkout-session-create-body-permissions";
import {
  CheckoutSessionCreateBodyPhoneNumberCollection,
  External$CheckoutSessionCreateBodyPhoneNumberCollection,
  Schemas$CheckoutSessionCreateBodyPhoneNumberCollection,
} from "./checkout-session-create-body-phone-number-collection";
import {
  CheckoutSessionCreateBodySavedPaymentMethodOptions,
  External$CheckoutSessionCreateBodySavedPaymentMethodOptions,
  Schemas$CheckoutSessionCreateBodySavedPaymentMethodOptions,
} from "./checkout-session-create-body-saved-payment-method-options";
import {
  CheckoutSessionCreateBodySetupIntentData,
  External$CheckoutSessionCreateBodySetupIntentData,
  Schemas$CheckoutSessionCreateBodySetupIntentData,
} from "./checkout-session-create-body-setup-intent-data";
import {
  CheckoutSessionCreateBodyShippingAddressCollection,
  External$CheckoutSessionCreateBodyShippingAddressCollection,
  Schemas$CheckoutSessionCreateBodyShippingAddressCollection,
} from "./checkout-session-create-body-shipping-address-collection";
import {
  CheckoutSessionCreateBodyShippingOptionsItem,
  External$CheckoutSessionCreateBodyShippingOptionsItem,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItem,
} from "./checkout-session-create-body-shipping-options-item";
import {
  CheckoutSessionCreateBodySubscriptionData,
  External$CheckoutSessionCreateBodySubscriptionData,
  Schemas$CheckoutSessionCreateBodySubscriptionData,
} from "./checkout-session-create-body-subscription-data";
import {
  CheckoutSessionCreateBodyTaxIdCollection,
  External$CheckoutSessionCreateBodyTaxIdCollection,
  Schemas$CheckoutSessionCreateBodyTaxIdCollection,
} from "./checkout-session-create-body-tax-id-collection";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBody
 */
export type CheckoutSessionCreateBody = {
  /**
   * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
   */
  adaptivePricing?: CheckoutSessionCreateBodyAdaptivePricing | undefined;
  /**
   * Configure actions after a Checkout Session has expired.
   */
  afterExpiration?: CheckoutSessionCreateBodyAfterExpiration | undefined;
  /**
   * Enables user redeemable promotion codes.
   */
  allowPromotionCodes?: boolean | undefined;
  /**
   * Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions.
   */
  automaticTax?: CheckoutSessionCreateBodyAutomaticTax | undefined;
  /**
   * Specify whether Checkout should collect the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection?: ("auto" | "required") | undefined;
  /**
   * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. This parameter is not allowed if ui_mode is `embedded` or `custom`.
   */
  cancelUrl?: string | undefined;
  /**
   * A unique string to reference the Checkout Session. This can be a
   * customer ID, a cart ID, or similar, and can be used to reconcile the
   * session with your internal systems.
   */
  clientReferenceId?: string | undefined;
  /**
   * Configure fields for the Checkout Session to gather active consent from customers.
   */
  consentCollection?: CheckoutSessionCreateBodyConsentCollection | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Required in `setup` mode when `payment_method_types` is not set.
   */
  currency?: string | undefined;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields?: CheckoutSessionCreateBodyCustomFieldsItem[] | undefined;
  /**
   * Display additional text for your customers using custom text.
   */
  customText?: CheckoutSessionCreateBodyCustomText | undefined;
  /**
   * ID of an existing Customer, if one exists. In `payment` mode, the customer’s most recently saved card
   * payment method will be used to prefill the email, name, card details, and billing address
   * on the Checkout page. In `subscription` mode, the customer’s [default payment method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method)
   * will be used if it’s a card, otherwise the most recently saved card will be used. A valid billing address, billing name and billing email are required on the payment method for Checkout to prefill the customer's card details.
   *
   * If the Customer already has a valid [email](https://stripe.com/docs/api/customers/object#customer_object-email) set, the email will be prefilled and not editable in Checkout.
   * If the Customer does not have a valid `email`, Checkout will set the email entered during the session on the Customer.
   *
   * If blank for Checkout Sessions in `subscription` mode or with `customer_creation` set as `always` in `payment` mode, Checkout will create a new Customer object based on information provided during the payment flow.
   *
   * You can set [`payment_intent_data.setup_future_usage`](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-payment_intent_data-setup_future_usage) to have Checkout automatically attach the payment method to the Customer you pass in for future reuse.
   */
  customer?: string | undefined;
  /**
   * Configure whether a Checkout Session creates a [Customer](https://stripe.com/docs/api/customers) during Session confirmation.
   *
   * When a Customer is not created, you can still retrieve email, address, and other customer data entered in Checkout
   * with [customer_details](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-customer_details).
   *
   * Sessions that don't create Customers instead are grouped by [guest customers](https://stripe.com/docs/payments/checkout/guest-customers)
   * in the Dashboard. Promotion codes limited to first time customers will return invalid for these Sessions.
   *
   * Can only be set in `payment` and `setup` mode.
   */
  customerCreation?: ("always" | "if_required") | undefined;
  /**
   * If provided, this value will be used when the Customer object is created.
   * If not provided, customers will be asked to enter their email address.
   * Use this parameter to prefill customer data if you already have an email
   * on file. To access information about the customer once a session is
   * complete, use the `customer` field.
   */
  customerEmail?: string | undefined;
  /**
   * Controls what fields on Customer can be updated by the Checkout Session. Can only be provided when `customer` is provided.
   */
  customerUpdate?: CheckoutSessionCreateBodyCustomerUpdate | undefined;
  /**
   * The coupon or promotion code to apply to this Session. Currently, only up to one may be specified.
   */
  discounts?: CheckoutSessionCreateBodyDiscountsItem[] | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * The Epoch time in seconds at which the Checkout Session will expire. It can be anywhere from 30 minutes to 24 hours after Checkout Session creation. By default, this value is 24 hours from creation.
   */
  expiresAt?: number | undefined;
  /**
   * Generate a post-purchase Invoice for one-time payments.
   */
  invoiceCreation?: CheckoutSessionCreateBodyInvoiceCreation | undefined;
  /**
   * A list of items the customer is purchasing. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
   *
   * For `payment` mode, there is a maximum of 100 line items, however it is recommended to consolidate line items if there are more than a few dozen.
   *
   * For `subscription` mode, there is a maximum of 20 line items with recurring Prices and 20 line items with one-time Prices. Line items with one-time Prices will be on the initial invoice only.
   */
  lineItems?: CheckoutSessionCreateBodyLineItemsItem[] | undefined;
  /**
   * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
   */
  locale?:
    | (
        | "auto"
        | "bg"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "en-GB"
        | "es"
        | "es-419"
        | "et"
        | "fi"
        | "fil"
        | "fr"
        | "fr-CA"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "ja"
        | "ko"
        | "lt"
        | "lv"
        | "ms"
        | "mt"
        | "nb"
        | "nl"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sl"
        | "sv"
        | "th"
        | "tr"
        | "vi"
        | "zh"
        | "zh-HK"
        | "zh-TW"
      )
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: CheckoutSessionCreateBodyMetadata | undefined;
  /**
   * The mode of the Checkout Session. Pass `subscription` if the Checkout Session includes at least one recurring item.
   */
  mode?: ("payment" | "setup" | "subscription") | undefined;
  /**
   * A list of optional items the customer can add to their order at checkout. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
   *
   * There is a maximum of 10 optional items allowed on a Checkout Session, and the existing limits on the number of line items allowed on a Checkout Session apply to the combined number of line items and optional items.
   *
   * For `payment` mode, there is a maximum of 100 combined line items and optional items, however it is recommended to consolidate items if there are more than a few dozen.
   *
   * For `subscription` mode, there is a maximum of 20 line items and optional items with recurring Prices and 20 line items and optional items with one-time Prices.
   */
  optionalItems?: CheckoutSessionCreateBodyOptionalItemsItem[] | undefined;
  /**
   * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
   */
  paymentIntentData?: CheckoutSessionCreateBodyPaymentIntentData | undefined;
  /**
   * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.
   * This may occur if the Checkout Session includes a free trial or a discount.
   *
   * Can only be set in `subscription` mode. Defaults to `always`.
   *
   * If you'd like information on how to collect a payment method outside of Checkout, read the guide on configuring [subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
   */
  paymentMethodCollection?: ("always" | "if_required") | undefined;
  /**
   * The ID of the payment method configuration to use with this Checkout session.
   */
  paymentMethodConfiguration?: string | undefined;
  /**
   * This parameter allows you to set some attributes on the payment method created during a Checkout session.
   */
  paymentMethodData?: CheckoutSessionCreateBodyPaymentMethodData | undefined;
  /**
   * Payment-method-specific configuration.
   */
  paymentMethodOptions?:
    | CheckoutSessionCreateBodyPaymentMethodOptions
    | undefined;
  /**
   * A list of the types of payment methods (e.g., `card`) this Checkout Session can accept.
   *
   * You can omit this attribute to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
   * See [Dynamic Payment Methods](https://stripe.com/docs/payments/payment-methods/integration-options#using-dynamic-payment-methods) for more details.
   *
   * Read more about the supported payment methods and their requirements in our [payment
   * method details guide](/docs/payments/checkout/payment-methods).
   *
   * If multiple payment methods are passed, Checkout will dynamically reorder them to
   * prioritize the most relevant payment methods based on the customer's location and
   * other characteristics.
   */
  paymentMethodTypes?:
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
      )[]
    | undefined;
  /**
   * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object.
   *
   * For specific permissions, please refer to their dedicated subsections, such as `permissions.update.shipping_details`.
   */
  permissions?: CheckoutSessionCreateBodyPermissions | undefined;
  /**
   * Controls phone number collection settings for the session.
   *
   * We recommend that you review your privacy policy and check with your legal contacts
   * before using this feature. Learn more about [collecting phone numbers with Checkout](https://stripe.com/docs/payments/checkout/phone-numbers).
   */
  phoneNumberCollection?:
    | CheckoutSessionCreateBodyPhoneNumberCollection
    | undefined;
  /**
   * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
   */
  redirectOnCompletion?: ("always" | "if_required" | "never") | undefined;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the
   * payment method's app or site. This parameter is required if `ui_mode` is `embedded` or `custom`
   * and redirect-based payment methods are enabled on the session.
   */
  returnUrl?: string | undefined;
  /**
   * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
   */
  savedPaymentMethodOptions?:
    | CheckoutSessionCreateBodySavedPaymentMethodOptions
    | undefined;
  /**
   * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
   */
  setupIntentData?: CheckoutSessionCreateBodySetupIntentData | undefined;
  /**
   * When set, provides configuration for Checkout to collect a shipping address from a customer.
   */
  shippingAddressCollection?:
    | CheckoutSessionCreateBodyShippingAddressCollection
    | undefined;
  /**
   * The shipping rate options to apply to this Session. Up to a maximum of 5.
   */
  shippingOptions?: CheckoutSessionCreateBodyShippingOptionsItem[] | undefined;
  /**
   * Describes the type of transaction being performed by Checkout in order
   * to customize relevant text on the page, such as the submit button.
   *  `submit_type` can only be specified on Checkout Sessions in
   * `payment` or `subscription` mode. If blank or `auto`, `pay` is used.
   */
  submitType?: ("auto" | "book" | "donate" | "pay" | "subscribe") | undefined;
  /**
   * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
   */
  subscriptionData?: CheckoutSessionCreateBodySubscriptionData | undefined;
  /**
   * The URL to which Stripe should send customers when payment or setup
   * is complete.
   * This parameter is not allowed if ui_mode is `embedded` or `custom`. If you'd like to use
   * information from the successful Checkout Session on your page, read the
   * guide on [customizing your success page](https://stripe.com/docs/payments/checkout/custom-success-page).
   */
  successUrl?: string | undefined;
  /**
   * Controls tax ID collection during checkout.
   */
  taxIdCollection?: CheckoutSessionCreateBodyTaxIdCollection | undefined;
  /**
   * The UI mode of the Session. Defaults to `hosted`.
   */
  uiMode?: ("custom" | "embedded" | "hosted") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (CheckoutSessionCreateBodyAdaptivePricing | undefined)
    | (CheckoutSessionCreateBodyAfterExpiration | undefined)
    | (boolean | undefined)
    | (CheckoutSessionCreateBodyAutomaticTax | undefined)
    | (("auto" | "required") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (CheckoutSessionCreateBodyConsentCollection | undefined)
    | (string | undefined)
    | (CheckoutSessionCreateBodyCustomFieldsItem[] | undefined)
    | (CheckoutSessionCreateBodyCustomText | undefined)
    | (string | undefined)
    | (("always" | "if_required") | undefined)
    | (string | undefined)
    | (CheckoutSessionCreateBodyCustomerUpdate | undefined)
    | (CheckoutSessionCreateBodyDiscountsItem[] | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | (CheckoutSessionCreateBodyInvoiceCreation | undefined)
    | (CheckoutSessionCreateBodyLineItemsItem[] | undefined)
    | (
        | (
            | "auto"
            | "bg"
            | "cs"
            | "da"
            | "de"
            | "el"
            | "en"
            | "en-GB"
            | "es"
            | "es-419"
            | "et"
            | "fi"
            | "fil"
            | "fr"
            | "fr-CA"
            | "hr"
            | "hu"
            | "id"
            | "it"
            | "ja"
            | "ko"
            | "lt"
            | "lv"
            | "ms"
            | "mt"
            | "nb"
            | "nl"
            | "pl"
            | "pt"
            | "pt-BR"
            | "ro"
            | "ru"
            | "sk"
            | "sl"
            | "sv"
            | "th"
            | "tr"
            | "vi"
            | "zh"
            | "zh-HK"
            | "zh-TW"
          )
        | undefined
      )
    | (CheckoutSessionCreateBodyMetadata | undefined)
    | (("payment" | "setup" | "subscription") | undefined)
    | (CheckoutSessionCreateBodyOptionalItemsItem[] | undefined)
    | (CheckoutSessionCreateBodyPaymentIntentData | undefined)
    | (("always" | "if_required") | undefined)
    | (string | undefined)
    | (CheckoutSessionCreateBodyPaymentMethodData | undefined)
    | (CheckoutSessionCreateBodyPaymentMethodOptions | undefined)
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
          )[]
        | undefined
      )
    | (CheckoutSessionCreateBodyPermissions | undefined)
    | (CheckoutSessionCreateBodyPhoneNumberCollection | undefined)
    | (("always" | "if_required" | "never") | undefined)
    | (string | undefined)
    | (CheckoutSessionCreateBodySavedPaymentMethodOptions | undefined)
    | (CheckoutSessionCreateBodySetupIntentData | undefined)
    | (CheckoutSessionCreateBodyShippingAddressCollection | undefined)
    | (CheckoutSessionCreateBodyShippingOptionsItem[] | undefined)
    | (("auto" | "book" | "donate" | "pay" | "subscribe") | undefined)
    | (CheckoutSessionCreateBodySubscriptionData | undefined)
    | (string | undefined)
    | (CheckoutSessionCreateBodyTaxIdCollection | undefined)
    | (("custom" | "embedded" | "hosted") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBody = {
  adaptive_pricing?:
    | External$CheckoutSessionCreateBodyAdaptivePricing
    | undefined;
  after_expiration?:
    | External$CheckoutSessionCreateBodyAfterExpiration
    | undefined;
  allow_promotion_codes?: boolean | undefined;
  automatic_tax?: External$CheckoutSessionCreateBodyAutomaticTax | undefined;
  billing_address_collection?: ("auto" | "required") | undefined;
  cancel_url?: string | undefined;
  client_reference_id?: string | undefined;
  consent_collection?:
    | External$CheckoutSessionCreateBodyConsentCollection
    | undefined;
  currency?: string | undefined;
  custom_fields?:
    | External$CheckoutSessionCreateBodyCustomFieldsItem[]
    | undefined;
  custom_text?: External$CheckoutSessionCreateBodyCustomText | undefined;
  customer?: string | undefined;
  customer_creation?: ("always" | "if_required") | undefined;
  customer_email?: string | undefined;
  customer_update?:
    | External$CheckoutSessionCreateBodyCustomerUpdate
    | undefined;
  discounts?: External$CheckoutSessionCreateBodyDiscountsItem[] | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  invoice_creation?:
    | External$CheckoutSessionCreateBodyInvoiceCreation
    | undefined;
  line_items?: External$CheckoutSessionCreateBodyLineItemsItem[] | undefined;
  locale?:
    | (
        | "auto"
        | "bg"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "en-GB"
        | "es"
        | "es-419"
        | "et"
        | "fi"
        | "fil"
        | "fr"
        | "fr-CA"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "ja"
        | "ko"
        | "lt"
        | "lv"
        | "ms"
        | "mt"
        | "nb"
        | "nl"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sl"
        | "sv"
        | "th"
        | "tr"
        | "vi"
        | "zh"
        | "zh-HK"
        | "zh-TW"
      )
    | undefined;
  metadata?: External$CheckoutSessionCreateBodyMetadata | undefined;
  mode?: ("payment" | "setup" | "subscription") | undefined;
  optional_items?:
    | External$CheckoutSessionCreateBodyOptionalItemsItem[]
    | undefined;
  payment_intent_data?:
    | External$CheckoutSessionCreateBodyPaymentIntentData
    | undefined;
  payment_method_collection?: ("always" | "if_required") | undefined;
  payment_method_configuration?: string | undefined;
  payment_method_data?:
    | External$CheckoutSessionCreateBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$CheckoutSessionCreateBodyPaymentMethodOptions
    | undefined;
  payment_method_types?:
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
      )[]
    | undefined;
  permissions?: External$CheckoutSessionCreateBodyPermissions | undefined;
  phone_number_collection?:
    | External$CheckoutSessionCreateBodyPhoneNumberCollection
    | undefined;
  redirect_on_completion?: ("always" | "if_required" | "never") | undefined;
  return_url?: string | undefined;
  saved_payment_method_options?:
    | External$CheckoutSessionCreateBodySavedPaymentMethodOptions
    | undefined;
  setup_intent_data?:
    | External$CheckoutSessionCreateBodySetupIntentData
    | undefined;
  shipping_address_collection?:
    | External$CheckoutSessionCreateBodyShippingAddressCollection
    | undefined;
  shipping_options?:
    | External$CheckoutSessionCreateBodyShippingOptionsItem[]
    | undefined;
  submit_type?: ("auto" | "book" | "donate" | "pay" | "subscribe") | undefined;
  subscription_data?:
    | External$CheckoutSessionCreateBodySubscriptionData
    | undefined;
  success_url?: string | undefined;
  tax_id_collection?:
    | External$CheckoutSessionCreateBodyTaxIdCollection
    | undefined;
  ui_mode?: ("custom" | "embedded" | "hosted") | undefined;

  [additionalProperty: string]:
    | (External$CheckoutSessionCreateBodyAdaptivePricing | undefined)
    | (External$CheckoutSessionCreateBodyAfterExpiration | undefined)
    | (boolean | undefined)
    | (External$CheckoutSessionCreateBodyAutomaticTax | undefined)
    | (("auto" | "required") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$CheckoutSessionCreateBodyConsentCollection | undefined)
    | (string | undefined)
    | (External$CheckoutSessionCreateBodyCustomFieldsItem[] | undefined)
    | (External$CheckoutSessionCreateBodyCustomText | undefined)
    | (string | undefined)
    | (("always" | "if_required") | undefined)
    | (string | undefined)
    | (External$CheckoutSessionCreateBodyCustomerUpdate | undefined)
    | (External$CheckoutSessionCreateBodyDiscountsItem[] | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | (External$CheckoutSessionCreateBodyInvoiceCreation | undefined)
    | (External$CheckoutSessionCreateBodyLineItemsItem[] | undefined)
    | (
        | (
            | "auto"
            | "bg"
            | "cs"
            | "da"
            | "de"
            | "el"
            | "en"
            | "en-GB"
            | "es"
            | "es-419"
            | "et"
            | "fi"
            | "fil"
            | "fr"
            | "fr-CA"
            | "hr"
            | "hu"
            | "id"
            | "it"
            | "ja"
            | "ko"
            | "lt"
            | "lv"
            | "ms"
            | "mt"
            | "nb"
            | "nl"
            | "pl"
            | "pt"
            | "pt-BR"
            | "ro"
            | "ru"
            | "sk"
            | "sl"
            | "sv"
            | "th"
            | "tr"
            | "vi"
            | "zh"
            | "zh-HK"
            | "zh-TW"
          )
        | undefined
      )
    | (External$CheckoutSessionCreateBodyMetadata | undefined)
    | (("payment" | "setup" | "subscription") | undefined)
    | (External$CheckoutSessionCreateBodyOptionalItemsItem[] | undefined)
    | (External$CheckoutSessionCreateBodyPaymentIntentData | undefined)
    | (("always" | "if_required") | undefined)
    | (string | undefined)
    | (External$CheckoutSessionCreateBodyPaymentMethodData | undefined)
    | (External$CheckoutSessionCreateBodyPaymentMethodOptions | undefined)
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
          )[]
        | undefined
      )
    | (External$CheckoutSessionCreateBodyPermissions | undefined)
    | (External$CheckoutSessionCreateBodyPhoneNumberCollection | undefined)
    | (("always" | "if_required" | "never") | undefined)
    | (string | undefined)
    | (External$CheckoutSessionCreateBodySavedPaymentMethodOptions | undefined)
    | (External$CheckoutSessionCreateBodySetupIntentData | undefined)
    | (External$CheckoutSessionCreateBodyShippingAddressCollection | undefined)
    | (External$CheckoutSessionCreateBodyShippingOptionsItem[] | undefined)
    | (("auto" | "book" | "donate" | "pay" | "subscribe") | undefined)
    | (External$CheckoutSessionCreateBodySubscriptionData | undefined)
    | (string | undefined)
    | (External$CheckoutSessionCreateBodyTaxIdCollection | undefined)
    | (("custom" | "embedded" | "hosted") | undefined)
    | External$CheckoutSessionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBody
 */
const SchemaIn$CheckoutSessionCreateBody: z.ZodType<
  CheckoutSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adaptive_pricing:
      Schemas$CheckoutSessionCreateBodyAdaptivePricing.in.optional(),
    after_expiration:
      Schemas$CheckoutSessionCreateBodyAfterExpiration.in.optional(),
    allow_promotion_codes: z.boolean().optional(),
    automatic_tax: Schemas$CheckoutSessionCreateBodyAutomaticTax.in.optional(),
    billing_address_collection: z.enum(["auto", "required"]).optional(),
    cancel_url: z.string().optional(),
    client_reference_id: z.string().optional(),
    consent_collection:
      Schemas$CheckoutSessionCreateBodyConsentCollection.in.optional(),
    currency: z.string().optional(),
    custom_fields: z
      .array(Schemas$CheckoutSessionCreateBodyCustomFieldsItem.in)
      .optional(),
    custom_text: Schemas$CheckoutSessionCreateBodyCustomText.in.optional(),
    customer: z.string().optional(),
    customer_creation: z.enum(["always", "if_required"]).optional(),
    customer_email: z.string().optional(),
    customer_update:
      Schemas$CheckoutSessionCreateBodyCustomerUpdate.in.optional(),
    discounts: z
      .array(Schemas$CheckoutSessionCreateBodyDiscountsItem.in)
      .optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    invoice_creation:
      Schemas$CheckoutSessionCreateBodyInvoiceCreation.in.optional(),
    line_items: z
      .array(Schemas$CheckoutSessionCreateBodyLineItemsItem.in)
      .optional(),
    locale: z
      .enum([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-GB",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ])
      .optional(),
    metadata: Schemas$CheckoutSessionCreateBodyMetadata.in.optional(),
    mode: z.enum(["payment", "setup", "subscription"]).optional(),
    optional_items: z
      .array(Schemas$CheckoutSessionCreateBodyOptionalItemsItem.in)
      .optional(),
    payment_intent_data:
      Schemas$CheckoutSessionCreateBodyPaymentIntentData.in.optional(),
    payment_method_collection: z.enum(["always", "if_required"]).optional(),
    payment_method_configuration: z.string().optional(),
    payment_method_data:
      Schemas$CheckoutSessionCreateBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z
      .array(
        z.enum([
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
      )
      .optional(),
    permissions: Schemas$CheckoutSessionCreateBodyPermissions.in.optional(),
    phone_number_collection:
      Schemas$CheckoutSessionCreateBodyPhoneNumberCollection.in.optional(),
    redirect_on_completion: z
      .enum(["always", "if_required", "never"])
      .optional(),
    return_url: z.string().optional(),
    saved_payment_method_options:
      Schemas$CheckoutSessionCreateBodySavedPaymentMethodOptions.in.optional(),
    setup_intent_data:
      Schemas$CheckoutSessionCreateBodySetupIntentData.in.optional(),
    shipping_address_collection:
      Schemas$CheckoutSessionCreateBodyShippingAddressCollection.in.optional(),
    shipping_options: z
      .array(Schemas$CheckoutSessionCreateBodyShippingOptionsItem.in)
      .optional(),
    submit_type: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .optional(),
    subscription_data:
      Schemas$CheckoutSessionCreateBodySubscriptionData.in.optional(),
    success_url: z.string().optional(),
    tax_id_collection:
      Schemas$CheckoutSessionCreateBodyTaxIdCollection.in.optional(),
    ui_mode: z.enum(["custom", "embedded", "hosted"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      adaptive_pricing: "adaptivePricing",
      after_expiration: "afterExpiration",
      allow_promotion_codes: "allowPromotionCodes",
      automatic_tax: "automaticTax",
      billing_address_collection: "billingAddressCollection",
      cancel_url: "cancelUrl",
      client_reference_id: "clientReferenceId",
      consent_collection: "consentCollection",
      currency: "currency",
      custom_fields: "customFields",
      custom_text: "customText",
      customer: "customer",
      customer_creation: "customerCreation",
      customer_email: "customerEmail",
      customer_update: "customerUpdate",
      discounts: "discounts",
      expand: "expand",
      expires_at: "expiresAt",
      invoice_creation: "invoiceCreation",
      line_items: "lineItems",
      locale: "locale",
      metadata: "metadata",
      mode: "mode",
      optional_items: "optionalItems",
      payment_intent_data: "paymentIntentData",
      payment_method_collection: "paymentMethodCollection",
      payment_method_configuration: "paymentMethodConfiguration",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      permissions: "permissions",
      phone_number_collection: "phoneNumberCollection",
      redirect_on_completion: "redirectOnCompletion",
      return_url: "returnUrl",
      saved_payment_method_options: "savedPaymentMethodOptions",
      setup_intent_data: "setupIntentData",
      shipping_address_collection: "shippingAddressCollection",
      shipping_options: "shippingOptions",
      submit_type: "submitType",
      subscription_data: "subscriptionData",
      success_url: "successUrl",
      tax_id_collection: "taxIdCollection",
      ui_mode: "uiMode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBody
 */
const SchemaOut$CheckoutSessionCreateBody: z.ZodType<
  External$CheckoutSessionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBody // the object to be transformed
> = z
  .object({
    adaptivePricing:
      Schemas$CheckoutSessionCreateBodyAdaptivePricing.out.optional(),
    afterExpiration:
      Schemas$CheckoutSessionCreateBodyAfterExpiration.out.optional(),
    allowPromotionCodes: z.boolean().optional(),
    automaticTax: Schemas$CheckoutSessionCreateBodyAutomaticTax.out.optional(),
    billingAddressCollection: z.enum(["auto", "required"]).optional(),
    cancelUrl: z.string().optional(),
    clientReferenceId: z.string().optional(),
    consentCollection:
      Schemas$CheckoutSessionCreateBodyConsentCollection.out.optional(),
    currency: z.string().optional(),
    customFields: z
      .array(Schemas$CheckoutSessionCreateBodyCustomFieldsItem.out)
      .optional(),
    customText: Schemas$CheckoutSessionCreateBodyCustomText.out.optional(),
    customer: z.string().optional(),
    customerCreation: z.enum(["always", "if_required"]).optional(),
    customerEmail: z.string().optional(),
    customerUpdate:
      Schemas$CheckoutSessionCreateBodyCustomerUpdate.out.optional(),
    discounts: z
      .array(Schemas$CheckoutSessionCreateBodyDiscountsItem.out)
      .optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    invoiceCreation:
      Schemas$CheckoutSessionCreateBodyInvoiceCreation.out.optional(),
    lineItems: z
      .array(Schemas$CheckoutSessionCreateBodyLineItemsItem.out)
      .optional(),
    locale: z
      .enum([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-GB",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ])
      .optional(),
    metadata: Schemas$CheckoutSessionCreateBodyMetadata.out.optional(),
    mode: z.enum(["payment", "setup", "subscription"]).optional(),
    optionalItems: z
      .array(Schemas$CheckoutSessionCreateBodyOptionalItemsItem.out)
      .optional(),
    paymentIntentData:
      Schemas$CheckoutSessionCreateBodyPaymentIntentData.out.optional(),
    paymentMethodCollection: z.enum(["always", "if_required"]).optional(),
    paymentMethodConfiguration: z.string().optional(),
    paymentMethodData:
      Schemas$CheckoutSessionCreateBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z
      .array(
        z.enum([
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
      )
      .optional(),
    permissions: Schemas$CheckoutSessionCreateBodyPermissions.out.optional(),
    phoneNumberCollection:
      Schemas$CheckoutSessionCreateBodyPhoneNumberCollection.out.optional(),
    redirectOnCompletion: z.enum(["always", "if_required", "never"]).optional(),
    returnUrl: z.string().optional(),
    savedPaymentMethodOptions:
      Schemas$CheckoutSessionCreateBodySavedPaymentMethodOptions.out.optional(),
    setupIntentData:
      Schemas$CheckoutSessionCreateBodySetupIntentData.out.optional(),
    shippingAddressCollection:
      Schemas$CheckoutSessionCreateBodyShippingAddressCollection.out.optional(),
    shippingOptions: z
      .array(Schemas$CheckoutSessionCreateBodyShippingOptionsItem.out)
      .optional(),
    submitType: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .optional(),
    subscriptionData:
      Schemas$CheckoutSessionCreateBodySubscriptionData.out.optional(),
    successUrl: z.string().optional(),
    taxIdCollection:
      Schemas$CheckoutSessionCreateBodyTaxIdCollection.out.optional(),
    uiMode: z.enum(["custom", "embedded", "hosted"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      adaptivePricing: "adaptive_pricing",
      afterExpiration: "after_expiration",
      allowPromotionCodes: "allow_promotion_codes",
      automaticTax: "automatic_tax",
      billingAddressCollection: "billing_address_collection",
      cancelUrl: "cancel_url",
      clientReferenceId: "client_reference_id",
      consentCollection: "consent_collection",
      currency: "currency",
      customFields: "custom_fields",
      customText: "custom_text",
      customer: "customer",
      customerCreation: "customer_creation",
      customerEmail: "customer_email",
      customerUpdate: "customer_update",
      discounts: "discounts",
      expand: "expand",
      expiresAt: "expires_at",
      invoiceCreation: "invoice_creation",
      lineItems: "line_items",
      locale: "locale",
      metadata: "metadata",
      mode: "mode",
      optionalItems: "optional_items",
      paymentIntentData: "payment_intent_data",
      paymentMethodCollection: "payment_method_collection",
      paymentMethodConfiguration: "payment_method_configuration",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      permissions: "permissions",
      phoneNumberCollection: "phone_number_collection",
      redirectOnCompletion: "redirect_on_completion",
      returnUrl: "return_url",
      savedPaymentMethodOptions: "saved_payment_method_options",
      setupIntentData: "setup_intent_data",
      shippingAddressCollection: "shipping_address_collection",
      shippingOptions: "shipping_options",
      submitType: "submit_type",
      subscriptionData: "subscription_data",
      successUrl: "success_url",
      taxIdCollection: "tax_id_collection",
      uiMode: "ui_mode",
    });
  });

export const Schemas$CheckoutSessionCreateBody = {
  in: SchemaIn$CheckoutSessionCreateBody,
  out: SchemaOut$CheckoutSessionCreateBody,
};
