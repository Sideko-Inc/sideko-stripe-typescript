/**
 * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
 */
export type TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetailsTypeEnum =
  | "balance"
  | "financial_account"
  | "issuing_card"
  | "stripe"
  | "us_bank_account";
