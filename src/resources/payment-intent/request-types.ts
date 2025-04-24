import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$PaymentIntentApplyCustomerBalanceBody,
  PaymentIntentApplyCustomerBalanceBody,
  Schemas$PaymentIntentApplyCustomerBalanceBody,
} from "@sideko-inc/stripe/types/payment-intent-apply-customer-balance-body";
import {
  External$PaymentIntentCancelBody,
  PaymentIntentCancelBody,
  Schemas$PaymentIntentCancelBody,
} from "@sideko-inc/stripe/types/payment-intent-cancel-body";
import {
  External$PaymentIntentCaptureBody,
  PaymentIntentCaptureBody,
  Schemas$PaymentIntentCaptureBody,
} from "@sideko-inc/stripe/types/payment-intent-capture-body";
import {
  External$PaymentIntentConfirmBody,
  PaymentIntentConfirmBody,
  Schemas$PaymentIntentConfirmBody,
} from "@sideko-inc/stripe/types/payment-intent-confirm-body";
import {
  External$PaymentIntentCreateBodyAutomaticPaymentMethods,
  PaymentIntentCreateBodyAutomaticPaymentMethods,
  Schemas$PaymentIntentCreateBodyAutomaticPaymentMethods,
} from "@sideko-inc/stripe/types/payment-intent-create-body-automatic-payment-methods";
import {
  External$PaymentIntentCreateBodyMandateDataObj0,
  PaymentIntentCreateBodyMandateDataObj0,
  Schemas$PaymentIntentCreateBodyMandateDataObj0,
} from "@sideko-inc/stripe/types/payment-intent-create-body-mandate-data-obj0";
import {
  External$PaymentIntentCreateBodyMetadata,
  PaymentIntentCreateBodyMetadata,
  Schemas$PaymentIntentCreateBodyMetadata,
} from "@sideko-inc/stripe/types/payment-intent-create-body-metadata";
import {
  External$PaymentIntentCreateBodyPaymentMethodData,
  PaymentIntentCreateBodyPaymentMethodData,
  Schemas$PaymentIntentCreateBodyPaymentMethodData,
} from "@sideko-inc/stripe/types/payment-intent-create-body-payment-method-data";
import {
  External$PaymentIntentCreateBodyPaymentMethodOptions,
  PaymentIntentCreateBodyPaymentMethodOptions,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptions,
} from "@sideko-inc/stripe/types/payment-intent-create-body-payment-method-options";
import {
  External$PaymentIntentCreateBodyRadarOptions,
  PaymentIntentCreateBodyRadarOptions,
  Schemas$PaymentIntentCreateBodyRadarOptions,
} from "@sideko-inc/stripe/types/payment-intent-create-body-radar-options";
import {
  External$PaymentIntentCreateBodyShipping,
  PaymentIntentCreateBodyShipping,
  Schemas$PaymentIntentCreateBodyShipping,
} from "@sideko-inc/stripe/types/payment-intent-create-body-shipping";
import {
  External$PaymentIntentCreateBodyTransferData,
  PaymentIntentCreateBodyTransferData,
  Schemas$PaymentIntentCreateBodyTransferData,
} from "@sideko-inc/stripe/types/payment-intent-create-body-transfer-data";
import {
  External$PaymentIntentIncrementAuthorizationBodyMetadata,
  PaymentIntentIncrementAuthorizationBodyMetadata,
  Schemas$PaymentIntentIncrementAuthorizationBodyMetadata,
} from "@sideko-inc/stripe/types/payment-intent-increment-authorization-body-metadata";
import {
  External$PaymentIntentIncrementAuthorizationBodyTransferData,
  PaymentIntentIncrementAuthorizationBodyTransferData,
  Schemas$PaymentIntentIncrementAuthorizationBodyTransferData,
} from "@sideko-inc/stripe/types/payment-intent-increment-authorization-body-transfer-data";
import {
  External$PaymentIntentListCreatedObj0,
  PaymentIntentListCreatedObj0,
  Schemas$PaymentIntentListCreatedObj0,
} from "@sideko-inc/stripe/types/payment-intent-list-created-obj0";
import {
  External$PaymentIntentUpdateBody,
  PaymentIntentUpdateBody,
  Schemas$PaymentIntentUpdateBody,
} from "@sideko-inc/stripe/types/payment-intent-update-body";
import {
  External$PaymentIntentVerifyMicrodepositsBody,
  PaymentIntentVerifyMicrodepositsBody,
  Schemas$PaymentIntentVerifyMicrodepositsBody,
} from "@sideko-inc/stripe/types/payment-intent-verify-microdeposits-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.
   */
  created?: (PaymentIntentListCreatedObj0 | number) | undefined;
  /**
   * Only return PaymentIntents for the customer that this customer ID specifies.
   */
  customer?: string | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$PaymentIntentListCreatedObj0 | number) | undefined;
  customer?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z
      .union([Schemas$PaymentIntentListCreatedObj0.in, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    created: z
      .union([Schemas$PaymentIntentListCreatedObj0.out, z.number().int()])
      .optional(),
    customer: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer: "customer",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * SearchRequest
 */
export type SearchRequest = {
  /**
   * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).
   */
  query: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
   */
  page?: string | undefined;
};

/**
 * @internal
 * SearchRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SearchRequest = {
  query: string;
  expand?: string[] | undefined;
  limit?: number | undefined;
  page?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SearchRequest
 */
const SchemaIn$SearchRequest: z.ZodType<
  SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SearchRequest
 */
const SchemaOut$SearchRequest: z.ZodType<
  External$SearchRequest, // output type of this zod object
  z.ZodTypeDef,
  SearchRequest // the object to be transformed
> = z
  .object({
    query: z.string(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    page: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      query: "query",
      expand: "expand",
      limit: "limit",
      page: "page",
    });
  });

export const Schemas$SearchRequest = {
  in: SchemaIn$SearchRequest,
  out: SchemaOut$SearchRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  intent: string;
  /**
   * The client secret of the PaymentIntent. We require it if you use a publishable key to retrieve the source.
   */
  clientSecret?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  intent: string;
  client_secret?: string | undefined;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    intent: z.string(),
    client_secret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      intent: "intent",
      client_secret: "clientSecret",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    intent: z.string(),
    clientSecret: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      intent: "intent",
      clientSecret: "client_secret",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount: number;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * When you enable this parameter, this PaymentIntent accepts payment methods that you enable in the Dashboard and that are compatible with this PaymentIntent's other parameters.
   */
  automaticPaymentMethods?:
    | PaymentIntentCreateBodyAutomaticPaymentMethods
    | undefined;
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: ("automatic" | "automatic_async" | "manual") | undefined;
  /**
   * Set to `true` to attempt to [confirm this PaymentIntent](https://stripe.com/docs/api/payment_intents/confirm) immediately. This parameter defaults to `false`. When creating and confirming a PaymentIntent at the same time, you can also provide the parameters available in the [Confirm API](https://stripe.com/docs/api/payment_intents/confirm).
   */
  confirm?: boolean | undefined;
  /**
   * Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment.
   */
  confirmationMethod?: ("automatic" | "manual") | undefined;
  /**
   * ID of the ConfirmationToken used to confirm this PaymentIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the Customer this PaymentIntent belongs to, if one exists.
   *
   * Payment methods attached to other Customers cannot be used with this PaymentIntent.
   *
   * If [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) is set and this PaymentIntent's payment method is not `card_present`, then the payment method attaches to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete. If the payment method is `card_present` and isn't a digital wallet, then a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card is created and attached to the Customer instead.
   */
  customer?: string | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. Use this parameter for simpler integrations that don't handle customer actions, such as [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  errorOnRequiresAction?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * ID of the mandate that's used for this payment. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  mandate?: string | undefined;
  /**
   * This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  mandateData?: (PaymentIntentCreateBodyMandateDataObj0 | string) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PaymentIntentCreateBodyMetadata | undefined;
  /**
   * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  offSession?: (boolean | ("one_off" | "recurring")) | undefined;
  /**
   * The Stripe account ID that these funds are intended for. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  onBehalfOf?: string | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
   *
   * If you omit this parameter with `confirm=true`, `customer.default_source` attaches as this PaymentIntent's payment instrument to improve migration for users of the Charges API. We recommend that you explicitly provide the `payment_method` moving forward.
   */
  paymentMethod?: string | undefined;
  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this PaymentIntent.
   */
  paymentMethodConfiguration?: string | undefined;
  /**
   * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
   * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
   * property on the PaymentIntent.
   */
  paymentMethodData?: PaymentIntentCreateBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this PaymentIntent.
   */
  paymentMethodOptions?:
    | PaymentIntentCreateBodyPaymentMethodOptions
    | undefined;
  /**
   * The list of payment method types (for example, a card) that this PaymentIntent can use. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: string[] | undefined;
  /**
   * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
   */
  radarOptions?: PaymentIntentCreateBodyRadarOptions | undefined;
  /**
   * Email address to send the receipt to. If you specify `receipt_email` for a payment in live mode, you send a receipt regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: string | undefined;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  returnUrl?: string | undefined;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
   *
   * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
   *
   * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: ("off_session" | "on_session") | undefined;
  /**
   * Shipping information for this PaymentIntent.
   */
  shipping?: PaymentIntentCreateBodyShipping | undefined;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
   */
  statementDescriptor?: string | undefined;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
   */
  statementDescriptorSuffix?: string | undefined;
  /**
   * The parameters that you can use to automatically create a Transfer.
   * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: PaymentIntentCreateBodyTransferData | undefined;
  /**
   * A string that identifies the resulting payment as part of a group. Learn more about the [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
   */
  transferGroup?: string | undefined;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  amount: number;
  application_fee_amount?: number | undefined;
  automatic_payment_methods?:
    | External$PaymentIntentCreateBodyAutomaticPaymentMethods
    | undefined;
  capture_method?: ("automatic" | "automatic_async" | "manual") | undefined;
  confirm?: boolean | undefined;
  confirmation_method?: ("automatic" | "manual") | undefined;
  confirmation_token?: string | undefined;
  currency: string;
  customer?: string | undefined;
  description?: string | undefined;
  error_on_requires_action?: boolean | undefined;
  expand?: string[] | undefined;
  mandate?: string | undefined;
  mandate_data?:
    | (External$PaymentIntentCreateBodyMandateDataObj0 | string)
    | undefined;
  metadata?: External$PaymentIntentCreateBodyMetadata | undefined;
  off_session?: (boolean | ("one_off" | "recurring")) | undefined;
  on_behalf_of?: string | undefined;
  payment_method?: string | undefined;
  payment_method_configuration?: string | undefined;
  payment_method_data?:
    | External$PaymentIntentCreateBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$PaymentIntentCreateBodyPaymentMethodOptions
    | undefined;
  payment_method_types?: string[] | undefined;
  radar_options?: External$PaymentIntentCreateBodyRadarOptions | undefined;
  receipt_email?: string | undefined;
  return_url?: string | undefined;
  setup_future_usage?: ("off_session" | "on_session") | undefined;
  shipping?: External$PaymentIntentCreateBodyShipping | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?: External$PaymentIntentCreateBodyTransferData | undefined;
  transfer_group?: string | undefined;
  use_stripe_sdk?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    application_fee_amount: z.number().int().optional(),
    automatic_payment_methods:
      Schemas$PaymentIntentCreateBodyAutomaticPaymentMethods.in.optional(),
    capture_method: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    confirm: z.boolean().optional(),
    confirmation_method: z.enum(["automatic", "manual"]).optional(),
    confirmation_token: z.string().optional(),
    currency: z.string(),
    customer: z.string().optional(),
    description: z.string().optional(),
    error_on_requires_action: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    mandate: z.string().optional(),
    mandate_data: z
      .union([Schemas$PaymentIntentCreateBodyMandateDataObj0.in, z.string()])
      .optional(),
    metadata: Schemas$PaymentIntentCreateBodyMetadata.in.optional(),
    off_session: z
      .union([z.boolean(), z.enum(["one_off", "recurring"])])
      .optional(),
    on_behalf_of: z.string().optional(),
    payment_method: z.string().optional(),
    payment_method_configuration: z.string().optional(),
    payment_method_data:
      Schemas$PaymentIntentCreateBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()).optional(),
    radar_options: Schemas$PaymentIntentCreateBodyRadarOptions.in.optional(),
    receipt_email: z.string().optional(),
    return_url: z.string().optional(),
    setup_future_usage: z.enum(["off_session", "on_session"]).optional(),
    shipping: Schemas$PaymentIntentCreateBodyShipping.in.optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data: Schemas$PaymentIntentCreateBodyTransferData.in.optional(),
    transfer_group: z.string().optional(),
    use_stripe_sdk: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee_amount: "applicationFeeAmount",
      automatic_payment_methods: "automaticPaymentMethods",
      capture_method: "captureMethod",
      confirm: "confirm",
      confirmation_method: "confirmationMethod",
      confirmation_token: "confirmationToken",
      currency: "currency",
      customer: "customer",
      description: "description",
      error_on_requires_action: "errorOnRequiresAction",
      expand: "expand",
      mandate: "mandate",
      mandate_data: "mandateData",
      metadata: "metadata",
      off_session: "offSession",
      on_behalf_of: "onBehalfOf",
      payment_method: "paymentMethod",
      payment_method_configuration: "paymentMethodConfiguration",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      radar_options: "radarOptions",
      receipt_email: "receiptEmail",
      return_url: "returnUrl",
      setup_future_usage: "setupFutureUsage",
      shipping: "shipping",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
      use_stripe_sdk: "useStripeSdk",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    applicationFeeAmount: z.number().int().optional(),
    automaticPaymentMethods:
      Schemas$PaymentIntentCreateBodyAutomaticPaymentMethods.out.optional(),
    captureMethod: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    confirm: z.boolean().optional(),
    confirmationMethod: z.enum(["automatic", "manual"]).optional(),
    confirmationToken: z.string().optional(),
    currency: z.string(),
    customer: z.string().optional(),
    description: z.string().optional(),
    errorOnRequiresAction: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    mandate: z.string().optional(),
    mandateData: z
      .union([Schemas$PaymentIntentCreateBodyMandateDataObj0.out, z.string()])
      .optional(),
    metadata: Schemas$PaymentIntentCreateBodyMetadata.out.optional(),
    offSession: z
      .union([z.boolean(), z.enum(["one_off", "recurring"])])
      .optional(),
    onBehalfOf: z.string().optional(),
    paymentMethod: z.string().optional(),
    paymentMethodConfiguration: z.string().optional(),
    paymentMethodData:
      Schemas$PaymentIntentCreateBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()).optional(),
    radarOptions: Schemas$PaymentIntentCreateBodyRadarOptions.out.optional(),
    receiptEmail: z.string().optional(),
    returnUrl: z.string().optional(),
    setupFutureUsage: z.enum(["off_session", "on_session"]).optional(),
    shipping: Schemas$PaymentIntentCreateBodyShipping.out.optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData: Schemas$PaymentIntentCreateBodyTransferData.out.optional(),
    transferGroup: z.string().optional(),
    useStripeSdk: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFeeAmount: "application_fee_amount",
      automaticPaymentMethods: "automatic_payment_methods",
      captureMethod: "capture_method",
      confirm: "confirm",
      confirmationMethod: "confirmation_method",
      confirmationToken: "confirmation_token",
      currency: "currency",
      customer: "customer",
      description: "description",
      errorOnRequiresAction: "error_on_requires_action",
      expand: "expand",
      mandate: "mandate",
      mandateData: "mandate_data",
      metadata: "metadata",
      offSession: "off_session",
      onBehalfOf: "on_behalf_of",
      paymentMethod: "payment_method",
      paymentMethodConfiguration: "payment_method_configuration",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      radarOptions: "radar_options",
      receiptEmail: "receipt_email",
      returnUrl: "return_url",
      setupFutureUsage: "setup_future_usage",
      shipping: "shipping",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
      useStripeSdk: "use_stripe_sdk",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: PaymentIntentUpdateBody | undefined;
  intent: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$PaymentIntentUpdateBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentIntentUpdateBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentIntentUpdateBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};

