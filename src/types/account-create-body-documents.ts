import {
  AccountCreateBodyDocumentsBankAccountOwnershipVerification,
  External$AccountCreateBodyDocumentsBankAccountOwnershipVerification,
  Schemas$AccountCreateBodyDocumentsBankAccountOwnershipVerification,
} from "./account-create-body-documents-bank-account-ownership-verification";
import {
  AccountCreateBodyDocumentsCompanyLicense,
  External$AccountCreateBodyDocumentsCompanyLicense,
  Schemas$AccountCreateBodyDocumentsCompanyLicense,
} from "./account-create-body-documents-company-license";
import {
  AccountCreateBodyDocumentsCompanyMemorandumOfAssociation,
  External$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation,
  Schemas$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation,
} from "./account-create-body-documents-company-memorandum-of-association";
import {
  AccountCreateBodyDocumentsCompanyMinisterialDecree,
  External$AccountCreateBodyDocumentsCompanyMinisterialDecree,
  Schemas$AccountCreateBodyDocumentsCompanyMinisterialDecree,
} from "./account-create-body-documents-company-ministerial-decree";
import {
  AccountCreateBodyDocumentsCompanyRegistrationVerification,
  External$AccountCreateBodyDocumentsCompanyRegistrationVerification,
  Schemas$AccountCreateBodyDocumentsCompanyRegistrationVerification,
} from "./account-create-body-documents-company-registration-verification";
import {
  AccountCreateBodyDocumentsCompanyTaxIdVerification,
  External$AccountCreateBodyDocumentsCompanyTaxIdVerification,
  Schemas$AccountCreateBodyDocumentsCompanyTaxIdVerification,
} from "./account-create-body-documents-company-tax-id-verification";
import {
  AccountCreateBodyDocumentsProofOfRegistration,
  External$AccountCreateBodyDocumentsProofOfRegistration,
  Schemas$AccountCreateBodyDocumentsProofOfRegistration,
} from "./account-create-body-documents-proof-of-registration";
import {
  AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership,
  External$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership,
  Schemas$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership,
} from "./account-create-body-documents-proof-of-ultimate-beneficial-ownership";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountCreateBodyDocuments = {
  bankAccountOwnershipVerification?:
    | AccountCreateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
  companyLicense?: AccountCreateBodyDocumentsCompanyLicense | undefined;
  companyMemorandumOfAssociation?:
    | AccountCreateBodyDocumentsCompanyMemorandumOfAssociation
    | undefined;
  companyMinisterialDecree?:
    | AccountCreateBodyDocumentsCompanyMinisterialDecree
    | undefined;
  companyRegistrationVerification?:
    | AccountCreateBodyDocumentsCompanyRegistrationVerification
    | undefined;
  companyTaxIdVerification?:
    | AccountCreateBodyDocumentsCompanyTaxIdVerification
    | undefined;
  proofOfRegistration?:
    | AccountCreateBodyDocumentsProofOfRegistration
    | undefined;
  proofOfUltimateBeneficialOwnership?:
    | AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership
    | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocuments = {
  bank_account_ownership_verification?:
    | External$AccountCreateBodyDocumentsBankAccountOwnershipVerification
    | undefined;
  company_license?:
    | External$AccountCreateBodyDocumentsCompanyLicense
    | undefined;
  company_memorandum_of_association?:
    | External$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation
    | undefined;
  company_ministerial_decree?:
    | External$AccountCreateBodyDocumentsCompanyMinisterialDecree
    | undefined;
  company_registration_verification?:
    | External$AccountCreateBodyDocumentsCompanyRegistrationVerification
    | undefined;
  company_tax_id_verification?:
    | External$AccountCreateBodyDocumentsCompanyTaxIdVerification
    | undefined;
  proof_of_registration?:
    | External$AccountCreateBodyDocumentsProofOfRegistration
    | undefined;
  proof_of_ultimate_beneficial_ownership?:
    | External$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocuments
 */
const SchemaIn$AccountCreateBodyDocuments: z.ZodType<
  AccountCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    bank_account_ownership_verification:
      Schemas$AccountCreateBodyDocumentsBankAccountOwnershipVerification.in.optional(),
    company_license:
      Schemas$AccountCreateBodyDocumentsCompanyLicense.in.optional(),
    company_memorandum_of_association:
      Schemas$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation.in.optional(),
    company_ministerial_decree:
      Schemas$AccountCreateBodyDocumentsCompanyMinisterialDecree.in.optional(),
    company_registration_verification:
      Schemas$AccountCreateBodyDocumentsCompanyRegistrationVerification.in.optional(),
    company_tax_id_verification:
      Schemas$AccountCreateBodyDocumentsCompanyTaxIdVerification.in.optional(),
    proof_of_registration:
      Schemas$AccountCreateBodyDocumentsProofOfRegistration.in.optional(),
    proof_of_ultimate_beneficial_ownership:
      Schemas$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocuments
 */
const SchemaOut$AccountCreateBodyDocuments: z.ZodType<
  External$AccountCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocuments // the object to be transformed
> = z
  .object({
    bankAccountOwnershipVerification:
      Schemas$AccountCreateBodyDocumentsBankAccountOwnershipVerification.out.optional(),
    companyLicense:
      Schemas$AccountCreateBodyDocumentsCompanyLicense.out.optional(),
    companyMemorandumOfAssociation:
      Schemas$AccountCreateBodyDocumentsCompanyMemorandumOfAssociation.out.optional(),
    companyMinisterialDecree:
      Schemas$AccountCreateBodyDocumentsCompanyMinisterialDecree.out.optional(),
    companyRegistrationVerification:
      Schemas$AccountCreateBodyDocumentsCompanyRegistrationVerification.out.optional(),
    companyTaxIdVerification:
      Schemas$AccountCreateBodyDocumentsCompanyTaxIdVerification.out.optional(),
    proofOfRegistration:
      Schemas$AccountCreateBodyDocumentsProofOfRegistration.out.optional(),
    proofOfUltimateBeneficialOwnership:
      Schemas$AccountCreateBodyDocumentsProofOfUltimateBeneficialOwnership.out.optional(),
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

export const Schemas$AccountCreateBodyDocuments = {
  in: SchemaIn$AccountCreateBodyDocuments,
  out: SchemaOut$AccountCreateBodyDocuments,
};
