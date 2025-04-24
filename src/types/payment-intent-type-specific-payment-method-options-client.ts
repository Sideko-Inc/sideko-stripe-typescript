import {
  External$PaymentFlowsInstallmentOptions,
  PaymentFlowsInstallmentOptions,
  Schemas$PaymentFlowsInstallmentOptions,
} from "./payment-flows-installment-options";
import {
  External$PaymentMethodOptionsCardPresentRouting,
  PaymentMethodOptionsCardPresentRouting,
  Schemas$PaymentMethodOptionsCardPresentRouting,
} from "./payment-method-options-card-present-routing";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentTypeSpecificPaymentMethodOptionsClient = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: ("manual" | "manual_preferred") | undefined;
  installments?: PaymentFlowsInstallmentOptions | undefined;
  /**
   * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
   */
  requestIncrementalAuthorizationSupport?: boolean | undefined;
  /**
   * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
   */
  requireCvcRecollection?: boolean | undefined;
  routing?: PaymentMethodOptionsCardPresentRouting | undefined;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
   *
   * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
   *
   * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  /**
   * Bank account verification method.
   */
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * PaymentIntentTypeSpecificPaymentMethodOptionsClient without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentTypeSpecificPaymentMethodOptionsClient = {
  capture_method?: ("manual" | "manual_preferred") | undefined;
  installments?: External$PaymentFlowsInstallmentOptions | undefined;
  request_incremental_authorization_support?: boolean | undefined;
  require_cvc_recollection?: boolean | undefined;
  routing?: External$PaymentMethodOptionsCardPresentRouting | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentTypeSpecificPaymentMethodOptionsClient
 */
const SchemaIn$PaymentIntentTypeSpecificPaymentMethodOptionsClient: z.ZodType<
  PaymentIntentTypeSpecificPaymentMethodOptionsClient, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual", "manual_preferred"]).optional(),
    installments: Schemas$PaymentFlowsInstallmentOptions.in.optional(),
    request_incremental_authorization_support: z.boolean().optional(),
    require_cvc_recollection: z.boolean().optional(),
    routing: Schemas$PaymentMethodOptionsCardPresentRouting.in.optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      installments: "installments",
      request_incremental_authorization_support:
        "requestIncrementalAuthorizationSupport",
      require_cvc_recollection: "requireCvcRecollection",
      routing: "routing",
      setup_future_usage: "setupFutureUsage",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentTypeSpecificPaymentMethodOptionsClient
 */
const SchemaOut$PaymentIntentTypeSpecificPaymentMethodOptionsClient: z.ZodType<
  External$PaymentIntentTypeSpecificPaymentMethodOptionsClient, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentTypeSpecificPaymentMethodOptionsClient // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual", "manual_preferred"]).optional(),
    installments: Schemas$PaymentFlowsInstallmentOptions.out.optional(),
    requestIncrementalAuthorizationSupport: z.boolean().optional(),
    requireCvcRecollection: z.boolean().optional(),
    routing: Schemas$PaymentMethodOptionsCardPresentRouting.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      installments: "installments",
      requestIncrementalAuthorizationSupport:
        "request_incremental_authorization_support",
      requireCvcRecollection: "require_cvc_recollection",
      routing: "routing",
      setupFutureUsage: "setup_future_usage",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$PaymentIntentTypeSpecificPaymentMethodOptionsClient = {
  in: SchemaIn$PaymentIntentTypeSpecificPaymentMethodOptionsClient,
  out: SchemaOut$PaymentIntentTypeSpecificPaymentMethodOptionsClient,
};
