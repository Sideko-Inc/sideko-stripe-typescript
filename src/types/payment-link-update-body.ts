import {
  External$PaymentLinkUpdateBodyAfterCompletion,
  PaymentLinkUpdateBodyAfterCompletion,
  Schemas$PaymentLinkUpdateBodyAfterCompletion,
} from "./payment-link-update-body-after-completion";
import {
  External$PaymentLinkUpdateBodyAutomaticTax,
  PaymentLinkUpdateBodyAutomaticTax,
  Schemas$PaymentLinkUpdateBodyAutomaticTax,
} from "./payment-link-update-body-automatic-tax";
import {
  External$PaymentLinkUpdateBodyCustomFieldsArr0Item,
  PaymentLinkUpdateBodyCustomFieldsArr0Item,
  Schemas$PaymentLinkUpdateBodyCustomFieldsArr0Item,
} from "./payment-link-update-body-custom-fields-arr0-item";
import {
  External$PaymentLinkUpdateBodyCustomText,
  PaymentLinkUpdateBodyCustomText,
  Schemas$PaymentLinkUpdateBodyCustomText,
} from "./payment-link-update-body-custom-text";
import {
  External$PaymentLinkUpdateBodyInvoiceCreation,
  PaymentLinkUpdateBodyInvoiceCreation,
  Schemas$PaymentLinkUpdateBodyInvoiceCreation,
} from "./payment-link-update-body-invoice-creation";
import {
  External$PaymentLinkUpdateBodyLineItemsItem,
  PaymentLinkUpdateBodyLineItemsItem,
  Schemas$PaymentLinkUpdateBodyLineItemsItem,
} from "./payment-link-update-body-line-items-item";
import {
  External$PaymentLinkUpdateBodyMetadata,
  PaymentLinkUpdateBodyMetadata,
  Schemas$PaymentLinkUpdateBodyMetadata,
} from "./payment-link-update-body-metadata";
import {
  External$PaymentLinkUpdateBodyPaymentIntentData,
  PaymentLinkUpdateBodyPaymentIntentData,
  Schemas$PaymentLinkUpdateBodyPaymentIntentData,
} from "./payment-link-update-body-payment-intent-data";
import {
  External$PaymentLinkUpdateBodyPhoneNumberCollection,
  PaymentLinkUpdateBodyPhoneNumberCollection,
  Schemas$PaymentLinkUpdateBodyPhoneNumberCollection,
} from "./payment-link-update-body-phone-number-collection";
import {
  External$PaymentLinkUpdateBodyRestrictionsObj0,
  PaymentLinkUpdateBodyRestrictionsObj0,
  Schemas$PaymentLinkUpdateBodyRestrictionsObj0,
} from "./payment-link-update-body-restrictions-obj0";
import {
  External$PaymentLinkUpdateBodyShippingAddressCollectionObj0,
  PaymentLinkUpdateBodyShippingAddressCollectionObj0,
  Schemas$PaymentLinkUpdateBodyShippingAddressCollectionObj0,
} from "./payment-link-update-body-shipping-address-collection-obj0";
import {
  External$PaymentLinkUpdateBodySubscriptionData,
  PaymentLinkUpdateBodySubscriptionData,
  Schemas$PaymentLinkUpdateBodySubscriptionData,
} from "./payment-link-update-body-subscription-data";
import {
  External$PaymentLinkUpdateBodyTaxIdCollection,
  PaymentLinkUpdateBodyTaxIdCollection,
  Schemas$PaymentLinkUpdateBodyTaxIdCollection,
} from "./payment-link-update-body-tax-id-collection";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBody
 */
