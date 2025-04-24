import { types } from "@sideko-inc/stripe";

/**
 * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or `checkout_session_subscription_payment_canceled`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
 */
export type CustomerBalanceTransactionTypeEnum =
  | "adjustment"
  | "applied_to_invoice"
  | "checkout_session_subscription_payment"
  | "checkout_session_subscription_payment_canceled"
  | "credit_note"
  | "initial"
  | "invoice_overpaid"
  | "invoice_too_large"
  | "invoice_too_small"
  | "migration"
  | "unapplied_from_invoice"
  | "unspent_receiver_credit";
