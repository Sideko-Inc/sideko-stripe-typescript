import {
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer,
} from "./checkout-session-create-body-payment-method-options-customer-balance-bank-transfer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance = {
  bankTransfer?:
    | CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer
    | undefined;
  fundingType?: "bank_transfer" | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance =
  {
    bank_transfer?:
      | External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer
      | undefined;
    funding_type?: "bank_transfer" | undefined;
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_transfer:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance // the object to be transformed
> = z
  .object({
    bankTransfer:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalanceBankTransfer.out.optional(),
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

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance =
  {
    in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance,
    out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsCustomerBalance,
  };
