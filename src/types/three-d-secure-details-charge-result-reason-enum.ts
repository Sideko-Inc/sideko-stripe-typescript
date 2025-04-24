/**
 * Additional information about why 3D Secure succeeded or failed based
 * on the `result`.
 */
export type ThreeDSecureDetailsChargeResultReasonEnum =
  | "abandoned"
  | "bypassed"
  | "canceled"
  | "card_not_enrolled"
  | "network_not_supported"
  | "protocol_error"
  | "rejected";
