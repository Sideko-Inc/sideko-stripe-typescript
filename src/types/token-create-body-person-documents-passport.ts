import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonDocumentsPassport
 */
export type TokenCreateBodyPersonDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonDocumentsPassport without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonDocumentsPassport = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonDocumentsPassport
 */
const SchemaIn$TokenCreateBodyPersonDocumentsPassport: z.ZodType<
  TokenCreateBodyPersonDocumentsPassport, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonDocumentsPassport
 */
const SchemaOut$TokenCreateBodyPersonDocumentsPassport: z.ZodType<
  External$TokenCreateBodyPersonDocumentsPassport, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonDocumentsPassport // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$TokenCreateBodyPersonDocumentsPassport = {
  in: SchemaIn$TokenCreateBodyPersonDocumentsPassport,
  out: SchemaOut$TokenCreateBodyPersonDocumentsPassport,
};
