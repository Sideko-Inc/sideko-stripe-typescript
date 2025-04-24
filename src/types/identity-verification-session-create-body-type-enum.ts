/**
 * The type of [verification check](https://stripe.com/docs/identity/verification-checks) to be performed. You must provide a `type` if not passing `verification_flow`.
 */
export type IdentityVerificationSessionCreateBodyTypeEnum =
  | "document"
  | "id_number";
