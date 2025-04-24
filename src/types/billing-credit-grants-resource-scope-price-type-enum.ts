/**
 * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
 */
export type BillingCreditGrantsResourceScopePriceTypeEnum = "metered";
