import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyDocumentsVisa
 */
export type AccountPersonUpdateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyDocumentsVisa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyDocumentsVisa
 */
const SchemaIn$AccountPersonUpdateBodyDocumentsVisa: z.ZodType<
  AccountPersonUpdateBodyDocumentsVisa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyDocumentsVisa
 */
const SchemaOut$AccountPersonUpdateBodyDocumentsVisa: z.ZodType<
  External$AccountPersonUpdateBodyDocumentsVisa, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyDocumentsVisa // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPersonUpdateBodyDocumentsVisa = {
  in: SchemaIn$AccountPersonUpdateBodyDocumentsVisa,
  out: SchemaOut$AccountPersonUpdateBodyDocumentsVisa,
};
