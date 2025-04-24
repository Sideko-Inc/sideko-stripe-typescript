import {
  External$TokenCreateBodyPersonDocumentsCompanyAuthorization,
  Schemas$TokenCreateBodyPersonDocumentsCompanyAuthorization,
  TokenCreateBodyPersonDocumentsCompanyAuthorization,
} from "./token-create-body-person-documents-company-authorization";
import {
  External$TokenCreateBodyPersonDocumentsPassport,
  Schemas$TokenCreateBodyPersonDocumentsPassport,
  TokenCreateBodyPersonDocumentsPassport,
} from "./token-create-body-person-documents-passport";
import {
  External$TokenCreateBodyPersonDocumentsVisa,
  Schemas$TokenCreateBodyPersonDocumentsVisa,
  TokenCreateBodyPersonDocumentsVisa,
} from "./token-create-body-person-documents-visa";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonDocuments
 */
export type TokenCreateBodyPersonDocuments = {
  companyAuthorization?:
    | TokenCreateBodyPersonDocumentsCompanyAuthorization
    | undefined;
  passport?: TokenCreateBodyPersonDocumentsPassport | undefined;
  visa?: TokenCreateBodyPersonDocumentsVisa | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonDocuments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonDocuments = {
  company_authorization?:
    | External$TokenCreateBodyPersonDocumentsCompanyAuthorization
    | undefined;
  passport?: External$TokenCreateBodyPersonDocumentsPassport | undefined;
  visa?: External$TokenCreateBodyPersonDocumentsVisa | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonDocuments
 */
const SchemaIn$TokenCreateBodyPersonDocuments: z.ZodType<
  TokenCreateBodyPersonDocuments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    company_authorization:
      Schemas$TokenCreateBodyPersonDocumentsCompanyAuthorization.in.optional(),
    passport: Schemas$TokenCreateBodyPersonDocumentsPassport.in.optional(),
    visa: Schemas$TokenCreateBodyPersonDocumentsVisa.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonDocuments
 */
const SchemaOut$TokenCreateBodyPersonDocuments: z.ZodType<
  External$TokenCreateBodyPersonDocuments, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonDocuments // the object to be transformed
> = z
  .object({
    companyAuthorization:
      Schemas$TokenCreateBodyPersonDocumentsCompanyAuthorization.out.optional(),
    passport: Schemas$TokenCreateBodyPersonDocumentsPassport.out.optional(),
    visa: Schemas$TokenCreateBodyPersonDocumentsVisa.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      companyAuthorization: "company_authorization",
      passport: "passport",
      visa: "visa",
    });
  });

export const Schemas$TokenCreateBodyPersonDocuments = {
  in: SchemaIn$TokenCreateBodyPersonDocuments,
  out: SchemaOut$TokenCreateBodyPersonDocuments,
};
