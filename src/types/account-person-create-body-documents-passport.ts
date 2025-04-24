import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBodyDocumentsPassport
 */
export type AccountPersonCreateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyDocumentsPassport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyDocumentsPassport
 */
const SchemaIn$AccountPersonCreateBodyDocumentsPassport: z.ZodType<
  AccountPersonCreateBodyDocumentsPassport, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyDocumentsPassport
 */
const SchemaOut$AccountPersonCreateBodyDocumentsPassport: z.ZodType<
  External$AccountPersonCreateBodyDocumentsPassport, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyDocumentsPassport // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPersonCreateBodyDocumentsPassport = {
  in: SchemaIn$AccountPersonCreateBodyDocumentsPassport,
  out: SchemaOut$AccountPersonCreateBodyDocumentsPassport,
};
