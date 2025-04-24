import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsPaypal = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: "manual" | undefined;
  /**
   * Preferred locale of the PayPal checkout page that the customer is redirected to.
   */
  preferredLocale?: string | null | undefined;
  /**
   * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
   */
  reference?: string | null | undefined;
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
 * PaymentMethodOptionsPaypal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsPaypal = {
  capture_method?: "manual" | undefined;
  preferred_locale?: string | null | undefined;
  reference?: string | null | undefined;
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsPaypal
 */
const SchemaIn$PaymentMethodOptionsPaypal: z.ZodType<
  PaymentMethodOptionsPaypal, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    preferred_locale: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      preferred_locale: "preferredLocale",
      reference: "reference",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsPaypal
 */
const SchemaOut$PaymentMethodOptionsPaypal: z.ZodType<
  External$PaymentMethodOptionsPaypal, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsPaypal // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    preferredLocale: z.string().nullable().optional(),
    reference: z.string().nullable().optional(),
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      preferredLocale: "preferred_locale",
      reference: "reference",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentMethodOptionsPaypal = {
  in: SchemaIn$PaymentMethodOptionsPaypal,
  out: SchemaOut$PaymentMethodOptionsPaypal,
};
