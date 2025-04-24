import { Account, External$Account, Schemas$Account } from "./account";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import {
  DeletedApplication,
  External$DeletedApplication,
  Schemas$DeletedApplication,
} from "./deleted-application";
import {
  External$PaymentLinkLineItems,
  PaymentLinkLineItems,
  Schemas$PaymentLinkLineItems,
} from "./payment-link-line-items";
import {
  External$PaymentLinkMetadata,
  PaymentLinkMetadata,
  Schemas$PaymentLinkMetadata,
} from "./payment-link-metadata";
import {
  External$PaymentLinksResourceAfterCompletion,
  PaymentLinksResourceAfterCompletion,
  Schemas$PaymentLinksResourceAfterCompletion,
} from "./payment-links-resource-after-completion";
import {
  External$PaymentLinksResourceAutomaticTax,
  PaymentLinksResourceAutomaticTax,
  Schemas$PaymentLinksResourceAutomaticTax,
} from "./payment-links-resource-automatic-tax";
import {
  External$PaymentLinksResourceConsentCollection,
  PaymentLinksResourceConsentCollection,
  Schemas$PaymentLinksResourceConsentCollection,
} from "./payment-links-resource-consent-collection";
import {
  External$PaymentLinksResourceCustomFields,
  PaymentLinksResourceCustomFields,
  Schemas$PaymentLinksResourceCustomFields,
} from "./payment-links-resource-custom-fields";
import {
  External$PaymentLinksResourceCustomText,
  PaymentLinksResourceCustomText,
  Schemas$PaymentLinksResourceCustomText,
} from "./payment-links-resource-custom-text";
import {
  External$PaymentLinksResourceInvoiceCreation,
  PaymentLinksResourceInvoiceCreation,
  Schemas$PaymentLinksResourceInvoiceCreation,
} from "./payment-links-resource-invoice-creation";
import {
  External$PaymentLinksResourceOptionalItem,
  PaymentLinksResourceOptionalItem,
  Schemas$PaymentLinksResourceOptionalItem,
} from "./payment-links-resource-optional-item";
import {
  External$PaymentLinksResourcePaymentIntentData,
  PaymentLinksResourcePaymentIntentData,
  Schemas$PaymentLinksResourcePaymentIntentData,
} from "./payment-links-resource-payment-intent-data";
import {
  External$PaymentLinksResourcePhoneNumberCollection,
  PaymentLinksResourcePhoneNumberCollection,
  Schemas$PaymentLinksResourcePhoneNumberCollection,
} from "./payment-links-resource-phone-number-collection";
import {
  External$PaymentLinksResourceRestrictions,
  PaymentLinksResourceRestrictions,
  Schemas$PaymentLinksResourceRestrictions,
} from "./payment-links-resource-restrictions";
import {
  External$PaymentLinksResourceShippingAddressCollection,
  PaymentLinksResourceShippingAddressCollection,
  Schemas$PaymentLinksResourceShippingAddressCollection,
} from "./payment-links-resource-shipping-address-collection";
import {
  External$PaymentLinksResourceShippingOption,
  PaymentLinksResourceShippingOption,
  Schemas$PaymentLinksResourceShippingOption,
} from "./payment-links-resource-shipping-option";
import {
  External$PaymentLinksResourceSubscriptionData,
  PaymentLinksResourceSubscriptionData,
  Schemas$PaymentLinksResourceSubscriptionData,
} from "./payment-links-resource-subscription-data";
import {
  External$PaymentLinksResourceTaxIdCollection,
  PaymentLinksResourceTaxIdCollection,
  Schemas$PaymentLinksResourceTaxIdCollection,
} from "./payment-links-resource-tax-id-collection";
import {
  External$PaymentLinksResourceTransferData,
  PaymentLinksResourceTransferData,
  Schemas$PaymentLinksResourceTransferData,
} from "./payment-links-resource-transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A payment link is a shareable URL that will take your customers to a hosted payment page. A payment link can be shared and used multiple times.
 *
 * When a customer opens a payment link it will open a new [checkout session](https://stripe.com/docs/api/checkout/sessions) to render the payment page. You can use [checkout session events](https://stripe.com/docs/api/events/types#event_types-checkout.session.completed) to track payments through payment links.
 *
 * Related guide: [Payment Links API](https://stripe.com/docs/payment-links)
 */
export type PaymentLink = {
  /**
   * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
   */
  active: boolean;
  afterCompletion: PaymentLinksResourceAfterCompletion;
  /**
   * Whether user redeemable promotion codes are enabled.
   */
  allowPromotionCodes: boolean;
  /**
   * The ID of the Connect application that created the Payment Link.
   */
  application?: (string | Application | DeletedApplication) | undefined;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
   */
  applicationFeeAmount?: number | null | undefined;
  /**
   * This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account.
   */
  applicationFeePercent?: number | null | undefined;
  automaticTax: PaymentLinksResourceAutomaticTax;
  /**
   * Configuration for collecting the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection: "auto" | "required";
  consentCollection?: PaymentLinksResourceConsentCollection | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields: PaymentLinksResourceCustomFields[];
  customText: PaymentLinksResourceCustomText;
  /**
   * Configuration for Customer creation during checkout.
   */
  customerCreation: "always" | "if_required";
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The custom message to be displayed to a customer when a payment link is no longer active.
   */
  inactiveMessage?: string | null | undefined;
  invoiceCreation?: PaymentLinksResourceInvoiceCreation | undefined;
  /**
   * The line items representing what is being sold.
   */
  lineItems?: PaymentLinkLineItems | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: PaymentLinkMetadata;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "payment_link";
  /**
   * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  /**
   * The optional items presented to the customer at checkout.
   */
  optionalItems?: PaymentLinksResourceOptionalItem[] | null | undefined;
  paymentIntentData?: PaymentLinksResourcePaymentIntentData | undefined;
  /**
   * Configuration for collecting a payment method during checkout. Defaults to `always`.
   */
  paymentMethodCollection: "always" | "if_required";
  /**
   * The list of payment method types that customers can use. When `null`, Stripe will dynamically show relevant payment methods you've enabled in your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
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
    | null
    | undefined;
  phoneNumberCollection: PaymentLinksResourcePhoneNumberCollection;
  restrictions?: PaymentLinksResourceRestrictions | undefined;
  shippingAddressCollection?:
    | PaymentLinksResourceShippingAddressCollection
    | undefined;
  /**
   * The shipping rate options applied to the session.
   */
  shippingOptions: PaymentLinksResourceShippingOption[];
  /**
   * Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button.
   */
  submitType: "auto" | "book" | "donate" | "pay" | "subscribe";
  subscriptionData?: PaymentLinksResourceSubscriptionData | undefined;
  taxIdCollection: PaymentLinksResourceTaxIdCollection;
  transferData?: PaymentLinksResourceTransferData | undefined;
  /**
   * The public URL that can be shared with customers.
   */
  url: string;
};

/**
 * @internal
 * PaymentLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLink = {
  active: boolean;
  after_completion: External$PaymentLinksResourceAfterCompletion;
  allow_promotion_codes: boolean;
  application?:
    | (string | External$Application | External$DeletedApplication)
    | undefined;
  application_fee_amount?: number | null | undefined;
  application_fee_percent?: number | null | undefined;
  automatic_tax: External$PaymentLinksResourceAutomaticTax;
  billing_address_collection: "auto" | "required";
  consent_collection?:
    | External$PaymentLinksResourceConsentCollection
    | undefined;
  currency: string;
  custom_fields: External$PaymentLinksResourceCustomFields[];
  custom_text: External$PaymentLinksResourceCustomText;
  customer_creation: "always" | "if_required";
  id: string;
  inactive_message?: string | null | undefined;
  invoice_creation?: External$PaymentLinksResourceInvoiceCreation | undefined;
  line_items?: External$PaymentLinkLineItems | undefined;
  livemode: boolean;
  metadata: External$PaymentLinkMetadata;
  object: "payment_link";
  on_behalf_of?: (string | External$Account) | undefined;
  optional_items?:
    | External$PaymentLinksResourceOptionalItem[]
    | null
    | undefined;
  payment_intent_data?:
    | External$PaymentLinksResourcePaymentIntentData
    | undefined;
  payment_method_collection: "always" | "if_required";
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
    | null
    | undefined;
  phone_number_collection: External$PaymentLinksResourcePhoneNumberCollection;
  restrictions?: External$PaymentLinksResourceRestrictions | undefined;
  shipping_address_collection?:
    | External$PaymentLinksResourceShippingAddressCollection
    | undefined;
  shipping_options: External$PaymentLinksResourceShippingOption[];
  submit_type: "auto" | "book" | "donate" | "pay" | "subscribe";
  subscription_data?: External$PaymentLinksResourceSubscriptionData | undefined;
  tax_id_collection: External$PaymentLinksResourceTaxIdCollection;
  transfer_data?: External$PaymentLinksResourceTransferData | undefined;
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLink
 */
const SchemaIn$PaymentLink: z.ZodType<
  PaymentLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    after_completion: Schemas$PaymentLinksResourceAfterCompletion.in,
    allow_promotion_codes: z.boolean(),
    application: z
      .union([
        z.string(),
        Schemas$Application.in,
        Schemas$DeletedApplication.in,
      ])
      .optional(),
    application_fee_amount: z.number().int().nullable().optional(),
    application_fee_percent: z.number().nullable().optional(),
    automatic_tax: z.lazy(() => Schemas$PaymentLinksResourceAutomaticTax.in),
    billing_address_collection: z.enum(["auto", "required"]),
    consent_collection:
      Schemas$PaymentLinksResourceConsentCollection.in.optional(),
    currency: z.string(),
    custom_fields: z.array(Schemas$PaymentLinksResourceCustomFields.in),
    custom_text: Schemas$PaymentLinksResourceCustomText.in,
    customer_creation: z.enum(["always", "if_required"]),
    id: z.string(),
    inactive_message: z.string().nullable().optional(),
    invoice_creation: z.lazy(() =>
      Schemas$PaymentLinksResourceInvoiceCreation.in.optional(),
    ),
    line_items: z.lazy(() => Schemas$PaymentLinkLineItems.in.optional()),
    livemode: z.boolean(),
    metadata: Schemas$PaymentLinkMetadata.in,
    object: z.enum(["payment_link"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    optional_items: z
      .array(Schemas$PaymentLinksResourceOptionalItem.in)
      .nullable()
      .optional(),
    payment_intent_data:
      Schemas$PaymentLinksResourcePaymentIntentData.in.optional(),
    payment_method_collection: z.enum(["always", "if_required"]),
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
      .nullable()
      .optional(),
    phone_number_collection:
      Schemas$PaymentLinksResourcePhoneNumberCollection.in,
    restrictions: Schemas$PaymentLinksResourceRestrictions.in.optional(),
    shipping_address_collection:
      Schemas$PaymentLinksResourceShippingAddressCollection.in.optional(),
    shipping_options: z.array(Schemas$PaymentLinksResourceShippingOption.in),
    submit_type: z.enum(["auto", "book", "donate", "pay", "subscribe"]),
    subscription_data: z.lazy(() =>
      Schemas$PaymentLinksResourceSubscriptionData.in.optional(),
    ),
    tax_id_collection: Schemas$PaymentLinksResourceTaxIdCollection.in,
    transfer_data: z.lazy(() =>
      Schemas$PaymentLinksResourceTransferData.in.optional(),
    ),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      after_completion: "afterCompletion",
      allow_promotion_codes: "allowPromotionCodes",
      application: "application",
      application_fee_amount: "applicationFeeAmount",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      billing_address_collection: "billingAddressCollection",
      consent_collection: "consentCollection",
      currency: "currency",
      custom_fields: "customFields",
      custom_text: "customText",
      customer_creation: "customerCreation",
      id: "id",
      inactive_message: "inactiveMessage",
      invoice_creation: "invoiceCreation",
      line_items: "lineItems",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
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
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLink
 */
const SchemaOut$PaymentLink: z.ZodType<
  External$PaymentLink, // output type of this zod object
  z.ZodTypeDef,
  PaymentLink // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    afterCompletion: Schemas$PaymentLinksResourceAfterCompletion.out,
    allowPromotionCodes: z.boolean(),
    application: z
      .union([
        z.string(),
        Schemas$Application.out,
        Schemas$DeletedApplication.out,
      ])
      .optional(),
    applicationFeeAmount: z.number().int().nullable().optional(),
    applicationFeePercent: z.number().nullable().optional(),
    automaticTax: z.lazy(() => Schemas$PaymentLinksResourceAutomaticTax.out),
    billingAddressCollection: z.enum(["auto", "required"]),
    consentCollection:
      Schemas$PaymentLinksResourceConsentCollection.out.optional(),
    currency: z.string(),
    customFields: z.array(Schemas$PaymentLinksResourceCustomFields.out),
    customText: Schemas$PaymentLinksResourceCustomText.out,
    customerCreation: z.enum(["always", "if_required"]),
    id: z.string(),
    inactiveMessage: z.string().nullable().optional(),
    invoiceCreation: z.lazy(() =>
      Schemas$PaymentLinksResourceInvoiceCreation.out.optional(),
    ),
    lineItems: z.lazy(() => Schemas$PaymentLinkLineItems.out.optional()),
    livemode: z.boolean(),
    metadata: Schemas$PaymentLinkMetadata.out,
    object: z.enum(["payment_link"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    optionalItems: z
      .array(Schemas$PaymentLinksResourceOptionalItem.out)
      .nullable()
      .optional(),
    paymentIntentData:
      Schemas$PaymentLinksResourcePaymentIntentData.out.optional(),
    paymentMethodCollection: z.enum(["always", "if_required"]),
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
      .nullable()
      .optional(),
    phoneNumberCollection:
      Schemas$PaymentLinksResourcePhoneNumberCollection.out,
    restrictions: Schemas$PaymentLinksResourceRestrictions.out.optional(),
    shippingAddressCollection:
      Schemas$PaymentLinksResourceShippingAddressCollection.out.optional(),
    shippingOptions: z.array(Schemas$PaymentLinksResourceShippingOption.out),
    submitType: z.enum(["auto", "book", "donate", "pay", "subscribe"]),
    subscriptionData: z.lazy(() =>
      Schemas$PaymentLinksResourceSubscriptionData.out.optional(),
    ),
    taxIdCollection: Schemas$PaymentLinksResourceTaxIdCollection.out,
    transferData: z.lazy(() =>
      Schemas$PaymentLinksResourceTransferData.out.optional(),
    ),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      afterCompletion: "after_completion",
      allowPromotionCodes: "allow_promotion_codes",
      application: "application",
      applicationFeeAmount: "application_fee_amount",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      billingAddressCollection: "billing_address_collection",
      consentCollection: "consent_collection",
      currency: "currency",
      customFields: "custom_fields",
      customText: "custom_text",
      customerCreation: "customer_creation",
      id: "id",
      inactiveMessage: "inactive_message",
      invoiceCreation: "invoice_creation",
      lineItems: "line_items",
      livemode: "livemode",
      metadata: "metadata",
      object: "object",
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
      url: "url",
    });
  });

export const Schemas$PaymentLink = {
  in: SchemaIn$PaymentLink,
  out: SchemaOut$PaymentLink,
};