/**
 * ApplyCustomerBalanceRequest
 */
export type ApplyCustomerBalanceRequest = {
  data?: PaymentIntentApplyCustomerBalanceBody | undefined;
  intent: string;
};

/**
 * @internal
 * ApplyCustomerBalanceRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplyCustomerBalanceRequest = {
  data?: External$PaymentIntentApplyCustomerBalanceBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplyCustomerBalanceRequest
 */
const SchemaIn$ApplyCustomerBalanceRequest: z.ZodType<
  ApplyCustomerBalanceRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentIntentApplyCustomerBalanceBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplyCustomerBalanceRequest
 */
const SchemaOut$ApplyCustomerBalanceRequest: z.ZodType<
  External$ApplyCustomerBalanceRequest, // output type of this zod object
  z.ZodTypeDef,
  ApplyCustomerBalanceRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentIntentApplyCustomerBalanceBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$ApplyCustomerBalanceRequest = {
  in: SchemaIn$ApplyCustomerBalanceRequest,
  out: SchemaOut$ApplyCustomerBalanceRequest,
};

/**
 * CancelRequest
 */
export type CancelRequest = {
  data?: PaymentIntentCancelBody | undefined;
  intent: string;
};

/**
 * @internal
 * CancelRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CancelRequest = {
  data?: External$PaymentIntentCancelBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CancelRequest
 */
