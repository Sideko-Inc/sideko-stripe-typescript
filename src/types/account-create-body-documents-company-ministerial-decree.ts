import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyDocumentsCompanyMinisterialDecree
 */
export type AccountCreateBodyDocumentsCompanyMinisterialDecree = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountCreateBodyDocumentsCompanyMinisterialDecree without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyDocumentsCompanyMinisterialDecree = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyDocumentsCompanyMinisterialDecree
 */
const SchemaIn$AccountCreateBodyDocumentsCompanyMinisterialDecree: z.ZodType<
  AccountCreateBodyDocumentsCompanyMinisterialDecree, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyDocumentsCompanyMinisterialDecree
 */
const SchemaOut$AccountCreateBodyDocumentsCompanyMinisterialDecree: z.ZodType<
  External$AccountCreateBodyDocumentsCompanyMinisterialDecree, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyDocumentsCompanyMinisterialDecree // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountCreateBodyDocumentsCompanyMinisterialDecree = {
  in: SchemaIn$AccountCreateBodyDocumentsCompanyMinisterialDecree,
  out: SchemaOut$AccountCreateBodyDocumentsCompanyMinisterialDecree,
};
