import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsCompanyTaxIdVerification
 */
export type AccountUpdateBodyDocumentsCompanyTaxIdVerification = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsCompanyTaxIdVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsCompanyTaxIdVerification = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsCompanyTaxIdVerification
 */
const SchemaIn$AccountUpdateBodyDocumentsCompanyTaxIdVerification: z.ZodType<
  AccountUpdateBodyDocumentsCompanyTaxIdVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsCompanyTaxIdVerification
 */
const SchemaOut$AccountUpdateBodyDocumentsCompanyTaxIdVerification: z.ZodType<
  External$AccountUpdateBodyDocumentsCompanyTaxIdVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsCompanyTaxIdVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsCompanyTaxIdVerification = {
  in: SchemaIn$AccountUpdateBodyDocumentsCompanyTaxIdVerification,
  out: SchemaOut$AccountUpdateBodyDocumentsCompanyTaxIdVerification,
};
