import {
  External$PaymentIntentConfirmBodyMandateDataObj0,
  PaymentIntentConfirmBodyMandateDataObj0,
  Schemas$PaymentIntentConfirmBodyMandateDataObj0,
} from "./payment-intent-confirm-body-mandate-data-obj0";
import {
  External$PaymentIntentConfirmBodyMandateDataObj2,
  PaymentIntentConfirmBodyMandateDataObj2,
  Schemas$PaymentIntentConfirmBodyMandateDataObj2,
} from "./payment-intent-confirm-body-mandate-data-obj2";
import {
  External$PaymentIntentConfirmBodyPaymentMethodData,
  PaymentIntentConfirmBodyPaymentMethodData,
  Schemas$PaymentIntentConfirmBodyPaymentMethodData,
} from "./payment-intent-confirm-body-payment-method-data";
import {
  External$PaymentIntentConfirmBodyPaymentMethodOptions,
  PaymentIntentConfirmBodyPaymentMethodOptions,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptions,
} from "./payment-intent-confirm-body-payment-method-options";
import {
  External$PaymentIntentConfirmBodyRadarOptions,
  PaymentIntentConfirmBodyRadarOptions,
  Schemas$PaymentIntentConfirmBodyRadarOptions,
} from "./payment-intent-confirm-body-radar-options";
import {
  External$PaymentIntentConfirmBodyShippingObj0,
  PaymentIntentConfirmBodyShippingObj0,
  Schemas$PaymentIntentConfirmBodyShippingObj0,
} from "./payment-intent-confirm-body-shipping-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBody
 */
