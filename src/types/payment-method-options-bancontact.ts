import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsBancontact = {
  /**
   * Preferred language of the Bancontact authorization page that the customer is redirected to.
   */
  preferredLanguage: "de" | "en" | "fr" | "nl";
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
 * PaymentMethodOptionsBancontact without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsBancontact = {
  preferred_language: "de" | "en" | "fr" | "nl";
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsBancontact
 */
const SchemaIn$PaymentMethodOptionsBancontact: z.ZodType<
  PaymentMethodOptionsBancontact, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    preferred_language: z.enum(["de", "en", "fr", "nl"]),
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferred_language: "preferredLanguage",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsBancontact
 */
const SchemaOut$PaymentMethodOptionsBancontact: z.ZodType<
  External$PaymentMethodOptionsBancontact, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsBancontact // the object to be transformed
> = z
  .object({
    preferredLanguage: z.enum(["de", "en", "fr", "nl"]),
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      preferredLanguage: "preferred_language",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentMethodOptionsBancontact = {
  in: SchemaIn$PaymentMethodOptionsBancontact,
  out: SchemaOut$PaymentMethodOptionsBancontact,
};
