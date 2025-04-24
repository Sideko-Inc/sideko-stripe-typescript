import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonDocumentsVisa
 */
export type TokenCreateBodyPersonDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonDocumentsVisa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonDocumentsVisa
 */
const SchemaIn$TokenCreateBodyPersonDocumentsVisa: z.ZodType<
  TokenCreateBodyPersonDocumentsVisa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonDocumentsVisa
 */
const SchemaOut$TokenCreateBodyPersonDocumentsVisa: z.ZodType<
  External$TokenCreateBodyPersonDocumentsVisa, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonDocumentsVisa // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$TokenCreateBodyPersonDocumentsVisa = {
  in: SchemaIn$TokenCreateBodyPersonDocumentsVisa,
  out: SchemaOut$TokenCreateBodyPersonDocumentsVisa,
};
