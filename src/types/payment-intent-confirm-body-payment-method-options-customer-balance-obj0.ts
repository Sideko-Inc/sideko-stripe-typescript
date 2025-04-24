import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./payment-intent-confirm-body-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0 = {
  bankTransfer?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
    | undefined;
  fundingType?: "bank_transfer" | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: "bank_transfer" | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
    funding_type: z.enum(["bank_transfer"]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
    fundingType: z.enum(["bank_transfer"]).optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankTransfer: "bank_transfer",
      fundingType: "funding_type",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCustomerBalanceObj0,
  };
