import {
  AccountPeopleUpdateBodyDocumentsCompanyAuthorization,
  External$AccountPeopleUpdateBodyDocumentsCompanyAuthorization,
  Schemas$AccountPeopleUpdateBodyDocumentsCompanyAuthorization,
} from "./account-people-update-body-documents-company-authorization";
import {
  AccountPeopleUpdateBodyDocumentsPassport,
  External$AccountPeopleUpdateBodyDocumentsPassport,
  Schemas$AccountPeopleUpdateBodyDocumentsPassport,
} from "./account-people-update-body-documents-passport";
import {
  AccountPeopleUpdateBodyDocumentsVisa,
  External$AccountPeopleUpdateBodyDocumentsVisa,
  Schemas$AccountPeopleUpdateBodyDocumentsVisa,
} from "./account-people-update-body-documents-visa";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountPeopleUpdateBodyDocuments = {
  companyAuthorization?:
    | AccountPeopleUpdateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: AccountPeopleUpdateBodyDocumentsPassport | undefined;
  visa?: AccountPeopleUpdateBodyDocumentsVisa | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyDocuments = {
  company_authorization?:
    | External$AccountPeopleUpdateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: External$AccountPeopleUpdateBodyDocumentsPassport | undefined;
  visa?: External$AccountPeopleUpdateBodyDocumentsVisa | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyDocuments
 */
const SchemaIn$AccountPeopleUpdateBodyDocuments: z.ZodType<
  AccountPeopleUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    company_authorization:
      Schemas$AccountPeopleUpdateBodyDocumentsCompanyAuthorization.in.optional(),
    passport: Schemas$AccountPeopleUpdateBodyDocumentsPassport.in.optional(),
    visa: Schemas$AccountPeopleUpdateBodyDocumentsVisa.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyDocuments
 */
const SchemaOut$AccountPeopleUpdateBodyDocuments: z.ZodType<
  External$AccountPeopleUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyDocuments // the object to be transformed
> = z
  .object({
    companyAuthorization:
      Schemas$AccountPeopleUpdateBodyDocumentsCompanyAuthorization.out.optional(),
    passport: Schemas$AccountPeopleUpdateBodyDocumentsPassport.out.optional(),
    visa: Schemas$AccountPeopleUpdateBodyDocumentsVisa.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      companyAuthorization: "company_authorization",
      passport: "passport",
      visa: "visa",
    });
  });

export const Schemas$AccountPeopleUpdateBodyDocuments = {
  in: SchemaIn$AccountPeopleUpdateBodyDocuments,
  out: SchemaOut$AccountPeopleUpdateBodyDocuments,
};
