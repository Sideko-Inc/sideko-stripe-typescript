import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./payment-intent-create-body-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0 = {
  bankTransfer?:
    | PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
    | undefined;
  fundingType?: "bank_transfer" | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: "bank_transfer" | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCustomerBalanceObj0,
  };
