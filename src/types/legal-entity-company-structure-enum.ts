/**
 * The category identifying the legal structure of the company or legal entity. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
 */
export type LegalEntityCompanyStructureEnum =
  | "free_zone_establishment"
  | "free_zone_llc"
  | "government_instrumentality"
  | "governmental_unit"
  | "incorporated_non_profit"
  | "incorporated_partnership"
  | "limited_liability_partnership"
  | "llc"
  | "multi_member_llc"
  | "private_company"
  | "private_corporation"
  | "private_partnership"
  | "public_company"
  | "public_corporation"
  | "public_partnership"
  | "registered_charity"
  | "single_member_llc"
  | "sole_establishment"
  | "sole_proprietorship"
  | "tax_exempt_government_instrumentality"
  | "unincorporated_association"
  | "unincorporated_non_profit"
  | "unincorporated_partnership";
