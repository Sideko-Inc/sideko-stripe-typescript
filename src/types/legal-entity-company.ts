import { Address, External$Address, Schemas$Address } from "./address";
import {
  External$LegalEntityCompanyVerification,
  LegalEntityCompanyVerification,
  Schemas$LegalEntityCompanyVerification,
} from "./legal-entity-company-verification";
import {
  External$LegalEntityDirectorshipDeclaration,
  LegalEntityDirectorshipDeclaration,
  Schemas$LegalEntityDirectorshipDeclaration,
} from "./legal-entity-directorship-declaration";
import {
  External$LegalEntityJapanAddress,
  LegalEntityJapanAddress,
  Schemas$LegalEntityJapanAddress,
} from "./legal-entity-japan-address";
import {
  External$LegalEntityUboDeclaration,
  LegalEntityUboDeclaration,
  Schemas$LegalEntityUboDeclaration,
} from "./legal-entity-ubo-declaration";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityCompany = {
  address?: Address | undefined;
  addressKana?: LegalEntityJapanAddress | undefined;
  addressKanji?: LegalEntityJapanAddress | undefined;
  /**
   * Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
   */
  directorsProvided?: boolean | undefined;
  directorshipDeclaration?: LegalEntityDirectorshipDeclaration | undefined;
  /**
   * Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided.
   */
  executivesProvided?: boolean | undefined;
  /**
   * The export license ID number of the company, also referred as Import Export Code (India only).
   */
  exportLicenseId?: string | undefined;
  /**
   * The purpose code to use for export transactions (India only).
   */
  exportPurposeCode?: string | undefined;
  /**
   * The company's legal name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  name?: string | null | undefined;
  /**
   * The Kana variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  nameKana?: string | null | undefined;
  /**
   * The Kanji variation of the company's legal name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  nameKanji?: string | null | undefined;
  /**
   * Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
   */
  ownersProvided?: boolean | undefined;
  ownershipDeclaration?: LegalEntityUboDeclaration | undefined;
  /**
   * This value is used to determine if a business is exempt from providing ultimate beneficial owners. See [this support article](https://support.stripe.com/questions/exemption-from-providing-ownership-details) and [changelog](https://docs.stripe.com/changelog/acacia/2025-01-27/ownership-exemption-reason-accounts-api) for more details.
   */
  ownershipExemptionReason?:
    | (
        | "qualified_entity_exceeds_ownership_threshold"
        | "qualifies_as_financial_institution"
      )
    | undefined;
  /**
   * The company's phone number (used for verification).
   */
  phone?: string | null | undefined;
  /**
   * The category identifying the legal structure of the company or legal entity. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
   */
  structure?:
    | (
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
        | "unincorporated_partnership"
      )
    | undefined;
  /**
   * Whether the company's business ID number was provided.
   */
  taxIdProvided?: boolean | undefined;
  /**
   * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
   */
  taxIdRegistrar?: string | undefined;
  /**
   * Whether the company's business VAT number was provided.
   */
  vatIdProvided?: boolean | undefined;
  verification?: LegalEntityCompanyVerification | undefined;
};

/**
 * @internal
 * LegalEntityCompany without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityCompany = {
  address?: External$Address | undefined;
  address_kana?: External$LegalEntityJapanAddress | undefined;
  address_kanji?: External$LegalEntityJapanAddress | undefined;
  directors_provided?: boolean | undefined;
  directorship_declaration?:
    | External$LegalEntityDirectorshipDeclaration
    | undefined;
  executives_provided?: boolean | undefined;
  export_license_id?: string | undefined;
  export_purpose_code?: string | undefined;
  name?: string | null | undefined;
  name_kana?: string | null | undefined;
  name_kanji?: string | null | undefined;
  owners_provided?: boolean | undefined;
  ownership_declaration?: External$LegalEntityUboDeclaration | undefined;
  ownership_exemption_reason?:
    | (
        | "qualified_entity_exceeds_ownership_threshold"
        | "qualifies_as_financial_institution"
      )
    | undefined;
  phone?: string | null | undefined;
  structure?:
    | (
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
        | "unincorporated_partnership"
      )
    | undefined;
  tax_id_provided?: boolean | undefined;
  tax_id_registrar?: string | undefined;
  vat_id_provided?: boolean | undefined;
  verification?: External$LegalEntityCompanyVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityCompany
 */
