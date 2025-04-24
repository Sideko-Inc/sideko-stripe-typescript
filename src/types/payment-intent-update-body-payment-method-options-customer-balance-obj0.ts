import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer,
} from "./payment-intent-update-body-payment-method-options-customer-balance-obj0-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0 = {
  bankTransfer?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
    | undefined;
  fundingType?: "bank_transfer" | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0 =
  {
    bank_transfer?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer
      | undefined;
    funding_type?: "bank_transfer" | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0 // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0BankTransfer.out.optional(),
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCustomerBalanceObj0,
  };
