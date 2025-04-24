import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleUpdateBodyDocumentsPassport
 */
export type AccountPeopleUpdateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyDocumentsPassport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyDocumentsPassport
 */
const SchemaIn$AccountPeopleUpdateBodyDocumentsPassport: z.ZodType<
  AccountPeopleUpdateBodyDocumentsPassport, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyDocumentsPassport
 */
const SchemaOut$AccountPeopleUpdateBodyDocumentsPassport: z.ZodType<
  External$AccountPeopleUpdateBodyDocumentsPassport, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyDocumentsPassport // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPeopleUpdateBodyDocumentsPassport = {
  in: SchemaIn$AccountPeopleUpdateBodyDocumentsPassport,
  out: SchemaOut$AccountPeopleUpdateBodyDocumentsPassport,
};
