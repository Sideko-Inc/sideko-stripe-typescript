import { Account, External$Account, Schemas$Account } from "./account";
import { ApiErrors, External$ApiErrors, Schemas$ApiErrors } from "./api-errors";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import { Charge, External$Charge, Schemas$Charge } from "./charge";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import {
  External$PaymentFlowsAmountDetails,
  PaymentFlowsAmountDetails,
  Schemas$PaymentFlowsAmountDetails,
} from "./payment-flows-amount-details";
import {
  External$PaymentFlowsAmountDetailsClient,
  PaymentFlowsAmountDetailsClient,
  Schemas$PaymentFlowsAmountDetailsClient,
} from "./payment-flows-amount-details-client";
import {
  External$PaymentFlowsAutomaticPaymentMethodsPaymentIntent,
  PaymentFlowsAutomaticPaymentMethodsPaymentIntent,
  Schemas$PaymentFlowsAutomaticPaymentMethodsPaymentIntent,
} from "./payment-flows-automatic-payment-methods-payment-intent";
import {
  External$PaymentFlowsPaymentIntentPresentmentDetails,
  PaymentFlowsPaymentIntentPresentmentDetails,
  Schemas$PaymentFlowsPaymentIntentPresentmentDetails,
} from "./payment-flows-payment-intent-presentment-details";
import {
  External$PaymentIntentMetadata,
  PaymentIntentMetadata,
  Schemas$PaymentIntentMetadata,
} from "./payment-intent-metadata";
import {
  External$PaymentIntentNextAction,
  PaymentIntentNextAction,
  Schemas$PaymentIntentNextAction,
} from "./payment-intent-next-action";
import {
  External$PaymentIntentPaymentMethodOptions,
  PaymentIntentPaymentMethodOptions,
  Schemas$PaymentIntentPaymentMethodOptions,
} from "./payment-intent-payment-method-options";
import {
  External$PaymentIntentProcessing,
  PaymentIntentProcessing,
  Schemas$PaymentIntentProcessing,
} from "./payment-intent-processing";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import {
  External$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
  PaymentMethodConfigBizPaymentMethodConfigurationDetails,
  Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails,
} from "./payment-method-config-biz-payment-method-configuration-details";
import { External$Review, Review, Schemas$Review } from "./review";
import { External$Shipping, Schemas$Shipping, Shipping } from "./shipping";
import {
  External$TransferData,
  Schemas$TransferData,
  TransferData,
} from "./transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A PaymentIntent guides you through the process of collecting a payment from your customer.
 * We recommend that you create exactly one PaymentIntent for each order or
 * customer session in your system. You can reference the PaymentIntent later to
 * see the history of payment attempts for a particular session.
 *
 * A PaymentIntent transitions through
 * [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)
 * throughout its lifetime as it interfaces with Stripe.js to perform
 * authentication flows and ultimately creates at most one successful charge.
 *
 * Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents)
 */
