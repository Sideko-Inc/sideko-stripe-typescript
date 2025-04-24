import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleCreateBodyDocumentsPassport
 */
export type AccountPeopleCreateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyDocumentsPassport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyDocumentsPassport
 */
const SchemaIn$AccountPeopleCreateBodyDocumentsPassport: z.ZodType<
  AccountPeopleCreateBodyDocumentsPassport, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyDocumentsPassport
 */
const SchemaOut$AccountPeopleCreateBodyDocumentsPassport: z.ZodType<
  External$AccountPeopleCreateBodyDocumentsPassport, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyDocumentsPassport // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPeopleCreateBodyDocumentsPassport = {
  in: SchemaIn$AccountPeopleCreateBodyDocumentsPassport,
  out: SchemaOut$AccountPeopleCreateBodyDocumentsPassport,
};
