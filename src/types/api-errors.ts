import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import { Card, External$Card, Schemas$Card } from "./card";
import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import {
  External$SetupIntent,
  Schemas$SetupIntent,
  SetupIntent,
} from "./setup-intent";
import { External$Source, Schemas$Source, Source } from "./source";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ApiErrors = {
  /**
   * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines) if they provide one.
   */
  adviceCode?: string | undefined;
  /**
   * For card errors, the ID of the failed charge.
   */
  charge?: string | undefined;
  /**
   * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
   */
  code?: string | undefined;
  /**
   * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
   */
  declineCode?: string | undefined;
  /**
   * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
   */
  docUrl?: string | undefined;
  /**
   * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
   */
  message?: string | undefined;
  /**
   * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
   */
  networkAdviceCode?: string | undefined;
  /**
   * For card errors resulting from a card issuer decline, a brand specific 2, 3, or 4 digit code which indicates the reason the authorization failed.
   */
  networkDeclineCode?: string | undefined;
  /**
   * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
   */
  param?: string | undefined;
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
  paymentIntent?: PaymentIntent | undefined;
  /**
   * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
   */
  paymentMethodType?: string | undefined;
  /**
   * A URL to the request log entry in your dashboard.
   */
  requestLogUrl?: string | undefined;
  /**
   * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
   * For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
   * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
   *
   * Create a SetupIntent when you're ready to collect your customer's payment credentials.
   * Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
   * The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
   * you through the setup process.
   *
   * Successful SetupIntents result in payment credentials that are optimized for future payments.
   * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
   * [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
   * to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
   * If you use the SetupIntent with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer),
   * it automatically attaches the resulting payment method to that Customer after successful setup.
   * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
   * PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.
   *
   * By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.
   *
   * Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
   */
  setupIntent?: SetupIntent | undefined;
  /**
   * The [source object](https://stripe.com/docs/api/sources/object) for errors returned on a request involving a source.
   */
  source?: (BankAccount | Card | Source) | undefined;
  /**
   * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
   */
  type:
    | "api_error"
    | "card_error"
    | "idempotency_error"
    | "invalid_request_error";
};

/**
 * @internal
 * ApiErrors without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApiErrors = {
  advice_code?: string | undefined;
  charge?: string | undefined;
  code?: string | undefined;
  decline_code?: string | undefined;
  doc_url?: string | undefined;
  message?: string | undefined;
  network_advice_code?: string | undefined;
  network_decline_code?: string | undefined;
  param?: string | undefined;
  payment_intent?: External$PaymentIntent | undefined;
  payment_method_type?: string | undefined;
  request_log_url?: string | undefined;
  setup_intent?: External$SetupIntent | undefined;
  source?: (External$BankAccount | External$Card | External$Source) | undefined;
  type:
    | "api_error"
    | "card_error"
    | "idempotency_error"
    | "invalid_request_error";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApiErrors
 */
const SchemaIn$ApiErrors: z.ZodType<
  ApiErrors, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    advice_code: z.string().optional(),
    charge: z.string().optional(),
    code: z.string().optional(),
    decline_code: z.string().optional(),
    doc_url: z.string().optional(),
    message: z.string().optional(),
    network_advice_code: z.string().optional(),
    network_decline_code: z.string().optional(),
    param: z.string().optional(),
    payment_intent: z.lazy(() => Schemas$PaymentIntent.in.optional()),
    payment_method_type: z.string().optional(),
    request_log_url: z.string().optional(),
    setup_intent: z.lazy(() => Schemas$SetupIntent.in.optional()),
    source: z
      .union([
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ])
      .optional(),
    type: z.enum([
      "api_error",
      "card_error",
      "idempotency_error",
      "invalid_request_error",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      advice_code: "adviceCode",
      charge: "charge",
      code: "code",
      decline_code: "declineCode",
      doc_url: "docUrl",
      message: "message",
      network_advice_code: "networkAdviceCode",
      network_decline_code: "networkDeclineCode",
      param: "param",
      payment_intent: "paymentIntent",
      payment_method_type: "paymentMethodType",
      request_log_url: "requestLogUrl",
      setup_intent: "setupIntent",
      source: "source",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApiErrors
 */
const SchemaOut$ApiErrors: z.ZodType<
  External$ApiErrors, // output type of this zod object
  z.ZodTypeDef,
  ApiErrors // the object to be transformed
> = z
  .object({
    adviceCode: z.string().optional(),
    charge: z.string().optional(),
    code: z.string().optional(),
    declineCode: z.string().optional(),
    docUrl: z.string().optional(),
    message: z.string().optional(),
    networkAdviceCode: z.string().optional(),
    networkDeclineCode: z.string().optional(),
    param: z.string().optional(),
    paymentIntent: z.lazy(() => Schemas$PaymentIntent.out.optional()),
    paymentMethodType: z.string().optional(),
    requestLogUrl: z.string().optional(),
    setupIntent: z.lazy(() => Schemas$SetupIntent.out.optional()),
    source: z
      .union([
        z.lazy(() => Schemas$BankAccount.out),
        z.lazy(() => Schemas$Card.out),
        Schemas$Source.out,
      ])
      .optional(),
    type: z.enum([
      "api_error",
      "card_error",
      "idempotency_error",
      "invalid_request_error",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adviceCode: "advice_code",
      charge: "charge",
      code: "code",
      declineCode: "decline_code",
      docUrl: "doc_url",
      message: "message",
      networkAdviceCode: "network_advice_code",
      networkDeclineCode: "network_decline_code",
      param: "param",
      paymentIntent: "payment_intent",
      paymentMethodType: "payment_method_type",
      requestLogUrl: "request_log_url",
      setupIntent: "setup_intent",
      source: "source",
      type: "type",
    });
  });

export const Schemas$ApiErrors = {
  in: SchemaIn$ApiErrors,
  out: SchemaOut$ApiErrors,
};