export type PaymentIntent = {
  /**
   * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount: number;
  /**
   * Amount that can be captured from this PaymentIntent.
   */
  amountCapturable?: number | undefined;
  amountDetails?:
    | (PaymentFlowsAmountDetails | PaymentFlowsAmountDetailsClient)
    | undefined;
  /**
   * Amount that this PaymentIntent collects.
   */
  amountReceived?: number | undefined;
  /**
   * ID of the Connect application that created the PaymentIntent.
   */
  application?: (string | Application) | undefined;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number | null | undefined;
  automaticPaymentMethods?:
    | PaymentFlowsAutomaticPaymentMethodsPaymentIntent
    | undefined;
  /**
   * Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. Measured in seconds since the Unix epoch.
   */
  canceledAt?: number | null | undefined;
  /**
   * Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`).
   */
  cancellationReason?:
    | (
        | "abandoned"
        | "automatic"
        | "duplicate"
        | "expired"
        | "failed_invoice"
        | "fraudulent"
        | "requested_by_customer"
        | "void_invoice"
      )
    | null
    | undefined;
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod: "automatic" | "automatic_async" | "manual";
  /**
   * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key.
   *
   * The client secret can be used to complete a payment from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   *
   * Refer to our docs to [accept a payment](https://stripe.com/docs/payments/accept-a-payment?ui=elements) and learn about how `client_secret` should be handled.
   */
  clientSecret?: string | null | undefined;
  /**
   * Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment.
   */
  confirmationMethod: "automatic" | "manual";
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
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
  customer?: (string | Customer | DeletedCustomer) | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  lastPaymentError?: ApiErrors | undefined;
  /**
   * ID of the latest [Charge object](https://stripe.com/docs/api/charges) created by this PaymentIntent. This property is `null` until PaymentIntent confirmation is attempted.
   */
  latestCharge?: (string | Charge) | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Learn more about [storing information in metadata](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).
   */
  metadata?: PaymentIntentMetadata | undefined;
  nextAction?: PaymentIntentNextAction | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "payment_intent";
  /**
   * The account (if any) for which the funds of the PaymentIntent are intended. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  /**
   * ID of the payment method used in this PaymentIntent.
   */
  paymentMethod?: (string | PaymentMethod) | undefined;
  paymentMethodConfigurationDetails?:
    | PaymentMethodConfigBizPaymentMethodConfigurationDetails
    | undefined;
  paymentMethodOptions?: PaymentIntentPaymentMethodOptions | undefined;
  /**
   * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use. A comprehensive list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes: string[];
  presentmentDetails?: PaymentFlowsPaymentIntentPresentmentDetails | undefined;
  processing?: PaymentIntentProcessing | undefined;
  /**
   * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: string | null | undefined;
  /**
   * ID of the review associated with this PaymentIntent, if any.
   */
  review?: (string | Review) | undefined;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
   *
   * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
   *
   * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: ("off_session" | "on_session") | null | undefined;
  shipping?: Shipping | undefined;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
   *
   * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
   */
  statementDescriptor?: string | null | undefined;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
   */
  statementDescriptorSuffix?: string | null | undefined;
  /**
   * Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. Read more about each PaymentIntent [status](https://stripe.com/docs/payments/intents#intent-statuses).
   */
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_capture"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  transferData?: TransferData | undefined;
  /**
   * A string that identifies the resulting payment as part of a group. Learn more about the [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
   */
  transferGroup?: string | null | undefined;
};

/**
 * @internal
 * PaymentIntent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntent = {
  amount: number;
  amount_capturable?: number | undefined;
  amount_details?:
    | (
        | External$PaymentFlowsAmountDetails
        | External$PaymentFlowsAmountDetailsClient
      )
    | undefined;
  amount_received?: number | undefined;
  application?: (string | External$Application) | undefined;
  application_fee_amount?: number | null | undefined;
  automatic_payment_methods?:
    | External$PaymentFlowsAutomaticPaymentMethodsPaymentIntent
    | undefined;
  canceled_at?: number | null | undefined;
  cancellation_reason?:
    | (
        | "abandoned"
        | "automatic"
        | "duplicate"
        | "expired"
        | "failed_invoice"
        | "fraudulent"
        | "requested_by_customer"
        | "void_invoice"
      )
    | null
    | undefined;
  capture_method: "automatic" | "automatic_async" | "manual";
  client_secret?: string | null | undefined;
  confirmation_method: "automatic" | "manual";
  created: number;
  currency: string;
  customer?:
    | (string | External$Customer | External$DeletedCustomer)
    | undefined;
  description?: string | null | undefined;
  id: string;
  last_payment_error?: External$ApiErrors | undefined;
  latest_charge?: (string | External$Charge) | undefined;
  livemode: boolean;
  metadata?: External$PaymentIntentMetadata | undefined;
  next_action?: External$PaymentIntentNextAction | undefined;
  object: "payment_intent";
  on_behalf_of?: (string | External$Account) | undefined;
  payment_method?: (string | External$PaymentMethod) | undefined;
  payment_method_configuration_details?:
    | External$PaymentMethodConfigBizPaymentMethodConfigurationDetails
    | undefined;
  payment_method_options?:
    | External$PaymentIntentPaymentMethodOptions
    | undefined;
  payment_method_types: string[];
  presentment_details?:
    | External$PaymentFlowsPaymentIntentPresentmentDetails
    | undefined;
  processing?: External$PaymentIntentProcessing | undefined;
  receipt_email?: string | null | undefined;
  review?: (string | External$Review) | undefined;
  setup_future_usage?: ("off_session" | "on_session") | null | undefined;
  shipping?: External$Shipping | undefined;
  statement_descriptor?: string | null | undefined;
  statement_descriptor_suffix?: string | null | undefined;
  status:
    | "canceled"
    | "processing"
    | "requires_action"
    | "requires_capture"
    | "requires_confirmation"
    | "requires_payment_method"
    | "succeeded";
  transfer_data?: External$TransferData | undefined;
  transfer_group?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntent
 */
