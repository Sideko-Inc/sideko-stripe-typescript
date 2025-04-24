import {
  AccountPersonCreateBodyDocumentsCompanyAuthorization,
  External$AccountPersonCreateBodyDocumentsCompanyAuthorization,
  Schemas$AccountPersonCreateBodyDocumentsCompanyAuthorization,
} from "./account-person-create-body-documents-company-authorization";
import {
  AccountPersonCreateBodyDocumentsPassport,
  External$AccountPersonCreateBodyDocumentsPassport,
  Schemas$AccountPersonCreateBodyDocumentsPassport,
} from "./account-person-create-body-documents-passport";
import {
  AccountPersonCreateBodyDocumentsVisa,
  External$AccountPersonCreateBodyDocumentsVisa,
  Schemas$AccountPersonCreateBodyDocumentsVisa,
} from "./account-person-create-body-documents-visa";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Documents that may be submitted to satisfy various informational requests.
 */
export type AccountPersonCreateBodyDocuments = {
  companyAuthorization?:
    | AccountPersonCreateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: AccountPersonCreateBodyDocumentsPassport | undefined;
  visa?: AccountPersonCreateBodyDocumentsVisa | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyDocuments = {
  company_authorization?:
    | External$AccountPersonCreateBodyDocumentsCompanyAuthorization
    | undefined;
  passport?: External$AccountPersonCreateBodyDocumentsPassport | undefined;
  visa?: External$AccountPersonCreateBodyDocumentsVisa | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyDocuments
 */
const SchemaIn$AccountPersonCreateBodyDocuments: z.ZodType<
  AccountPersonCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    company_authorization:
      Schemas$AccountPersonCreateBodyDocumentsCompanyAuthorization.in.optional(),
    passport: Schemas$AccountPersonCreateBodyDocumentsPassport.in.optional(),
    visa: Schemas$AccountPersonCreateBodyDocumentsVisa.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyDocuments
 */
const SchemaOut$AccountPersonCreateBodyDocuments: z.ZodType<
  External$AccountPersonCreateBodyDocuments, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyDocuments // the object to be transformed
> = z
  .object({
    companyAuthorization:
      Schemas$AccountPersonCreateBodyDocumentsCompanyAuthorization.out.optional(),
    passport: Schemas$AccountPersonCreateBodyDocumentsPassport.out.optional(),
    visa: Schemas$AccountPersonCreateBodyDocumentsVisa.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      companyAuthorization: "company_authorization",
      passport: "passport",
      visa: "visa",
    });
  });

export const Schemas$AccountPersonCreateBodyDocuments = {
  in: SchemaIn$AccountPersonCreateBodyDocuments,
  out: SchemaOut$AccountPersonCreateBodyDocuments,
};
