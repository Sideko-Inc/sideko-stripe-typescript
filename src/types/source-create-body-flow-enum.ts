/**
 * The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
 */
export type SourceCreateBodyFlowEnum =
  | "code_verification"
  | "none"
  | "receiver"
  | "redirect";