const SchemaIn$PaymentIntent: z.ZodType<
  PaymentIntent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    amount_capturable: z.number().int().optional(),
    amount_details: z
      .union([
        Schemas$PaymentFlowsAmountDetails.in,
        Schemas$PaymentFlowsAmountDetailsClient.in,
      ])
      .optional(),
    amount_received: z.number().int().optional(),
    application: z.union([z.string(), Schemas$Application.in]).optional(),
    application_fee_amount: z.number().int().nullable().optional(),
    automatic_payment_methods:
      Schemas$PaymentFlowsAutomaticPaymentMethodsPaymentIntent.in.optional(),
    canceled_at: z.number().int().nullable().optional(),
    cancellation_reason: z
      .enum([
        "abandoned",
        "automatic",
        "duplicate",
        "expired",
        "failed_invoice",
        "fraudulent",
        "requested_by_customer",
        "void_invoice",
      ])
      .nullable()
      .optional(),
    capture_method: z.enum(["automatic", "automatic_async", "manual"]),
    client_secret: z.string().nullable().optional(),
    confirmation_method: z.enum(["automatic", "manual"]),
    created: z.number().int(),
    currency: z.string(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.in),
        Schemas$DeletedCustomer.in,
      ])
      .optional(),
    description: z.string().nullable().optional(),
    id: z.string(),
    last_payment_error: z.lazy(() => Schemas$ApiErrors.in.optional()),
    latest_charge: z
      .union([z.string(), z.lazy(() => Schemas$Charge.in)])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$PaymentIntentMetadata.in.optional(),
    next_action: Schemas$PaymentIntentNextAction.in.optional(),
    object: z.enum(["payment_intent"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    payment_method: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.in)])
      .optional(),
    payment_method_configuration_details:
      Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails.in.optional(),
    payment_method_options:
      Schemas$PaymentIntentPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()),
    presentment_details:
      Schemas$PaymentFlowsPaymentIntentPresentmentDetails.in.optional(),
    processing: Schemas$PaymentIntentProcessing.in.optional(),
    receipt_email: z.string().nullable().optional(),
    review: z.union([z.string(), z.lazy(() => Schemas$Review.in)]).optional(),
    setup_future_usage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
    shipping: Schemas$Shipping.in.optional(),
    statement_descriptor: z.string().nullable().optional(),
    statement_descriptor_suffix: z.string().nullable().optional(),
    status: z.enum([
      "canceled",
      "processing",
      "requires_action",
      "requires_capture",
      "requires_confirmation",
      "requires_payment_method",
      "succeeded",
    ]),
    transfer_data: z.lazy(() => Schemas$TransferData.in.optional()),
    transfer_group: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amount_capturable: "amountCapturable",
      amount_details: "amountDetails",
      amount_received: "amountReceived",
      application: "application",
      application_fee_amount: "applicationFeeAmount",
      automatic_payment_methods: "automaticPaymentMethods",
      canceled_at: "canceledAt",
      cancellation_reason: "cancellationReason",
      capture_method: "captureMethod",
      client_secret: "clientSecret",
      confirmation_method: "confirmationMethod",
      created: "created",
      currency: "currency",
      customer: "customer",
      description: "description",
      id: "id",
      last_payment_error: "lastPaymentError",
      latest_charge: "latestCharge",
      livemode: "livemode",
      metadata: "metadata",
      next_action: "nextAction",
      object: "object",
      on_behalf_of: "onBehalfOf",
      payment_method: "paymentMethod",
      payment_method_configuration_details: "paymentMethodConfigurationDetails",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      presentment_details: "presentmentDetails",
      processing: "processing",
      receipt_email: "receiptEmail",
      review: "review",
      setup_future_usage: "setupFutureUsage",
      shipping: "shipping",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      status: "status",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntent
 */
