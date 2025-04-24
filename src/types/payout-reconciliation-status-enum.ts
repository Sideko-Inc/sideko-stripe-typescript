/**
 * If `completed`, you can use the [Balance Transactions API](https://stripe.com/docs/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout.
 */
export type PayoutReconciliationStatusEnum =
  | "completed"
  | "in_progress"
  | "not_applicable";
