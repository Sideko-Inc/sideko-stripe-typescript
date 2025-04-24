import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsCompanyRegistrationVerification
 */
export type AccountCreateBodyDocumentsCompanyRegistrationVerification = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsCompanyRegistrationVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsCompanyRegistrationVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsCompanyRegistrationVerification
 */
const SchemaIn$AccountCreateBodyDocumentsCompanyRegistrationVerification: z.ZodType<
  AccountCreateBodyDocumentsCompanyRegistrationVerification, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsCompanyRegistrationVerification
 */
const SchemaOut$AccountCreateBodyDocumentsCompanyRegistrationVerification: z.ZodType<
  External$AccountCreateBodyDocumentsCompanyRegistrationVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsCompanyRegistrationVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsCompanyRegistrationVerification =
  {
    in: SchemaIn$AccountCreateBodyDocumentsCompanyRegistrationVerification,
    out: SchemaOut$AccountCreateBodyDocumentsCompanyRegistrationVerification,
  };
