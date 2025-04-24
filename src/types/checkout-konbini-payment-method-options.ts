import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutKonbiniPaymentMethodOptions = {
  /**
   * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST.
   */
  expiresAfterDays?: number | null | undefined;
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
 * CheckoutKonbiniPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutKonbiniPaymentMethodOptions = {
  expires_after_days?: number | null | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutKonbiniPaymentMethodOptions
 */
const SchemaIn$CheckoutKonbiniPaymentMethodOptions: z.ZodType<
  CheckoutKonbiniPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_days: z.number().int().nullable().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_days: "expiresAfterDays",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutKonbiniPaymentMethodOptions
 */
const SchemaOut$CheckoutKonbiniPaymentMethodOptions: z.ZodType<
  External$CheckoutKonbiniPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutKonbiniPaymentMethodOptions // the object to be transformed
> = z
  .object({
    expiresAfterDays: z.number().int().nullable().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterDays: "expires_after_days",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutKonbiniPaymentMethodOptions = {
  in: SchemaIn$CheckoutKonbiniPaymentMethodOptions,
  out: SchemaOut$CheckoutKonbiniPaymentMethodOptions,
};
