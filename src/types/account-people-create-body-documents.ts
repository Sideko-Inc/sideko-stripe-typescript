import {
  AccountPeopleCreateBodyDocumentsCompanyAuthorization,
  External$AccountPeopleCreateBodyDocumentsCompanyAuthorization,
  Schemas$AccountPeopleCreateBodyDocumentsCompanyAuthorization,
} from "./account-people-create-body-documents-company-authorization";
import {
  AccountPeopleCreateBodyDocumentsPassport,
  External$AccountPeopleCreateBodyDocumentsPassport,
  Schemas$AccountPeopleCreateBodyDocumentsPassport,
} from "./account-people-create-body-documents-passport";
import {
  AccountPeopleCreateBodyDocumentsVisa,
  External$AccountPeopleCreateBodyDocumentsVisa,
  Schemas$AccountPeopleCreateBodyDocumentsVisa,
} from "./account-people-create-body-documents-visa";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountPeopleCreateBodyDocuments = {
  companyAuthorization?:
    | AccountPeopleCreateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: AccountPeopleCreateBodyDocumentsPassport | undefined;
  visa?: AccountPeopleCreateBodyDocumentsVisa | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyDocuments = {
  company_authorization?:
    | External$AccountPeopleCreateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: External$AccountPeopleCreateBodyDocumentsPassport | undefined;
  visa?: External$AccountPeopleCreateBodyDocumentsVisa | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyDocuments
 */
const SchemaIn$AccountPeopleCreateBodyDocuments: z.ZodType<
  AccountPeopleCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    company_authorization:
      Schemas$AccountPeopleCreateBodyDocumentsCompanyAuthorization.in.optional(),
    passport: Schemas$AccountPeopleCreateBodyDocumentsPassport.in.optional(),
    visa: Schemas$AccountPeopleCreateBodyDocumentsVisa.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      company_authorization: "companyAuthorization",
      passport: "passport",
      visa: "visa",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyDocuments
 */
const SchemaOut$AccountPeopleCreateBodyDocuments: z.ZodType<
  External$AccountPeopleCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyDocuments // the object to be transformed
> = z
  .object({
    companyAuthorization:
      Schemas$AccountPeopleCreateBodyDocumentsCompanyAuthorization.out.optional(),
    passport: Schemas$AccountPeopleCreateBodyDocumentsPassport.out.optional(),
    visa: Schemas$AccountPeopleCreateBodyDocumentsVisa.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      companyAuthorization: "company_authorization",
      passport: "passport",
      visa: "visa",
    });
  });

export const Schemas$AccountPeopleCreateBodyDocuments = {
  in: SchemaIn$AccountPeopleCreateBodyDocuments,
  out: SchemaOut$AccountPeopleCreateBodyDocuments,
};
