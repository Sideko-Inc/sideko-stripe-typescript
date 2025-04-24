/**
 * Indicates the reason why the invoice was created.
 *
 * * `manual`: Unrelated to a subscription, for example, created via the invoice editor.
 * * `subscription`: No longer in use. Applies to subscriptions from before May 2018 where no distinction was made between updates, cycles, and thresholds.
 * * `subscription_create`: A new subscription was created.
 * * `subscription_cycle`: A subscription advanced into a new period.
 * * `subscription_threshold`: A subscription reached a billing threshold.
 * * `subscription_update`: A subscription was updated.
 * * `upcoming`: Reserved for simulated invoices, per the upcoming invoice endpoint.
 */
export type InvoiceBillingReasonEnum =
  | "automatic_pending_invoice_item_invoice"
  | "manual"
  | "quote_accept"
  | "subscription"
  | "subscription_create"
  | "subscription_cycle"
  | "subscription_threshold"
  | "subscription_update"
  | "upcoming";
