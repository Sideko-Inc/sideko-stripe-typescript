import {
  External$LegalEntityCompanyVerificationDocument,
  LegalEntityCompanyVerificationDocument,
  Schemas$LegalEntityCompanyVerificationDocument,
} from "./legal-entity-company-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityCompanyVerification = {
  document: LegalEntityCompanyVerificationDocument;
};

/**
 * @internal
 * LegalEntityCompanyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityCompanyVerification = {
  document: External$LegalEntityCompanyVerificationDocument;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityCompanyVerification
 */
const SchemaIn$LegalEntityCompanyVerification: z.ZodType<
  LegalEntityCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document: z.lazy(() => Schemas$LegalEntityCompanyVerificationDocument.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityCompanyVerification
 */
const SchemaOut$LegalEntityCompanyVerification: z.ZodType<
  External$LegalEntityCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityCompanyVerification // the object to be transformed
> = z
  .object({
    document: z.lazy(() => Schemas$LegalEntityCompanyVerificationDocument.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$LegalEntityCompanyVerification = {
  in: SchemaIn$LegalEntityCompanyVerification,
  out: SchemaOut$LegalEntityCompanyVerification,
};
