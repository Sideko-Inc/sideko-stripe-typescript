/**
 * Status of this VerificationSession. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
 */
export type IdentityVerificationSessionStatusEnum =
  | "canceled"
  | "processing"
  | "requires_input"
  | "verified";
