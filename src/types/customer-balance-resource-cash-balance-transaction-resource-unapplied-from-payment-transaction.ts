import {
  External$PaymentIntent,
  PaymentIntent,
  Schemas$PaymentIntent,
} from "./payment-intent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction =
  {
    /**
     * The [Payment Intent](https://stripe.com/docs/api/payment_intents/object) that funds were unapplied from.
     */
    paymentIntent: string | PaymentIntent;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction =
  {
    payment_intent: string | External$PaymentIntent;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction // the object to be transformed
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

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction,
  };
