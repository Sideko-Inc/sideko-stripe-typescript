import { External$Refund, Refund, Schemas$Refund } from "./refund";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction =
  {
    /**
     * The [Refund](https://stripe.com/docs/api/refunds/object) that moved these funds into the customer's cash balance.
     */
    refund: string | Refund;
  };

/**
 * @internal
 * CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction =
  {
    refund: string | External$Refund;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction
 */
const SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction: z.ZodType<
  CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    refund: z.union([z.string(), z.lazy(() => Schemas$Refund.in)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refund: "refund",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction
 */
const SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction: z.ZodType<
  External$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction, // output type of this zod object
  z.ZodTypeDef,
  CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction // the object to be transformed
> = z
  .object({
    refund: z.union([z.string(), z.lazy(() => Schemas$Refund.out)]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refund: "refund",
    });
  });

export const Schemas$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction =
  {
    in: SchemaIn$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction,
    out: SchemaOut$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction,
  };