export type PaymentLinkUpdateBody = {
  /**
   * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
   */
  active?: boolean | undefined;
  /**
   * Behavior after the purchase is complete.
   */
  afterCompletion?: PaymentLinkUpdateBodyAfterCompletion | undefined;
  /**
   * Enables user redeemable promotion codes.
   */
  allowPromotionCodes?: boolean | undefined;
  /**
   * Configuration for automatic tax collection.
   */
  automaticTax?: PaymentLinkUpdateBodyAutomaticTax | undefined;
  /**
   * Configuration for collecting the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection?: ("auto" | "required") | undefined;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields?:
    | (PaymentLinkUpdateBodyCustomFieldsArr0Item[] | string)
    | undefined;
  /**
   * Display additional text for your customers using custom text.
   */
  customText?: PaymentLinkUpdateBodyCustomText | undefined;
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
  inactiveMessage?: (string | string) | undefined;
  /**
   * Generate a post-purchase Invoice for one-time payments.
   */
  invoiceCreation?: PaymentLinkUpdateBodyInvoiceCreation | undefined;
  /**
   * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
   */
  lineItems?: PaymentLinkUpdateBodyLineItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
   */
  metadata?: PaymentLinkUpdateBodyMetadata | undefined;
  /**
   * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
   */
  paymentIntentData?: PaymentLinkUpdateBodyPaymentIntentData | undefined;
  /**
   * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.
   *
   * Can only be set in `subscription` mode. Defaults to `always`.
   *
   * If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
   */
  paymentMethodCollection?: ("always" | "if_required") | undefined;
  /**
   * The list of payment method types that customers can use. Pass an empty string to enable dynamic payment methods that use your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?:
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
        | string
      )
    | undefined;
  /**
   * Controls phone number collection settings during checkout.
   *
   * We recommend that you review your privacy policy and check with your legal contacts.
   */
  phoneNumberCollection?:
    | PaymentLinkUpdateBodyPhoneNumberCollection
    | undefined;
  /**
   * Settings that restrict the usage of a payment link.
   */
  restrictions?: (PaymentLinkUpdateBodyRestrictionsObj0 | string) | undefined;
  /**
   * Configuration for collecting the customer's shipping address.
   */
  shippingAddressCollection?:
    | (PaymentLinkUpdateBodyShippingAddressCollectionObj0 | string)
    | undefined;
  /**
   * Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button. Changing this value will also affect the hostname in the [url](https://stripe.com/docs/api/payment_links/payment_links/object#url) property (example: `donate.stripe.com`).
   */
  submitType?: ("auto" | "book" | "donate" | "pay" | "subscribe") | undefined;
  /**
   * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
   */
  subscriptionData?: PaymentLinkUpdateBodySubscriptionData | undefined;
  /**
   * Controls tax ID collection during checkout.
   */
  taxIdCollection?: PaymentLinkUpdateBodyTaxIdCollection | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (PaymentLinkUpdateBodyAfterCompletion | undefined)
    | (boolean | undefined)
    | (PaymentLinkUpdateBodyAutomaticTax | undefined)
    | (("auto" | "required") | undefined)
    | ((PaymentLinkUpdateBodyCustomFieldsArr0Item[] | string) | undefined)
    | (PaymentLinkUpdateBodyCustomText | undefined)
    | (("always" | "if_required") | undefined)
    | (string[] | undefined)
    | ((string | string) | undefined)
    | (PaymentLinkUpdateBodyInvoiceCreation | undefined)
    | (PaymentLinkUpdateBodyLineItemsItem[] | undefined)
    | (PaymentLinkUpdateBodyMetadata | undefined)
    | (PaymentLinkUpdateBodyPaymentIntentData | undefined)
    | (("always" | "if_required") | undefined)
    | (
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
            | string
          )
        | undefined
      )
    | (PaymentLinkUpdateBodyPhoneNumberCollection | undefined)
    | ((PaymentLinkUpdateBodyRestrictionsObj0 | string) | undefined)
    | (
        | (PaymentLinkUpdateBodyShippingAddressCollectionObj0 | string)
        | undefined
      )
    | (("auto" | "book" | "donate" | "pay" | "subscribe") | undefined)
    | (PaymentLinkUpdateBodySubscriptionData | undefined)
    | (PaymentLinkUpdateBodyTaxIdCollection | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBody = {
  active?: boolean | undefined;
  after_completion?: External$PaymentLinkUpdateBodyAfterCompletion | undefined;
  allow_promotion_codes?: boolean | undefined;
  automatic_tax?: External$PaymentLinkUpdateBodyAutomaticTax | undefined;
  billing_address_collection?: ("auto" | "required") | undefined;
  custom_fields?:
    | (External$PaymentLinkUpdateBodyCustomFieldsArr0Item[] | string)
    | undefined;
  custom_text?: External$PaymentLinkUpdateBodyCustomText | undefined;
  customer_creation?: ("always" | "if_required") | undefined;
  expand?: string[] | undefined;
  inactive_message?: (string | string) | undefined;
  invoice_creation?: External$PaymentLinkUpdateBodyInvoiceCreation | undefined;
  line_items?: External$PaymentLinkUpdateBodyLineItemsItem[] | undefined;
  metadata?: External$PaymentLinkUpdateBodyMetadata | undefined;
  payment_intent_data?:
    | External$PaymentLinkUpdateBodyPaymentIntentData
    | undefined;
  payment_method_collection?: ("always" | "if_required") | undefined;
  payment_method_types?:
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
        | string
      )
    | undefined;
  phone_number_collection?:
    | External$PaymentLinkUpdateBodyPhoneNumberCollection
    | undefined;
  restrictions?:
    | (External$PaymentLinkUpdateBodyRestrictionsObj0 | string)
    | undefined;
  shipping_address_collection?:
    | (External$PaymentLinkUpdateBodyShippingAddressCollectionObj0 | string)
    | undefined;
  submit_type?: ("auto" | "book" | "donate" | "pay" | "subscribe") | undefined;
  subscription_data?:
    | External$PaymentLinkUpdateBodySubscriptionData
    | undefined;
  tax_id_collection?: External$PaymentLinkUpdateBodyTaxIdCollection | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (External$PaymentLinkUpdateBodyAfterCompletion | undefined)
    | (boolean | undefined)
    | (External$PaymentLinkUpdateBodyAutomaticTax | undefined)
    | (("auto" | "required") | undefined)
    | (
        | (External$PaymentLinkUpdateBodyCustomFieldsArr0Item[] | string)
        | undefined
      )
    | (External$PaymentLinkUpdateBodyCustomText | undefined)
    | (("always" | "if_required") | undefined)
    | (string[] | undefined)
    | ((string | string) | undefined)
    | (External$PaymentLinkUpdateBodyInvoiceCreation | undefined)
    | (External$PaymentLinkUpdateBodyLineItemsItem[] | undefined)
    | (External$PaymentLinkUpdateBodyMetadata | undefined)
    | (External$PaymentLinkUpdateBodyPaymentIntentData | undefined)
    | (("always" | "if_required") | undefined)
    | (
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
            | string
          )
        | undefined
      )
    | (External$PaymentLinkUpdateBodyPhoneNumberCollection | undefined)
    | ((External$PaymentLinkUpdateBodyRestrictionsObj0 | string) | undefined)
    | (
        | (External$PaymentLinkUpdateBodyShippingAddressCollectionObj0 | string)
        | undefined
      )
    | (("auto" | "book" | "donate" | "pay" | "subscribe") | undefined)
    | (External$PaymentLinkUpdateBodySubscriptionData | undefined)
    | (External$PaymentLinkUpdateBodyTaxIdCollection | undefined)
    | External$PaymentLinkUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBody
 */
