import {
  External$LinkedAccountOptionsUsBankAccount,
  LinkedAccountOptionsUsBankAccount,
  Schemas$LinkedAccountOptionsUsBankAccount,
} from "./linked-account-options-us-bank-account";
import {
  External$PaymentMethodOptionsUsBankAccountMandateOptions,
  PaymentMethodOptionsUsBankAccountMandateOptions,
  Schemas$PaymentMethodOptionsUsBankAccountMandateOptions,
} from "./payment-method-options-us-bank-account-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentPaymentMethodOptionsUsBankAccount1 = {
  financialConnections?: LinkedAccountOptionsUsBankAccount | undefined;
  mandateOptions?: PaymentMethodOptionsUsBankAccountMandateOptions | undefined;
  /**
   * Preferred transaction settlement speed
   */
  preferredSettlementSpeed?: ("fastest" | "standard") | undefined;
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
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * PaymentIntentPaymentMethodOptionsUsBankAccount1 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentPaymentMethodOptionsUsBankAccount1 = {
  financial_connections?:
    | External$LinkedAccountOptionsUsBankAccount
    | undefined;
  mandate_options?:
    | External$PaymentMethodOptionsUsBankAccountMandateOptions
    | undefined;
  preferred_settlement_speed?: ("fastest" | "standard") | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  target_date?: string | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentPaymentMethodOptionsUsBankAccount1
 */
const SchemaIn$PaymentIntentPaymentMethodOptionsUsBankAccount1: z.ZodType<
  PaymentIntentPaymentMethodOptionsUsBankAccount1, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    financial_connections:
      Schemas$LinkedAccountOptionsUsBankAccount.in.optional(),
    mandate_options:
      Schemas$PaymentMethodOptionsUsBankAccountMandateOptions.in.optional(),
    preferred_settlement_speed: z.enum(["fastest", "standard"]).optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financial_connections: "financialConnections",
      mandate_options: "mandateOptions",
      preferred_settlement_speed: "preferredSettlementSpeed",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentPaymentMethodOptionsUsBankAccount1
 */
const SchemaOut$PaymentIntentPaymentMethodOptionsUsBankAccount1: z.ZodType<
  External$PaymentIntentPaymentMethodOptionsUsBankAccount1, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentPaymentMethodOptionsUsBankAccount1 // the object to be transformed
> = z
  .object({
    financialConnections:
      Schemas$LinkedAccountOptionsUsBankAccount.out.optional(),
    mandateOptions:
      Schemas$PaymentMethodOptionsUsBankAccountMandateOptions.out.optional(),
    preferredSettlementSpeed: z.enum(["fastest", "standard"]).optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      financialConnections: "financial_connections",
      mandateOptions: "mandate_options",
      preferredSettlementSpeed: "preferred_settlement_speed",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$PaymentIntentPaymentMethodOptionsUsBankAccount1 = {
  in: SchemaIn$PaymentIntentPaymentMethodOptionsUsBankAccount1,
  out: SchemaOut$PaymentIntentPaymentMethodOptionsUsBankAccount1,
};
