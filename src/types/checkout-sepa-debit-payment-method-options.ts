import {
  CheckoutPaymentMethodOptionsMandateOptionsSepaDebit,
  External$CheckoutPaymentMethodOptionsMandateOptionsSepaDebit,
  Schemas$CheckoutPaymentMethodOptionsMandateOptionsSepaDebit,
} from "./checkout-payment-method-options-mandate-options-sepa-debit";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutSepaDebitPaymentMethodOptions = {
  mandateOptions?:
    | CheckoutPaymentMethodOptionsMandateOptionsSepaDebit
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
   * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
   */
  targetDate?: string | undefined;
};

/**
 * @internal
 * CheckoutSepaDebitPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSepaDebitPaymentMethodOptions = {
  mandate_options?:
    | External$CheckoutPaymentMethodOptionsMandateOptionsSepaDebit
    | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  target_date?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSepaDebitPaymentMethodOptions
 */
const SchemaIn$CheckoutSepaDebitPaymentMethodOptions: z.ZodType<
  CheckoutSepaDebitPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$CheckoutPaymentMethodOptionsMandateOptionsSepaDebit.in.optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSepaDebitPaymentMethodOptions
 */
const SchemaOut$CheckoutSepaDebitPaymentMethodOptions: z.ZodType<
  External$CheckoutSepaDebitPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSepaDebitPaymentMethodOptions // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$CheckoutPaymentMethodOptionsMandateOptionsSepaDebit.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
    });
  });

export const Schemas$CheckoutSepaDebitPaymentMethodOptions = {
  in: SchemaIn$CheckoutSepaDebitPaymentMethodOptions,
  out: SchemaOut$CheckoutSepaDebitPaymentMethodOptions,
};
