import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction =
  {
    /**
     * The [Payment Intent](https://stripe.com/docs/api/payment_intents/object) that funds were applied to.
     */
    paymentIntent: string | PaymentIntent;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction =
  {
    payment_intent: string | External$PaymentIntent;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_intent: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentIntent.in),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_intent: "paymentIntent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction // the object to be transformed
> = z
  .object({
    paymentIntent: z.union([
      z.string(),
      z.lazy(() => Schemas$PaymentIntent.out),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentIntent: "payment_intent",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction,
  };
