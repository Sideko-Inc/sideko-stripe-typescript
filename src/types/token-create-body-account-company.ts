import {
  External$TokenCreateBodyAccountCompanyAddress,
  Schemas$TokenCreateBodyAccountCompanyAddress,
  TokenCreateBodyAccountCompanyAddress,
} from "./token-create-body-account-company-address";
import {
  External$TokenCreateBodyAccountCompanyAddressKana,
  Schemas$TokenCreateBodyAccountCompanyAddressKana,
  TokenCreateBodyAccountCompanyAddressKana,
} from "./token-create-body-account-company-address-kana";
import {
  External$TokenCreateBodyAccountCompanyAddressKanji,
  Schemas$TokenCreateBodyAccountCompanyAddressKanji,
  TokenCreateBodyAccountCompanyAddressKanji,
} from "./token-create-body-account-company-address-kanji";
import {
  External$TokenCreateBodyAccountCompanyDirectorshipDeclaration,
  Schemas$TokenCreateBodyAccountCompanyDirectorshipDeclaration,
  TokenCreateBodyAccountCompanyDirectorshipDeclaration,
} from "./token-create-body-account-company-directorship-declaration";
import {
  External$TokenCreateBodyAccountCompanyOwnershipDeclaration,
  Schemas$TokenCreateBodyAccountCompanyOwnershipDeclaration,
  TokenCreateBodyAccountCompanyOwnershipDeclaration,
} from "./token-create-body-account-company-ownership-declaration";
import {
  External$TokenCreateBodyAccountCompanyVerification,
  Schemas$TokenCreateBodyAccountCompanyVerification,
  TokenCreateBodyAccountCompanyVerification,
} from "./token-create-body-account-company-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountCompany
 */
export type TokenCreateBodyAccountCompany = {
  address?: TokenCreateBodyAccountCompanyAddress | undefined;
  addressKana?: TokenCreateBodyAccountCompanyAddressKana | undefined;
  addressKanji?: TokenCreateBodyAccountCompanyAddressKanji | undefined;
  directorsProvided?: boolean | undefined;
  directorshipDeclaration?:
    | TokenCreateBodyAccountCompanyDirectorshipDeclaration
    | undefined;
  executivesProvided?: boolean | undefined;
  exportLicenseId?: string | undefined;
  exportPurposeCode?: string | undefined;
  name?: string | undefined;
  nameKana?: string | undefined;
  nameKanji?: string | undefined;
  ownersProvided?: boolean | undefined;
  ownershipDeclaration?:
    | TokenCreateBodyAccountCompanyOwnershipDeclaration
    | undefined;
  ownershipDeclarationShownAndSigned?: boolean | undefined;
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
  verification?: TokenCreateBodyAccountCompanyVerification | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountCompany without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountCompany = {
  address?: External$TokenCreateBodyAccountCompanyAddress | undefined;
  address_kana?: External$TokenCreateBodyAccountCompanyAddressKana | undefined;
  address_kanji?:
    | External$TokenCreateBodyAccountCompanyAddressKanji
    | undefined;
  directors_provided?: boolean | undefined;
  directorship_declaration?:
    | External$TokenCreateBodyAccountCompanyDirectorshipDeclaration
    | undefined;
  executives_provided?: boolean | undefined;
  export_license_id?: string | undefined;
  export_purpose_code?: string | undefined;
  name?: string | undefined;
  name_kana?: string | undefined;
  name_kanji?: string | undefined;
  owners_provided?: boolean | undefined;
  ownership_declaration?:
    | External$TokenCreateBodyAccountCompanyOwnershipDeclaration
    | undefined;
  ownership_declaration_shown_and_signed?: boolean | undefined;
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
  verification?: External$TokenCreateBodyAccountCompanyVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountCompany
 */
const SchemaIn$TokenCreateBodyAccountCompany: z.ZodType<
  TokenCreateBodyAccountCompany, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TokenCreateBodyAccountCompanyAddress.in.optional(),
    address_kana:
      Schemas$TokenCreateBodyAccountCompanyAddressKana.in.optional(),
    address_kanji:
      Schemas$TokenCreateBodyAccountCompanyAddressKanji.in.optional(),
    directors_provided: z.boolean().optional(),
    directorship_declaration:
      Schemas$TokenCreateBodyAccountCompanyDirectorshipDeclaration.in.optional(),
    executives_provided: z.boolean().optional(),
    export_license_id: z.string().optional(),
    export_purpose_code: z.string().optional(),
    name: z.string().optional(),
    name_kana: z.string().optional(),
    name_kanji: z.string().optional(),
    owners_provided: z.boolean().optional(),
    ownership_declaration:
      Schemas$TokenCreateBodyAccountCompanyOwnershipDeclaration.in.optional(),
    ownership_declaration_shown_and_signed: z.boolean().optional(),
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
    verification:
      Schemas$TokenCreateBodyAccountCompanyVerification.in.optional(),
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
      ownership_declaration_shown_and_signed:
        "ownershipDeclarationShownAndSigned",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountCompany
 */
const SchemaOut$TokenCreateBodyAccountCompany: z.ZodType<
  External$TokenCreateBodyAccountCompany, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountCompany // the object to be transformed
> = z
  .object({
    address: Schemas$TokenCreateBodyAccountCompanyAddress.out.optional(),
    addressKana:
      Schemas$TokenCreateBodyAccountCompanyAddressKana.out.optional(),
    addressKanji:
      Schemas$TokenCreateBodyAccountCompanyAddressKanji.out.optional(),
    directorsProvided: z.boolean().optional(),
    directorshipDeclaration:
      Schemas$TokenCreateBodyAccountCompanyDirectorshipDeclaration.out.optional(),
    executivesProvided: z.boolean().optional(),
    exportLicenseId: z.string().optional(),
    exportPurposeCode: z.string().optional(),
    name: z.string().optional(),
    nameKana: z.string().optional(),
    nameKanji: z.string().optional(),
    ownersProvided: z.boolean().optional(),
    ownershipDeclaration:
      Schemas$TokenCreateBodyAccountCompanyOwnershipDeclaration.out.optional(),
    ownershipDeclarationShownAndSigned: z.boolean().optional(),
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
    verification:
      Schemas$TokenCreateBodyAccountCompanyVerification.out.optional(),
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
      ownershipDeclarationShownAndSigned:
        "ownership_declaration_shown_and_signed",
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

export const Schemas$TokenCreateBodyAccountCompany = {
  in: SchemaIn$TokenCreateBodyAccountCompany,
  out: SchemaOut$TokenCreateBodyAccountCompany,
};
