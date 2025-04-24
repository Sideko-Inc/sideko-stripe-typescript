import {
  CheckoutCardInstallmentsOptions,
  External$CheckoutCardInstallmentsOptions,
  Schemas$CheckoutCardInstallmentsOptions,
} from "./checkout-card-installments-options";
import {
  External$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions,
  PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions,
  Schemas$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions,
} from "./payment-pages-private-card-payment-method-options-resource-restrictions";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutCardPaymentMethodOptions = {
  installments?: CheckoutCardInstallmentsOptions | undefined;
  /**
   * Request ability to [capture beyond the standard authorization validity window](/payments/extended-authorization) for this CheckoutSession.
   */
  requestExtendedAuthorization?: ("if_available" | "never") | undefined;
  /**
   * Request ability to [increment the authorization](/payments/incremental-authorization) for this CheckoutSession.
   */
  requestIncrementalAuthorization?: ("if_available" | "never") | undefined;
  /**
   * Request ability to make [multiple captures](/payments/multicapture) for this CheckoutSession.
   */
  requestMulticapture?: ("if_available" | "never") | undefined;
  /**
   * Request ability to [overcapture](/payments/overcapture) for this CheckoutSession.
   */
  requestOvercapture?: ("if_available" | "never") | undefined;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure: "any" | "automatic" | "challenge";
  restrictions?:
    | PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions
    | undefined;
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
   * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
   */
  statementDescriptorSuffixKana?: string | undefined;
  /**
   * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
   */
  statementDescriptorSuffixKanji?: string | undefined;
};

/**
 * @internal
 * CheckoutCardPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutCardPaymentMethodOptions = {
  installments?: External$CheckoutCardInstallmentsOptions | undefined;
  request_extended_authorization?: ("if_available" | "never") | undefined;
  request_incremental_authorization?: ("if_available" | "never") | undefined;
  request_multicapture?: ("if_available" | "never") | undefined;
  request_overcapture?: ("if_available" | "never") | undefined;
  request_three_d_secure: "any" | "automatic" | "challenge";
  restrictions?:
    | External$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions
    | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  statement_descriptor_suffix_kana?: string | undefined;
  statement_descriptor_suffix_kanji?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutCardPaymentMethodOptions
 */
const SchemaIn$CheckoutCardPaymentMethodOptions: z.ZodType<
  CheckoutCardPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    installments: Schemas$CheckoutCardInstallmentsOptions.in.optional(),
    request_extended_authorization: z
      .enum(["if_available", "never"])
      .optional(),
    request_incremental_authorization: z
      .enum(["if_available", "never"])
      .optional(),
    request_multicapture: z.enum(["if_available", "never"]).optional(),
    request_overcapture: z.enum(["if_available", "never"]).optional(),
    request_three_d_secure: z.enum(["any", "automatic", "challenge"]),
    restrictions:
      Schemas$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions.in.optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    statement_descriptor_suffix_kana: z.string().optional(),
    statement_descriptor_suffix_kanji: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      request_extended_authorization: "requestExtendedAuthorization",
      request_incremental_authorization: "requestIncrementalAuthorization",
      request_multicapture: "requestMulticapture",
      request_overcapture: "requestOvercapture",
      request_three_d_secure: "requestThreeDSecure",
      restrictions: "restrictions",
      setup_future_usage: "setupFutureUsage",
      statement_descriptor_suffix_kana: "statementDescriptorSuffixKana",
      statement_descriptor_suffix_kanji: "statementDescriptorSuffixKanji",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutCardPaymentMethodOptions
 */
const SchemaOut$CheckoutCardPaymentMethodOptions: z.ZodType<
  External$CheckoutCardPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutCardPaymentMethodOptions // the object to be transformed
> = z
  .object({
    installments: Schemas$CheckoutCardInstallmentsOptions.out.optional(),
    requestExtendedAuthorization: z.enum(["if_available", "never"]).optional(),
    requestIncrementalAuthorization: z
      .enum(["if_available", "never"])
      .optional(),
    requestMulticapture: z.enum(["if_available", "never"]).optional(),
    requestOvercapture: z.enum(["if_available", "never"]).optional(),
    requestThreeDSecure: z.enum(["any", "automatic", "challenge"]),
    restrictions:
      Schemas$PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    statementDescriptorSuffixKana: z.string().optional(),
    statementDescriptorSuffixKanji: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      installments: "installments",
      requestExtendedAuthorization: "request_extended_authorization",
      requestIncrementalAuthorization: "request_incremental_authorization",
      requestMulticapture: "request_multicapture",
      requestOvercapture: "request_overcapture",
      requestThreeDSecure: "request_three_d_secure",
      restrictions: "restrictions",
      setupFutureUsage: "setup_future_usage",
      statementDescriptorSuffixKana: "statement_descriptor_suffix_kana",
      statementDescriptorSuffixKanji: "statement_descriptor_suffix_kanji",
    });
  });

export const Schemas$CheckoutCardPaymentMethodOptions = {
  in: SchemaIn$CheckoutCardPaymentMethodOptions,
  out: SchemaOut$CheckoutCardPaymentMethodOptions,
};
