import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutBoletoPaymentMethodOptions = {
  /**
   * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time.
   */
  expiresAfterDays: number;
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
};

/**
 * @internal
 * CheckoutBoletoPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutBoletoPaymentMethodOptions = {
  expires_after_days: number;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutBoletoPaymentMethodOptions
 */
const SchemaIn$CheckoutBoletoPaymentMethodOptions: z.ZodType<
  CheckoutBoletoPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_days: z.number().int(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_days: "expiresAfterDays",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutBoletoPaymentMethodOptions
 */
const SchemaOut$CheckoutBoletoPaymentMethodOptions: z.ZodType<
  External$CheckoutBoletoPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutBoletoPaymentMethodOptions // the object to be transformed
> = z
  .object({
    expiresAfterDays: z.number().int(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterDays: "expires_after_days",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutBoletoPaymentMethodOptions = {
  in: SchemaIn$CheckoutBoletoPaymentMethodOptions,
  out: SchemaOut$CheckoutBoletoPaymentMethodOptions,
};
