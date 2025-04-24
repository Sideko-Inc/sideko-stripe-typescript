/**
 * If Stripe disabled automatic tax, this enum describes why.
 */
export type AutomaticTaxDisabledReasonEnum =
  | "finalization_requires_location_inputs"
  | "finalization_system_error";