const SchemaIn$PaymentLinkUpdateBody: z.ZodType<
  PaymentLinkUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    after_completion:
      Schemas$PaymentLinkUpdateBodyAfterCompletion.in.optional(),
    allow_promotion_codes: z.boolean().optional(),
    automatic_tax: Schemas$PaymentLinkUpdateBodyAutomaticTax.in.optional(),
    billing_address_collection: z.enum(["auto", "required"]).optional(),
    custom_fields: z
      .union([
        z.array(Schemas$PaymentLinkUpdateBodyCustomFieldsArr0Item.in),
        z.string(),
      ])
      .optional(),
    custom_text: Schemas$PaymentLinkUpdateBodyCustomText.in.optional(),
    customer_creation: z.enum(["always", "if_required"]).optional(),
    expand: z.array(z.string()).optional(),
    inactive_message: z.union([z.string(), z.string()]).optional(),
    invoice_creation:
      Schemas$PaymentLinkUpdateBodyInvoiceCreation.in.optional(),
    line_items: z
      .array(Schemas$PaymentLinkUpdateBodyLineItemsItem.in)
      .optional(),
    metadata: Schemas$PaymentLinkUpdateBodyMetadata.in.optional(),
    payment_intent_data:
      Schemas$PaymentLinkUpdateBodyPaymentIntentData.in.optional(),
    payment_method_collection: z.enum(["always", "if_required"]).optional(),
    payment_method_types: z
      .union([
        z.array(
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
        ),
        z.string(),
      ])
      .optional(),
    phone_number_collection:
      Schemas$PaymentLinkUpdateBodyPhoneNumberCollection.in.optional(),
    restrictions: z
      .union([Schemas$PaymentLinkUpdateBodyRestrictionsObj0.in, z.string()])
      .optional(),
    shipping_address_collection: z
      .union([
        Schemas$PaymentLinkUpdateBodyShippingAddressCollectionObj0.in,
        z.string(),
      ])
      .optional(),
    submit_type: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .optional(),
    subscription_data:
      Schemas$PaymentLinkUpdateBodySubscriptionData.in.optional(),
    tax_id_collection:
      Schemas$PaymentLinkUpdateBodyTaxIdCollection.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      after_completion: "afterCompletion",
      allow_promotion_codes: "allowPromotionCodes",
      automatic_tax: "automaticTax",
      billing_address_collection: "billingAddressCollection",
      custom_fields: "customFields",
      custom_text: "customText",
      customer_creation: "customerCreation",
      expand: "expand",
      inactive_message: "inactiveMessage",
      invoice_creation: "invoiceCreation",
      line_items: "lineItems",
      metadata: "metadata",
      payment_intent_data: "paymentIntentData",
      payment_method_collection: "paymentMethodCollection",
      payment_method_types: "paymentMethodTypes",
      phone_number_collection: "phoneNumberCollection",
      restrictions: "restrictions",
      shipping_address_collection: "shippingAddressCollection",
      submit_type: "submitType",
      subscription_data: "subscriptionData",
      tax_id_collection: "taxIdCollection",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBody
 */
