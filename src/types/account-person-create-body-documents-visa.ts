import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBodyDocumentsVisa
 */
export type AccountPersonCreateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyDocumentsVisa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyDocumentsVisa
 */
const SchemaIn$AccountPersonCreateBodyDocumentsVisa: z.ZodType<
  AccountPersonCreateBodyDocumentsVisa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyDocumentsVisa
 */
const SchemaOut$AccountPersonCreateBodyDocumentsVisa: z.ZodType<
  External$AccountPersonCreateBodyDocumentsVisa, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyDocumentsVisa // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPersonCreateBodyDocumentsVisa = {
  in: SchemaIn$AccountPersonCreateBodyDocumentsVisa,
  out: SchemaOut$AccountPersonCreateBodyDocumentsVisa,
};
