import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyDocumentsPassport
 */
export type AccountPersonUpdateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyDocumentsPassport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyDocumentsPassport
 */
const SchemaIn$AccountPersonUpdateBodyDocumentsPassport: z.ZodType<
  AccountPersonUpdateBodyDocumentsPassport, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyDocumentsPassport
 */
const SchemaOut$AccountPersonUpdateBodyDocumentsPassport: z.ZodType<
  External$AccountPersonUpdateBodyDocumentsPassport, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyDocumentsPassport // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPersonUpdateBodyDocumentsPassport = {
  in: SchemaIn$AccountPersonUpdateBodyDocumentsPassport,
  out: SchemaOut$AccountPersonUpdateBodyDocumentsPassport,
};
