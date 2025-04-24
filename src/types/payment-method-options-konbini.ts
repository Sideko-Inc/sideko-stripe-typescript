import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodOptionsKonbini = {
  /**
   * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores.
   */
  confirmationNumber?: string | null | undefined;
  /**
   * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST.
   */
  expiresAfterDays?: number | null | undefined;
  /**
   * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
   */
  expiresAt?: number | null | undefined;
  /**
   * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
   */
  productDescription?: string | null | undefined;
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
 * PaymentMethodOptionsKonbini without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodOptionsKonbini = {
  confirmation_number?: string | null | undefined;
  expires_after_days?: number | null | undefined;
  expires_at?: number | null | undefined;
  product_description?: string | null | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodOptionsKonbini
 */
const SchemaIn$PaymentMethodOptionsKonbini: z.ZodType<
  PaymentMethodOptionsKonbini, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    confirmation_number: z.string().nullable().optional(),
    expires_after_days: z.number().int().nullable().optional(),
    expires_at: z.number().int().nullable().optional(),
    product_description: z.string().nullable().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmation_number: "confirmationNumber",
      expires_after_days: "expiresAfterDays",
      expires_at: "expiresAt",
      product_description: "productDescription",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodOptionsKonbini
 */
const SchemaOut$PaymentMethodOptionsKonbini: z.ZodType<
  External$PaymentMethodOptionsKonbini, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodOptionsKonbini // the object to be transformed
> = z
  .object({
    confirmationNumber: z.string().nullable().optional(),
    expiresAfterDays: z.number().int().nullable().optional(),
    expiresAt: z.number().int().nullable().optional(),
    productDescription: z.string().nullable().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      confirmationNumber: "confirmation_number",
      expiresAfterDays: "expires_after_days",
      expiresAt: "expires_at",
      productDescription: "product_description",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentMethodOptionsKonbini = {
  in: SchemaIn$PaymentMethodOptionsKonbini,
  out: SchemaOut$PaymentMethodOptionsKonbini,
};
