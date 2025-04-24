import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsCompanyMinisterialDecree
 */
export type AccountUpdateBodyDocumentsCompanyMinisterialDecree = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsCompanyMinisterialDecree without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsCompanyMinisterialDecree = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsCompanyMinisterialDecree
 */
const SchemaIn$AccountUpdateBodyDocumentsCompanyMinisterialDecree: z.ZodType<
  AccountUpdateBodyDocumentsCompanyMinisterialDecree, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsCompanyMinisterialDecree
 */
const SchemaOut$AccountUpdateBodyDocumentsCompanyMinisterialDecree: z.ZodType<
  External$AccountUpdateBodyDocumentsCompanyMinisterialDecree, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsCompanyMinisterialDecree // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsCompanyMinisterialDecree = {
  in: SchemaIn$AccountUpdateBodyDocumentsCompanyMinisterialDecree,
  out: SchemaOut$AccountUpdateBodyDocumentsCompanyMinisterialDecree,
};