const SchemaIn$CancelRequest: z.ZodType<
  CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentIntentCancelBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CancelRequest
 */
const SchemaOut$CancelRequest: z.ZodType<
  External$CancelRequest, // output type of this zod object
  z.ZodTypeDef,
  CancelRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentIntentCancelBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$CancelRequest = {
  in: SchemaIn$CancelRequest,
  out: SchemaOut$CancelRequest,
};

/**
 * CaptureRequest
 */
export type CaptureRequest = {
  data?: PaymentIntentCaptureBody | undefined;
  intent: string;
};

/**
 * @internal
 * CaptureRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CaptureRequest = {
  data?: External$PaymentIntentCaptureBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CaptureRequest
 */
const SchemaIn$CaptureRequest: z.ZodType<
  CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentIntentCaptureBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CaptureRequest
 */
const SchemaOut$CaptureRequest: z.ZodType<
  External$CaptureRequest, // output type of this zod object
  z.ZodTypeDef,
  CaptureRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentIntentCaptureBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$CaptureRequest = {
  in: SchemaIn$CaptureRequest,
  out: SchemaOut$CaptureRequest,
};

/**
 * ConfirmRequest
 */
export type ConfirmRequest = {
  data?: PaymentIntentConfirmBody | undefined;
  intent: string;
};

