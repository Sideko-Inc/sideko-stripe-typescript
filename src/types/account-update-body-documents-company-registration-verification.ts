import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsCompanyRegistrationVerification
 */
export type AccountUpdateBodyDocumentsCompanyRegistrationVerification = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsCompanyRegistrationVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsCompanyRegistrationVerification =
  {
    files?: string[] | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsCompanyRegistrationVerification
 */
const SchemaIn$AccountUpdateBodyDocumentsCompanyRegistrationVerification: z.ZodType<
  AccountUpdateBodyDocumentsCompanyRegistrationVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsCompanyRegistrationVerification
 */
const SchemaOut$AccountUpdateBodyDocumentsCompanyRegistrationVerification: z.ZodType<
  External$AccountUpdateBodyDocumentsCompanyRegistrationVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsCompanyRegistrationVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsCompanyRegistrationVerification =
  {
    in: SchemaIn$AccountUpdateBodyDocumentsCompanyRegistrationVerification,
    out: SchemaOut$AccountUpdateBodyDocumentsCompanyRegistrationVerification,
  };
