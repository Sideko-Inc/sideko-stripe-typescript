/**
 * Indicates the outcome of 3D Secure authentication.
 */
export type ThreeDSecureDetailsResultEnum =
  | "attempt_acknowledged"
  | "authenticated"
  | "exempted"
  | "failed"
  | "not_supported"
  | "processing_error";
