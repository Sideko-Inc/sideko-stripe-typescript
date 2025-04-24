import {
  CheckoutSessionLineItems,
  External$CheckoutSessionLineItems,
  Schemas$CheckoutSessionLineItems,
} from "./checkout-session-line-items";
import {
  CheckoutSessionMetadata,
  External$CheckoutSessionMetadata,
  Schemas$CheckoutSessionMetadata,
} from "./checkout-session-metadata";
import {
  CheckoutSessionPaymentMethodOptions,
  External$CheckoutSessionPaymentMethodOptions,
  Schemas$CheckoutSessionPaymentMethodOptions,
} from "./checkout-session-payment-method-options";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import {
  External$PaymentFlowsPaymentIntentPresentmentDetails,
  PaymentFlowsPaymentIntentPresentmentDetails,
  Schemas$PaymentFlowsPaymentIntentPresentmentDetails,
} from "./payment-flows-payment-intent-presentment-details";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import {
  External$PaymentLink,
  PaymentLink,
  Schemas$PaymentLink,
} from "./payment-link";
import {
  External$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
  PaymentMethodConfigBizPaymentMethodConfigurationDetails,
  Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
} from "./payment-method-config-biz-payment-method-configuration-details";
import {
  External$PaymentPagesCheckoutSessionAdaptivePricing,
  PaymentPagesCheckoutSessionAdaptivePricing,
  Schemas$PaymentPagesCheckoutSessionAdaptivePricing,
} from "./payment-pages-checkout-session-adaptive-pricing";
import {
  External$PaymentPagesCheckoutSessionAfterExpiration,
  PaymentPagesCheckoutSessionAfterExpiration,
  Schemas$PaymentPagesCheckoutSessionAfterExpiration,
} from "./payment-pages-checkout-session-after-expiration";
import {
  External$PaymentPagesCheckoutSessionAutomaticTax,
  PaymentPagesCheckoutSessionAutomaticTax,
  Schemas$PaymentPagesCheckoutSessionAutomaticTax,
} from "./payment-pages-checkout-session-automatic-tax";
import {
  External$PaymentPagesCheckoutSessionCollectedInformation,
  PaymentPagesCheckoutSessionCollectedInformation,
  Schemas$PaymentPagesCheckoutSessionCollectedInformation,
} from "./payment-pages-checkout-session-collected-information";
import {
  External$PaymentPagesCheckoutSessionConsent,
  PaymentPagesCheckoutSessionConsent,
  Schemas$PaymentPagesCheckoutSessionConsent,
} from "./payment-pages-checkout-session-consent";
import {
  External$PaymentPagesCheckoutSessionConsentCollection,
  PaymentPagesCheckoutSessionConsentCollection,
  Schemas$PaymentPagesCheckoutSessionConsentCollection,
} from "./payment-pages-checkout-session-consent-collection";
import {
  External$PaymentPagesCheckoutSessionCurrencyConversion,
  PaymentPagesCheckoutSessionCurrencyConversion,
  Schemas$PaymentPagesCheckoutSessionCurrencyConversion,
} from "./payment-pages-checkout-session-currency-conversion";
import {
  External$PaymentPagesCheckoutSessionCustomFields,
  PaymentPagesCheckoutSessionCustomFields,
  Schemas$PaymentPagesCheckoutSessionCustomFields,
} from "./payment-pages-checkout-session-custom-fields";
import {
  External$PaymentPagesCheckoutSessionCustomText,
  PaymentPagesCheckoutSessionCustomText,
  Schemas$PaymentPagesCheckoutSessionCustomText,
} from "./payment-pages-checkout-session-custom-text";
import {
  External$PaymentPagesCheckoutSessionCustomerDetails,
  PaymentPagesCheckoutSessionCustomerDetails,
  Schemas$PaymentPagesCheckoutSessionCustomerDetails,
} from "./payment-pages-checkout-session-customer-details";
import {
  External$PaymentPagesCheckoutSessionDiscount,
  PaymentPagesCheckoutSessionDiscount,
  Schemas$PaymentPagesCheckoutSessionDiscount,
} from "./payment-pages-checkout-session-discount";
import {
  External$PaymentPagesCheckoutSessionInvoiceCreation,
  PaymentPagesCheckoutSessionInvoiceCreation,
  Schemas$PaymentPagesCheckoutSessionInvoiceCreation,
} from "./payment-pages-checkout-session-invoice-creation";
import {
  External$PaymentPagesCheckoutSessionOptionalItem,
  PaymentPagesCheckoutSessionOptionalItem,
  Schemas$PaymentPagesCheckoutSessionOptionalItem,
} from "./payment-pages-checkout-session-optional-item";
import {
  External$PaymentPagesCheckoutSessionPermissions,
  PaymentPagesCheckoutSessionPermissions,
  Schemas$PaymentPagesCheckoutSessionPermissions,
} from "./payment-pages-checkout-session-permissions";
import {
  External$PaymentPagesCheckoutSessionPhoneNumberCollection,
  PaymentPagesCheckoutSessionPhoneNumberCollection,
  Schemas$PaymentPagesCheckoutSessionPhoneNumberCollection,
} from "./payment-pages-checkout-session-phone-number-collection";
import {
  External$PaymentPagesCheckoutSessionSavedPaymentMethodOptions,
  PaymentPagesCheckoutSessionSavedPaymentMethodOptions,
  Schemas$PaymentPagesCheckoutSessionSavedPaymentMethodOptions,
} from "./payment-pages-checkout-session-saved-payment-method-options";
import {
  External$PaymentPagesCheckoutSessionShippingAddressCollection,
  PaymentPagesCheckoutSessionShippingAddressCollection,
  Schemas$PaymentPagesCheckoutSessionShippingAddressCollection,
} from "./payment-pages-checkout-session-shipping-address-collection";
import {
  External$PaymentPagesCheckoutSessionShippingCost,
  PaymentPagesCheckoutSessionShippingCost,
  Schemas$PaymentPagesCheckoutSessionShippingCost,
} from "./payment-pages-checkout-session-shipping-cost";
import {
  External$PaymentPagesCheckoutSessionShippingOption,
  PaymentPagesCheckoutSessionShippingOption,
  Schemas$PaymentPagesCheckoutSessionShippingOption,
} from "./payment-pages-checkout-session-shipping-option";
import {
  External$PaymentPagesCheckoutSessionTaxIdCollection,
  PaymentPagesCheckoutSessionTaxIdCollection,
  Schemas$PaymentPagesCheckoutSessionTaxIdCollection,
} from "./payment-pages-checkout-session-tax-id-collection";
import {
  External$PaymentPagesCheckoutSessionTotalDetails,
  PaymentPagesCheckoutSessionTotalDetails,
  Schemas$PaymentPagesCheckoutSessionTotalDetails,
} from "./payment-pages-checkout-session-total-details";
import {
  External$SetupIntent,
  Schemas$SetupIntent,
  SetupIntent,
} from "./setup-intent";
import {
  External$Subscription,
  Schemas$Subscription,
  Subscription,
} from "./subscription";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Checkout Session represents your customer's session as they pay for
 * one-time purchases or subscriptions through [Checkout](https://stripe.com/docs/payments/checkout)
 * or [Payment Links](https://stripe.com/docs/payments/payment-links). We recommend creating a
 * new Session each time your customer attempts to pay.
 *
 * Once payment is successful, the Checkout Session will contain a reference
 * to the [Customer](https://stripe.com/docs/api/customers), and either the successful
 * [PaymentIntent](https://stripe.com/docs/api/payment_intents) or an active
 * [Subscription](https://stripe.com/docs/api/subscriptions).
 *
 * You can create a Checkout Session on your server and redirect to its URL
 * to begin Checkout.
 *
 * Related guide: [Checkout quickstart](https://stripe.com/docs/checkout/quickstart)
 */
export type CheckoutSession = {
  adaptivePricing?: PaymentPagesCheckoutSessionAdaptivePricing | undefined;
  afterExpiration?: PaymentPagesCheckoutSessionAfterExpiration | undefined;
  /**
   * Enables user redeemable promotion codes.
   */
  allowPromotionCodes?: boolean | null | undefined;
  /**
   * Total of all items before discounts or taxes are applied.
   */
  amountSubtotal?: number | null | undefined;
  /**
   * Total of all items after discounts and taxes are applied.
   */
  amountTotal?: number | null | undefined;
  automaticTax: PaymentPagesCheckoutSessionAutomaticTax;
  /**
   * Describes whether Checkout should collect the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection?: ("auto" | "required") | null | undefined;
  /**
   * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website.
   */
  cancelUrl?: string | null | undefined;
  /**
   * A unique string to reference the Checkout Session. This can be a
   * customer ID, a cart ID, or similar, and can be used to reconcile the
   * Session with your internal systems.
   */
  clientReferenceId?: string | null | undefined;
  /**
   * The client secret of your Checkout Session. Applies to Checkout Sessions with `ui_mode: embedded`. Client secret to be used when initializing Stripe.js embedded checkout.
   */
  clientSecret?: string | null | undefined;
  collectedInformation?:
    | PaymentPagesCheckoutSessionCollectedInformation
    | undefined;
  consent?: PaymentPagesCheckoutSessionConsent | undefined;
  consentCollection?: PaymentPagesCheckoutSessionConsentCollection | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | null | undefined;
  currencyConversion?:
    | PaymentPagesCheckoutSessionCurrencyConversion
    | undefined;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields: PaymentPagesCheckoutSessionCustomFields[];
  customText: PaymentPagesCheckoutSessionCustomText;
  /**
   * The ID of the customer for this Session.
   * For Checkout Sessions in `subscription` mode or Checkout Sessions with `customer_creation` set as `always` in `payment` mode, Checkout
   * will create a new customer object based on information provided
   * during the payment flow unless an existing customer was provided when
   * the Session was created.
   */
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * Configure whether a Checkout Session creates a Customer when the Checkout Session completes.
   */
  customerCreation?: ("always" | "if_required") | null | undefined;
  customerDetails?: PaymentPagesCheckoutSessionCustomerDetails | undefined;
  /**
   * If provided, this value will be used when the Customer object is created.
   * If not provided, customers will be asked to enter their email address.
   * Use this parameter to prefill customer data if you already have an email
   * on file. To access information about the customer once the payment flow is
   * complete, use the `customer` attribute.
   */
  customerEmail?: string | null | undefined;
  /**
   * List of coupons and promotion codes attached to the Checkout Session.
   */
  discounts?: PaymentPagesCheckoutSessionDiscount[] | null | undefined;
  /**
   * The timestamp at which the Checkout Session will expire.
   */
  expiresAt: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * ID of the invoice created by the Checkout Session, if it exists.
   */
  invoice?: (string | Invoice) | undefined;
  invoiceCreation?: PaymentPagesCheckoutSessionInvoiceCreation | undefined;
  /**
   * The line items purchased by the customer.
   */
  lineItems?: CheckoutSessionLineItems | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
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
    | null
    | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: CheckoutSessionMetadata | null | undefined;
  /**
   * The mode of the Checkout Session.
   */
  mode: "payment" | "setup" | "subscription";
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "checkout.session";
  /**
   * The optional items presented to the customer at checkout.
   */
  optionalItems?: PaymentPagesCheckoutSessionOptionalItem[] | null | undefined;
  /**
   * The ID of the PaymentIntent for Checkout Sessions in `payment` mode. You can't confirm or cancel the PaymentIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
   */
  paymentIntent?: (string | PaymentIntent) | undefined;
  /**
   * The ID of the Payment Link that created this Session.
   */
  paymentLink?: (string | PaymentLink) | undefined;
  /**
   * Configure whether a Checkout Session should collect a payment method. Defaults to `always`.
   */
  paymentMethodCollection?: ("always" | "if_required") | null | undefined;
  paymentMethodConfigurationDetails?:
    | PaymentMethodConfigBizPaymentMethodConfigurationDetails
    | undefined;
  paymentMethodOptions?: CheckoutSessionPaymentMethodOptions | undefined;
  /**
   * A list of the types of payment methods (e.g. card) this Checkout
   * Session is allowed to accept.
   */
  paymentMethodTypes: string[];
  /**
   * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
   * You can use this value to decide when to fulfill your customer's order.
   */
  paymentStatus: "no_payment_required" | "paid" | "unpaid";
  permissions?: PaymentPagesCheckoutSessionPermissions | undefined;
  phoneNumberCollection?:
    | PaymentPagesCheckoutSessionPhoneNumberCollection
    | undefined;
  presentmentDetails?: PaymentFlowsPaymentIntentPresentmentDetails | undefined;
  /**
   * The ID of the original expired Checkout Session that triggered the recovery flow.
   */
  recoveredFrom?: string | null | undefined;
  /**
   * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
   */
  redirectOnCompletion?: ("always" | "if_required" | "never") | undefined;
  /**
   * Applies to Checkout Sessions with `ui_mode: embedded`. The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
   */
  returnUrl?: string | undefined;
  savedPaymentMethodOptions?:
    | PaymentPagesCheckoutSessionSavedPaymentMethodOptions
    | undefined;
  /**
   * The ID of the SetupIntent for Checkout Sessions in `setup` mode. You can't confirm or cancel the SetupIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
   */
  setupIntent?: (string | SetupIntent) | undefined;
  shippingAddressCollection?:
    | PaymentPagesCheckoutSessionShippingAddressCollection
    | undefined;
  shippingCost?: PaymentPagesCheckoutSessionShippingCost | undefined;
  /**
   * The shipping rate options applied to this Session.
   */
  shippingOptions: PaymentPagesCheckoutSessionShippingOption[];
  /**
   * The status of the Checkout Session, one of `open`, `complete`, or `expired`.
   */
  status?: ("complete" | "expired" | "open") | null | undefined;
  /**
   * Describes the type of transaction being performed by Checkout in order to customize
   * relevant text on the page, such as the submit button. `submit_type` can only be
   * specified on Checkout Sessions in `payment` mode. If blank or `auto`, `pay` is used.
   */
  submitType?:
    | ("auto" | "book" | "donate" | "pay" | "subscribe")
    | null
    | undefined;
  /**
   * The ID of the subscription for Checkout Sessions in `subscription` mode.
   */
  subscription?: (string | Subscription) | undefined;
  /**
   * The URL the customer will be directed to after the payment or
   * subscription creation is successful.
   */
  successUrl?: string | null | undefined;
  taxIdCollection?: PaymentPagesCheckoutSessionTaxIdCollection | undefined;
  totalDetails?: PaymentPagesCheckoutSessionTotalDetails | undefined;
  /**
   * The UI mode of the Session. Defaults to `hosted`.
   */
  uiMode?: ("custom" | "embedded" | "hosted") | null | undefined;
  /**
   * The URL to the Checkout Session. Applies to Checkout Sessions with `ui_mode: hosted`. Redirect customers to this URL to take them to Checkout. If you’re using [Custom Domains](https://stripe.com/docs/payments/checkout/custom-domains), the URL will use your subdomain. Otherwise, it’ll use `checkout.stripe.com.`
   * This value is only present when the session is active.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * CheckoutSession without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSession = {
  adaptive_pricing?:
    | External$PaymentPagesCheckoutSessionAdaptivePricing
    | undefined;
  after_expiration?:
    | External$PaymentPagesCheckoutSessionAfterExpiration
    | undefined;
  allow_promotion_codes?: boolean | null | undefined;
  amount_subtotal?: number | null | undefined;
  amount_total?: number | null | undefined;
  automatic_tax: External$PaymentPagesCheckoutSessionAutomaticTax;
  billing_address_collection?: ("auto" | "required") | null | undefined;
  cancel_url?: string | null | undefined;
  client_reference_id?: string | null | undefined;
  client_secret?: string | null | undefined;
  collected_information?:
    | External$PaymentPagesCheckoutSessionCollectedInformation
    | undefined;
  consent?: External$PaymentPagesCheckoutSessionConsent | undefined;
  consent_collection?:
    | External$PaymentPagesCheckoutSessionConsentCollection
    | undefined;
  created: number;
  currency?: string | null | undefined;
  currency_conversion?:
    | External$PaymentPagesCheckoutSessionCurrencyConversion
    | undefined;
  custom_fields: External$PaymentPagesCheckoutSessionCustomFields[];
  custom_text: External$PaymentPagesCheckoutSessionCustomText;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  customer_creation?: ("always" | "if_required") | null | undefined;
  customer_details?:
    | External$PaymentPagesCheckoutSessionCustomerDetails
    | undefined;
  customer_email?: string | null | undefined;
  discounts?: External$PaymentPagesCheckoutSessionDiscount[] | null | undefined;
  expires_at: number;
  id: string;
  invoice?: (string | External$Invoice) | undefined;
  invoice_creation?:
    | External$PaymentPagesCheckoutSessionInvoiceCreation
    | undefined;
  line_items?: External$CheckoutSessionLineItems | undefined;
  livemode: boolean;
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
    | null
    | undefined;
  metadata?: External$CheckoutSessionMetadata | null | undefined;
  mode: "payment" | "setup" | "subscription";
  object: "checkout.session";
  optional_items?:
    | External$PaymentPagesCheckoutSessionOptionalItem[]
    | null
    | undefined;
  payment_intent?: (string | External$PaymentIntent) | undefined;
  payment_link?: (string | External$PaymentLink) | undefined;
  payment_method_collection?: ("always" | "if_required") | null | undefined;
  payment_method_configuration_details?:
    | External$PaymentMethodConfigBizPaymentMethodConfigurationDetails
    | undefined;
  payment_method_options?:
    | External$CheckoutSessionPaymentMethodOptions
    | undefined;
  payment_method_types: string[];
  payment_status: "no_payment_required" | "paid" | "unpaid";
  permissions?: External$PaymentPagesCheckoutSessionPermissions | undefined;
  phone_number_collection?:
    | External$PaymentPagesCheckoutSessionPhoneNumberCollection
    | undefined;
  presentment_details?:
    | External$PaymentFlowsPaymentIntentPresentmentDetails
    | undefined;
  recovered_from?: string | null | undefined;
  redirect_on_completion?: ("always" | "if_required" | "never") | undefined;
  return_url?: string | undefined;
  saved_payment_method_options?:
    | External$PaymentPagesCheckoutSessionSavedPaymentMethodOptions
    | undefined;
  setup_intent?: (string | External$SetupIntent) | undefined;
  shipping_address_collection?:
    | External$PaymentPagesCheckoutSessionShippingAddressCollection
    | undefined;
  shipping_cost?: External$PaymentPagesCheckoutSessionShippingCost | undefined;
  shipping_options: External$PaymentPagesCheckoutSessionShippingOption[];
  status?: ("complete" | "expired" | "open") | null | undefined;
  submit_type?:
    | ("auto" | "book" | "donate" | "pay" | "subscribe")
    | null
    | undefined;
  subscription?: (string | External$Subscription) | undefined;
  success_url?: string | null | undefined;
  tax_id_collection?:
    | External$PaymentPagesCheckoutSessionTaxIdCollection
    | undefined;
  total_details?: External$PaymentPagesCheckoutSessionTotalDetails | undefined;
  ui_mode?: ("custom" | "embedded" | "hosted") | null | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSession
 */
const SchemaIn$CheckoutSession: z.ZodType<
  CheckoutSession, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adaptive_pricing:
      Schemas$PaymentPagesCheckoutSessionAdaptivePricing.in.optional(),
    after_expiration:
      Schemas$PaymentPagesCheckoutSessionAfterExpiration.in.optional(),
    allow_promotion_codes: z.boolean().nullable().optional(),
    amount_subtotal: z.number().int().nullable().optional(),
    amount_total: z.number().int().nullable().optional(),
    automatic_tax: z.lazy(
      () => Schemas$PaymentPagesCheckoutSessionAutomaticTax.in,
    ),
    billing_address_collection: z
      .enum(["auto", "required"])
      .nullable()
      .optional(),
    cancel_url: z.string().nullable().optional(),
    client_reference_id: z.string().nullable().optional(),
    client_secret: z.string().nullable().optional(),
    collected_information:
      Schemas$PaymentPagesCheckoutSessionCollectedInformation.in.optional(),
    consent: Schemas$PaymentPagesCheckoutSessionConsent.in.optional(),
    consent_collection:
      Schemas$PaymentPagesCheckoutSessionConsentCollection.in.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    currency_conversion:
      Schemas$PaymentPagesCheckoutSessionCurrencyConversion.in.optional(),
    custom_fields: z.array(Schemas$PaymentPagesCheckoutSessionCustomFields.in),
    custom_text: Schemas$PaymentPagesCheckoutSessionCustomText.in,
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    customer_creation: z.enum(["always", "if_required"]).nullable().optional(),
    customer_details:
      Schemas$PaymentPagesCheckoutSessionCustomerDetails.in.optional(),
    customer_email: z.string().nullable().optional(),
    discounts: z
      .array(z.lazy(() => Schemas$PaymentPagesCheckoutSessionDiscount.in))
      .nullable()
      .optional(),
    expires_at: z.number().int(),
    id: z.string(),
    invoice: z.union([z.string(), z.lazy(() => Schemas$Invoice.in)]).optional(),
    invoice_creation: z.lazy(() =>
      Schemas$PaymentPagesCheckoutSessionInvoiceCreation.in.optional(),
    ),
    line_items: z.lazy(() => Schemas$CheckoutSessionLineItems.in.optional()),
    livemode: z.boolean(),
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
      .nullable()
      .optional(),
    metadata: Schemas$CheckoutSessionMetadata.in.nullable().optional(),
    mode: z.enum(["payment", "setup", "subscription"]),
    object: z.enum(["checkout.session"]),
    optional_items: z
      .array(Schemas$PaymentPagesCheckoutSessionOptionalItem.in)
      .nullable()
      .optional(),
    payment_intent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.in)])
      .optional(),
    payment_link: z
      .union([z.string(), z.lazy(() => Schemas$PaymentLink.in)])
      .optional(),
    payment_method_collection: z
      .enum(["always", "if_required"])
      .nullable()
      .optional(),
    payment_method_configuration_details:
      Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails.in.optional(),
    payment_method_options:
      Schemas$CheckoutSessionPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()),
    payment_status: z.enum(["no_payment_required", "paid", "unpaid"]),
    permissions: Schemas$PaymentPagesCheckoutSessionPermissions.in.optional(),
    phone_number_collection:
      Schemas$PaymentPagesCheckoutSessionPhoneNumberCollection.in.optional(),
    presentment_details:
      Schemas$PaymentFlowsPaymentIntentPresentmentDetails.in.optional(),
    recovered_from: z.string().nullable().optional(),
    redirect_on_completion: z
      .enum(["always", "if_required", "never"])
      .optional(),
    return_url: z.string().optional(),
    saved_payment_method_options:
      Schemas$PaymentPagesCheckoutSessionSavedPaymentMethodOptions.in.optional(),
    setup_intent: z
      .union([z.string(), z.lazy(() => Schemas$SetupIntent.in)])
      .optional(),
    shipping_address_collection:
      Schemas$PaymentPagesCheckoutSessionShippingAddressCollection.in.optional(),
    shipping_cost:
      Schemas$PaymentPagesCheckoutSessionShippingCost.in.optional(),
    shipping_options: z.array(
      Schemas$PaymentPagesCheckoutSessionShippingOption.in,
    ),
    status: z.enum(["complete", "expired", "open"]).nullable().optional(),
    submit_type: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .nullable()
      .optional(),
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.in)])
      .optional(),
    success_url: z.string().nullable().optional(),
    tax_id_collection:
      Schemas$PaymentPagesCheckoutSessionTaxIdCollection.in.optional(),
    total_details: z.lazy(() =>
      Schemas$PaymentPagesCheckoutSessionTotalDetails.in.optional(),
    ),
    ui_mode: z.enum(["custom", "embedded", "hosted"]).nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adaptive_pricing: "adaptivePricing",
      after_expiration: "afterExpiration",
      allow_promotion_codes: "allowPromotionCodes",
      amount_subtotal: "amountSubtotal",
      amount_total: "amountTotal",
      automatic_tax: "automaticTax",
      billing_address_collection: "billingAddressCollection",
      cancel_url: "cancelUrl",
      client_reference_id: "clientReferenceId",
      client_secret: "clientSecret",
      collected_information: "collectedInformation",
      consent: "consent",
      consent_collection: "consentCollection",
      created: "created",
      currency: "currency",
      currency_conversion: "currencyConversion",
      custom_fields: "customFields",
      custom_text: "customText",
      customer: "customer",
      customer_creation: "customerCreation",
      customer_details: "customerDetails",
      customer_email: "customerEmail",
      discounts: "discounts",
      expires_at: "expiresAt",
      id: "id",
      invoice: "invoice",
      invoice_creation: "invoiceCreation",
      line_items: "lineItems",
      livemode: "livemode",
      locale: "locale",
      metadata: "metadata",
      mode: "mode",
      object: "object",
      optional_items: "optionalItems",
      payment_intent: "paymentIntent",
      payment_link: "paymentLink",
      payment_method_collection: "paymentMethodCollection",
      payment_method_configuration_details: "paymentMethodConfigurationDetails",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      payment_status: "paymentStatus",
      permissions: "permissions",
      phone_number_collection: "phoneNumberCollection",
      presentment_details: "presentmentDetails",
      recovered_from: "recoveredFrom",
      redirect_on_completion: "redirectOnCompletion",
      return_url: "returnUrl",
      saved_payment_method_options: "savedPaymentMethodOptions",
      setup_intent: "setupIntent",
      shipping_address_collection: "shippingAddressCollection",
      shipping_cost: "shippingCost",
      shipping_options: "shippingOptions",
      status: "status",
      submit_type: "submitType",
      subscription: "subscription",
      success_url: "successUrl",
      tax_id_collection: "taxIdCollection",
      total_details: "totalDetails",
      ui_mode: "uiMode",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSession
 */