/**
 * @internal
 * ConfirmRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ConfirmRequest = {
  data?: External$PaymentIntentConfirmBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ConfirmRequest
 */
const SchemaIn$ConfirmRequest: z.ZodType<
  ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentIntentConfirmBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ConfirmRequest
 */
const SchemaOut$ConfirmRequest: z.ZodType<
  External$ConfirmRequest, // output type of this zod object
  z.ZodTypeDef,
  ConfirmRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentIntentConfirmBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$ConfirmRequest = {
  in: SchemaIn$ConfirmRequest,
  out: SchemaOut$ConfirmRequest,
};

/**
 * IncrementAuthorizationRequest
 */
export type IncrementAuthorizationRequest = {
  /**
   * The updated total amount that you intend to collect from the cardholder. This amount must be greater than the currently authorized amount.
   */
  amount: number;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PaymentIntentIncrementAuthorizationBodyMetadata | undefined;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card or card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   */
  statementDescriptor?: string | undefined;
  /**
   * The parameters used to automatically create a transfer after the payment is captured.
   * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?:
    | PaymentIntentIncrementAuthorizationBodyTransferData
    | undefined;
  intent: string;
};

/**
 * @internal
 * IncrementAuthorizationRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IncrementAuthorizationRequest = {
  amount: number;
  application_fee_amount?: number | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | External$PaymentIntentIncrementAuthorizationBodyMetadata
    | undefined;
  statement_descriptor?: string | undefined;
  transfer_data?:
    | External$PaymentIntentIncrementAuthorizationBodyTransferData
    | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IncrementAuthorizationRequest
 */
const SchemaIn$IncrementAuthorizationRequest: z.ZodType<
  IncrementAuthorizationRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    application_fee_amount: z.number().int().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$PaymentIntentIncrementAuthorizationBodyMetadata.in.optional(),
    statement_descriptor: z.string().optional(),
    transfer_data:
      Schemas$PaymentIntentIncrementAuthorizationBodyTransferData.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee_amount: "applicationFeeAmount",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      statement_descriptor: "statementDescriptor",
      transfer_data: "transferData",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IncrementAuthorizationRequest
 */
const SchemaOut$IncrementAuthorizationRequest: z.ZodType<
  External$IncrementAuthorizationRequest, // output type of this zod object
  z.ZodTypeDef,
  IncrementAuthorizationRequest // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    applicationFeeAmount: z.number().int().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata:
      Schemas$PaymentIntentIncrementAuthorizationBodyMetadata.out.optional(),
    statementDescriptor: z.string().optional(),
    transferData:
      Schemas$PaymentIntentIncrementAuthorizationBodyTransferData.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFeeAmount: "application_fee_amount",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      statementDescriptor: "statement_descriptor",
      transferData: "transfer_data",
      intent: "intent",
    });
  });

