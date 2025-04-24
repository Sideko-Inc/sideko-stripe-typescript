import {
  AccountPersonUpdateBodyDocumentsCompanyAuthorization,
  External$AccountPersonUpdateBodyDocumentsCompanyAuthorization,
  Schemas$AccountPersonUpdateBodyDocumentsCompanyAuthorization,
} from "./account-person-update-body-documents-company-authorization";
import {
  AccountPersonUpdateBodyDocumentsPassport,
  External$AccountPersonUpdateBodyDocumentsPassport,
  Schemas$AccountPersonUpdateBodyDocumentsPassport,
} from "./account-person-update-body-documents-passport";
import {
  AccountPersonUpdateBodyDocumentsVisa,
  External$AccountPersonUpdateBodyDocumentsVisa,
  Schemas$AccountPersonUpdateBodyDocumentsVisa,
} from "./account-person-update-body-documents-visa";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountPersonUpdateBodyDocuments = {
  companyAuthorization?:
    | AccountPersonUpdateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: AccountPersonUpdateBodyDocumentsPassport | undefined;
  visa?: AccountPersonUpdateBodyDocumentsVisa | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyDocuments = {
  company_authorization?:
    | External$AccountPersonUpdateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: External$AccountPersonUpdateBodyDocumentsPassport | undefined;
  visa?: External$AccountPersonUpdateBodyDocumentsVisa | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyDocuments
 */
const SchemaIn$AccountPersonUpdateBodyDocuments: z.ZodType<
  AccountPersonUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    company_authorization:
      Schemas$AccountPersonUpdateBodyDocumentsCompanyAuthorization.in.optional(),
    passport: Schemas$AccountPersonUpdateBodyDocumentsPassport.in.optional(),
    visa: Schemas$AccountPersonUpdateBodyDocumentsVisa.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyDocuments
 */
const SchemaOut$AccountPersonUpdateBodyDocuments: z.ZodType<
  External$AccountPersonUpdateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyDocuments // the object to be transformed
> = z
  .object({
    companyAuthorization:
      Schemas$AccountPersonUpdateBodyDocumentsCompanyAuthorization.out.optional(),
    passport: Schemas$AccountPersonUpdateBodyDocumentsPassport.out.optional(),
    visa: Schemas$AccountPersonUpdateBodyDocumentsVisa.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      companyAuthorization: "company_authorization",
      passport: "passport",
      visa: "visa",
    });
  });

export const Schemas$AccountPersonUpdateBodyDocuments = {
  in: SchemaIn$AccountPersonUpdateBodyDocuments,
  out: SchemaOut$AccountPersonUpdateBodyDocuments,
};
