import {
  External$TokenCreateBodyAccountCompanyVerificationDocument,
  Schemas$TokenCreateBodyAccountCompanyVerificationDocument,
  TokenCreateBodyAccountCompanyVerificationDocument,
} from "./token-create-body-account-company-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountCompanyVerification
 */
export type TokenCreateBodyAccountCompanyVerification = {
  document?: TokenCreateBodyAccountCompanyVerificationDocument | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountCompanyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountCompanyVerification = {
  document?:
    | External$TokenCreateBodyAccountCompanyVerificationDocument
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountCompanyVerification
 */
const SchemaIn$TokenCreateBodyAccountCompanyVerification: z.ZodType<
  TokenCreateBodyAccountCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document:
      Schemas$TokenCreateBodyAccountCompanyVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountCompanyVerification
 */
const SchemaOut$TokenCreateBodyAccountCompanyVerification: z.ZodType<
  External$TokenCreateBodyAccountCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountCompanyVerification // the object to be transformed
> = z
  .object({
    document:
      Schemas$TokenCreateBodyAccountCompanyVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$TokenCreateBodyAccountCompanyVerification = {
  in: SchemaIn$TokenCreateBodyAccountCompanyVerification,
  out: SchemaOut$TokenCreateBodyAccountCompanyVerification,
};