const SchemaOut$CheckoutSession: z.ZodType<
  External$CheckoutSession, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSession // the object to be transformed
> = z
  .object({
    adaptivePricing:
      Schemas$PaymentPagesCheckoutSessionAdaptivePricing.out.optional(),
    afterExpiration:
      Schemas$PaymentPagesCheckoutSessionAfterExpiration.out.optional(),
    allowPromotionCodes: z.boolean().nullable().optional(),
    amountSubtotal: z.number().int().nullable().optional(),
    amountTotal: z.number().int().nullable().optional(),
    automaticTax: z.lazy(
      () => Schemas$PaymentPagesCheckoutSessionAutomaticTax.out,
    ),
    billingAddressCollection: z
      .enum(["auto", "required"])
      .nullable()
      .optional(),
    cancelUrl: z.string().nullable().optional(),
    clientReferenceId: z.string().nullable().optional(),
    clientSecret: z.string().nullable().optional(),
    collectedInformation:
      Schemas$PaymentPagesCheckoutSessionCollectedInformation.out.optional(),
    consent: Schemas$PaymentPagesCheckoutSessionConsent.out.optional(),
    consentCollection:
      Schemas$PaymentPagesCheckoutSessionConsentCollection.out.optional(),
    created: z.number().int(),
    currency: z.string().nullable().optional(),
    currencyConversion:
      Schemas$PaymentPagesCheckoutSessionCurrencyConversion.out.optional(),
    customFields: z.array(Schemas$PaymentPagesCheckoutSessionCustomFields.out),
    customText: Schemas$PaymentPagesCheckoutSessionCustomText.out,
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    customerCreation: z.enum(["always", "if_required"]).nullable().optional(),
    customerDetails:
      Schemas$PaymentPagesCheckoutSessionCustomerDetails.out.optional(),
    customerEmail: z.string().nullable().optional(),
    discounts: z
      .array(z.lazy(() => Schemas$PaymentPagesCheckoutSessionDiscount.out))
      .nullable()
      .optional(),
    expiresAt: z.number().int(),
    id: z.string(),
    invoice: z
      .union([z.string(), z.lazy(() => Schemas$Invoice.out)])
      .optional(),
    invoiceCreation: z.lazy(() =>
      Schemas$PaymentPagesCheckoutSessionInvoiceCreation.out.optional(),
    ),
    lineItems: z.lazy(() => Schemas$CheckoutSessionLineItems.out.optional()),
    livemode: z.boolean(),
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
      .nullable()
      .optional(),
    metadata: Schemas$CheckoutSessionMetadata.out.nullable().optional(),
    mode: z.enum(["payment", "setup", "subscription"]),
    object: z.enum(["checkout.session"]),
    optionalItems: z
      .array(Schemas$PaymentPagesCheckoutSessionOptionalItem.out)
      .nullable()
      .optional(),
    paymentIntent: z
      .union([z.string(), z.lazy(() => Schemas$PaymentIntent.out)])
      .optional(),
    paymentLink: z
      .union([z.string(), z.lazy(() => Schemas$PaymentLink.out)])
      .optional(),
    paymentMethodCollection: z
      .enum(["always", "if_required"])
      .nullable()
      .optional(),
    paymentMethodConfigurationDetails:
      Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails.out.optional(),
    paymentMethodOptions:
      Schemas$CheckoutSessionPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()),
    paymentStatus: z.enum(["no_payment_required", "paid", "unpaid"]),
    permissions: Schemas$PaymentPagesCheckoutSessionPermissions.out.optional(),
    phoneNumberCollection:
      Schemas$PaymentPagesCheckoutSessionPhoneNumberCollection.out.optional(),
    presentmentDetails:
      Schemas$PaymentFlowsPaymentIntentPresentmentDetails.out.optional(),
    recoveredFrom: z.string().nullable().optional(),
    redirectOnCompletion: z.enum(["always", "if_required", "never"]).optional(),
    returnUrl: z.string().optional(),
    savedPaymentMethodOptions:
      Schemas$PaymentPagesCheckoutSessionSavedPaymentMethodOptions.out.optional(),
    setupIntent: z
      .union([z.string(), z.lazy(() => Schemas$SetupIntent.out)])
      .optional(),
    shippingAddressCollection:
      Schemas$PaymentPagesCheckoutSessionShippingAddressCollection.out.optional(),
    shippingCost:
      Schemas$PaymentPagesCheckoutSessionShippingCost.out.optional(),
    shippingOptions: z.array(
      Schemas$PaymentPagesCheckoutSessionShippingOption.out,
    ),
    status: z.enum(["complete", "expired", "open"]).nullable().optional(),
    submitType: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .nullable()
      .optional(),
    subscription: z
      .union([z.string(), z.lazy(() => Schemas$Subscription.out)])
      .optional(),
    successUrl: z.string().nullable().optional(),
    taxIdCollection:
      Schemas$PaymentPagesCheckoutSessionTaxIdCollection.out.optional(),
    totalDetails: z.lazy(() =>
      Schemas$PaymentPagesCheckoutSessionTotalDetails.out.optional(),
    ),
    uiMode: z.enum(["custom", "embedded", "hosted"]).nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adaptivePricing: "adaptive_pricing",
      afterExpiration: "after_expiration",
      allowPromotionCodes: "allow_promotion_codes",
      amountSubtotal: "amount_subtotal",
      amountTotal: "amount_total",
      automaticTax: "automatic_tax",
      billingAddressCollection: "billing_address_collection",
      cancelUrl: "cancel_url",
      clientReferenceId: "client_reference_id",
      clientSecret: "client_secret",
      collectedInformation: "collected_information",
      consent: "consent",
      consentCollection: "consent_collection",
      created: "created",
      currency: "currency",
      currencyConversion: "currency_conversion",
      customFields: "custom_fields",
      customText: "custom_text",
      customer: "customer",
      customerCreation: "customer_creation",
      customerDetails: "customer_details",
      customerEmail: "customer_email",
      discounts: "discounts",
      expiresAt: "expires_at",
      id: "id",
      invoice: "invoice",
      invoiceCreation: "invoice_creation",
      lineItems: "line_items",
      livemode: "livemode",
      locale: "locale",
      metadata: "metadata",
      mode: "mode",
      object: "object",
      optionalItems: "optional_items",
      paymentIntent: "payment_intent",
      paymentLink: "payment_link",
      paymentMethodCollection: "payment_method_collection",
      paymentMethodConfigurationDetails: "payment_method_configuration_details",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      paymentStatus: "payment_status",
      permissions: "permissions",
      phoneNumberCollection: "phone_number_collection",
      presentmentDetails: "presentment_details",
      recoveredFrom: "recovered_from",
      redirectOnCompletion: "redirect_on_completion",
      returnUrl: "return_url",
      savedPaymentMethodOptions: "saved_payment_method_options",
      setupIntent: "setup_intent",
      shippingAddressCollection: "shipping_address_collection",
      shippingCost: "shipping_cost",
      shippingOptions: "shipping_options",
      status: "status",
      submitType: "submit_type",
      subscription: "subscription",
      successUrl: "success_url",
      taxIdCollection: "tax_id_collection",
      totalDetails: "total_details",
      uiMode: "ui_mode",
      url: "url",
    });
  });

export const Schemas$CheckoutSession = {
  in: SchemaIn$CheckoutSession,
  out: SchemaOut$CheckoutSession,
};
