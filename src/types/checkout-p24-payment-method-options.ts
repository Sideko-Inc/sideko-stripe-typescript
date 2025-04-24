import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutP24PaymentMethodOptions = {
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
   *
   * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
   *
   * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutP24PaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutP24PaymentMethodOptions = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutP24PaymentMethodOptions
 */
const SchemaIn$CheckoutP24PaymentMethodOptions: z.ZodType<
  CheckoutP24PaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutP24PaymentMethodOptions
 */
const SchemaOut$CheckoutP24PaymentMethodOptions: z.ZodType<
  External$CheckoutP24PaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutP24PaymentMethodOptions // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutP24PaymentMethodOptions = {
  in: SchemaIn$CheckoutP24PaymentMethodOptions,
  out: SchemaOut$CheckoutP24PaymentMethodOptions,
};
