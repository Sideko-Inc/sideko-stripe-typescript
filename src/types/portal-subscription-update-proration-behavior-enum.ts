/**
 * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`. Defaults to a value of `none` if you don't set it during creation.
 */
export type PortalSubscriptionUpdateProrationBehaviorEnum =
  | "always_invoice"
  | "create_prorations"
  | "none";
