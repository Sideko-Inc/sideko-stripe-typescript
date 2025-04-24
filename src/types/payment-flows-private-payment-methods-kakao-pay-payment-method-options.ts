import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: "manual" | undefined;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
   *
   * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
   *
   * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions =
  {
    capture_method?: "manual" | undefined;
    setup_future_usage?: ("none" | "off_session") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions
 */
const SchemaIn$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions: z.ZodType<
  PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions
 */
const SchemaOut$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions: z.ZodType<
  External$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions =
  {
    in: SchemaIn$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions,
    out: SchemaOut$PaymentFlowsPrivatePaymentMethodsKakaoPayPaymentMethodOptions,
  };
