import {
  AccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  External$AccountUpdateBodyDocumentsBankAccountOwnershipVerification,
  Schemas$AccountUpdateBodyDocumentsBankAccountOwnershipVerification,
} from "./account-update-body-documents-bank-account-ownership-verification";
import {
  AccountUpdateBodyDocumentsCompanyLicense,
  External$AccountUpdateBodyDocumentsCompanyLicense,
  Schemas$AccountUpdateBodyDocumentsCompanyLicense,
} from "./account-update-body-documents-company-license";
import {
  AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation,
  External$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation,
  Schemas$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation,
} from "./account-update-body-documents-company-memorandum-of-association";
import {
  AccountUpdateBodyDocumentsCompanyMinisterialDecree,
  External$AccountUpdateBodyDocumentsCompanyMinisterialDecree,
  Schemas$AccountUpdateBodyDocumentsCompanyMinisterialDecree,
} from "./account-update-body-documents-company-ministerial-decree";
import {
  AccountUpdateBodyDocumentsCompanyRegistrationVerification,
  External$AccountUpdateBodyDocumentsCompanyRegistrationVerification,
  Schemas$AccountUpdateBodyDocumentsCompanyRegistrationVerification,
} from "./account-update-body-documents-company-registration-verification";
import {
  AccountUpdateBodyDocumentsCompanyTaxIdVerification,
  External$AccountUpdateBodyDocumentsCompanyTaxIdVerification,
  Schemas$AccountUpdateBodyDocumentsCompanyTaxIdVerification,
} from "./account-update-body-documents-company-tax-id-verification";
import {
  AccountUpdateBodyDocumentsProofOfRegistration,
  External$AccountUpdateBodyDocumentsProofOfRegistration,
  Schemas$AccountUpdateBodyDocumentsProofOfRegistration,
} from "./account-update-body-documents-proof-of-registration";
import {
  AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership,
  External$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership,
  Schemas$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership,
} from "./account-update-body-documents-proof-of-ultimate-beneficial-ownership";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountUpdateBodyDocuments = {
  bankAccountOwnershipVerification?:
    | AccountUpdateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
  companyLicense?: AccountUpdateBodyDocumentsCompanyLicense | undefined;
  companyMemorandumOfAssociation?:
    | AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation
    | undefined;
  companyMinisterialDecree?:
    | AccountUpdateBodyDocumentsCompanyMinisterialDecree
    | undefined;
  companyRegistrationVerification?:
    | AccountUpdateBodyDocumentsCompanyRegistrationVerification
    | undefined;
  companyTaxIdVerification?:
    | AccountUpdateBodyDocumentsCompanyTaxIdVerification
    | undefined;
  proofOfRegistration?:
    | AccountUpdateBodyDocumentsProofOfRegistration
    | undefined;
  proofOfUltimateBeneficialOwnership?:
    | AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership
    | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocuments = {
  bank_account_ownership_verification?:
    | External$AccountUpdateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
  company_license?:
    | External$AccountUpdateBodyDocumentsCompanyLicense
    | undefined;
  company_memorandum_of_association?:
    | External$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation
    | undefined;
  company_ministerial_decree?:
    | External$AccountUpdateBodyDocumentsCompanyMinisterialDecree
    | undefined;
  company_registration_verification?:
    | External$AccountUpdateBodyDocumentsCompanyRegistrationVerification
    | undefined;
  company_tax_id_verification?:
    | External$AccountUpdateBodyDocumentsCompanyTaxIdVerification
    | undefined;
  proof_of_registration?:
    | External$AccountUpdateBodyDocumentsProofOfRegistration
    | undefined;
  proof_of_ultimate_beneficial_ownership?:
    | External$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocuments
 */
const SchemaIn$AccountUpdateBodyDocuments: z.ZodType<
  AccountUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$AccountUpdateBodyDocumentsBankAccountOwnershipVerification.in.optional(),
    company_license:
      Schemas$AccountUpdateBodyDocumentsCompanyLicense.in.optional(),
    company_memorandum_of_association:
      Schemas$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation.in.optional(),
    company_ministerial_decree:
      Schemas$AccountUpdateBodyDocumentsCompanyMinisterialDecree.in.optional(),
    company_registration_verification:
      Schemas$AccountUpdateBodyDocumentsCompanyRegistrationVerification.in.optional(),
    company_tax_id_verification:
      Schemas$AccountUpdateBodyDocumentsCompanyTaxIdVerification.in.optional(),
    proof_of_registration:
      Schemas$AccountUpdateBodyDocumentsProofOfRegistration.in.optional(),
    proof_of_ultimate_beneficial_ownership:
      Schemas$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bank_account_ownership_verification: "bankAccountOwnershipVerification",
      company_license: "companyLicense",
      company_memorandum_of_association: "companyMemorandumOfAssociation",
      company_ministerial_decree: "companyMinisterialDecree",
      company_registration_verification: "companyRegistrationVerification",
      company_tax_id_verification: "companyTaxIdVerification",
      proof_of_registration: "proofOfRegistration",
      proof_of_ultimate_beneficial_ownership:
        "proofOfUltimateBeneficialOwnership",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocuments
 */
const SchemaOut$AccountUpdateBodyDocuments: z.ZodType<
  External$AccountUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocuments // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$AccountUpdateBodyDocumentsBankAccountOwnershipVerification.out.optional(),
    companyLicense:
      Schemas$AccountUpdateBodyDocumentsCompanyLicense.out.optional(),
    companyMemorandumOfAssociation:
      Schemas$AccountUpdateBodyDocumentsCompanyMemorandumOfAssociation.out.optional(),
    companyMinisterialDecree:
      Schemas$AccountUpdateBodyDocumentsCompanyMinisterialDecree.out.optional(),
    companyRegistrationVerification:
      Schemas$AccountUpdateBodyDocumentsCompanyRegistrationVerification.out.optional(),
    companyTaxIdVerification:
      Schemas$AccountUpdateBodyDocumentsCompanyTaxIdVerification.out.optional(),
    proofOfRegistration:
      Schemas$AccountUpdateBodyDocumentsProofOfRegistration.out.optional(),
    proofOfUltimateBeneficialOwnership:
      Schemas$AccountUpdateBodyDocumentsProofOfUltimateBeneficialOwnership.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      bankAccountOwnershipVerification: "bank_account_ownership_verification",
      companyLicense: "company_license",
      companyMemorandumOfAssociation: "company_memorandum_of_association",
      companyMinisterialDecree: "company_ministerial_decree",
      companyRegistrationVerification: "company_registration_verification",
      companyTaxIdVerification: "company_tax_id_verification",
      proofOfRegistration: "proof_of_registration",
      proofOfUltimateBeneficialOwnership:
        "proof_of_ultimate_beneficial_ownership",
    });
  });

export const Schemas$AccountUpdateBodyDocuments = {
  in: SchemaIn$AccountUpdateBodyDocuments,
  out: SchemaOut$AccountUpdateBodyDocuments,
};