const SchemaIn$LegalEntityCompany: z.ZodType<
  LegalEntityCompany, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in.optional(),
    address_kana: Schemas$LegalEntityJapanAddress.in.optional(),
    address_kanji: Schemas$LegalEntityJapanAddress.in.optional(),
    directors_provided: z.boolean().optional(),
    directorship_declaration:
      Schemas$LegalEntityDirectorshipDeclaration.in.optional(),
    executives_provided: z.boolean().optional(),
    export_license_id: z.string().optional(),
    export_purpose_code: z.string().optional(),
    name: z.string().nullable().optional(),
    name_kana: z.string().nullable().optional(),
    name_kanji: z.string().nullable().optional(),
    owners_provided: z.boolean().optional(),
    ownership_declaration: Schemas$LegalEntityUboDeclaration.in.optional(),
    ownership_exemption_reason: z
      .enum([
        "qualified_entity_exceeds_ownership_threshold",
        "qualifies_as_financial_institution",
      ])
      .optional(),
    phone: z.string().nullable().optional(),
    structure: z
      .enum([
        "free_zone_establishment",
        "free_zone_llc",
        "government_instrumentality",
        "governmental_unit",
        "incorporated_non_profit",
        "incorporated_partnership",
        "limited_liability_partnership",
        "llc",
        "multi_member_llc",
        "private_company",
        "private_corporation",
        "private_partnership",
        "public_company",
        "public_corporation",
        "public_partnership",
        "registered_charity",
        "single_member_llc",
        "sole_establishment",
        "sole_proprietorship",
        "tax_exempt_government_instrumentality",
        "unincorporated_association",
        "unincorporated_non_profit",
        "unincorporated_partnership",
      ])
      .optional(),
    tax_id_provided: z.boolean().optional(),
    tax_id_registrar: z.string().optional(),
    vat_id_provided: z.boolean().optional(),
    verification: z.lazy(() =>
      Schemas$LegalEntityCompanyVerification.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      address_kana: "addressKana",
      address_kanji: "addressKanji",
      directors_provided: "directorsProvided",
      directorship_declaration: "directorshipDeclaration",
      executives_provided: "executivesProvided",
      export_license_id: "exportLicenseId",
      export_purpose_code: "exportPurposeCode",
      name: "name",
      name_kana: "nameKana",
      name_kanji: "nameKanji",
      owners_provided: "ownersProvided",
      ownership_declaration: "ownershipDeclaration",
      ownership_exemption_reason: "ownershipExemptionReason",
      phone: "phone",
      structure: "structure",
      tax_id_provided: "taxIdProvided",
      tax_id_registrar: "taxIdRegistrar",
      vat_id_provided: "vatIdProvided",
      verification: "verification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityCompany
 */
const SchemaOut$LegalEntityCompany: z.ZodType<
  External$LegalEntityCompany, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityCompany // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out.optional(),
    addressKana: Schemas$LegalEntityJapanAddress.out.optional(),
    addressKanji: Schemas$LegalEntityJapanAddress.out.optional(),
    directorsProvided: z.boolean().optional(),
    directorshipDeclaration:
      Schemas$LegalEntityDirectorshipDeclaration.out.optional(),
    executivesProvided: z.boolean().optional(),
    exportLicenseId: z.string().optional(),
    exportPurposeCode: z.string().optional(),
    name: z.string().nullable().optional(),
    nameKana: z.string().nullable().optional(),
    nameKanji: z.string().nullable().optional(),
    ownersProvided: z.boolean().optional(),
    ownershipDeclaration: Schemas$LegalEntityUboDeclaration.out.optional(),
    ownershipExemptionReason: z
      .enum([
        "qualified_entity_exceeds_ownership_threshold",
        "qualifies_as_financial_institution",
      ])
      .optional(),
    phone: z.string().nullable().optional(),
    structure: z
      .enum([
        "free_zone_establishment",
        "free_zone_llc",
        "government_instrumentality",
        "governmental_unit",
        "incorporated_non_profit",
        "incorporated_partnership",
        "limited_liability_partnership",
        "llc",
        "multi_member_llc",
        "private_company",
        "private_corporation",
        "private_partnership",
        "public_company",
        "public_corporation",
        "public_partnership",
        "registered_charity",
        "single_member_llc",
        "sole_establishment",
        "sole_proprietorship",
        "tax_exempt_government_instrumentality",
        "unincorporated_association",
        "unincorporated_non_profit",
        "unincorporated_partnership",
      ])
      .optional(),
    taxIdProvided: z.boolean().optional(),
    taxIdRegistrar: z.string().optional(),
    vatIdProvided: z.boolean().optional(),
    verification: z.lazy(() =>
      Schemas$LegalEntityCompanyVerification.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      addressKana: "address_kana",
      addressKanji: "address_kanji",
      directorsProvided: "directors_provided",
      directorshipDeclaration: "directorship_declaration",
      executivesProvided: "executives_provided",
      exportLicenseId: "export_license_id",
      exportPurposeCode: "export_purpose_code",
      name: "name",
      nameKana: "name_kana",
      nameKanji: "name_kanji",
      ownersProvided: "owners_provided",
      ownershipDeclaration: "ownership_declaration",
      ownershipExemptionReason: "ownership_exemption_reason",
      phone: "phone",
      structure: "structure",
      taxIdProvided: "tax_id_provided",
      taxIdRegistrar: "tax_id_registrar",
      vatIdProvided: "vat_id_provided",
      verification: "verification",
    });
  });

export const Schemas$LegalEntityCompany = {
  in: SchemaIn$LegalEntityCompany,
  out: SchemaOut$LegalEntityCompany,
};
