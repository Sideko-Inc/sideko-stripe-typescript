import {
  External$LinkedAccountOptionsUsBankAccount,
  LinkedAccountOptionsUsBankAccount,
  Schemas$LinkedAccountOptionsUsBankAccount,
} from "./linked-account-options-us-bank-account";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutUsBankAccountPaymentMethodOptions = {
  financialConnections?: LinkedAccountOptionsUsBankAccount | undefined;
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
  /**
   * Bank account verification method.
   */
  verificationMethod?: ("automatic" | "instant") | undefined;
};

/**
 * @internal
 * CheckoutUsBankAccountPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutUsBankAccountPaymentMethodOptions = {
  financial_connections?:
    | External$LinkedAccountOptionsUsBankAccount
    | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  target_date?: string | undefined;
  verification_method?: ("automatic" | "instant") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutUsBankAccountPaymentMethodOptions
 */
const SchemaIn$CheckoutUsBankAccountPaymentMethodOptions: z.ZodType<
  CheckoutUsBankAccountPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$LinkedAccountOptionsUsBankAccount.in.optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
    verification_method: z.enum(["automatic", "instant"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_connections: "financialConnections",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutUsBankAccountPaymentMethodOptions
 */
const SchemaOut$CheckoutUsBankAccountPaymentMethodOptions: z.ZodType<
  External$CheckoutUsBankAccountPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutUsBankAccountPaymentMethodOptions // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$LinkedAccountOptionsUsBankAccount.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
    verificationMethod: z.enum(["automatic", "instant"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialConnections: "financial_connections",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$CheckoutUsBankAccountPaymentMethodOptions = {
  in: SchemaIn$CheckoutUsBankAccountPaymentMethodOptions,
  out: SchemaOut$CheckoutUsBankAccountPaymentMethodOptions,
};
