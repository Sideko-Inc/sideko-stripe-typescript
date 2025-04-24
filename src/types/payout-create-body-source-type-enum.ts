/**
 * The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the Balances API. One of `bank_account`, `card`, or `fpx`.
 */
export type PayoutCreateBodySourceTypeEnum = "bank_account" | "card" | "fpx";