export const Schemas$IncrementAuthorizationRequest = {
  in: SchemaIn$IncrementAuthorizationRequest,
  out: SchemaOut$IncrementAuthorizationRequest,
};

/**
 * VerifyMicrodepositsRequest
 */
export type VerifyMicrodepositsRequest = {
  data?: PaymentIntentVerifyMicrodepositsBody | undefined;
  intent: string;
};

/**
 * @internal
 * VerifyMicrodepositsRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$VerifyMicrodepositsRequest = {
  data?: External$PaymentIntentVerifyMicrodepositsBody | undefined;
  intent: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object VerifyMicrodepositsRequest
 */
const SchemaIn$VerifyMicrodepositsRequest: z.ZodType<
  VerifyMicrodepositsRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$PaymentIntentVerifyMicrodepositsBody.in.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$VerifyMicrodepositsRequest
 */
const SchemaOut$VerifyMicrodepositsRequest: z.ZodType<
  External$VerifyMicrodepositsRequest, // output type of this zod object
  z.ZodTypeDef,
  VerifyMicrodepositsRequest // the object to be transformed
> = z
  .object({
    data: Schemas$PaymentIntentVerifyMicrodepositsBody.out.optional(),
    intent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      intent: "intent",
    });
  });

export const Schemas$VerifyMicrodepositsRequest = {
  in: SchemaIn$VerifyMicrodepositsRequest,
  out: SchemaOut$VerifyMicrodepositsRequest,
};
