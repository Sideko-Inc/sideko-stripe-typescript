import {
  AccountUpdateBodyCompanyVerificationDocument,
  External$AccountUpdateBodyCompanyVerificationDocument,
  Schemas$AccountUpdateBodyCompanyVerificationDocument,
} from "./account-update-body-company-verification-document";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCompanyVerification
 */
export type AccountUpdateBodyCompanyVerification = {
  document?: AccountUpdateBodyCompanyVerificationDocument | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCompanyVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCompanyVerification = {
  document?: External$AccountUpdateBodyCompanyVerificationDocument | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCompanyVerification
 */
const SchemaIn$AccountUpdateBodyCompanyVerification: z.ZodType<
  AccountUpdateBodyCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    document:
      Schemas$AccountUpdateBodyCompanyVerificationDocument.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCompanyVerification
 */
const SchemaOut$AccountUpdateBodyCompanyVerification: z.ZodType<
  External$AccountUpdateBodyCompanyVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCompanyVerification // the object to be transformed
> = z
  .object({
    document:
      Schemas$AccountUpdateBodyCompanyVerificationDocument.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      document: "document",
    });
  });

export const Schemas$AccountUpdateBodyCompanyVerification = {
  in: SchemaIn$AccountUpdateBodyCompanyVerification,
  out: SchemaOut$AccountUpdateBodyCompanyVerification,
};
