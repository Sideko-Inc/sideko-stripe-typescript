import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonDocumentsCompanyAuthorization
 */
export type TokenCreateBodyPersonDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonDocumentsCompanyAuthorization without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonDocumentsCompanyAuthorization
 */
const SchemaIn$TokenCreateBodyPersonDocumentsCompanyAuthorization: z.ZodType<
  TokenCreateBodyPersonDocumentsCompanyAuthorization, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonDocumentsCompanyAuthorization
 */
const SchemaOut$TokenCreateBodyPersonDocumentsCompanyAuthorization: z.ZodType<
  External$TokenCreateBodyPersonDocumentsCompanyAuthorization, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonDocumentsCompanyAuthorization // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$TokenCreateBodyPersonDocumentsCompanyAuthorization = {
  in: SchemaIn$TokenCreateBodyPersonDocumentsCompanyAuthorization,
  out: SchemaOut$TokenCreateBodyPersonDocumentsCompanyAuthorization,
};