const SchemaOut$PaymentLinkUpdateBody: z.ZodType<
  External$PaymentLinkUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    afterCompletion:
      Schemas$PaymentLinkUpdateBodyAfterCompletion.out.optional(),
    allowPromotionCodes: z.boolean().optional(),
    automaticTax: Schemas$PaymentLinkUpdateBodyAutomaticTax.out.optional(),
    billingAddressCollection: z.enum(["auto", "required"]).optional(),
    customFields: z
      .union([
        z.array(Schemas$PaymentLinkUpdateBodyCustomFieldsArr0Item.out),
        z.string(),
      ])
      .optional(),
    customText: Schemas$PaymentLinkUpdateBodyCustomText.out.optional(),
    customerCreation: z.enum(["always", "if_required"]).optional(),
    expand: z.array(z.string()).optional(),
    inactiveMessage: z.union([z.string(), z.string()]).optional(),
    invoiceCreation:
      Schemas$PaymentLinkUpdateBodyInvoiceCreation.out.optional(),
    lineItems: z
      .array(Schemas$PaymentLinkUpdateBodyLineItemsItem.out)
      .optional(),
    metadata: Schemas$PaymentLinkUpdateBodyMetadata.out.optional(),
    paymentIntentData:
      Schemas$PaymentLinkUpdateBodyPaymentIntentData.out.optional(),
    paymentMethodCollection: z.enum(["always", "if_required"]).optional(),
    paymentMethodTypes: z
      .union([
        z.array(
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
        ),
        z.string(),
      ])
      .optional(),
    phoneNumberCollection:
      Schemas$PaymentLinkUpdateBodyPhoneNumberCollection.out.optional(),
    restrictions: z
      .union([Schemas$PaymentLinkUpdateBodyRestrictionsObj0.out, z.string()])
      .optional(),
    shippingAddressCollection: z
      .union([
        Schemas$PaymentLinkUpdateBodyShippingAddressCollectionObj0.out,
        z.string(),
      ])
      .optional(),
    submitType: z
      .enum(["auto", "book", "donate", "pay", "subscribe"])
      .optional(),
    subscriptionData:
      Schemas$PaymentLinkUpdateBodySubscriptionData.out.optional(),
    taxIdCollection:
      Schemas$PaymentLinkUpdateBodyTaxIdCollection.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      afterCompletion: "after_completion",
      allowPromotionCodes: "allow_promotion_codes",
      automaticTax: "automatic_tax",
      billingAddressCollection: "billing_address_collection",
      customFields: "custom_fields",
      customText: "custom_text",
      customerCreation: "customer_creation",
      expand: "expand",
      inactiveMessage: "inactive_message",
      invoiceCreation: "invoice_creation",
      lineItems: "line_items",
      metadata: "metadata",
      paymentIntentData: "payment_intent_data",
      paymentMethodCollection: "payment_method_collection",
      paymentMethodTypes: "payment_method_types",
      phoneNumberCollection: "phone_number_collection",
      restrictions: "restrictions",
      shippingAddressCollection: "shipping_address_collection",
      submitType: "submit_type",
      subscriptionData: "subscription_data",
      taxIdCollection: "tax_id_collection",
    });
  });

export const Schemas$PaymentLinkUpdateBody = {
  in: SchemaIn$PaymentLinkUpdateBody,
  out: SchemaOut$PaymentLinkUpdateBody,
};
