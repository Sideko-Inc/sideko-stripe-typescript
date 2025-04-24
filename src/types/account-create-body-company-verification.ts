import {
  AccountCreateBodyCompanyVerificationDocument,
  External$AccountCreateBodyCompanyVerificationDocument,
  Schemas$AccountCreateBodyCompanyVerificationDocument,
} from "./account-create-body-company-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCompanyVerification
 */
export type AccountCreateBodyCompanyVerification = {
  document?: AccountCreateBodyCompanyVerificationDocument | undefined;
};

/**
 * @internal
 * AccountCreateBodyCompanyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCompanyVerification = {
  document?: External$AccountCreateBodyCompanyVerificationDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCompanyVerification
 */
const SchemaIn$AccountCreateBodyCompanyVerification: z.ZodType<
  AccountCreateBodyCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document:
      Schemas$AccountCreateBodyCompanyVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCompanyVerification
 */
const SchemaOut$AccountCreateBodyCompanyVerification: z.ZodType<
  External$AccountCreateBodyCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCompanyVerification // the object to be transformed
> = z
  .object({
    document:
      Schemas$AccountCreateBodyCompanyVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$AccountCreateBodyCompanyVerification = {
  in: SchemaIn$AccountCreateBodyCompanyVerification,
  out: SchemaOut$AccountCreateBodyCompanyVerification,
};
