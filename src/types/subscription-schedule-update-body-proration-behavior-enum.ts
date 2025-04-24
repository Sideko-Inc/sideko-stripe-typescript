/**
 * If the update changes the current phase, indicates whether the changes should be prorated. The default value is `create_prorations`.
 */
export type SubscriptionScheduleUpdateBodyProrationBehaviorEnum =
  | "always_invoice"
  | "create_prorations"
  | "none";