const SchemaOut$PaymentIntent: z.ZodType<
  External$PaymentIntent, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntent // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    amountCapturable: z.number().int().optional(),
    amountDetails: z
      .union([
        Schemas$PaymentFlowsAmountDetails.out,
        Schemas$PaymentFlowsAmountDetailsClient.out,
      ])
      .optional(),
    amountReceived: z.number().int().optional(),
    application: z.union([z.string(), Schemas$Application.out]).optional(),
    applicationFeeAmount: z.number().int().nullable().optional(),
    automaticPaymentMethods:
      Schemas$PaymentFlowsAutomaticPaymentMethodsPaymentIntent.out.optional(),
    canceledAt: z.number().int().nullable().optional(),
    cancellationReason: z
      .enum([
        "abandoned",
        "automatic",
        "duplicate",
        "expired",
        "failed_invoice",
        "fraudulent",
        "requested_by_customer",
        "void_invoice",
      ])
      .nullable()
      .optional(),
    captureMethod: z.enum(["automatic", "automatic_async", "manual"]),
    clientSecret: z.string().nullable().optional(),
    confirmationMethod: z.enum(["automatic", "manual"]),
    created: z.number().int(),
    currency: z.string(),
    customer: z
      .union([
        z.string(),
        z.lazy(() => Schemas$Customer.out),
        Schemas$DeletedCustomer.out,
      ])
      .optional(),
    description: z.string().nullable().optional(),
    id: z.string(),
    lastPaymentError: z.lazy(() => Schemas$ApiErrors.out.optional()),
    latestCharge: z
      .union([z.string(), z.lazy(() => Schemas$Charge.out)])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$PaymentIntentMetadata.out.optional(),
    nextAction: Schemas$PaymentIntentNextAction.out.optional(),
    object: z.enum(["payment_intent"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    paymentMethod: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.out)])
      .optional(),
    paymentMethodConfigurationDetails:
      Schemas$PaymentMethodConfigBizPaymentMethodConfigurationDetails.out.optional(),
    paymentMethodOptions:
      Schemas$PaymentIntentPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()),
    presentmentDetails:
      Schemas$PaymentFlowsPaymentIntentPresentmentDetails.out.optional(),
    processing: Schemas$PaymentIntentProcessing.out.optional(),
    receiptEmail: z.string().nullable().optional(),
    review: z.union([z.string(), z.lazy(() => Schemas$Review.out)]).optional(),
    setupFutureUsage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
    shipping: Schemas$Shipping.out.optional(),
    statementDescriptor: z.string().nullable().optional(),
    statementDescriptorSuffix: z.string().nullable().optional(),
    status: z.enum([
      "canceled",
      "processing",
      "requires_action",
      "requires_capture",
      "requires_confirmation",
      "requires_payment_method",
      "succeeded",
    ]),
    transferData: z.lazy(() => Schemas$TransferData.out.optional()),
    transferGroup: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      amountCapturable: "amount_capturable",
      amountDetails: "amount_details",
      amountReceived: "amount_received",
      application: "application",
      applicationFeeAmount: "application_fee_amount",
      automaticPaymentMethods: "automatic_payment_methods",
      canceledAt: "canceled_at",
      cancellationReason: "cancellation_reason",
      captureMethod: "capture_method",
      clientSecret: "client_secret",
      confirmationMethod: "confirmation_method",
      created: "created",
      currency: "currency",
      customer: "customer",
      description: "description",
      id: "id",
      lastPaymentError: "last_payment_error",
      latestCharge: "latest_charge",
      livemode: "livemode",
      metadata: "metadata",
      nextAction: "next_action",
      object: "object",
      onBehalfOf: "on_behalf_of",
      paymentMethod: "payment_method",
      paymentMethodConfigurationDetails: "payment_method_configuration_details",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      presentmentDetails: "presentment_details",
      processing: "processing",
      receiptEmail: "receipt_email",
      review: "review",
      setupFutureUsage: "setup_future_usage",
      shipping: "shipping",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      status: "status",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$PaymentIntent = {
  in: SchemaIn$PaymentIntent,
  out: SchemaOut$PaymentIntent,
};
