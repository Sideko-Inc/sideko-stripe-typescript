import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsCompanyLicense
 */
export type AccountUpdateBodyDocumentsCompanyLicense = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsCompanyLicense without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsCompanyLicense = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsCompanyLicense
 */
const SchemaIn$AccountUpdateBodyDocumentsCompanyLicense: z.ZodType<
  AccountUpdateBodyDocumentsCompanyLicense, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsCompanyLicense
 */
const SchemaOut$AccountUpdateBodyDocumentsCompanyLicense: z.ZodType<
  External$AccountUpdateBodyDocumentsCompanyLicense, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsCompanyLicense // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsCompanyLicense = {
  in: SchemaIn$AccountUpdateBodyDocumentsCompanyLicense,
  out: SchemaOut$AccountUpdateBodyDocumentsCompanyLicense,
};
