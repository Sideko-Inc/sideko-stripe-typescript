/**
 * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
 */
export type LegalEntityCompanyOwnershipExemptionReasonEnum =
  | "qualified_entity_exceeds_ownership_threshold"
  | "qualifies_as_financial_institution";
