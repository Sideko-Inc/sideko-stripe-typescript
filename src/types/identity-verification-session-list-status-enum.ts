/**
 * Only return VerificationSessions with this status. [Learn more about the lifecycle of sessions](https://stripe.com/docs/identity/how-sessions-work).
 */
export type IdentityVerificationSessionListStatusEnum =
  | "canceled"
  | "processing"
  | "requires_input"
  | "verified";
