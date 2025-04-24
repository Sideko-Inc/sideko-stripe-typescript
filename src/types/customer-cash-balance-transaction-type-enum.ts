import { types } from "@sideko-inc/stripe";

/**
 * The type of the cash balance transaction. New types may be added in future. See [Customer Balance](https://stripe.com/docs/payments/customer-balance#types) to learn more about these types.
 */
export type CustomerCashBalanceTransactionTypeEnum =
  | "adjusted_for_overdraft"
  | "applied_to_payment"
  | "funded"
  | "funding_reversed"
  | "refunded_from_payment"
  | "return_canceled"
  | "return_initiated"
  | "transferred_to_balance"
  | "unapplied_from_payment";
