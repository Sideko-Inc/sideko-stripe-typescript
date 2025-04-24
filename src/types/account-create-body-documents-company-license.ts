import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsCompanyLicense
 */
export type AccountCreateBodyDocumentsCompanyLicense = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsCompanyLicense without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsCompanyLicense = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsCompanyLicense
 */
const SchemaIn$AccountCreateBodyDocumentsCompanyLicense: z.ZodType<
  AccountCreateBodyDocumentsCompanyLicense, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsCompanyLicense
 */
const SchemaOut$AccountCreateBodyDocumentsCompanyLicense: z.ZodType<
  External$AccountCreateBodyDocumentsCompanyLicense, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsCompanyLicense // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsCompanyLicense = {
  in: SchemaIn$AccountCreateBodyDocumentsCompanyLicense,
  out: SchemaOut$AccountCreateBodyDocumentsCompanyLicense,
};
