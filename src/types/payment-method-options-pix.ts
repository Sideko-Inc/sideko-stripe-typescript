import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsPix = {
  /**
   * The number of seconds (between 10 and 1209600) after which Pix payment will expire.
   */
  expiresAfterSeconds?: number | null | undefined;
  /**
   * The timestamp at which the Pix expires.
   */
  expiresAt?: number | null | undefined;
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
 * PaymentMethodOptionsPix without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsPix = {
  expires_after_seconds?: number | null | undefined;
  expires_at?: number | null | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsPix
 */
const SchemaIn$PaymentMethodOptionsPix: z.ZodType<
  PaymentMethodOptionsPix, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_seconds: z.number().int().nullable().optional(),
    expires_at: z.number().int().nullable().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_seconds: "expiresAfterSeconds",
      expires_at: "expiresAt",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsPix
 */
const SchemaOut$PaymentMethodOptionsPix: z.ZodType<
  External$PaymentMethodOptionsPix, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsPix // the object to be transformed
> = z
  .object({
    expiresAfterSeconds: z.number().int().nullable().optional(),
    expiresAt: z.number().int().nullable().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterSeconds: "expires_after_seconds",
      expiresAt: "expires_at",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentMethodOptionsPix = {
  in: SchemaIn$PaymentMethodOptionsPix,
  out: SchemaOut$PaymentMethodOptionsPix,
};