export type PaymentIntentConfirmBody = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: ("automatic" | "automatic_async" | "manual") | undefined;
  /**
   * The client secret of the PaymentIntent.
   */
  clientSecret?: string | undefined;
  /**
   * ID of the ConfirmationToken used to confirm this PaymentIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string | undefined;
  /**
   * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication).
   */
  errorOnRequiresAction?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * ID of the mandate that's used for this payment.
   */
  mandate?: string | undefined;
  mandateData?:
    | (
        | PaymentIntentConfirmBodyMandateDataObj0
        | string
        | PaymentIntentConfirmBodyMandateDataObj2
      )
    | undefined;
  /**
   * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards).
   */
  offSession?: (boolean | ("one_off" | "recurring")) | undefined;
  /**
   * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
   */
  paymentMethod?: string | undefined;
  /**
   * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
   * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
   * property on the PaymentIntent.
   */
  paymentMethodData?: PaymentIntentConfirmBodyPaymentMethodData | undefined;
  /**
   * Payment method-specific configuration for this PaymentIntent.
   */
  paymentMethodOptions?:
    | PaymentIntentConfirmBodyPaymentMethodOptions
    | undefined;
  /**
   * The list of payment method types (for example, a card) that this PaymentIntent can use. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: string[] | undefined;
  /**
   * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
   */
  radarOptions?: PaymentIntentConfirmBodyRadarOptions | undefined;
  /**
   * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: (string | string) | undefined;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
   * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
   * This parameter is only used for cards and other redirect-based payment methods.
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
   *
   * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
   */
  setupFutureUsage?: ("off_session" | "on_session") | undefined;
  /**
   * Shipping information for this PaymentIntent.
   */
  shipping?: (PaymentIntentConfirmBodyShippingObj0 | string) | undefined;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (("automatic" | "automatic_async" | "manual") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (
        | (
            | PaymentIntentConfirmBodyMandateDataObj0
            | string
            | PaymentIntentConfirmBodyMandateDataObj2
          )
        | undefined
      )
    | ((boolean | ("one_off" | "recurring")) | undefined)
    | (string | undefined)
    | (PaymentIntentConfirmBodyPaymentMethodData | undefined)
    | (PaymentIntentConfirmBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | (PaymentIntentConfirmBodyRadarOptions | undefined)
    | ((string | string) | undefined)
    | (string | undefined)
    | (("off_session" | "on_session") | undefined)
    | ((PaymentIntentConfirmBodyShippingObj0 | string) | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBody = {
  capture_method?: ("automatic" | "automatic_async" | "manual") | undefined;
  client_secret?: string | undefined;
  confirmation_token?: string | undefined;
  error_on_requires_action?: boolean | undefined;
  expand?: string[] | undefined;
  mandate?: string | undefined;
  mandate_data?:
    | (
        | External$PaymentIntentConfirmBodyMandateDataObj0
        | string
        | External$PaymentIntentConfirmBodyMandateDataObj2
      )
    | undefined;
  off_session?: (boolean | ("one_off" | "recurring")) | undefined;
  payment_method?: string | undefined;
  payment_method_data?:
    | External$PaymentIntentConfirmBodyPaymentMethodData
    | undefined;
  payment_method_options?:
    | External$PaymentIntentConfirmBodyPaymentMethodOptions
    | undefined;
  payment_method_types?: string[] | undefined;
  radar_options?: External$PaymentIntentConfirmBodyRadarOptions | undefined;
  receipt_email?: (string | string) | undefined;
  return_url?: string | undefined;
  setup_future_usage?: ("off_session" | "on_session") | undefined;
  shipping?:
    | (External$PaymentIntentConfirmBodyShippingObj0 | string)
    | undefined;
  use_stripe_sdk?: boolean | undefined;

  [additionalProperty: string]:
    | (("automatic" | "automatic_async" | "manual") | undefined)
    | (string | undefined)
    | (string | undefined)
    | (boolean | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (
        | (
            | External$PaymentIntentConfirmBodyMandateDataObj0
            | string
            | External$PaymentIntentConfirmBodyMandateDataObj2
          )
        | undefined
      )
    | ((boolean | ("one_off" | "recurring")) | undefined)
    | (string | undefined)
    | (External$PaymentIntentConfirmBodyPaymentMethodData | undefined)
    | (External$PaymentIntentConfirmBodyPaymentMethodOptions | undefined)
    | (string[] | undefined)
    | (External$PaymentIntentConfirmBodyRadarOptions | undefined)
    | ((string | string) | undefined)
    | (string | undefined)
    | (("off_session" | "on_session") | undefined)
    | ((External$PaymentIntentConfirmBodyShippingObj0 | string) | undefined)
    | (boolean | undefined)
    | External$PaymentIntentConfirmBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBody
 */
const SchemaIn$PaymentIntentConfirmBody: z.ZodType<
  PaymentIntentConfirmBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    client_secret: z.string().optional(),
    confirmation_token: z.string().optional(),
    error_on_requires_action: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    mandate: z.string().optional(),
    mandate_data: z
      .union([
        Schemas$PaymentIntentConfirmBodyMandateDataObj0.in,
        z.string(),
        Schemas$PaymentIntentConfirmBodyMandateDataObj2.in,
      ])
      .optional(),
    off_session: z
      .union([z.boolean(), z.enum(["one_off", "recurring"])])
      .optional(),
    payment_method: z.string().optional(),
    payment_method_data:
      Schemas$PaymentIntentConfirmBodyPaymentMethodData.in.optional(),
    payment_method_options:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptions.in.optional(),
    payment_method_types: z.array(z.string()).optional(),
    radar_options: Schemas$PaymentIntentConfirmBodyRadarOptions.in.optional(),
    receipt_email: z.union([z.string(), z.string()]).optional(),
    return_url: z.string().optional(),
    setup_future_usage: z.enum(["off_session", "on_session"]).optional(),
    shipping: z
      .union([Schemas$PaymentIntentConfirmBodyShippingObj0.in, z.string()])
      .optional(),
    use_stripe_sdk: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      client_secret: "clientSecret",
      confirmation_token: "confirmationToken",
      error_on_requires_action: "errorOnRequiresAction",
      expand: "expand",
      mandate: "mandate",
      mandate_data: "mandateData",
      off_session: "offSession",
      payment_method: "paymentMethod",
      payment_method_data: "paymentMethodData",
      payment_method_options: "paymentMethodOptions",
      payment_method_types: "paymentMethodTypes",
      radar_options: "radarOptions",
      receipt_email: "receiptEmail",
      return_url: "returnUrl",
      setup_future_usage: "setupFutureUsage",
      shipping: "shipping",
      use_stripe_sdk: "useStripeSdk",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBody
 */
const SchemaOut$PaymentIntentConfirmBody: z.ZodType<
  External$PaymentIntentConfirmBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBody // the object to be transformed
> = z
  .object({
    captureMethod: z
      .enum(["automatic", "automatic_async", "manual"])
      .optional(),
    clientSecret: z.string().optional(),
    confirmationToken: z.string().optional(),
    errorOnRequiresAction: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    mandate: z.string().optional(),
    mandateData: z
      .union([
        Schemas$PaymentIntentConfirmBodyMandateDataObj0.out,
        z.string(),
        Schemas$PaymentIntentConfirmBodyMandateDataObj2.out,
      ])
      .optional(),
    offSession: z
      .union([z.boolean(), z.enum(["one_off", "recurring"])])
      .optional(),
    paymentMethod: z.string().optional(),
    paymentMethodData:
      Schemas$PaymentIntentConfirmBodyPaymentMethodData.out.optional(),
    paymentMethodOptions:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptions.out.optional(),
    paymentMethodTypes: z.array(z.string()).optional(),
    radarOptions: Schemas$PaymentIntentConfirmBodyRadarOptions.out.optional(),
    receiptEmail: z.union([z.string(), z.string()]).optional(),
    returnUrl: z.string().optional(),
    setupFutureUsage: z.enum(["off_session", "on_session"]).optional(),
    shipping: z
      .union([Schemas$PaymentIntentConfirmBodyShippingObj0.out, z.string()])
      .optional(),
    useStripeSdk: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      clientSecret: "client_secret",
      confirmationToken: "confirmation_token",
      errorOnRequiresAction: "error_on_requires_action",
      expand: "expand",
      mandate: "mandate",
      mandateData: "mandate_data",
      offSession: "off_session",
      paymentMethod: "payment_method",
      paymentMethodData: "payment_method_data",
      paymentMethodOptions: "payment_method_options",
      paymentMethodTypes: "payment_method_types",
      radarOptions: "radar_options",
      receiptEmail: "receipt_email",
      returnUrl: "return_url",
      setupFutureUsage: "setup_future_usage",
      shipping: "shipping",
      useStripeSdk: "use_stripe_sdk",
    });
  });

export const Schemas$PaymentIntentConfirmBody = {
  in: SchemaIn$PaymentIntentConfirmBody,
  out: SchemaOut$PaymentIntentConfirmBody,
};
