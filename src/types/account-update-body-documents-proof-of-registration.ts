import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyDocumentsProofOfRegistration
 */
export type AccountUpdateBodyDocumentsProofOfRegistration = {
  files?: string[] | undefined;
};

/**
 * @internal
 * AccountUpdateBodyDocumentsProofOfRegistration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyDocumentsProofOfRegistration = {
  files?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyDocumentsProofOfRegistration
 */
const SchemaIn$AccountUpdateBodyDocumentsProofOfRegistration: z.ZodType<
  AccountUpdateBodyDocumentsProofOfRegistration, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyDocumentsProofOfRegistration
 */
const SchemaOut$AccountUpdateBodyDocumentsProofOfRegistration: z.ZodType<
  External$AccountUpdateBodyDocumentsProofOfRegistration, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyDocumentsProofOfRegistration // the object to be transformed
> = z
  .object({
    files: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountUpdateBodyDocumentsProofOfRegistration = {
  in: SchemaIn$AccountUpdateBodyDocumentsProofOfRegistration,
  out: SchemaOut$AccountUpdateBodyDocumentsProofOfRegistration,
};
