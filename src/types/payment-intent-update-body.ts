import {
  External$PaymentIntentUpdateBodyMetadataObj0,
  PaymentIntentUpdateBodyMetadataObj0,
  Schemas$PaymentIntentUpdateBodyMetadataObj0,
} from "./payment-intent-update-body-metadata-obj0";
import {
  External$PaymentIntentUpdateBodyPaymentMethodData,
  PaymentIntentUpdateBodyPaymentMethodData,
  Schemas$PaymentIntentUpdateBodyPaymentMethodData,
} from "./payment-intent-update-body-payment-method-data";
import {
  External$PaymentIntentUpdateBodyPaymentMethodOptions,
  PaymentIntentUpdateBodyPaymentMethodOptions,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptions,
} from "./payment-intent-update-body-payment-method-options";
import {
  External$PaymentIntentUpdateBodyShippingObj0,
  PaymentIntentUpdateBodyShippingObj0,
  Schemas$PaymentIntentUpdateBodyShippingObj0,
} from "./payment-intent-update-body-shipping-obj0";
import {
  External$PaymentIntentUpdateBodyTransferData,
  PaymentIntentUpdateBodyTransferData,
  Schemas$PaymentIntentUpdateBodyTransferData,
} from "./payment-intent-update-body-transfer-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBody
 */
export type PaymentIntentUpdateBody = {
  /**
   * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount?: number | undefined;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: (number | string) | undefined;
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: ("automatic" | "automatic_async" | "manual") | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
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
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PaymentIntentUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent. To unset this field to null, pass in an empty string.
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
  paymentMethodData?: PaymentIntentUpdateBodyPaymentMethodData | undefined;
  /**
   * Payment-method-specific configuration for this PaymentIntent.
   */
  paymentMethodOptions?:
    | PaymentIntentUpdateBodyPaymentMethodOptions
    | undefined;
  /**
   * The list of payment method types (for example, card) that this PaymentIntent can use. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: string[] | undefined;
  /**
   * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: (string | string) | undefined;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
   *
   * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
   *
   * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   *
   * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
   */
  setupFutureUsage?: ("off_session" | "on_session") | undefined;
  /**
   * Shipping information for this PaymentIntent.
   */
  shipping?: (PaymentIntentUpdateBodyShippingObj0 | string) | undefined;
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
   * Use this parameter to automatically create a Transfer when the payment succeeds. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: PaymentIntentUpdateBodyTransferData | undefined;
  /**
   * A string that identifies the resulting payment as part of a group. You can only provide `transfer_group` if it hasn't been set. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferGroup?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | ((number | string) | undefined)
    | (("automatic" | "automatic_async" | "manual") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((PaymentIntentUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (PaymentIntentUpdateBodyPaymentMethodData | undefined)
    | (PaymentIntentUpdateBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | ((string | string) | undefined)
    | (("off_session" | "on_session") | undefined)
    | ((PaymentIntentUpdateBodyShippingObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (PaymentIntentUpdateBodyTransferData | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBody = {
  amount?: number | undefined;
  application_fee_amount?: (number | string) | undefined;
  capture_method?: ("automatic" | "automatic_async" | "manual") | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$PaymentIntentUpdateBodyMetadataObj0 | string)
    | undefined;
  payment_method?: string | undefined;
  payment_method_configuration?: string | undefined;
  payment_method_data?:
    | External$PaymentIntentUpdateBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$PaymentIntentUpdateBodyPaymentMethodOptions
    | undefined;
  payment_method_types?: string[] | undefined;
  receipt_email?: (string | string) | undefined;
  setup_future_usage?: ("off_session" | "on_session") | undefined;
  shipping?:
    | (External$PaymentIntentUpdateBodyShippingObj0 | string)
    | undefined;
  statement_descriptor?: string | undefined;
  statement_descriptor_suffix?: string | undefined;
  transfer_data?: External$PaymentIntentUpdateBodyTransferData | undefined;
  transfer_group?: string | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | ((number | string) | undefined)
    | (("automatic" | "automatic_async" | "manual") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((External$PaymentIntentUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$PaymentIntentUpdateBodyPaymentMethodData | undefined)
    | (External$PaymentIntentUpdateBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | ((string | string) | undefined)
    | (("off_session" | "on_session") | undefined)
    | ((External$PaymentIntentUpdateBodyShippingObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$PaymentIntentUpdateBodyTransferData | undefined)
    | (string | undefined)
    | External$PaymentIntentUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBody
 */
const SchemaIn$PaymentIntentUpdateBody: z.ZodType<
  PaymentIntentUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    application_fee_amount: z.union([z.number().int(), z.string()]).optional(),
    capture_method: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PaymentIntentUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    payment_method: z.string().optional(),
    payment_method_configuration: z.string().optional(),
    payment_method_data:
      Schemas$PaymentIntentUpdateBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()).optional(),
    receipt_email: z.union([z.string(), z.string()]).optional(),
    setup_future_usage: z.enum(["off_session", "on_session"]).optional(),
    shipping: z
      .union([Schemas$PaymentIntentUpdateBodyShippingObj0.in, z.string()])
      .optional(),
    statement_descriptor: z.string().optional(),
    statement_descriptor_suffix: z.string().optional(),
    transfer_data: Schemas$PaymentIntentUpdateBodyTransferData.in.optional(),
    transfer_group: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      application_fee_amount: "applicationFeeAmount",
      capture_method: "captureMethod",
      currency: "currency",
      customer: "customer",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      payment_method: "paymentMethod",
      payment_method_configuration: "paymentMethodConfiguration",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      receipt_email: "receiptEmail",
      setup_future_usage: "setupFutureUsage",
      shipping: "shipping",
      statement_descriptor: "statementDescriptor",
      statement_descriptor_suffix: "statementDescriptorSuffix",
      transfer_data: "transferData",
      transfer_group: "transferGroup",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBody
 */
const SchemaOut$PaymentIntentUpdateBody: z.ZodType<
  External$PaymentIntentUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    applicationFeeAmount: z.union([z.number().int(), z.string()]).optional(),
    captureMethod: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PaymentIntentUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    paymentMethod: z.string().optional(),
    paymentMethodConfiguration: z.string().optional(),
    paymentMethodData:
      Schemas$PaymentIntentUpdateBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()).optional(),
    receiptEmail: z.union([z.string(), z.string()]).optional(),
    setupFutureUsage: z.enum(["off_session", "on_session"]).optional(),
    shipping: z
      .union([Schemas$PaymentIntentUpdateBodyShippingObj0.out, z.string()])
      .optional(),
    statementDescriptor: z.string().optional(),
    statementDescriptorSuffix: z.string().optional(),
    transferData: Schemas$PaymentIntentUpdateBodyTransferData.out.optional(),
    transferGroup: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      applicationFeeAmount: "application_fee_amount",
      captureMethod: "capture_method",
      currency: "currency",
      customer: "customer",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      paymentMethod: "payment_method",
      paymentMethodConfiguration: "payment_method_configuration",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      receiptEmail: "receipt_email",
      setupFutureUsage: "setup_future_usage",
      shipping: "shipping",
      statementDescriptor: "statement_descriptor",
      statementDescriptorSuffix: "statement_descriptor_suffix",
      transferData: "transfer_data",
      transferGroup: "transfer_group",
    });
  });

export const Schemas$PaymentIntentUpdateBody = {
  in: SchemaIn$PaymentIntentUpdateBody,
  out: SchemaOut$PaymentIntentUpdateBody,
};
