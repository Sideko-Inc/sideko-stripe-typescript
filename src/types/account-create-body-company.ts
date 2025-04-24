import {
  AccountCreateBodyCompanyAddress,
  External$AccountCreateBodyCompanyAddress,
  Schemas$AccountCreateBodyCompanyAddress,
} from "./account-create-body-company-address";
import {
  AccountCreateBodyCompanyAddressKana,
  External$AccountCreateBodyCompanyAddressKana,
  Schemas$AccountCreateBodyCompanyAddressKana,
} from "./account-create-body-company-address-kana";
import {
  AccountCreateBodyCompanyAddressKanji,
  External$AccountCreateBodyCompanyAddressKanji,
  Schemas$AccountCreateBodyCompanyAddressKanji,
} from "./account-create-body-company-address-kanji";
import {
  AccountCreateBodyCompanyDirectorshipDeclaration,
  External$AccountCreateBodyCompanyDirectorshipDeclaration,
  Schemas$AccountCreateBodyCompanyDirectorshipDeclaration,
} from "./account-create-body-company-directorship-declaration";
import {
  AccountCreateBodyCompanyOwnershipDeclaration,
  External$AccountCreateBodyCompanyOwnershipDeclaration,
  Schemas$AccountCreateBodyCompanyOwnershipDeclaration,
} from "./account-create-body-company-ownership-declaration";
import {
  AccountCreateBodyCompanyVerification,
  External$AccountCreateBodyCompanyVerification,
  Schemas$AccountCreateBodyCompanyVerification,
} from "./account-create-body-company-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
 */
export type AccountCreateBodyCompany = {
  address?: AccountCreateBodyCompanyAddress | undefined;
  addressKana?: AccountCreateBodyCompanyAddressKana | undefined;
  addressKanji?: AccountCreateBodyCompanyAddressKanji | undefined;
  directorsProvided?: boolean | undefined;
  directorshipDeclaration?:
    | AccountCreateBodyCompanyDirectorshipDeclaration
    | undefined;
  executivesProvided?: boolean | undefined;
  exportLicenseId?: string | undefined;
  exportPurposeCode?: string | undefined;
  name?: string | undefined;
  nameKana?: string | undefined;
  nameKanji?: string | undefined;
  ownersProvided?: boolean | undefined;
  ownershipDeclaration?:
    | AccountCreateBodyCompanyOwnershipDeclaration
    | undefined;
  ownershipExemptionReason?:
    | (
        | "qualified_entity_exceeds_ownership_threshold"
        | "qualifies_as_financial_institution"
      )
    | undefined;
  phone?: string | undefined;
  registrationNumber?: string | undefined;
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
  taxId?: string | undefined;
  taxIdRegistrar?: string | undefined;
  vatId?: string | undefined;
  verification?: AccountCreateBodyCompanyVerification | undefined;
};

/**
 * @internal
 * AccountCreateBodyCompany without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCompany = {
  address?: External$AccountCreateBodyCompanyAddress | undefined;
  address_kana?: External$AccountCreateBodyCompanyAddressKana | undefined;
  address_kanji?: External$AccountCreateBodyCompanyAddressKanji | undefined;
  directors_provided?: boolean | undefined;
  directorship_declaration?:
    | External$AccountCreateBodyCompanyDirectorshipDeclaration
    | undefined;
  executives_provided?: boolean | undefined;
  export_license_id?: string | undefined;
  export_purpose_code?: string | undefined;
  name?: string | undefined;
  name_kana?: string | undefined;
  name_kanji?: string | undefined;
  owners_provided?: boolean | undefined;
  ownership_declaration?:
    | External$AccountCreateBodyCompanyOwnershipDeclaration
    | undefined;
  ownership_exemption_reason?:
    | (
        | "qualified_entity_exceeds_ownership_threshold"
        | "qualifies_as_financial_institution"
      )
    | undefined;
  phone?: string | undefined;
  registration_number?: string | undefined;
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
  tax_id?: string | undefined;
  tax_id_registrar?: string | undefined;
  vat_id?: string | undefined;
  verification?: External$AccountCreateBodyCompanyVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCompany
 */
const SchemaIn$AccountCreateBodyCompany: z.ZodType<
  AccountCreateBodyCompany, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$AccountCreateBodyCompanyAddress.in.optional(),
    address_kana: Schemas$AccountCreateBodyCompanyAddressKana.in.optional(),
    address_kanji: Schemas$AccountCreateBodyCompanyAddressKanji.in.optional(),
    directors_provided: z.boolean().optional(),
    directorship_declaration:
      Schemas$AccountCreateBodyCompanyDirectorshipDeclaration.in.optional(),
    executives_provided: z.boolean().optional(),
    export_license_id: z.string().optional(),
    export_purpose_code: z.string().optional(),
    name: z.string().optional(),
    name_kana: z.string().optional(),
    name_kanji: z.string().optional(),
    owners_provided: z.boolean().optional(),
    ownership_declaration:
      Schemas$AccountCreateBodyCompanyOwnershipDeclaration.in.optional(),
    ownership_exemption_reason: z
      .enum([
        "qualified_entity_exceeds_ownership_threshold",
        "qualifies_as_financial_institution",
      ])
      .optional(),
    phone: z.string().optional(),
    registration_number: z.string().optional(),
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
    tax_id: z.string().optional(),
    tax_id_registrar: z.string().optional(),
    vat_id: z.string().optional(),
    verification: Schemas$AccountCreateBodyCompanyVerification.in.optional(),
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
      registration_number: "registrationNumber",
      structure: "structure",
      tax_id: "taxId",
      tax_id_registrar: "taxIdRegistrar",
      vat_id: "vatId",
      verification: "verification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCompany
 */
const SchemaOut$AccountCreateBodyCompany: z.ZodType<
  External$AccountCreateBodyCompany, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCompany // the object to be transformed
> = z
  .object({
    address: Schemas$AccountCreateBodyCompanyAddress.out.optional(),
    addressKana: Schemas$AccountCreateBodyCompanyAddressKana.out.optional(),
    addressKanji: Schemas$AccountCreateBodyCompanyAddressKanji.out.optional(),
    directorsProvided: z.boolean().optional(),
    directorshipDeclaration:
      Schemas$AccountCreateBodyCompanyDirectorshipDeclaration.out.optional(),
    executivesProvided: z.boolean().optional(),
    exportLicenseId: z.string().optional(),
    exportPurposeCode: z.string().optional(),
    name: z.string().optional(),
    nameKana: z.string().optional(),
    nameKanji: z.string().optional(),
    ownersProvided: z.boolean().optional(),
    ownershipDeclaration:
      Schemas$AccountCreateBodyCompanyOwnershipDeclaration.out.optional(),
    ownershipExemptionReason: z
      .enum([
        "qualified_entity_exceeds_ownership_threshold",
        "qualifies_as_financial_institution",
      ])
      .optional(),
    phone: z.string().optional(),
    registrationNumber: z.string().optional(),
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
    taxId: z.string().optional(),
    taxIdRegistrar: z.string().optional(),
    vatId: z.string().optional(),
    verification: Schemas$AccountCreateBodyCompanyVerification.out.optional(),
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
      registrationNumber: "registration_number",
      structure: "structure",
      taxId: "tax_id",
      taxIdRegistrar: "tax_id_registrar",
      vatId: "vat_id",
      verification: "verification",
    });
  });

export const Schemas$AccountCreateBodyCompany = {
  in: SchemaIn$AccountCreateBodyCompany,
  out: SchemaOut$AccountCreateBodyCompany,
};
