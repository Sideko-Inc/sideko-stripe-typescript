import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsCompanyTaxIdVerification
 */
export type AccountCreateBodyDocumentsCompanyTaxIdVerification = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsCompanyTaxIdVerification without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsCompanyTaxIdVerification = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsCompanyTaxIdVerification
 */
const SchemaIn$AccountCreateBodyDocumentsCompanyTaxIdVerification: z.ZodType<
  AccountCreateBodyDocumentsCompanyTaxIdVerification, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsCompanyTaxIdVerification
 */
const SchemaOut$AccountCreateBodyDocumentsCompanyTaxIdVerification: z.ZodType<
  External$AccountCreateBodyDocumentsCompanyTaxIdVerification, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsCompanyTaxIdVerification // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsCompanyTaxIdVerification = {
  in: SchemaIn$AccountCreateBodyDocumentsCompanyTaxIdVerification,
  out: SchemaOut$AccountCreateBodyDocumentsCompanyTaxIdVerification,
};
