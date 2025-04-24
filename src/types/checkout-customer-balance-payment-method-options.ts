import {
  CheckoutCustomerBalanceBankTransferPaymentMethodOptions,
  External$CheckoutCustomerBalanceBankTransferPaymentMethodOptions,
  Schemas$CheckoutCustomerBalanceBankTransferPaymentMethodOptions,
} from "./checkout-customer-balance-bank-transfer-payment-method-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutCustomerBalancePaymentMethodOptions = {
  bankTransfer?:
    | CheckoutCustomerBalanceBankTransferPaymentMethodOptions
    | undefined;
  /**
   * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
   */
  fundingType?: "bank_transfer" | null | undefined;
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
 * CheckoutCustomerBalancePaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutCustomerBalancePaymentMethodOptions = {
  bank_transfer?:
    | External$CheckoutCustomerBalanceBankTransferPaymentMethodOptions
    | undefined;
  funding_type?: "bank_transfer" | null | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutCustomerBalancePaymentMethodOptions
 */
const SchemaIn$CheckoutCustomerBalancePaymentMethodOptions: z.ZodType<
  CheckoutCustomerBalancePaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$CheckoutCustomerBalanceBankTransferPaymentMethodOptions.in.optional(),
    funding_type: z.enum(["bank_transfer"]).nullable().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_transfer: "bankTransfer",
      funding_type: "fundingType",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutCustomerBalancePaymentMethodOptions
 */
const SchemaOut$CheckoutCustomerBalancePaymentMethodOptions: z.ZodType<
  External$CheckoutCustomerBalancePaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutCustomerBalancePaymentMethodOptions // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$CheckoutCustomerBalanceBankTransferPaymentMethodOptions.out.optional(),
    fundingType: z.enum(["bank_transfer"]).nullable().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutCustomerBalancePaymentMethodOptions = {
  in: SchemaIn$CheckoutCustomerBalancePaymentMethodOptions,
  out: SchemaOut$CheckoutCustomerBalancePaymentMethodOptions,
};
