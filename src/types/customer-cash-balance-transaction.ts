import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft,
  External$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft,
} from "./customer-balance-resource-cash-balance-transaction-resource-adjusted-for-overdraft";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction,
  External$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction,
} from "./customer-balance-resource-cash-balance-transaction-resource-applied-to-payment-transaction";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction,
  External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction,
} from "./customer-balance-resource-cash-balance-transaction-resource-funded-transaction";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction,
  External$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction,
} from "./customer-balance-resource-cash-balance-transaction-resource-refunded-from-payment-transaction";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance,
  External$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance,
} from "./customer-balance-resource-cash-balance-transaction-resource-transferred-to-balance";
import {
  CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction,
  External$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction,
  Schemas$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction,
} from "./customer-balance-resource-cash-balance-transaction-resource-unapplied-from-payment-transaction";
import { types } from "@sideko-inc/stripe";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Customers with certain payments enabled have a cash balance, representing funds that were paid
 * by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions
 * represent when funds are moved into or out of this balance. This includes funding by the customer, allocation
 * to payments, and refunds to the customer.
 */
export type CustomerCashBalanceTransaction = {
  adjustedForOverdraft?:
    | CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft
    | undefined;
  appliedToPayment?:
    | CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction
    | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The customer whose available cash balance changed as a result of this transaction.
   */
  customer: string | Customer;
  /**
   * The total available cash balance for the specified currency after this transaction was applied. Represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  endingBalance: number;
  funded?:
    | CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction
    | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The amount by which the cash balance changed, represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). A positive value represents funds being added to the cash balance, a negative value represents funds being removed from the cash balance.
   */
  netAmount: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "customer_cash_balance_transaction";
  refundedFromPayment?:
    | CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction
    | undefined;
  transferredToBalance?:
    | CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance
    | undefined;
  /**
   * The type of the cash balance transaction. New types may be added in future. See [Customer Balance](https://stripe.com/docs/payments/customer-balance#types) to learn more about these types.
   */
  type:
    | "adjusted_for_overdraft"
    | "applied_to_payment"
    | "funded"
    | "funding_reversed"
    | "refunded_from_payment"
    | "return_canceled"
    | "return_initiated"
    | "transferred_to_balance"
    | "unapplied_from_payment";
  unappliedFromPayment?:
    | CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction
    | undefined;
};

/**
 * @internal
 * CustomerCashBalanceTransaction without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCashBalanceTransaction = {
  adjusted_for_overdraft?:
    | External$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft
    | undefined;
  applied_to_payment?:
    | External$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction
    | undefined;
  created: number;
  currency: string;
  customer: string | External$Customer;
  ending_balance: number;
  funded?:
    | External$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction
    | undefined;
  id: string;
  livemode: boolean;
  net_amount: number;
  object: "customer_cash_balance_transaction";
  refunded_from_payment?:
    | External$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction
    | undefined;
  transferred_to_balance?:
    | External$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance
    | undefined;
  type:
    | "adjusted_for_overdraft"
    | "applied_to_payment"
    | "funded"
    | "funding_reversed"
    | "refunded_from_payment"
    | "return_canceled"
    | "return_initiated"
    | "transferred_to_balance"
    | "unapplied_from_payment";
  unapplied_from_payment?:
    | External$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCashBalanceTransaction
 */
const SchemaIn$CustomerCashBalanceTransaction: z.ZodType<
  CustomerCashBalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    adjusted_for_overdraft: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft.in.optional(),
    ),
    applied_to_payment: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction.in.optional(),
    ),
    created: z.number().int(),
    currency: z.string(),
    customer: z.union([z.string(), z.lazy(() => Schemas$Customer.in)]),
    ending_balance: z.number().int(),
    funded:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    net_amount: z.number().int(),
    object: z.enum(["customer_cash_balance_transaction"]),
    refunded_from_payment: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction.in.optional(),
    ),
    transferred_to_balance: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance.in.optional(),
    ),
    type: z.enum([
      "adjusted_for_overdraft",
      "applied_to_payment",
      "funded",
      "funding_reversed",
      "refunded_from_payment",
      "return_canceled",
      "return_initiated",
      "transferred_to_balance",
      "unapplied_from_payment",
    ]),
    unapplied_from_payment: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjusted_for_overdraft: "adjustedForOverdraft",
      applied_to_payment: "appliedToPayment",
      created: "created",
      currency: "currency",
      customer: "customer",
      ending_balance: "endingBalance",
      funded: "funded",
      id: "id",
      livemode: "livemode",
      net_amount: "netAmount",
      object: "object",
      refunded_from_payment: "refundedFromPayment",
      transferred_to_balance: "transferredToBalance",
      type: "type",
      unapplied_from_payment: "unappliedFromPayment",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCashBalanceTransaction
 */
const SchemaOut$CustomerCashBalanceTransaction: z.ZodType<
  External$CustomerCashBalanceTransaction, // output type of this zod object
  z.ZodTypeDef,
  CustomerCashBalanceTransaction // the object to be transformed
> = z
  .object({
    adjustedForOverdraft: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft.out.optional(),
    ),
    appliedToPayment: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction.out.optional(),
    ),
    created: z.number().int(),
    currency: z.string(),
    customer: z.union([z.string(), z.lazy(() => Schemas$Customer.out)]),
    endingBalance: z.number().int(),
    funded:
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    netAmount: z.number().int(),
    object: z.enum(["customer_cash_balance_transaction"]),
    refundedFromPayment: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction.out.optional(),
    ),
    transferredToBalance: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance.out.optional(),
    ),
    type: z.enum([
      "adjusted_for_overdraft",
      "applied_to_payment",
      "funded",
      "funding_reversed",
      "refunded_from_payment",
      "return_canceled",
      "return_initiated",
      "transferred_to_balance",
      "unapplied_from_payment",
    ]),
    unappliedFromPayment: z.lazy(() =>
      Schemas$CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      adjustedForOverdraft: "adjusted_for_overdraft",
      appliedToPayment: "applied_to_payment",
      created: "created",
      currency: "currency",
      customer: "customer",
      endingBalance: "ending_balance",
      funded: "funded",
      id: "id",
      livemode: "livemode",
      netAmount: "net_amount",
      object: "object",
      refundedFromPayment: "refunded_from_payment",
      transferredToBalance: "transferred_to_balance",
      type: "type",
      unappliedFromPayment: "unapplied_from_payment",
    });
  });

export const Schemas$CustomerCashBalanceTransaction = {
  in: SchemaIn$CustomerCashBalanceTransaction,
  out: SchemaOut$CustomerCashBalanceTransaction,
};
